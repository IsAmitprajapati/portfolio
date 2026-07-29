import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Enquiry from "@/models/Enquiry";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "temp_key");

// Rate limiter to prevent API spamming
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per minute

function sanitizeInput(str: string): string {
  if (typeof str !== "string") return "";
  return str
    .replace(/<[^>]*>/g, "") // Remove HTML tags
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .trim();
}

function isValidEmail(email: string): boolean {
  if (typeof email !== "string" || email.length > 100) return false;
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
}

export async function POST(request: Request) {
  try {
    // 1. IP Rate Limiting Guard
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ||
      request.headers.get("x-real-ip") ||
      "127.0.0.1";
    const now = Date.now();
    const limitData = rateLimitMap.get(ip);

    if (limitData) {
      if (now - limitData.lastReset < RATE_LIMIT_WINDOW) {
        if (limitData.count >= MAX_REQUESTS_PER_WINDOW) {
          return NextResponse.json(
            { error: "Too many enquiries submitted. Please wait a minute before trying again." },
            { status: 429 }
          );
        }
        limitData.count += 1;
      } else {
        limitData.count = 1;
        limitData.lastReset = now;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, lastReset: now });
    }

    const body = await request.json();
    const rawName = body.name;
    const rawEmail = body.email;
    const rawSubject = body.subject;
    const rawMessage = body.message;

    // Payload size guard
    if (
      typeof rawName !== "string" || rawName.length > 100 ||
      typeof rawEmail !== "string" || rawEmail.length > 100 ||
      typeof rawSubject !== "string" || rawSubject.length > 100 ||
      typeof rawMessage !== "string" || rawMessage.length > 5000
    ) {
      return NextResponse.json(
        { error: "Invalid payload size or format." },
        { status: 400 }
      );
    }

    // Sanitize fields
    const name = sanitizeInput(rawName);
    const email = rawEmail.trim();
    const subject = sanitizeInput(rawSubject);
    const message = sanitizeInput(rawMessage);

    // Validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    let isDbConnected = false;
    let savedEnquiry = null;

    // 1. Save in MongoDB
    try {
      await connectToDatabase();
      isDbConnected = true;
      savedEnquiry = await Enquiry.create({ name, email, subject, message });
    } catch (dbError) {
      console.error("Database Save Error:", dbError);
    }

    // 2. Trigger Email via Resend
    let isEmailSent = false;
    const resendApiKey = process.env.RESEND_API_KEY;
    const isMockResend = !resendApiKey || resendApiKey.startsWith("re_123") || resendApiKey === "temp_key";

    if (!isMockResend) {
      try {
        const receiver = process.env.CONTACT_EMAIL_RECEIVER || "amitprj737@gmail.com";
        const txnRef = `TXN-${Math.floor(100000 + Math.random() * 900000)}-GATE`;

        // Send acknowledgement email to User (Paytm styled invoice receipt)
        await resend.emails.send({
          from: "Amit Prajapati <portfolio@amitprajapati.co.in>",
          to: email,
          subject: `Acknowledgement Receipt: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 25px; border: 1px solid #e2e8f0; border-radius: 20px; background-color: #ffffff;">
              <div style="background-gradient: linear-gradient(to right, #00baf2, #0084ff); background-color: #00baf2; padding: 25px; border-radius: 16px 16px 0 0; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">Amit Prajapati <span style="font-weight: 300; font-size: 18px;"></span></h1>
                <p style="color: #ffffff; margin: 5px 0 0 0; font-size: 11px; font-weight: bold; text-transform: uppercase; tracking-wider: 1px; opacity: 0.95;">Simulated Secure Receipt</p>
              </div>
              <div style="padding: 24px; color: #1e293b; line-height: 1.6;">
                <p style="font-size: 15px; margin-top: 0;">Hello <strong>${name}</strong>,</p>
                <p style="font-size: 13px; color: #475569;">Thank you for getting in touch! We have successfully routed your inquiry regarding <strong>"${subject}"</strong> through Amit's portfolio gateway. Here are your transaction logs:</p>
                
                <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 16px; padding: 15px 20px; margin: 20px 0; font-family: monospace; font-size: 12px; color: #334155;">
                  <div style="display: flex; justify-content: space-between; border-bottom: 1px solid #e2e8f0; padding-bottom: 8px; margin-bottom: 8px; font-weight: bold;">
                    <span>TRANSACTION METADATA</span>
                    <span style="color: #00baf2;">SUCCESS</span>
                  </div>
                  <p style="margin: 4px 0;"><strong>Ref ID:</strong> ${txnRef}</p>
                  <p style="margin: 4px 0;"><strong>Transfer Value:</strong> 1 Hired Opportunity</p>
                  <p style="margin: 4px 0;"><strong>Sender Email:</strong> ${email}</p>
                  <p style="margin: 4px 0;"><strong>Message:</strong></p>
                  <blockquote style="margin: 8px 0; padding: 8px 12px; border-left: 3px solid #00baf2; background: #ffffff; font-style: italic;">
                    "${message}"
                  </blockquote>
                </div>

                <p style="font-size: 13px; color: #475569;">Amit will review your message and get back to you as soon as possible.</p>
                <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
                <p style="font-size: 13px; font-weight: bold; margin-bottom: 0;">Best regards,</p>
                <p style="font-size: 13px; font-weight: bold; color: #00baf2; margin-top: 2px;">Amit Prajapati</p>
                <p style="font-size: 11px; color: #94a3b8; margin-top: -8px;">Full Stack Engineer</p>
              </div>
              <div style="text-align: center; font-size: 10px; color: #94a3b8; padding: 15px 0; border-top: 1px solid #e2e8f0;">
                Sent securely via <a href="https://amitprajapati.co.in" style="color: #00baf2; text-decoration: none; font-weight: bold;">amitprajapati.co.in</a>
              </div>
            </div>
          `,
        });

        // Send alert email to Amit
        await resend.emails.send({
          from: "Paytm Gateway Alert <portfolio@amitprajapati.co.in>",
          to: receiver,
          subject: `Paytm Portfolio Offer: ${subject}`,
          html: `
            <div style="font-family: sans-serif; padding: 25px; color: #1e293b; background-color: #f8fafc; border-radius: 12px;">
              <h2 style="color: #00baf2; font-weight: 800; font-size: 20px;">New Message Routed from Paytm Portfolio Gateway</h2>
              <div style="background: #ffffff; padding: 20px; border-radius: 8px; border: 1px solid #e2e8f0; margin-top: 15px;">
                <p style="margin: 6px 0;"><strong>Sender Name:</strong> ${name}</p>
                <p style="margin: 6px 0;"><strong>Sender Email:</strong> ${email}</p>
                <p style="margin: 6px 0;"><strong>Subject:</strong> ${subject}</p>
                <p style="margin: 6px 0;"><strong>Transaction Ref:</strong> ${txnRef}</p>
                <p style="margin: 15px 0 6px 0;"><strong>Message Description:</strong></p>
                <blockquote style="background: #f1f5f9; border-left: 5px solid #00baf2; padding: 12px; margin: 0; font-style: italic; border-radius: 0 8px 8px 0;">
                  ${message}
                </blockquote>
              </div>
            </div>
          `,
        });

        isEmailSent = true;
      } catch (emailError) {
        console.error("Resend Email Error:", emailError);
      }
    } else {
      console.log("Mock Email Node Triggered (Credentials missing):", { name, email, subject, message });
    }

    return NextResponse.json({
      success: true,
      message: "Enquiry submitted successfully.",
      dbSaved: !!savedEnquiry,
      emailSent: isEmailSent,
      mockMode: !isDbConnected || isMockResend,
    });
  } catch (error) {
    console.error("API Route Error:", error);
    return NextResponse.json({ error: "Something went wrong." }, { status: 500 });
  }
}
