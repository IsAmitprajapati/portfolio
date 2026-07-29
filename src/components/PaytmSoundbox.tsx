"use client";

import React, { useState, useEffect } from "react";
import { Volume2, VolumeX, Power, Sparkles, Check, Play } from "lucide-react";
import confetti from "canvas-confetti";
import { motion, AnimatePresence } from "framer-motion";

export default function PaytmSoundbox() {
  const [isOn, setIsOn] = useState(true);
  const [volume, setVolume] = useState(2); // 0 (Mute), 1, 2, 3
  const [lcdText, setLcdText] = useState("PAYTM ACTIVE");
  const [isPlaying, setIsPlaying] = useState(false);
  const [ledColor, setLedColor] = useState<"green" | "yellow" | "blue" | "off">("green");

  // 3D tilt states
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isOn) return;
    const card = e.currentTarget;
    const box = card.getBoundingClientRect();
    const x = e.clientX - box.left - box.width / 2;
    const y = e.clientY - box.top - box.height / 2;
    // Cap tilt angles to -15deg to 15deg
    const rotateX = -(y / (box.height / 2)) * 15;
    const rotateY = (x / (box.width / 2)) * 15;
    setTilt({ x: rotateX, y: rotateY });
  };

  const handleMouseEnter = () => {
    if (!isOn) return;
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  // Cycle idle led colors if it is on
  useEffect(() => {
    if (!isOn) {
      setLedColor("off");
      setLcdText("POWER OFF");
      return;
    }

    setLcdText("PAYTM ACTIVE");
    const interval = setInterval(() => {
      setLedColor((prev) => {
        if (prev === "green") return "blue";
        if (prev === "blue") return "yellow";
        return "green";
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isOn]);

  // Web Audio API custom Paytm chime
  const playPaytmChime = () => {
    if (volume === 0) return;
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();

      const volumeMap = [0, 0.15, 0.3, 0.55];
      const gainValue = volumeMap[volume];

      // First Chime Note (D5)
      const osc1 = ctx.createOscillator();
      const gain1 = ctx.createGain();
      osc1.connect(gain1);
      gain1.connect(ctx.destination);
      osc1.frequency.value = 587.33; // D5
      osc1.type = "sine";
      gain1.gain.setValueAtTime(0, ctx.currentTime);
      gain1.gain.linearRampToValueAtTime(gainValue, ctx.currentTime + 0.05);
      gain1.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.3);
      osc1.start(ctx.currentTime);
      osc1.stop(ctx.currentTime + 0.35);

      // Second Chime Note (A5)
      const osc2 = ctx.createOscillator();
      const gain2 = ctx.createGain();
      osc2.connect(gain2);
      gain2.connect(ctx.destination);
      osc2.frequency.value = 880.0; // A5
      osc2.type = "sine";
      gain2.gain.setValueAtTime(0, ctx.currentTime + 0.12);
      gain2.gain.linearRampToValueAtTime(gainValue, ctx.currentTime + 0.17);
      gain2.gain.exponentialRampToValueAtTime(0.005, ctx.currentTime + 0.52);
      osc2.start(ctx.currentTime + 0.12);
      osc2.stop(ctx.currentTime + 0.57);
    } catch (err) {
      console.warn("Speech audio context not supported or user action required first", err);
    }
  };

  // Browser Text-To-Speech (Paytm Soundbox voice announcement)
  const speakAnnouncement = () => {
    if (typeof window === "undefined" || !window.speechSynthesis) return;
    
    // Cancel any active speak queues
    window.speechSynthesis.cancel();

    // Text to say
    const speechText = "Paytm par, Amit Prajapati ko, naukri dene ke liye ek notification prapt hua. Paytm karo!";
    const utterance = new SpeechSynthesisUtterance(speechText);
    
    const volumeMap = [0, 0.3, 0.6, 1.0];
    utterance.volume = volumeMap[volume];
    utterance.rate = 1.05; // slightly faster
    utterance.pitch = 1.15; // slightly higher pitch to mimic soundbox speaker

    // Set voice: Search for a Hindi (India) voice first
    const voices = window.speechSynthesis.getVoices();
    const hiVoice = voices.find(
      (v) => v.lang.includes("hi-IN") || v.lang.includes("hi")
    );
    
    if (hiVoice) {
      utterance.voice = hiVoice;
    } else {
      // Fallback: use Indian English if available
      const enInVoice = voices.find(
        (v) => v.lang.includes("en-IN") || v.lang.includes("en-GB") || v.lang.includes("en-US")
      );
      if (enInVoice) {
        utterance.voice = enInVoice;
        utterance.text = "Paytm has received a job offer notification for Amit Prajapati. Paytm karo!";
      }
    }

    // Trigger Speech
    window.speechSynthesis.speak(utterance);
  };

  const handleHireClick = () => {
    if (!isOn || isPlaying) return;

    setIsPlaying(true);
    setLcdText("RECEIVING OFFER");
    setLedColor("blue");

    // Play chime sound immediately
    playPaytmChime();

    // Trigger TTS and LCD text update after 0.5s (when chime finishes)
    setTimeout(() => {
      setLcdText("HIRED! THANK YOU");
      setLedColor("green");
      speakAnnouncement();

      // Trigger Confetti!
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#00baf2", "#002970", "#0084ff", "#ffffff"],
      });

      // Highlight target contact form after sound finishes
      setTimeout(() => {
        setIsPlaying(false);
        setLcdText("PAYTM ACTIVE");
        const contactForm = document.getElementById("checkout-gate");
        if (contactForm) {
          contactForm.scrollIntoView({ behavior: "smooth" });
          contactForm.classList.add("ring-4", "ring-paytm-blue/60");
          setTimeout(() => {
            contactForm.classList.remove("ring-4", "ring-paytm-blue/60");
          }, 3000);
        }
      }, 5000);
    }, 600);
  };

  const togglePower = () => {
    setIsOn(!isOn);
  };

  const cycleVolume = () => {
    if (!isOn) return;
    setVolume((prev) => (prev + 1) % 4);
    // Play a short indicator beep
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.frequency.value = 650;
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {}
  };

  // Trigger synthesis load trigger on mount to pre-cache voice catalog
  useEffect(() => {
    if (typeof window !== "undefined" && window.speechSynthesis) {
      window.speechSynthesis.getVoices();
    }
  }, []);

  return (
    <section id="soundbox-section" className="w-full py-12 bg-bg-panel-darker/40 border-b border-border-theme font-sans scroll-mt-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        
        <div className="max-w-2xl mb-10">
          <h2 className="text-3xl font-black text-text-primary tracking-tight">
            The Paytm Soundbox Simulation
          </h2>
          <p className="text-sm text-text-secondary mt-2">
            Click the button to simulate a transaction. Hover over the physical device to rotate it in 3D space!
          </p>
        </div>

        {/* The Soundbox Device wrapper */}
        <div className="flex flex-col md:flex-row items-center gap-12 bg-bg-panel border border-border-theme rounded-3xl p-8 md:p-12 shadow-2xl max-w-3xl w-full">
          
          {/* Soundbox Outer Box with 3D Perspective container */}
          <div className="shrink-0" style={{ perspective: "1000px" }}>
            <motion.div
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                transformStyle: "preserve-3d",
                transition: isHovered ? "none" : "transform 0.4s ease-out, shadow 0.3s ease",
              }}
              className="relative w-56 h-66 bg-paytm-blue rounded-3xl border-4 border-paytm-dark-blue flex flex-col items-center justify-between p-4 shadow-xl select-none overflow-hidden hover:shadow-[0_20px_45px_rgba(0,186,242,0.3)] transition-shadow duration-300"
            >
              {/* Paytm Top Banner */}
              <div 
                className="w-full flex items-center justify-between border-b border-paytm-dark-blue/20 pb-2 transition-transform duration-300 ease-out"
                style={{ transform: isHovered ? "translateZ(25px)" : "translateZ(0px)" }}
              >
                <span className="text-white font-extrabold text-sm tracking-tighter">paytm</span>
                {/* LCD Display */}
                <div className="bg-zinc-950/90 text-[10px] font-mono text-emerald-400 px-2 py-0.5 rounded border border-zinc-800 uppercase tracking-widest min-w-[100px] text-center shadow-inner h-5 flex items-center justify-center">
                  {lcdText}
                </div>
              </div>

              {/* Hardware LEDs and status grill */}
              <div 
                className="flex items-center gap-3 bg-paytm-dark-blue/10 px-4 py-1.5 rounded-full border border-white/10 mt-1 transition-transform duration-300 ease-out"
                style={{ transform: isHovered ? "translateZ(30px)" : "translateZ(0px)" }}
              >
                <div className="flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-sm ${isOn && ledColor === "green" ? "animate-led-green" : "opacity-20"}`}></div>
                  <span className="text-[6px] text-white/70 font-mono mt-0.5">READY</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 rounded-full bg-amber-400 shadow-sm ${isOn && ledColor === "yellow" ? "animate-led-yellow" : "opacity-20"}`}></div>
                  <span className="text-[6px] text-white/70 font-mono mt-0.5">BATTERY</span>
                </div>
                <div className="flex flex-col items-center">
                  <div className={`w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-sm ${isOn && ledColor === "blue" ? "animate-led-blue" : "opacity-20"}`}></div>
                  <span className="text-[6px] text-white/70 font-mono mt-0.5">NET</span>
                </div>
              </div>

              {/* Speaker Circle Grill with high 3D popout depth */}
              <div 
                className="w-28 h-28 rounded-full bg-paytm-dark-blue border-2 border-white/20 flex items-center justify-center relative overflow-hidden shadow-inner my-2 transition-transform duration-300 ease-out"
                style={{ transform: isHovered ? "translateZ(50px)" : "translateZ(0px)" }}
              >
                {/* Radial Grill Lines */}
                <div className="absolute inset-0 grid grid-cols-6 gap-0.5 opacity-20 p-2">
                  {Array.from({ length: 36 }).map((_, i) => (
                    <div key={i} className="w-1.5 h-1.5 rounded-full bg-white"></div>
                  ))}
                </div>
                
                {/* Center Emblem */}
                <div className="w-12 h-12 rounded-full bg-paytm-blue border border-paytm-dark-blue flex items-center justify-center text-white z-10 font-black text-[9px] tracking-tighter">
                  paytm
                </div>
              </div>

              {/* Hardware Buttons - Physical Controls representation */}
              <div 
                className="w-full flex justify-between px-2 pt-2 border-t border-paytm-dark-blue/20 transition-transform duration-300 ease-out"
                style={{ transform: isHovered ? "translateZ(20px)" : "translateZ(0px)" }}
              >
                {/* Power Button */}
                <button
                  onClick={togglePower}
                  className={`p-1.5 rounded-full transition-colors ${isOn ? "bg-paytm-dark-blue hover:bg-zinc-800 text-white" : "bg-zinc-800 text-zinc-500"}`}
                  title="Power Toggle"
                >
                  <Power size={10} />
                </button>
                
                {/* Volume Indicators */}
                <div className="flex items-center gap-0.5 text-white/70 text-[8px] font-mono font-bold">
                  <span>VOL</span>
                  <span className={`w-1 h-2 rounded-sm ${volume >= 1 ? "bg-white" : "bg-white/20"}`}></span>
                  <span className={`w-1 h-3 rounded-sm ${volume >= 2 ? "bg-white" : "bg-white/20"}`}></span>
                  <span className={`w-1 h-4 rounded-sm ${volume >= 3 ? "bg-white" : "bg-white/20"}`}></span>
                </div>

                {/* Volume Control Button */}
                <button
                  onClick={cycleVolume}
                  disabled={!isOn}
                  className="p-1.5 rounded-full bg-paytm-dark-blue hover:bg-zinc-800 text-white disabled:opacity-30 transition-colors"
                  title="Change Volume"
                >
                  {volume === 0 ? <VolumeX size={10} /> : <Volume2 size={10} />}
                </button>
              </div>
            </motion.div>
          </div>

          {/* Interactive hiring box triggers */}
          <div className="flex-1 flex flex-col justify-center text-left space-y-5">
            <div className="space-y-2">
              <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                <span>Paytm Soundbox Unit 2.0</span>
                <span className="text-[10px] bg-paytm-light-blue px-2 py-0.5 rounded text-paytm-secondary-blue font-mono font-bold border border-paytm-blue/15">
                  SIMULATOR
                </span>
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed">
                Experience Paytm's offline payment announcement technology. Send a simulated recruitment notification below. The unit will play a secure audio signature, flash status lights, and verify the transaction in real time!
              </p>
            </div>

            <div className="bg-bg-panel-darker rounded-2xl p-4 border border-border-theme space-y-3 font-mono text-xs">
              <div className="flex justify-between border-b border-border-theme pb-2 text-[10px] text-text-secondary font-bold">
                <span>WIDGET DETAILS</span>
                <span className="text-paytm-blue">ONLINE</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Account:</span>
                <span className="text-text-primary font-bold">Amit Prajapati</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Notification Class:</span>
                <span className="text-text-primary font-bold">Hiring Offer (₹1.00)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-muted">Speaker Level:</span>
                <span className="text-text-primary font-bold">{volume === 0 ? "MUTED" : `VOL ${volume} / 3`}</span>
              </div>
            </div>

            <button
              onClick={handleHireClick}
              disabled={!isOn || isPlaying}
              className="w-full flex items-center justify-center gap-2.5 py-4 rounded-2xl bg-gradient-to-r from-paytm-blue to-paytm-secondary-blue hover:from-paytm-secondary-blue hover:to-paytm-blue text-white font-bold text-base shadow-xl disabled:opacity-50 transform hover:-translate-y-0.5 active:translate-y-0 select-none transition-all cursor-pointer border border-paytm-blue/15"
            >
              {isPlaying ? (
                <>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                  />
                  Announcing Recruitment...
                </>
              ) : (
                <>
                  <Sparkles size={18} />
                  Proceed to Hire (Send ₹1 Offer)
                </>
              )}
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
