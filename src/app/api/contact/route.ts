import { NextResponse } from "next/server";
import { connectToDatabase } from "@/lib/db";
import Enquiry from "@/models/Enquiry";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "temp_key");

// Secure in-memory rate limiter to prevent spamming / api flooding
const rateLimitMap = new Map<string, { count: number; lastReset: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS_PER_WINDOW = 5; // Max 5 submissions per minute per IP

// Sanitizes and escapes input strings to block Cross-Site Scripting (XSS)
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

// Strict email regex verification
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

    // Simple length checks to prevent Denial of Service via huge payloads
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

    // Sanitize input values
    const name = sanitizeInput(rawName);
    const email = rawEmail.trim();
    const subject = sanitizeInput(rawSubject);
    const message = sanitizeInput(rawMessage);

    // Strict validation
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "All fields are required and must contain valid text." },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address format." },
        { status: 400 }
      );
    }

    let isDbConnected = false;
    let savedEnquiry = null;

    // 1. Try to save in MongoDB
    try {
      await connectToDatabase();
      isDbConnected = true;
      savedEnquiry = await Enquiry.create({ name, email, subject, message });
    } catch (dbError) {
      console.error("Database Save Error:", dbError);
    }

    // 2. Try to send emails via Resend
    let isEmailSent = false;
    const resendApiKey = process.env.RESEND_API_KEY;
    const isMockResend = !resendApiKey || resendApiKey.startsWith("re_123") || resendApiKey === "temp_key";

    if (!isMockResend) {
      try {
        const receiver = process.env.CONTACT_EMAIL_RECEIVER || "amitprj737@gmail.com";

        // Send acknowledgement email to user
        await resend.emails.send({
          from: "Amit Prajapati <portfolio@amitprajapati.co.in>",
          to: email,
          subject: `Acknowledgement: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #fafafa;">
              <div style="background-color: #ff0000; padding: 15px; border-radius: 6px 6px 0 0; text-align: center;">
                <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: 1px;">Amit Prajapati</h1>
              </div>
              <div style="padding: 20px; color: #333333; line-height: 1.6;">
                <p>Hello <strong>${name}</strong>,</p>
                <p>Thank you for reaching out to me! This email is to acknowledge that I have received your enquiry regarding "<strong>${subject}</strong>".</p>
                <p>I will review your message and get back to you as soon as possible.</p>
                <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
                <p style="font-style: italic; color: #666666;">"Your message: ${message}"</p>
                <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 20px 0;" />
                <p>Best regards,<br/><strong>Amit Prajapati</strong><br/>Full Stack Developer</p>
              </div>
              <div style="text-align: center; font-size: 12px; color: #888888; padding: 10px 0; border-top: 1px solid #eeeeee;">
                Sent from <a href="https://amitprajapati.co.in" style="color: #ff0000; text-decoration: none;">amitprajapati.co.in</a>
              </div>
            </div>
          `,
        });

        // Send notification email to Amit
        await resend.emails.send({
          from: "Portfolio Alert <portfolio@amitprajapati.co.in>",
          to: receiver,
          subject: `New Portfolio Enquiry: ${subject}`,
          html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
              <h2>New Message Received from Portfolio Form</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Subject:</strong> ${subject}</p>
              <p><strong>Message:</strong></p>
              <blockquote style="background: #f9f9f9; border-left: 5px solid #ff0000; padding: 10px; margin: 10px 0;">
                ${message}
              </blockquote>
            </div>
          `,
        });

        isEmailSent = true;
      } catch (emailError) {
        console.error("Resend Email Error:", emailError);
      }
    } else {
      console.log("Mock Email Sending: Credentials not set.", { name, email, subject, message });
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
