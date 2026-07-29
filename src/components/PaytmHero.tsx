"use client";

import React, { useState } from "react";
import { ArrowRight, Download, FileText, CheckCircle2, QrCode, CreditCard } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PaytmHero() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

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

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-paytm-light-blue/20 via-transparent to-transparent py-12 md:py-20 font-sans">
      
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-paytm-blue/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-paytm-secondary-blue/5 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text Summary */}
          <div className="lg:col-span-7 flex flex-col text-left space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 rounded-full bg-paytm-blue/10 px-3 py-1 text-xs font-bold text-paytm-secondary-blue border border-paytm-blue/20 max-w-max"
            >
              <CheckCircle2 size={12} className="text-paytm-blue animate-pulse" />
              Verified Full Stack Developer Application
            </motion.div>

            {/* <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-primary tracking-tight leading-tight"
            >
              Building the Future of <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-paytm-blue to-paytm-secondary-blue">
                Digital Payments & Apps
              </span>
            </motion.h1> */}

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-text-secondary font-medium leading-relaxed max-w-2xl"
            >
              Hi, I am <strong className="text-text-primary">Amit Prajapati</strong>. A passionate Software Engineer specializing in scalable full-stack architectures, real-time web socket integrations, and high-performance hybrid mobile apps. Dedicated to crafting seamless digital financial ecosystems.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-2"
            >
              <button
                onClick={() => handleScroll("checkout-gate")}
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-paytm-blue hover:bg-paytm-secondary-blue text-white font-bold text-sm shadow-lg shadow-paytm-blue/20 hover:shadow-paytm-blue/40 transform hover:-translate-y-0.5 transition-all"
              >
                Proceed to Hire
                <ArrowRight size={16} />
              </button>
              
              <a
                href="/Amit_Prajapati.pdf"
                download="Amit_Prajapati_Resume.pdf"
                className="flex items-center gap-2 px-6 py-3 rounded-full bg-bg-panel border border-border-theme hover:bg-hover-theme text-text-primary font-bold text-sm shadow-sm transition-all"
              >
                <Download size={16} />
                Download Resume
              </a>
            </motion.div>
          </div>

          {/* Interactive Paytm Widget Display (3D Dashboard Card) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-sm" style={{ perspective: "1000px" }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                onMouseMove={handleMouseMove}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transformStyle: "preserve-3d",
                  transition: isHovered ? "none" : "transform 0.5s ease-out, shadow 0.3s ease",
                }}
                className="w-full rounded-3xl border border-border-theme bg-bg-panel/85 backdrop-blur-md p-6 shadow-2xl relative overflow-hidden flex flex-col gap-6 hover:shadow-[0_20px_50px_rgba(0,186,242,0.25)] dark:hover:shadow-[0_20px_50px_rgba(0,186,242,0.15)] group transition-shadow duration-300"
              >
                {/* Card Accent Grid Decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-paytm-blue/10 rounded-bl-full pointer-events-none"></div>

                {/* Card Header: Paytm Wallet style */}
                <div 
                  className="flex items-center justify-between border-b border-border-theme pb-4 transition-transform duration-300 ease-out"
                  style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)" }}
                >
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-paytm-blue flex items-center justify-center text-white shadow-md">
                      <CreditCard size={20} />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-text-primary">Paytm Developer Wallet</h3>
                      <p className="text-[10px] text-text-muted font-mono">UPI ID: amit@paytm-hire</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/20">
                    ACTIVE
                  </span>
                </div>

                {/* Simulated Balance Indicators (Parallax Depth Layer) */}
                <div 
                  className="grid grid-cols-2 gap-4 transition-transform duration-300 ease-out"
                  style={{ transform: isHovered ? "translateZ(50px)" : "translateZ(0px)" }}
                >
                  <div className="bg-bg-panel-darker rounded-2xl p-4 flex flex-col text-left border border-border-theme hover:border-paytm-blue/55 transition-all">
                    <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Expertise Balance</span>
                    <span className="text-2xl font-black text-text-primary mt-1">100%</span>
                    <span className="text-[9px] text-emerald-500 font-bold mt-1">✓ Fully backed by code</span>
                  </div>
                  
                  <div className="bg-bg-panel-darker rounded-2xl p-4 flex flex-col text-left border border-border-theme hover:border-paytm-blue/55 transition-all">
                    <span className="text-[10px] text-text-secondary font-bold uppercase tracking-wider">Postpaid Limit</span>
                    <span className="text-2xl font-black text-text-primary mt-1">Unlimited</span>
                    <span className="text-[9px] text-paytm-secondary-blue font-bold mt-1">Commitment & Drive</span>
                  </div>
                </div>

                {/* Paytm Mini App Icons (Parallax Layer) */}
                <div 
                  className="flex items-center justify-between gap-1.5 bg-bg-panel-darker/60 rounded-2xl p-3 border border-border-theme transition-transform duration-300 ease-out"
                  style={{ transform: isHovered ? "translateZ(40px)" : "translateZ(0px)" }}
                >
                  <button
                    onClick={() => handleScroll("soundbox-section")}
                    className="flex flex-col items-center gap-1.5 flex-1 hover:bg-hover-theme p-1.5 rounded-xl transition-colors text-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-paytm-blue/10 flex items-center justify-center text-paytm-blue">
                      <FileText size={16} />
                    </div>
                    <span className="text-[9px] font-bold text-text-secondary">Soundbox</span>
                  </button>

                  <button
                    onClick={() => handleScroll("projects-passbook")}
                    className="flex flex-col items-center gap-1.5 flex-1 hover:bg-hover-theme p-1.5 rounded-xl transition-colors text-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-500">
                      <CreditCard size={16} />
                    </div>
                    <span className="text-[9px] font-bold text-text-secondary">Passbook</span>
                  </button>

                  <button
                    onClick={() => handleScroll("skills-store")}
                    className="flex flex-col items-center gap-1.5 flex-1 hover:bg-hover-theme p-1.5 rounded-xl transition-colors text-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-[9px] font-bold text-text-secondary">App Store</span>
                  </button>

                  <button
                    onClick={() => handleScroll("qr-scanner")}
                    className="flex flex-col items-center gap-1.5 flex-1 hover:bg-hover-theme p-1.5 rounded-xl transition-colors text-center"
                  >
                    <div className="w-8 h-8 rounded-full bg-pink-500/10 flex items-center justify-center text-pink-500">
                      <QrCode size={16} />
                    </div>
                    <span className="text-[9px] font-bold text-text-secondary">Contact QR</span>
                  </button>
                </div>

                {/* Bottom footer bar */}
                <div 
                  className="flex items-center justify-between text-[10px] text-text-muted font-mono select-none transition-transform duration-300 ease-out"
                  style={{ transform: isHovered ? "translateZ(20px)" : "translateZ(0px)" }}
                >
                  <span>Ref: AMIT-CO-IN-2026</span>
                  <span className="flex items-center gap-1 text-paytm-secondary-blue font-bold">
                    <CheckCircle2 size={10} strokeWidth={3} />
                    Safe & Secure Apply
                  </span>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
