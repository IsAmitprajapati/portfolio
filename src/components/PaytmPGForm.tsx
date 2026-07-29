"use client";

import React, { useState } from "react";
import { ShieldCheck, ArrowRight, CheckCircle2, Lock, Sparkles, RefreshCw, RefreshCcw } from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export default function PaytmPGForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Full-Time Offer",
    message: "",
    value: "1 Hired Notification",
  });

  const [status, setStatus] = useState<"idle" | "verifying" | "processing" | "success" | "error">("idle");
  const [loaderMessage, setLoaderMessage] = useState("");
  const [receiptDetails, setReceiptDetails] = useState<any>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "Full-Time Offer",
      message: "",
      value: "1 Hired Notification",
    });
    setStatus("idle");
    setReceiptDetails(null);
  };

  // Browser Text-To-Speech announcement for PG success
  const speakAnnouncement = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    window.speechSynthesis.cancel();

    const text = "Paytm Gateway: Transaction Successful. Amit Prajapati has received your message. Thank you!";
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1.05;
    utterance.pitch = 1.1;

    // Search for English India voice first
    const voices = window.speechSynthesis.getVoices();
    const enInVoice = voices.find(
      (v) => v.lang.includes("en-IN") || v.lang.includes("en-GB") || v.lang.includes("en-US")
    );
    if (enInVoice) {
      utterance.voice = enInVoice;
    }
    window.speechSynthesis.speak(utterance);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      return;
    }

    // Step-by-step simulated gateway loading stages
    setStatus("verifying");
    setLoaderMessage("Initializing secure handshake with Amit's node...");

    // Parallelize the fetch call and simulated loading timeline
    let apiSuccess = false;
    let apiErrorMsg = "";
    let apiResponseData: any = null;

    const apiPromise = fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.ok && data.success) {
          apiSuccess = true;
          apiResponseData = data;
        } else {
          apiSuccess = false;
          apiErrorMsg = data.error || "Failed to submit transaction.";
        }
      })
      .catch((err) => {
        apiSuccess = false;
        apiErrorMsg = "Database/Email Gateway connection failed.";
      });

    setTimeout(() => {
      setStatus("processing");
      setLoaderMessage("Processing transaction. Resolving UPI node tokens...");

      setTimeout(async () => {
        // Await the API response to resolve before transitioning to success
        await apiPromise;

        if (apiSuccess) {
          setStatus("success");
          setLoaderMessage("");
          const txnId = `TXN-${Math.floor(100000 + Math.random() * 900000)}-AMIT`;
          setReceiptDetails({
            txnId,
            timestamp: new Date().toLocaleString(),
            name: formData.name,
            email: formData.email,
            value: formData.value,
            subject: formData.subject,
            dbSaved: apiResponseData?.dbSaved,
            emailSent: apiResponseData?.emailSent,
            mockMode: apiResponseData?.mockMode,
          });

          // Trigger confetti chimes
          confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.7 },
            colors: ["#00baf2", "#002970", "#0084ff", "#ffffff"],
          });

          // Play standard success beep
          try {
            const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
            if (AudioCtx) {
              const ctx = new AudioCtx();
              const osc = ctx.createOscillator();
              const gain = ctx.createGain();
              osc.connect(gain);
              gain.connect(ctx.destination);
              osc.frequency.setValueAtTime(600, ctx.currentTime);
              osc.frequency.exponentialRampToValueAtTime(1000, ctx.currentTime + 0.15);
              gain.gain.setValueAtTime(0.15, ctx.currentTime);
              gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
              osc.start();
              osc.stop(ctx.currentTime + 0.3);
            }
          } catch (err) {}

          // Speak synthesized announcement
          speakAnnouncement();

          console.log("Paytm SECURE GATEWAY TRANSACTION SUCCESS:", apiResponseData);
        } else {
          setStatus("error");
          console.error("Paytm SECURE GATEWAY TRANSACTION FAILED:", apiErrorMsg);
        }
      }, 1500);
    }, 1200);
  };

  return (
    <section id="checkout-gate" className="w-full py-16 bg-bg-panel-darker/40 border-b border-border-theme font-sans scroll-mt-16 transition-all duration-300">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* Section Header */}
        <div className="max-w-2xl text-center mb-12">
          <h2 className="text-3xl font-black text-text-primary tracking-tight flex items-center justify-center gap-2">
            <Lock size={20} className="text-paytm-blue" />
            Secure Payment Gateway
          </h2>
          <p className="text-sm text-text-secondary mt-2">
            Send an inquiry or interview offer securely via Amit's custom simulated checkout portal.
          </p>
        </div>

        {/* Paytm Checkout frame */}
        <div className="w-full max-w-2xl bg-bg-panel border border-border-theme rounded-3xl overflow-hidden shadow-2xl flex flex-col min-h-[460px]">
          
          {/* Checkout Header banner */}
          <div className="bg-bg-panel-darker px-6 py-4 border-b border-border-theme flex items-center justify-between font-mono text-xs select-none">
            <span className="font-extrabold text-paytm-secondary-blue flex items-center gap-1.5">
              <ShieldCheck size={16} className="text-emerald-500" />
              Paytm PG Secure Checkout
            </span>
            <span className="text-[10px] text-text-muted">SSL 256-BIT ENCRYPTION</span>
          </div>

          {/* Form Body - Animate transitions */}
          <div className="p-6 md:p-10 flex-1 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              
              {/* Stage 1: The input form */}
              {status === "idle" && (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-5 text-left"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Name input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-secondary">Your Name *</label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="e.g. Hiring Manager"
                        className="w-full px-4 py-2.5 bg-bg-panel-darker border border-border-theme rounded-xl text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-paytm-blue focus:border-transparent transition-all"
                      />
                    </div>

                    {/* Email input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-secondary">Your Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="e.g. recruiter@paytm.com"
                        className="w-full px-4 py-2.5 bg-bg-panel-darker border border-border-theme rounded-xl text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-paytm-blue focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Subject Category dropdown */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-secondary">Inquiry Category</label>
                      <select
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-bg-panel-darker border border-border-theme rounded-xl text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-paytm-blue focus:border-transparent transition-all cursor-pointer"
                      >
                        <option value="Full-Time Offer">Full-Time Job Offer</option>
                        <option value="Freelance Contract">Freelance Contract</option>
                        <option value="General Collaboration">General Collaboration</option>
                        <option value="Say Hello">Just saying Hello!</option>
                      </select>
                    </div>

                    {/* Transaction value / mock payment payload */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-text-secondary">Simulated Transfer Value</label>
                      <input
                        type="text"
                        name="value"
                        value={formData.value}
                        onChange={handleInputChange}
                        placeholder="e.g. 1 Job Offer or Custom Message"
                        className="w-full px-4 py-2.5 bg-bg-panel-darker border border-border-theme rounded-xl text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-paytm-blue focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-text-secondary">Message / Details *</label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Hi Amit, we loved your Paytm-themed portfolio and would like to schedule a discussion..."
                      className="w-full px-4 py-2.5 bg-bg-panel-darker border border-border-theme rounded-xl text-xs text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-1 focus:ring-paytm-blue focus:border-transparent transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-paytm-blue hover:bg-paytm-secondary-blue text-white rounded-2xl font-bold text-sm shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 transition-all select-none cursor-pointer"
                  >
                    Proceed to Secure Pay
                    <ArrowRight size={16} />
                  </button>
                </motion.form>
              )}

              {/* Stage 2 & 3: Loading and securing states */}
              {(status === "verifying" || status === "processing") && (
                <motion.div
                  key="loader"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center justify-center text-center space-y-6 select-none font-mono py-12"
                >
                  <div className="relative">
                    {/* Ring Spinner */}
                    <div className="w-16 h-16 border-4 border-paytm-blue/20 border-t-paytm-blue rounded-full animate-spin" />
                    <ShieldCheck size={28} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-paytm-blue" />
                  </div>
                  
                  <div className="space-y-1 max-w-md">
                    <h4 className="text-sm font-bold text-text-primary uppercase tracking-widest animate-pulse">
                      {status === "verifying" ? "SECURE CONNECTION" : "PAYMENT ROUTING"}
                    </h4>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {loaderMessage}
                    </p>
                  </div>
                </motion.div>
              )}

              {/* Stage 4: Success confirmation screen */}
              {status === "success" && receiptDetails && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center space-y-6 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 shadow-sm">
                    <CheckCircle2 size={36} />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-lg font-black text-text-primary tracking-tight">Transaction Successful!</h3>
                    <p className="text-xs text-text-secondary">
                      Your inquiry has been successfully compiled and recorded.
                    </p>
                  </div>

                  {/* Receipt Box details */}
                  <div className="w-full max-w-md bg-bg-panel-darker/60 border border-border-theme rounded-2xl p-5 font-mono text-xs text-left space-y-2.5">
                    <div className="flex justify-between border-b border-border-theme pb-2 text-[10px] text-text-muted font-bold">
                      <span>SECURE RECEIPT</span>
                      <span className="text-emerald-500 font-extrabold flex items-center gap-0.5">
                        <Sparkles size={10} />
                        VERIFIED
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Transaction ID:</span>
                      <span className="text-text-primary font-bold">{receiptDetails.txnId}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Time:</span>
                      <span className="text-text-primary font-bold">{receiptDetails.timestamp}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Sender Name:</span>
                      <span className="text-text-primary font-bold">{receiptDetails.name}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Sender Email:</span>
                      <span className="text-text-primary font-bold">{receiptDetails.email}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-muted">Transfer Value:</span>
                      <span className="text-paytm-secondary-blue font-black">{receiptDetails.value}</span>
                    </div>
                    <div className="flex justify-between border-t border-border-theme pt-2 text-[9px] text-text-muted select-none">
                      <span>DB Record: {receiptDetails.dbSaved ? "SAVED" : "SANDBOX"}</span>
                      <span>Email Gate: {receiptDetails.emailSent ? "SENT" : "MOCKED"}</span>
                    </div>
                    <div className="flex justify-between text-[8px] text-text-muted select-none">
                      <span>Status: APPROVED</span>
                      <span>Gateway Node: AMIT-PROD</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="flex items-center gap-1.5 px-4 py-2 border border-border-theme hover:bg-hover-theme text-text-secondary font-bold text-xs rounded-xl shadow-sm transition-all cursor-pointer"
                  >
                    <RefreshCcw size={12} />
                    New Transaction
                  </button>
                </motion.div>
              )}

              {/* Stage 5: Validation Error state */}
              {status === "error" && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center text-center space-y-4 py-8"
                >
                  <div className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center text-red-500 border border-red-500/20">
                    <RefreshCw size={24} className="animate-spin" style={{ animationDuration: "3s" }} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-bold text-red-500">Transaction Refused</h4>
                    <p className="text-xs text-text-secondary max-w-sm">
                      Please make sure you have filled in all required fields (Name, Email, and Message details).
                    </p>
                  </div>
                  <button
                    onClick={() => setStatus("idle")}
                    className="px-4 py-2 bg-paytm-blue hover:bg-paytm-secondary-blue text-white rounded-xl font-bold text-xs transition-all cursor-pointer"
                  >
                    Try Again
                  </button>
                </motion.div>
              )}

            </AnimatePresence>
          </div>

          {/* Secure lock footer */}
          <div className="bg-bg-panel-darker px-6 py-3 border-t border-border-theme flex items-center justify-center gap-1.5 font-mono text-[10px] text-text-muted select-none">
            <Lock size={12} className="text-text-muted" />
            <span>Securely processed. No actual money will be transferred.</span>
          </div>

        </div>

      </div>
    </section>
  );
}
