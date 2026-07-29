"use client";

import React, { useState } from "react";
import { CreditCard, Calendar, MapPin, ChevronRight, Sparkles, TrendingUp, DollarSign } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceStatement {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  limitUpgrade: string; // The "Credit Upgrade" description
  ledgerItems: { name: string; description: string; progress: number }[];
  accentColor: string;
}

export default function PaytmPostpaid() {
  const [selectedStatementId, setSelectedStatementId] = useState<string>("acl");

  const experienceStatements: ExperienceStatement[] = [
    {
      id: "acl",
      company: "ACL Digital (Europ Assistance)",
      role: "Full Stack Developer",
      duration: "Oct 2025 – Present",
      location: "Mumbai, India (Full Time)",
      limitUpgrade: "Upgrade to Core Enterprise CRM & Policy Management Architecture",
      accentColor: "border-paytm-blue text-paytm-secondary-blue",
      ledgerItems: [
        { name: "CRM & CMS Core Development", description: "Built and maintained CRM and CMS systems for subscription-based ticket creation and policy administration.", progress: 95 },
        { name: "Search API Optimization", description: "Refactored internal indexes, reducing search latencies and increasing search matching speeds.", progress: 90 },
        { name: "Billing & Subscriptions Integration", description: "Designed and implemented billing structures supporting flexible user subscription plans.", progress: 85 },
      ],
    },
    {
      id: "freelance",
      company: "Freelance Engineering Work",
      role: "Software Engineer",
      duration: "Feb 2024 – Oct 2025",
      location: "Mumbai, Maharashtra (Freelancer)",
      limitUpgrade: "Development of Hybrid React Native Apps & AI Chat integrations",
      accentColor: "border-amber-500 text-amber-500",
      ledgerItems: [
        { name: "Client Alignment & UI/UX Design", description: "Cooperated with multiple startup clients to scope products and translate visual mocks into responsive codebases.", progress: 95 },
        { name: "React Native App Development", description: "Developed dynamic cross-platform app screens with local secure store syncing and push triggers.", progress: 98 },
        { name: "AI Communication Platform", description: "Built real-time audio transcripts aggregator with context-aware AI chat summaries.", progress: 92 },
      ],
    },
    {
      id: "exalogic",
      company: "Exalogic Consulting",
      role: "Full Stack Developer (Contract)",
      duration: "Nov 2024 – March 2025",
      location: "Bangalore, Karnataka (Contract)",
      limitUpgrade: "SSO Integrations & Secure Corporate Portal Architectures",
      accentColor: "border-purple-500 text-purple-500",
      ledgerItems: [
        { name: "Centralized Staff Portal", description: "Aggregated separate leave tracking systems, event notices, and announcements into a unified dashboard.", progress: 92 },
        { name: "Strapi SuccessFactors SSO", description: "Engineered single sign-on authentication connecting SAP SuccessFactors with Strapi CMS backend nodes.", progress: 95 },
        { name: "NodeJS Reports API Engine", description: "Engineered performant PDF/CSV reporting compilation routers with push message triggers.", progress: 85 },
      ],
    },
    {
      id: "house",
      company: "HouseSeekers",
      role: "Full Stack Developer",
      duration: "Aug 2023 – Jan 2024",
      location: "Thane, Maharashtra (Full Time)",
      limitUpgrade: "Real Estate Booking Platform and CMS Systems",
      accentColor: "border-emerald-500 text-emerald-500",
      ledgerItems: [
        { name: "Booking Management Stack", description: "Built a multi-tier client booking flow from scratch using React, Express, and MongoDB.", progress: 90 },
        { name: "Company Site HouseSeekers.in", description: "Designed and developed their customer landing site from scratch with deep focus on UI loading times.", progress: 95 },
      ],
    },
    {
      id: "finestar",
      company: "Finestar Jewellery Diamonds",
      role: "Web Developer",
      duration: "Apr 2023 – Jul 2023",
      location: "Surat, Gujarat (Full Time)",
      limitUpgrade: "Diamond Search Engines UI optimization",
      accentColor: "border-pink-500 text-pink-500",
      ledgerItems: [
        { name: "Diamond Search UI Modernization", description: "Redesigned diamond search tables, filters, and catalog, boosting client conversions by 50%.", progress: 95 },
        { name: "InfineIT Site Builder", description: "Crafted InfineIT agency homepage from scratch using React and clean styling paradigms.", progress: 92 },
      ],
    },
    {
      id: "mariapps",
      company: "MariApps Marine Solutions",
      role: "React Developer",
      duration: "Jun 2022 – Mar 2023",
      location: "Mumbai, Maharashtra (Full Time)",
      limitUpgrade: "Real-time IoT marine dashboards & Leaflet Map aggregates",
      accentColor: "border-cyan-500 text-cyan-500",
      ledgerItems: [
        { name: "Marine Telemetry Visualizations", description: "Used ChartJS and high frequency polls to render ship engine telemetry and fuel rates.", progress: 95 },
        { name: "Leaflet Map tracking Nodes", description: "Plotted real-time ship path coordinates over Leaflet map canvas nodes with weather overlays.", progress: 90 },
        { name: "CCTV AI Behavior UI Display", description: "Rendered real-time bounding boxes of behavioral violations in CCTV feeds on ship decks.", progress: 92 },
      ],
    },
  ];

  const currentStatement = experienceStatements.find((s) => s.id === selectedStatementId) || experienceStatements[0];

  return (
    <section id="experience-postpaid" className="w-full py-16 bg-bg-app border-b border-border-theme font-sans scroll-mt-16 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-2xl text-left mb-12">
          <h2 className="text-3xl font-black text-text-primary tracking-tight flex items-center gap-2">
            <span className="px-2 py-0.5 bg-paytm-blue text-[10px] rounded font-mono uppercase text-white font-bold">Postpaid</span>
            Timeline Limit Upgrades
          </h2>
          <p className="text-sm text-text-secondary mt-1">
            Amit's professional career milestones presented as credit-limit extensions in a Paytm Postpaid statement layout. Click statement cycles on the left to view statements on the right.
          </p>
        </div>

        {/* Postpaid Main Card Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Timeline Statement Cycles (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-3">
            
            {/* Postpaid Summary Widget */}
            <div className="bg-gradient-to-br from-paytm-dark-blue to-paytm-secondary-blue rounded-3xl p-5 text-white shadow-md text-left font-mono relative overflow-hidden mb-2">
              {/* Decorative Accent */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-white/10 rounded-full pointer-events-none"></div>
              
              <div className="flex items-center justify-between border-b border-white/20 pb-3 mb-3 text-xs">
                <span className="font-bold uppercase tracking-wider text-[10px] opacity-90">Paytm Postpaid Ledger</span>
                <span className="font-extrabold flex items-center gap-1">
                  <TrendingUp size={12} />
                  Milestone Level 6
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-[10px] text-white/70">TOTAL ENGINEERING SCORE</span>
                <h3 className="text-2xl font-black">Unlimited Capacity</h3>
              </div>
              <div className="flex justify-between items-center text-[10px] text-white/80 pt-3 mt-3 border-t border-white/20">
                <span>Account Status: EXCELLENT</span>
                <span className="bg-emerald-500 px-2 py-0.5 rounded text-[8px] font-bold">NO DUES</span>
              </div>
            </div>

            {/* List of statement cycles (Timeline items) */}
            <div className="flex flex-col gap-2 overflow-y-auto max-h-[380px] pr-1 scrollbar-thin">
              {experienceStatements.map((statement, index) => {
                const isActive = selectedStatementId === statement.id;
                return (
                  <button
                    key={statement.id}
                    onClick={() => setSelectedStatementId(statement.id)}
                    className={`w-full flex items-center justify-between p-4 rounded-2xl border text-left transition-all cursor-pointer ${
                      isActive
                        ? "bg-bg-panel border-paytm-blue shadow-md"
                        : "bg-bg-panel/60 border-border-theme hover:bg-hover-theme hover:border-text-muted/20"
                    }`}
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-bold text-paytm-secondary-blue font-mono">
                          CYCLE #{experienceStatements.length - index}
                        </span>
                        <span className="text-[9px] text-text-muted font-semibold">• {statement.duration}</span>
                      </div>
                      <h4 className="text-xs font-black text-text-primary mt-1 truncate">
                        {statement.company}
                      </h4>
                      <p className="text-[10px] text-text-secondary mt-0.5 font-medium truncate">
                        {statement.role}
                      </p>
                    </div>
                    <ChevronRight size={14} className={`text-text-muted transition-transform ${isActive ? "translate-x-1 text-paytm-blue" : ""}`} />
                  </button>
                );
              })}
            </div>
          </div>

          {/* Statement Invoice Detail (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="h-full bg-bg-panel border border-border-theme rounded-3xl p-6 md:p-8 flex flex-col justify-between shadow-lg relative overflow-hidden text-left">
              
              {/* Paper Watermark background effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-paytm-blue/[0.03] font-black text-7xl font-sans uppercase tracking-widest pointer-events-none select-none -rotate-12">
                POSTPAID STATEMENT
              </div>

              {/* Statement details Header */}
              <div className="space-y-4 relative z-10">
                <div className="flex justify-between items-start gap-4 border-b border-border-theme pb-4">
                  <div>
                    <span className="text-[9px] text-paytm-secondary-blue font-bold uppercase tracking-wider">Account Upgrade Statement</span>
                    <h3 className="text-lg font-black text-text-primary mt-1">{currentStatement.company}</h3>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-text-secondary font-medium mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin size={10} />
                        {currentStatement.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar size={10} />
                        {currentStatement.duration}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-[9px] text-text-muted font-bold block font-mono">STATEMENT TYPE</span>
                    <span className="text-[10px] bg-paytm-blue/10 text-paytm-secondary-blue font-bold px-2 py-0.5 rounded border border-paytm-blue/15 inline-block mt-0.5">
                      LIMIT UPGRADE
                    </span>
                  </div>
                </div>

                {/* The Upgrade Description block */}
                <div className="bg-bg-panel-darker rounded-2xl p-4 border border-border-theme flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-paytm-blue flex items-center justify-center text-white shrink-0 shadow-sm">
                    <CreditCard size={18} />
                  </div>
                  <div>
                    <span className="text-[9px] text-text-muted font-bold block font-mono uppercase">Milestone Upgrade Payload</span>
                    <span className="text-xs font-black text-text-primary mt-0.5 block leading-normal">
                      {currentStatement.limitUpgrade}
                    </span>
                  </div>
                </div>

                {/* Ledger Items (Work details) */}
                <div className="space-y-3 pt-2">
                  <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider block font-mono">Ledger Entries / Responsibilities</span>
                  <div className="space-y-3">
                    {currentStatement.ledgerItems.map((item, idx) => (
                      <div key={idx} className="space-y-1.5 font-sans">
                        <div className="flex justify-between items-center text-xs font-bold text-text-primary">
                          <span className="flex items-center gap-1.5 pr-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-paytm-blue shrink-0"></span>
                            {item.name}
                          </span>
                          <span className="font-mono text-paytm-secondary-blue text-[10px]">{item.progress}% Quality</span>
                        </div>
                        <p className="text-[11px] text-text-secondary font-medium leading-relaxed pl-3.5">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Verified Badge and ref stamp */}
              <div className="flex items-center justify-between border-t border-border-theme pt-4 mt-6 text-[9px] text-text-muted font-mono relative z-10 select-none">
                <span>TXN REF: {currentStatement.id.toUpperCase()}-MIL-STMT</span>
                <span className="flex items-center gap-1 text-emerald-500 font-bold">
                  <Sparkles size={10} />
                  Audited & Verified Statement
                </span>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
