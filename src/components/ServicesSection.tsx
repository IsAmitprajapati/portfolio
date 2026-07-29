"use client";

import React from "react";
import { Laptop, Smartphone, CheckCircle, Cpu, Shield, Globe } from "lucide-react";

export default function ServicesSection() {
  return (
    <section id="services" className="w-full bg-bg-app border-b border-border-theme p-6 md:p-8 flex flex-col gap-6 select-none animate-fade-in">
      {/* Services Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-text-primary tracking-tight flex items-center gap-2">
            <span className="px-2 py-0.5 bg-red-600 text-[10px] rounded font-mono uppercase text-white font-bold">Services</span>
            Providing Services
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            After Effects Composition Panel - High-performance custom engineering solutions.
          </p>
        </div>
      </div>

      {/* Dialog Frame */}
      <div className="w-full max-w-6xl mx-auto bg-bg-panel border border-border-theme rounded-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Workspace Tab Header */}
        <div className="bg-bg-panel-darker px-4 py-2.5 border-b border-border-theme flex items-center justify-between text-xs text-text-primary font-bold font-mono">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600 flex items-center justify-center text-[7px] text-white">Ae</span>
            <span>Composition: Services_Render_Queue.aep @ 100% (Active)</span>
          </div>
          <div className="text-[9px] bg-bg-panel border border-border-theme px-1.5 py-0.5 rounded text-text-muted">
            1080p // 60 FPS
          </div>
        </div>

        {/* Services Showcase Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Service 1: Web Development */}
          <div className="group relative rounded-xl border border-border-theme bg-bg-panel-darker/40 hover:border-amber-500/50 hover:bg-bg-panel transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[380px]">
            {/* Ambient Background Glow (Illustrator Amber/Orange) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl group-hover:bg-amber-500/10 transition-all pointer-events-none" />

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-amber-500/10 text-amber-500 border border-amber-500/20">
                  <Laptop size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-text-primary">Web Development</h3>
                  <span className="text-[10px] font-mono text-amber-500 font-bold uppercase tracking-wider">Full Stack & API Architecture</span>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                Building secure, fast, and SEO-friendly web platforms that load instantly. Specializing in connecting responsive React/Next.js frontend designs with robust Node.js/Express API pipelines and optimized MongoDB layers.
              </p>

              {/* Service Specs Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-text-secondary pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-amber-500 shrink-0" />
                  <span>Next.js 15 SSR/SSG</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-amber-500 shrink-0" />
                  <span>Sanitized MERN APIs</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-amber-500 shrink-0" />
                  <span>Secure Rate-Limiting</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-amber-500 shrink-0" />
                  <span>Responsive UI Layouts</span>
                </div>
              </div>
            </div>

            {/* Simulated Illustrator Workspace Graphic */}
            <div className="px-6 pb-6 mt-4">
              <div className="w-full h-24 bg-bg-panel border border-border-theme/80 rounded-md overflow-hidden relative flex items-center justify-center p-2">
                {/* Browser bar */}
                <div className="absolute top-0 left-0 right-0 h-4 bg-bg-panel-darker border-b border-border-theme flex items-center px-2 gap-1 text-[8px] font-mono text-text-muted">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500/70" />
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500/70" />
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500/70" />
                  <span className="ml-2 font-mono text-[7px]">https://amitprajapati.co.in</span>
                </div>
                {/* Simulated content rendering */}
                <div className="w-full flex gap-3 mt-4 text-[9px] font-mono text-text-muted justify-between">
                  <div className="flex-1 space-y-1">
                    <div className="h-2 w-16 bg-amber-500/10 rounded" />
                    <div className="h-1.5 w-full bg-border-theme/40 rounded" />
                    <div className="h-1.5 w-12 bg-border-theme/40 rounded" />
                  </div>
                  <div className="w-10 h-10 rounded border border-dashed border-amber-500/40 flex items-center justify-center text-amber-500 font-extrabold text-[8px] animate-pulse">
                    <Globe size={12} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Mobile Application Development */}
          <div className="group relative rounded-xl border border-border-theme bg-bg-panel-darker/40 hover:border-indigo-500/50 hover:bg-bg-panel transition-all duration-300 overflow-hidden flex flex-col justify-between min-h-[380px]">
            {/* Ambient Background Glow (After Effects Indigo/Purple) */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/5 rounded-full blur-3xl group-hover:bg-indigo-500/10 transition-all pointer-events-none" />

            <div className="p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-lg bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                  <Smartphone size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-black text-text-primary">Mobile Application Development</h3>
                  <span className="text-[10px] font-mono text-indigo-500 font-bold uppercase tracking-wider">Cross-Platform Apps</span>
                </div>
              </div>

              <p className="text-xs text-text-secondary leading-relaxed">
                Designing and compiling high-performance native applications for business. Focusing on responsive layouts, gestures, database cache syncing, low latency communication, and intuitive mobile interfaces.
              </p>

              {/* Service Specs Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono text-text-secondary pt-2">
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-indigo-500 shrink-0" />
                  <span>React Native (Android/iOS)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-indigo-500 shrink-0" />
                  <span>State & Cache Syncing</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-indigo-500 shrink-0" />
                  <span>Fluid Component Layouts</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle size={12} className="text-indigo-500 shrink-0" />
                  <span>Offline-First Databases</span>
                </div>
              </div>
            </div>

            {/* Simulated After Effects Smartphone Workspace Graphic */}
            <div className="px-6 pb-6 mt-4">
              <div className="w-full h-24 bg-bg-panel border border-border-theme/80 rounded-md overflow-hidden relative flex items-center justify-center p-2">
                {/* UI ruler ticks */}
                <div className="absolute top-0 bottom-0 left-2 w-1 border-r border-dashed border-border-theme/40" />
                <div className="absolute top-0 bottom-0 right-2 w-1 border-l border-dashed border-border-theme/40" />
                {/* Simulated smartphone */}
                <div className="w-16 h-18 rounded-lg border-2 border-border-theme bg-bg-panel-darker relative flex flex-col items-center justify-between p-1">
                  <span className="w-4 h-0.5 rounded-full bg-border-theme shrink-0" />
                  <div className="flex-1 w-full flex flex-col justify-center items-center gap-1">
                    <div className="w-3.5 h-3.5 rounded-full bg-indigo-500/10 border border-dashed border-indigo-500/40 flex items-center justify-center text-indigo-500">
                      <Cpu size={8} />
                    </div>
                    <div className="h-1 w-8 bg-border-theme/40 rounded" />
                  </div>
                  <span className="w-1.5 h-1.5 rounded-full bg-border-theme shrink-0" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Bottom Status Bar */}
        <div className="bg-bg-panel-darker px-4 py-2 border-t border-border-theme flex items-center justify-between text-[10px] text-text-muted font-mono">
          <span className="flex items-center gap-1.5">
            <Shield size={10} className="text-red-500 animate-pulse" />
            Security & Performance fully optimized across both layouts.
          </span>
          <span className="text-text-secondary font-bold">READY TO EXPORT</span>
        </div>
      </div>
    </section>
  );
}
