"use client";

import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import { Settings, CheckCircle, Send, AlertTriangle, RefreshCw } from "lucide-react";

interface ContactFormProps {
  clearTrigger: number;
}

export default function ContactForm({ clearTrigger }: ContactFormProps) {
  // Form Fields state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Collaboration / Project",
    message: "",
  });

  // Status state
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  // Handle Menu-based clear trigger
  useEffect(() => {
    if (clearTrigger > 0) {
      handleReset();
    }
  }, [clearTrigger]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      subject: "Collaboration / Project",
      message: "",
    });
    setStatus("idle");
    setStatusMessage("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields (Name, Email, and Message).");
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus("success");
        setStatusMessage(
          "Preferences Saved: Enquiry successfully saved. Email acknowledgement sent!"
        );
        // Trigger celebratory confetti!
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.8 },
          colors: ["#ff0000", "#ffffff", "#000000"],
        });
      } else {
        setStatus("error");
        setStatusMessage(data.error || "Failed to submit enquiry.");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage("Server did not respond. Check your environment port.");
    }
  };

  return (
    <section id="contact" className="w-full bg-bg-app border-b border-border-theme p-6 md:p-8 flex flex-col gap-6 select-none items-center justify-center animate-fade-in">
      {/* Dialog Frame */}
      <div className="w-full max-w-2xl bg-bg-panel border border-border-theme rounded-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Dialog Header */}
        <div className="bg-bg-panel-darker px-4 py-3 border-b border-border-theme flex items-center gap-2 text-xs text-text-primary font-bold font-mono">
          <Settings size={14} className="text-red-500 animate-spin" style={{ animationDuration: "12s" }} />
          <span>Preferences Dialogue: enquiry_acknowledgement_setup.ini</span>
        </div>

        {/* Dialog Body */}
        <div className="flex-1 flex flex-col min-h-0">
          <form onSubmit={handleSubmit} className="flex-1 p-5 md:p-6 flex flex-col justify-between gap-6">
            <div className="space-y-4">
              <div className="text-xs text-text-muted font-bold uppercase tracking-wider font-mono">
                Sender Credentials & Enquiry details
              </div>

              {/* Name and Email layout grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-text-secondary flex items-center gap-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="e.g. Jane Doe"
                    className="w-full bg-bg-app border border-border-theme rounded px-3 py-2 text-xs text-text-primary placeholder-zinc-655 focus:outline-none focus:border-red-500 font-mono transition-colors"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-[11px] font-mono text-text-secondary flex items-center gap-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane.doe@company.com"
                    className="w-full bg-bg-app border border-border-theme rounded px-3 py-2 text-xs text-text-primary placeholder-zinc-655 focus:outline-none focus:border-red-500 font-mono transition-colors"
                  />
                </div>
              </div>

              {/* Subject Select Parameter */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-text-secondary">Subject Parameter</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full bg-bg-app border border-border-theme rounded px-3 py-2 text-xs text-text-primary focus:outline-none focus:border-red-500 font-mono transition-colors cursor-pointer"
                >
                  <option value="Collaboration / Project">Collaboration / Project Proposal</option>
                  <option value="Hiring Opportunity">Hiring / Job Opportunity</option>
                  <option value="Freelance / Consulting">Freelance Contract / Consulting</option>
                  <option value="General Query">General Query</option>
                </select>
              </div>

              {/* Message text content */}
              <div className="space-y-1">
                <label className="text-[11px] font-mono text-text-secondary flex items-center gap-1">
                  Message Content <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Describe your project requirements, hiring details, or query here..."
                  className="w-full bg-bg-app border border-border-theme rounded px-3 py-2 text-xs text-text-primary placeholder-zinc-655 focus:outline-none focus:border-red-500 font-sans resize-none transition-colors"
                />
              </div>

              {/* Status Alert Panels */}
              {status === "loading" && (
                <div className="p-3 bg-bg-app rounded border border-border-theme text-text-secondary flex items-center justify-center gap-2 text-xs font-mono">
                  <RefreshCw size={14} className="animate-spin text-red-500" />
                  <span>Applying preference adjustments...</span>
                </div>
              )}

              {status === "success" && (
                <div className="p-3 bg-bg-app rounded border border-green-900/50 text-green-500 dark:text-green-450 flex items-start gap-2 text-xs leading-relaxed">
                  <CheckCircle size={16} className="shrink-0 mt-0.5 text-green-500" />
                  <p>{statusMessage}</p>
                </div>
              )}

              {status === "error" && (
                <div className="p-3 bg-bg-app rounded border border-red-900/50 text-red-500 dark:text-red-450 flex items-start gap-2 text-xs leading-relaxed">
                  <AlertTriangle size={16} className="shrink-0 mt-0.5 text-red-500" />
                  <p>{statusMessage}</p>
                </div>
              )}
            </div>

            {/* Bottom Actions Row */}
            <div className="flex gap-2 justify-end border-t border-border-theme pt-4 mt-2">
              <button
                type="button"
                onClick={handleReset}
                className="px-4 py-2 border border-border-theme hover:bg-hover-theme rounded text-xs font-semibold text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={status === "loading"}
                className="px-4 py-2 border border-red-700 hover:border-red-600 bg-red-600 hover:bg-red-500 disabled:opacity-50 text-white rounded text-xs font-bold transition-all shadow-md shadow-red-950/20 flex items-center gap-1.5 cursor-pointer"
              >
                <Send size={12} />
                <span>Apply / OK</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
