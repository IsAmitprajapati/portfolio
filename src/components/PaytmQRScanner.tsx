"use client";

import React, { useState } from "react";
import { QrCode, Phone, Mail, Copy, Check, ExternalLink, MessageSquare, Download } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PaytmQRScanner() {
  const [copiedText, setCopiedText] = useState<"none" | "email" | "phone">("none");
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const emailAddress = "amitprj737@gmail.com";
  const phoneNumber = "+919307961978";
  const whatsappLink = "https://wa.me/919307961978?text=Hi%20Amit,%20we%20reviewed%20your%20Paytm-themed%20portfolio%20and%20would%20love%20to%20connect!";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Cap tilt angles to -12deg to 12deg
    const rotateX = -(y / (box.height / 2)) * 12;
    const rotateY = (x / (box.width / 2)) * 12;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    setCopiedText(type);
    setTimeout(() => {
      setCopiedText("none");
    }, 2000);
  };

  return (
    <section id="qr-scanner" className="w-full py-16 bg-bg-app border-b border-border-theme font-sans scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">

        <div className="max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-black text-text-primary tracking-tight">
            Scan to Connect
          </h2>
          <p className="text-sm text-text-secondary mt-2">
            A representation of the iconic Paytm QR code standee. Use the quick buttons underneath to instantly copy contact details or dial directly on WhatsApp.
          </p>
        </div>

        {/* Merchant QR Standee Card with 3D perspective wrapper */}
        <div style={{ perspective: "1000px" }} className="w-full max-w-sm">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseMove={handleMouseMove}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transformStyle: "preserve-3d",
              transition: isHovered ? "none" : "transform 0.4s ease-out, shadow 0.3s ease",
            }}
            className="w-full rounded-3xl bg-bg-panel border border-border-theme p-6 shadow-2xl relative overflow-hidden flex flex-col items-center gap-6 hover:shadow-[0_20px_50px_rgba(0,186,242,0.25)] dark:hover:shadow-[0_20px_50px_rgba(0,186,242,0.15)] group transition-shadow duration-300"
          >
            {/* Header Banner - Paytm Merchants Style */}
            <div
              className="w-full bg-gradient-to-r from-paytm-blue to-paytm-secondary-blue p-4 rounded-2xl flex flex-col items-center text-center text-white select-none transition-transform duration-300 ease-out"
              style={{ transform: isHovered ? "translateZ(20px)" : "translateZ(0px)" }}
            >
              <span className="font-extrabold text-lg tracking-tighter">paytm</span>
              <span className="text-[10px] font-bold uppercase tracking-widest opacity-90 mt-0.5">Accepted Here</span>
            </div>

            {/* QR Code Container */}
            <div
              className="relative w-64 h-64 bg-white border-4 border-paytm-blue/10 rounded-2xl p-4 flex items-center justify-center shadow-inner overflow-hidden select-none transition-transform duration-300 ease-out"
              style={{ transform: isHovered ? "translateZ(45px)" : "translateZ(0px)" }}
            >
              {/* Laser Line Scanning Effect */}
              <div className="absolute left-0 w-full h-1 bg-gradient-to-r from-transparent via-paytm-blue to-transparent animate-laser shadow-[0_0_8px_rgba(0,186,242,0.8)] z-10"></div>

              {/* QR Pattern SVG */}
              <svg className="w-full h-full text-zinc-900" viewBox="0 0 100 100" fill="none">
                {/* Corner Position Anchors */}
                <rect x="5" y="5" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="6" />
                <rect x="10" y="10" width="10" height="10" rx="1.5" fill="currentColor" />

                <rect x="75" y="5" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="6" />
                <rect x="80" y="10" width="10" height="10" rx="1.5" fill="currentColor" />

                <rect x="5" y="75" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="6" />
                <rect x="10" y="80" width="10" height="10" rx="1.5" fill="currentColor" />

                {/* Randomized QR Data Patterns */}
                <path d="M35 10h10v5h-5v-5h-5v-10zm20 0h5v10h-5v-10zm10 0h5v5h-5v-5zM35 25h5v5h-5v-5zm10 5h10v5h-5v-5h-5v-10zm25-10h5v5h-5v-5zm0 10h5v10h-5v-10z" fill="currentColor" className="opacity-80" />
                <path d="M10 35h5v5h-5v-5zm0 15h10v5H10v-10zm15-10h5v5h-5v-5zm10 5h15v5H35v-5zm20 5h5v5h-5v-5zm15-5h10v5H70v-5zm15 5h5v5h-5v-5z" fill="currentColor" className="opacity-80" />
                <path d="M35 50h5v5h-5v-5zm10 5h5v10h-5v-10zm10-5h10v5H55v-5zm20 5h10v5H75v-5z" fill="currentColor" className="opacity-80" />
                <path d="M10 60h5v5h-5v-5zm15 10h5v5h-5v-5zm10-5h5v10h-5v-10zm15 5h5v5h-5v-5zm15-5h5v5h-5v-5zm15 5h5v5h-5v-5z" fill="currentColor" className="opacity-80" />
                <path d="M35 75h5v5h-5v-5zm10 5h15v5H45v-5zm25-10h10v5H70v-10z" fill="currentColor" className="opacity-80" />
                <path d="M35 85h15v5H35v-5zm25 0h5v10h-5v-10zm10 0h5v5h-5v-5zm10 5h5v5h-5v-5z" fill="currentColor" className="opacity-80" />

                {/* Decorative Scan Lines inside QR */}
                <circle cx="50" cy="50" r="14" fill="white" />
              </svg>

              {/* Profile Avatar in the Center */}
              <div className="absolute w-12 h-12 rounded-full overflow-hidden border-2 border-paytm-blue bg-white shadow-md z-20">
                <Image
                  src="/images/amitprajapati.png"
                  alt="Amit"
                  fill
                  className="object-cover"
                  sizes="48px"
                />
              </div>
            </div>

            {/* Merchant / Developer Details */}
            <div
              className="text-center space-y-1 transition-transform duration-300 ease-out"
              style={{ transform: isHovered ? "translateZ(25px)" : "translateZ(0px)" }}
            >
              <h3 className="text-base font-bold text-text-primary">Amit Prajapati</h3>
              <p className="text-[10px] text-text-muted font-mono">BHIM UPI QR • MERCH ID: AMIT-930796</p>
            </div>

            {/* Quick Contact Controls */}
            <div
              className="w-full flex flex-col gap-2 pt-2 border-t border-border-theme transition-transform duration-300 ease-out"
              style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)" }}
            >

              {/* Direct WhatsApp Call */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3 rounded-2xl bg-bg-panel-darker hover:bg-hover-theme text-text-primary text-xs font-bold transition-all border border-border-theme"
              >
                <div className="flex items-center gap-2 text-emerald-500">
                  <MessageSquare size={16} />
                  <span className="text-text-primary font-bold">WhatsApp / Chat</span>
                </div>
                <span className="text-[10px] text-emerald-500 font-bold uppercase tracking-wider flex items-center gap-0.5">
                  Message
                  <ExternalLink size={10} />
                </span>
              </a>

              {/* Email copying */}
              <button
                onClick={() => copyToClipboard(emailAddress, "email")}
                className="flex items-center justify-between p-3 rounded-2xl bg-bg-panel-darker hover:bg-hover-theme text-text-primary text-xs font-bold transition-all border border-border-theme text-left cursor-pointer"
              >
                <div className="flex items-center gap-2 text-paytm-blue">
                  <Mail size={16} />
                  <div>
                    <span className="text-text-primary font-bold block">Email Contact</span>
                    <span className="text-[10px] text-text-muted font-normal block font-mono">{emailAddress}</span>
                  </div>
                </div>
                <span className="text-[10px] text-paytm-secondary-blue font-bold uppercase tracking-wider flex items-center gap-0.5 select-none">
                  {copiedText === "email" ? (
                    <>
                      <Check size={10} />
                      Copied
                    </>
                  ) : (
                    <>
                      Copy
                      <Copy size={10} />
                    </>
                  )}
                </span>
              </button>

              {/* Phone Dial */}
              <button
                onClick={() => copyToClipboard(phoneNumber, "phone")}
                className="flex items-center justify-between p-3 rounded-2xl bg-bg-panel-darker hover:bg-hover-theme text-text-primary text-xs font-bold transition-all border border-border-theme text-left cursor-pointer"
              >
                <div className="flex items-center gap-2 text-indigo-500">
                  <Phone size={16} />
                  <div>
                    <span className="text-text-primary font-bold block">Call / Mobile</span>
                    <span className="text-[10px] text-text-muted font-normal block font-mono">{phoneNumber}</span>
                  </div>
                </div>
                <span className="text-[10px] text-indigo-500 font-bold uppercase tracking-wider flex items-center gap-0.5 select-none">
                  {copiedText === "phone" ? (
                    <>
                      <Check size={10} />
                      Copied
                    </>
                  ) : (
                    <>
                      Copy
                      <Copy size={10} />
                    </>
                  )}
                </span>
              </button>
            </div>

            {/* Action to download resume PDF */}
            <a
              href="/Amit_Prajapati.pdf"
              download="Amit_Prajapati_Resume.pdf"
              className="w-full flex items-center justify-center gap-1.5 py-3 rounded-2xl bg-paytm-light-blue dark:bg-paytm-light-blue/10 hover:bg-paytm-blue hover:text-white border border-paytm-blue/20 text-paytm-secondary-blue font-bold text-xs transition-all"
            >
              <Download size={14} />
              Get Physical Resume PDF
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
