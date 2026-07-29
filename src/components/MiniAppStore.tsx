"use client";

import React, { useState } from "react";
import { Code2, Smartphone, Database, Server, Cpu, Heart, Sparkles, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface SkillApp {
  id: string;
  name: string;
  category: "Recharges" | "Financials" | "Travel" | "Utilities";
  desc: string;
  experienceYears: number;
  proficiency: number; // 0-100
  iconColor: string;
  iconBg: string;
  svgIcon: React.ReactNode;
}

interface MiniAppStoreProps {
  searchQuery: string;
}

export default function MiniAppStore({ searchQuery }: MiniAppStoreProps) {
  const [selectedApp, setSelectedApp] = useState<SkillApp | null>(null);

  const skillsData: SkillApp[] = [
    // Recharges (Frontend)
    {
      id: "nextjs",
      name: "Next.js",
      category: "Recharges",
      desc: "Used for high-performance server-side rendering, dynamic API routing, static site generation, and optimized Core Web Vitals.",
      experienceYears: 3,
      proficiency: 95,
      iconColor: "text-zinc-950 dark:text-white",
      iconBg: "bg-zinc-100 dark:bg-zinc-800",
      svgIcon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.6 18l-4.9-6.3V18h-1.6V8.7h1.6l4.6 6v-6h1.6V18h-1.3z M10.4 8.7v4.6l-2-2.7V8.7h2z"/>
        </svg>
      ),
    },
    {
      id: "react",
      name: "React.js",
      category: "Recharges",
      desc: "Core expertise in SPA development, custom React hooks, global state managers (Redux, Zustand), and responsive components.",
      experienceYears: 4,
      proficiency: 98,
      iconColor: "text-sky-500",
      iconBg: "bg-sky-50 dark:bg-sky-950/40",
      svgIcon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(30 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(90 12 12)" />
          <ellipse cx="12" cy="12" rx="11" ry="4.2" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(150 12 12)" />
          <circle cx="12" cy="12" r="2" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "tailwind",
      name: "Tailwind CSS",
      category: "Recharges",
      desc: "Expert in mobile-first responsive systems, theme configuration, component styling, and smooth layout grids.",
      experienceYears: 4,
      proficiency: 95,
      iconColor: "text-cyan-400",
      iconBg: "bg-cyan-50 dark:bg-cyan-950/40",
      svgIcon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 6.5c-2.4 0-4 1.2-4.8 3.6 1-1.2 2.2-1.6 3.6-1.2.8.2 1.4.8 2 1.5 1.1 1.1 2.4 2.5 5.2 2.5 2.4 0 4-1.2 4.8-3.6-1 1.2-2.2 1.6-3.6 1.2-.8-.2-1.4-.8-2-1.5-1.1-1.1-2.4-2.5-5.2-2.5z"/>
        </svg>
      ),
    },
    {
      id: "javascript",
      name: "JavaScript",
      category: "Recharges",
      desc: "Core foundation: asynchronous loop configurations, event scoping, DOM lifecycle elements, and functional paradigms.",
      experienceYears: 5,
      proficiency: 95,
      iconColor: "text-yellow-500",
      iconBg: "bg-yellow-50 dark:bg-yellow-950/40",
      svgIcon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M24 0v24H0V0h24zM19.7 13.1c-.5-.3-1-.6-1.7-.8-.7-.2-1.1-.4-1.4-.6-.2-.1-.3-.3-.3-.6 0-.3.2-.5.5-.6.3-.1.7-.2 1.2-.2.6 0 1.1.2 1.5.5.2.1.5.1.7-.1l1.2-1.2c.2-.2.2-.5 0-.7-1.1-.9-2.4-1.3-3.9-1.3-1.6 0-2.9.5-3.8 1.4-.9.9-1.3 2.1-1.3 3.5 0 1.3.4 2.4 1.3 3.1.9.8 2.1 1.3 3.6 1.7 1.2.3 2 .6 2.4.9.4.3.6.7.6 1.2 0 .6-.3 1-.8 1.3-.6.3-1.3.4-2.2.4-1.1 0-2.1-.3-2.9-.9-.2-.2-.5-.1-.7.1l-1.4 1.3c-.2.2-.2.5 0 .7 1.4 1.2 3.1 1.8 5.1 1.8 2 0 3.6-.5 4.6-1.6 1-1 1.5-2.4 1.5-4 0-1.6-.5-2.8-1.5-3.5zm-8.8-4.5c0-.4-.3-.7-.7-.7H1.7c-.4 0-.7.3-.7.7v12.7c0 .4.3.7.7.7h8.5c.4 0 .7-.3.7-.7v-5.2c0-.4-.3-.7-.7-.7H6.5v-2.3h3.7c.4 0 .7-.3.7-.7V8.6z" fill="currentColor"/>
        </svg>
      ),
    },

    // Financials (Backend/DB)
    {
      id: "nodejs",
      name: "Node.js",
      category: "Financials",
      desc: "Scalable backend frameworks, microservices routing structures, custom file streaming, REST/GraphQL endpoints, and secure API gateways.",
      experienceYears: 4,
      proficiency: 92,
      iconColor: "text-green-600",
      iconBg: "bg-green-50 dark:bg-green-950/40",
      svgIcon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm7 13.9l-7 3.9-7-3.9V8.1l7-3.9 7 3.9v7.8zM12 6.5c-1.9 0-3.5 1.6-3.5 3.5s1.6 3.5 3.5 3.5 3.5-1.6 3.5-3.5-1.6-3.5-3.5-3.5zm0 5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z"/>
        </svg>
      ),
    },
    {
      id: "mongodb",
      name: "MongoDB",
      category: "Financials",
      desc: "Document store configurations, aggregation pipelines, schema designing, database triggers, index optimization, and Atlas syncs.",
      experienceYears: 4,
      proficiency: 90,
      iconColor: "text-emerald-500",
      iconBg: "bg-emerald-50 dark:bg-emerald-950/40",
      svgIcon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <path d="M12 .5c-.5 0-8 6.5-8 12.5C4 18.5 7.5 24 12 24c4.5 0 8-5.5 8-11C20 7 12.5.5 12 .5zm0 20c-2.8 0-5.5-3.8-5.5-8 0-4 4.5-8.5 5.5-9.3V20.5z"/>
        </svg>
      ),
    },
    {
      id: "typescript",
      name: "TypeScript",
      category: "Financials",
      desc: "Strong type checking, modular architectures, interface definitions, abstract models, and compilation bug reductions.",
      experienceYears: 3,
      proficiency: 92,
      iconColor: "text-blue-500",
      iconBg: "bg-blue-50 dark:bg-blue-950/40",
      svgIcon: (
        <span className="font-extrabold text-sm text-blue-500 font-mono">TS</span>
      ),
    },
    {
      id: "nestjs",
      name: "NestJS",
      category: "Financials",
      desc: "Architecture-driven server development with controllers, modules, dependency injectors, and secure pipes.",
      experienceYears: 2,
      proficiency: 85,
      iconColor: "text-red-500",
      iconBg: "bg-red-50 dark:bg-red-950/40",
      svgIcon: (
        <span className="font-extrabold text-sm text-red-500 font-mono">NEST</span>
      ),
    },

    // Travel (Mobile & Realtime)
    {
      id: "reactnative",
      name: "React Native",
      category: "Travel",
      desc: "Cross-platform mobile app development. Deeply customized layouts, Native Bridge components, local storage, and high-performance screens.",
      experienceYears: 2.5,
      proficiency: 90,
      iconColor: "text-teal-400",
      iconBg: "bg-teal-50 dark:bg-teal-950/40",
      svgIcon: (
        <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
          <ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(60 12 12)" />
          <ellipse cx="12" cy="12" rx="10" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.2" transform="rotate(120 12 12)" />
          <circle cx="12" cy="12" r="1.5" fill="currentColor" />
        </svg>
      ),
    },
    {
      id: "socketio",
      name: "Socket.io",
      category: "Travel",
      desc: "Low-latency bidirectional communication nodes, chat logic, custom event payloads, clustering support, and socket channels.",
      experienceYears: 3,
      proficiency: 88,
      iconColor: "text-purple-500",
      iconBg: "bg-purple-50 dark:bg-purple-950/40",
      svgIcon: (
        <span className="font-black text-xs text-purple-500 font-mono">WS</span>
      ),
    },

    // Utilities (Tools & DevOps)
    {
      id: "docker",
      name: "Docker",
      category: "Utilities",
      desc: "Creating lightweight isolated application containers, multi-stage building configs, and docker-compose deployment grids.",
      experienceYears: 2.5,
      proficiency: 82,
      iconColor: "text-cyan-500",
      iconBg: "bg-cyan-50 dark:bg-cyan-950/40",
      svgIcon: (
        <span className="font-extrabold text-[10px] text-cyan-600 font-mono">🐳</span>
      ),
    },
    {
      id: "aws",
      name: "AWS EC2/S3",
      category: "Utilities",
      desc: "Deployment workflows utilizing AWS EC2 server instances, cloud security groups, secure domain mapping, and S3 file uploads.",
      experienceYears: 2,
      proficiency: 80,
      iconColor: "text-amber-500",
      iconBg: "bg-amber-50 dark:bg-amber-950/40",
      svgIcon: (
        <span className="font-black text-[9px] text-amber-500 font-mono">AWS</span>
      ),
    },
  ];

  const handleAppClick = (app: SkillApp) => {
    setSelectedApp(app);
  };

  // Filter skills based on global search query
  const filteredSkills = skillsData.filter((s) => {
    if (!searchQuery) return true;
    return (
      s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <section id="skills-store" className="w-full py-16 bg-bg-panel-darker/20 border-b border-border-theme font-sans scroll-mt-16 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12">
          <div>
            <h2 className="text-3xl font-black text-text-primary tracking-tight flex items-center gap-2">
              <span className="px-2 py-0.5 bg-paytm-blue text-[10px] rounded font-mono uppercase text-white font-bold">App Store</span>
              Paytm Mini App Index
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Amit's skills categorized like Paytm's Mini App catalog. Click any app service to read experience summaries.
            </p>
          </div>
        </div>

        {/* The Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Recharges & Utilities */}
          <div className="bg-bg-panel border border-border-theme rounded-3xl p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-xs font-black text-paytm-secondary-blue uppercase tracking-widest flex items-center gap-1.5 border-b border-border-theme pb-3">
              <Code2 size={14} />
              Recharge & Web Services
            </h3>
            <div className="grid grid-cols-3 gap-y-6 gap-x-2">
              {filteredSkills
                .filter((s) => s.category === "Recharges")
                .map((app) => (
                  <button
                    key={app.id}
                    onClick={() => handleAppClick(app)}
                    className="flex flex-col items-center gap-1.5 text-center focus:outline-none group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${app.iconBg} flex items-center justify-center ${app.iconColor} group-hover:scale-105 transition-all shadow-sm`}>
                      {app.svgIcon}
                    </div>
                    <span className="text-[10px] font-bold text-text-secondary group-hover:text-paytm-blue transition-colors max-w-full truncate px-1">
                      {app.name}
                    </span>
                  </button>
                ))}
              {filteredSkills.filter((s) => s.category === "Recharges").length === 0 && (
                <span className="col-span-3 text-[10px] text-text-muted font-mono py-4 text-center">No apps found</span>
              )}
            </div>
          </div>

          {/* Column 2: Financial Services */}
          <div className="bg-bg-panel border border-border-theme rounded-3xl p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-xs font-black text-emerald-500 uppercase tracking-widest flex items-center gap-1.5 border-b border-border-theme pb-3">
              <Database size={14} />
              Financial & Database
            </h3>
            <div className="grid grid-cols-3 gap-y-6 gap-x-2">
              {filteredSkills
                .filter((s) => s.category === "Financials")
                .map((app) => (
                  <button
                    key={app.id}
                    onClick={() => handleAppClick(app)}
                    className="flex flex-col items-center gap-1.5 text-center focus:outline-none group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${app.iconBg} flex items-center justify-center ${app.iconColor} group-hover:scale-105 transition-all shadow-sm`}>
                      {app.svgIcon}
                    </div>
                    <span className="text-[10px] font-bold text-text-secondary group-hover:text-paytm-blue transition-colors max-w-full truncate px-1">
                      {app.name}
                    </span>
                  </button>
                ))}
              {filteredSkills.filter((s) => s.category === "Financials").length === 0 && (
                <span className="col-span-3 text-[10px] text-text-muted font-mono py-4 text-center">No apps found</span>
              )}
            </div>
          </div>

          {/* Column 3: Travel Booking */}
          <div className="bg-bg-panel border border-border-theme rounded-3xl p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-xs font-black text-purple-500 uppercase tracking-widest flex items-center gap-1.5 border-b border-border-theme pb-3">
              <Smartphone size={14} />
              Mobile & Live Feeds
            </h3>
            <div className="grid grid-cols-3 gap-y-6 gap-x-2">
              {filteredSkills
                .filter((s) => s.category === "Travel")
                .map((app) => (
                  <button
                    key={app.id}
                    onClick={() => handleAppClick(app)}
                    className="flex flex-col items-center gap-1.5 text-center focus:outline-none group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${app.iconBg} flex items-center justify-center ${app.iconColor} group-hover:scale-105 transition-all shadow-sm`}>
                      {app.svgIcon}
                    </div>
                    <span className="text-[10px] font-bold text-text-secondary group-hover:text-paytm-blue transition-colors max-w-full truncate px-1">
                      {app.name}
                    </span>
                  </button>
                ))}
              {filteredSkills.filter((s) => s.category === "Travel").length === 0 && (
                <span className="col-span-3 text-[10px] text-text-muted font-mono py-4 text-center">No apps found</span>
              )}
            </div>
          </div>

          {/* Column 4: Paytm First Games / DevOps */}
          <div className="bg-bg-panel border border-border-theme rounded-3xl p-6 shadow-sm flex flex-col gap-4">
            <h3 className="text-xs font-black text-amber-500 uppercase tracking-widest flex items-center gap-1.5 border-b border-border-theme pb-3">
              <Cpu size={14} />
              DevOps & Utilities
            </h3>
            <div className="grid grid-cols-3 gap-y-6 gap-x-2">
              {filteredSkills
                .filter((s) => s.category === "Utilities")
                .map((app) => (
                  <button
                    key={app.id}
                    onClick={() => handleAppClick(app)}
                    className="flex flex-col items-center gap-1.5 text-center focus:outline-none group cursor-pointer"
                  >
                    <div className={`w-12 h-12 rounded-2xl ${app.iconBg} flex items-center justify-center ${app.iconColor} group-hover:scale-105 transition-all shadow-sm`}>
                      {app.svgIcon}
                    </div>
                    <span className="text-[10px] font-bold text-text-secondary group-hover:text-paytm-blue transition-colors max-w-full truncate px-1">
                      {app.name}
                    </span>
                  </button>
                ))}
              {filteredSkills.filter((s) => s.category === "Utilities").length === 0 && (
                <span className="col-span-3 text-[10px] text-text-muted font-mono py-4 text-center">No apps found</span>
              )}
            </div>
          </div>

        </div>

        {/* Detailed App Modal Drawer */}
        <AnimatePresence>
          {selectedApp && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 15 }}
              className="mt-8 w-full bg-bg-panel border border-border-theme rounded-3xl p-6 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
            >
              <div className="flex items-center gap-4 text-left">
                <div className={`w-16 h-16 rounded-2xl ${selectedApp.iconBg} flex items-center justify-center ${selectedApp.iconColor} shadow-inner shrink-0`}>
                  {selectedApp.svgIcon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-lg font-extrabold text-text-primary">{selectedApp.name}</h4>
                    <span className="text-[9px] text-paytm-secondary-blue bg-paytm-light-blue font-bold px-2 py-0.5 rounded border border-paytm-blue/15">
                      {selectedApp.experienceYears} Years Exp
                    </span>
                  </div>
                  <p className="text-xs text-text-secondary font-medium mt-1 leading-relaxed max-w-2xl">
                    {selectedApp.desc}
                  </p>
                </div>
              </div>

              {/* Progress Slider (Expertise level) */}
              <div className="w-full sm:w-56 flex flex-col text-left shrink-0 font-mono text-[10px]">
                <div className="flex justify-between font-bold text-text-secondary pb-1 border-b border-border-theme mb-2">
                  <span>CAPABILITY METRIC</span>
                  <span className="text-paytm-blue">{selectedApp.proficiency}%</span>
                </div>
                <div className="w-full h-2.5 bg-bg-panel-darker rounded-full overflow-hidden border border-border-theme">
                  <div
                    className="h-full bg-gradient-to-r from-paytm-blue to-paytm-secondary-blue rounded-full"
                    style={{ width: `${selectedApp.proficiency}%` }}
                  ></div>
                </div>
                <button
                  onClick={() => setSelectedApp(null)}
                  className="mt-3 text-[9px] font-bold text-text-muted hover:text-text-primary self-end"
                >
                  Close details
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
