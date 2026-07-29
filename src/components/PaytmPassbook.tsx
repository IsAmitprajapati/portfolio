"use client";

import React, { useState } from "react";
import { Star, GitFork, ArrowUpRight, ArrowDownLeft, ChevronDown, ChevronUp, Layers, ExternalLink, Calendar, Search } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectTransaction {
  id: string;
  title: string;
  category: "E-commerce" | "Chat" | "Social" | "Invoice" | "Editor";
  date: string;
  stars: number;
  forks: number;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl: string;
  refNo: string;
}

interface PaytmPassbookProps {
  searchQuery: string;
  onSearchChange: (q: string) => void;
}

export default function PaytmPassbook({ searchQuery, onSearchChange }: PaytmPassbookProps) {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("ALL");

  const projectsData: ProjectTransaction[] = [
    {
      id: "invoice",
      title: "NextJS Invoice SaaS App",
      category: "Invoice",
      date: "Nov 2025",
      stars: 120,
      forks: 60,
      description: "A billing portal built with Next.js 15, TypeScript, Magic Link authentication, automatic PDF generation, and automated cron email reminders.",
      features: [
        "Magic Link login & SSO security configuration",
        "Dynamic HTML to PDF invoice compilers",
        "Cron reminders for unpaid client bills via Resend",
      ],
      tech: ["Next.js", "React.js", "MongoDB", "Tailwind CSS", "Resend", "Node Cron"],
      githubUrl: "https://github.com/isamitprajapati",
      demoUrl: "https://amitprajapati.co.in",
      imageUrl: "/images/Build-and-Deploy-Invoice-app-in-Next-js-15-with-Typescript.png",
      refNo: "TXN98716254",
    },
    {
      id: "codeeditor",
      title: "Collaborative Code Editor Sandbox",
      category: "Editor",
      date: "Aug 2025",
      stars: 150,
      forks: 85,
      description: "A collaborative browser-based editor workspace supporting real-time compiler code execution, file systems tree, and secure sandboxing.",
      features: [
        "Secure remote container execution compiler terminals",
        "Custom workspace tree directory controls",
        "Real-time code editing collaboration via Socket.io",
      ],
      tech: ["Next.js", "React.js", "Node.js", "Docker Sandbox", "Socket.io"],
      githubUrl: "https://github.com/isamitprajapati",
      demoUrl: "https://amitprajapati.co.in",
      imageUrl: "/images/Full Stack Editor.png",
      refNo: "TXN82615243",
    },
    {
      id: "ecommerce",
      title: "Electronic E-commerce Portal",
      category: "E-commerce",
      date: "May 2025",
      stars: 284,
      forks: 204,
      description: "A comprehensive electronic shopping portal featuring advanced search/filtering, full-featured cart management, secure checkout, and a full-scale admin portal.",
      features: [
        "Dynamic product filtering & searching",
        "Stripe payment gateway integration & invoice flows",
        "Comprehensive Admin dashboard with analytics",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
      githubUrl: "https://github.com/isamitprajapati",
      demoUrl: "https://amitprajapati.co.in",
      imageUrl: "/images/ecommerce.png",
      refNo: "TXN73625142",
    },
    {
      id: "chat",
      title: "Real-time Chat Messenger",
      category: "Chat",
      date: "Feb 2025",
      stars: 103,
      forks: 80,
      description: "An instant messaging platform delivering low-latency real-time communications, typing statuses, database logs, and custom chats.",
      features: [
        "Bidirectional socket triggers for low latency",
        "Typing indicators & user active signals",
        "Persistent MongoDB conversations caching",
      ],
      tech: ["React.js", "Socket.io", "Node.js", "MongoDB", "Redux-Toolkit"],
      githubUrl: "https://github.com/isamitprajapati",
      demoUrl: "https://amitprajapati.co.in",
      imageUrl: "/images/chat app.png",
      refNo: "TXN53421678",
    },
    {
      id: "social",
      title: "Premium Social Media Hub",
      category: "Social",
      date: "Nov 2024",
      stars: 95,
      forks: 48,
      description: "A dynamic social hub enabling interactive uploads, feed posts, user connections, timeline comments, and live notifications.",
      features: [
        "Interactive post upload fields & feeds",
        "Like triggers and comment threads",
        "User network connections database schemas",
      ],
      tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
      githubUrl: "https://github.com/isamitprajapati",
      demoUrl: "https://amitprajapati.co.in",
      imageUrl: "/images/socialmedia.png",
      refNo: "TXN34125786",
    },
  ];

  const handleToggle = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory = filterCategory === "ALL" || project.category.toUpperCase() === filterCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tech.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects-passbook" className="w-full py-16 bg-bg-panel border-b border-border-theme font-sans scroll-mt-16 select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="text-left">
            <h2 className="text-3xl font-black text-text-primary tracking-tight flex items-center gap-2">
              <span className="px-2 py-0.5 bg-paytm-blue text-[10px] rounded font-mono uppercase text-white font-bold">Passbook</span>
              Project Transactions
            </h2>
            <p className="text-sm text-text-secondary mt-1">
              Review Amit's project builds structured like a Paytm Passbook account ledger. Expand transactions to view receipts.
            </p>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2">
            {["ALL", "INVOICE", "EDITOR", "E-COMMERCE", "CHAT", "SOCIAL"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  filterCategory === cat
                    ? "bg-paytm-blue text-white shadow-sm"
                    : "bg-bg-panel-darker text-text-secondary border border-border-theme hover:bg-hover-theme"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Passbook Frame */}
        <div className="w-full rounded-3xl border border-border-theme bg-bg-panel overflow-hidden shadow-lg">
          
          {/* Passbook Title Bar */}
          <div className="bg-gradient-to-r from-paytm-blue to-paytm-secondary-blue text-white px-6 py-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-paytm-dark-blue/20">
            <div className="text-left font-mono text-xs">
              <span className="font-bold block uppercase tracking-wider text-[10px] opacity-80">Account Statement</span>
              <span className="font-black text-sm block mt-0.5">Amit Prajapati Development Portfolio</span>
            </div>
            
            {/* Search Input inside Passbook */}
            <div className="relative w-full sm:w-64">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-white/60">
                <Search size={12} />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Filter by tech..."
                className="w-full bg-white/10 hover:bg-white/15 focus:bg-white/20 border border-white/20 rounded-full pl-8 pr-4 py-1 text-xs text-white placeholder:text-white/60 focus:outline-none focus:ring-1 focus:ring-white focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Transaction Ledger List */}
          <div className="divide-y divide-border-theme">
            {filteredProjects.length === 0 ? (
              <div className="p-12 text-center text-xs text-text-muted font-mono">
                No matching transactions recorded in local ledger.
              </div>
            ) : (
              filteredProjects.map((project) => {
                const isExpanded = expandedId === project.id;
                return (
                  <div key={project.id} className="transition-all hover:bg-hover-theme/40">
                    
                    {/* Row Header Trigger */}
                    <button
                      onClick={() => handleToggle(project.id)}
                      className="w-full flex items-center justify-between p-5 text-left focus:outline-none cursor-pointer"
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        {/* Transaction Icon */}
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                          project.stars >= 150 ? "bg-emerald-500/10 text-emerald-500" : "bg-paytm-blue/10 text-paytm-blue"
                        }`}>
                          {project.stars >= 150 ? <ArrowDownLeft size={18} /> : <ArrowUpRight size={18} />}
                        </div>

                        {/* Title & Ref */}
                        <div className="min-w-0">
                          <h4 className="text-sm font-extrabold text-text-primary truncate pr-2">
                            {project.title}
                          </h4>
                          <span className="text-[9px] text-text-muted font-mono block mt-0.5">
                            REF: {project.refNo} • {project.date}
                          </span>
                        </div>
                      </div>

                      {/* Transaction Status & Balance */}
                      <div className="flex items-center gap-4 shrink-0 text-right">
                        <div>
                          <span className="text-sm font-black text-emerald-500 font-mono block">
                            +{project.stars} Stars
                          </span>
                          <span className="text-[8px] bg-emerald-500/10 text-emerald-500 font-bold uppercase tracking-wider px-1.5 py-0.5 rounded border border-emerald-500/20 block mt-0.5 max-w-max ml-auto">
                            SUCCESS
                          </span>
                        </div>
                        <div className="text-text-muted">
                          {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                        </div>
                      </div>
                    </button>

                    {/* Expandable Transaction Receipt Drawer */}
                    <AnimatePresence initial={false}>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          className="overflow-hidden bg-bg-panel-darker/30 border-t border-border-theme"
                        >
                          <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            
                            {/* Receipt Image Screenshot (4 cols) */}
                            <div className="lg:col-span-4 space-y-4">
                              <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-border-theme shadow-md">
                                <Image
                                  src={project.imageUrl}
                                  alt={project.title}
                                  fill
                                  className="object-cover"
                                  sizes="(max-width: 1024px) 100vw, 30vw"
                                />
                              </div>
                              
                              <div className="flex gap-2">
                                <a
                                  href={project.githubUrl}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl bg-bg-panel hover:bg-hover-theme border border-border-theme text-text-primary text-[10px] font-bold transition-all"
                                >
                                  Source Code
                                  <ExternalLink size={10} />
                                </a>
                                {project.demoUrl && (
                                  <a
                                    href={project.demoUrl}
                                    className="flex-1 flex items-center justify-center gap-1 py-2 rounded-xl bg-paytm-blue hover:bg-paytm-secondary-blue text-white text-[10px] font-bold transition-all shadow-sm"
                                  >
                                    Live Demo
                                    <ExternalLink size={10} />
                                  </a>
                                )}
                              </div>
                            </div>

                            {/* Receipt Description & details (8 cols) */}
                            <div className="lg:col-span-8 space-y-4 text-left font-sans">
                              <div className="space-y-1">
                                <span className="text-[9px] text-paytm-secondary-blue font-bold uppercase tracking-wider">Project Specification</span>
                                <p className="text-xs text-text-secondary leading-relaxed font-medium">
                                  {project.description}
                                </p>
                              </div>

                              {/* Features Checklist */}
                              <div className="space-y-2">
                                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider block">Key Ledger Entries</span>
                                <ul className="space-y-1.5">
                                  {project.features.map((feat, idx) => (
                                    <li key={idx} className="text-xs text-text-primary flex items-start gap-1.5 font-medium">
                                      <span className="w-1.5 h-1.5 rounded-full bg-paytm-blue mt-1.5 shrink-0"></span>
                                      {feat}
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              {/* Technology Tags */}
                              <div className="space-y-2">
                                <span className="text-[9px] text-text-muted font-bold uppercase tracking-wider block">Security & Compiler Stack</span>
                                <div className="flex flex-wrap gap-1.5">
                                  {project.tech.map((tag) => (
                                    <span
                                      key={tag}
                                      className="px-2 py-0.5 bg-bg-panel border border-border-theme rounded text-[10px] font-bold text-text-secondary font-mono"
                                    >
                                      {tag}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Footer details receipt metadata */}
                              <div className="flex justify-between border-t border-border-theme pt-3 text-[9px] text-text-muted font-mono select-none">
                                <span className="flex items-center gap-1">
                                  <GitFork size={10} />
                                  Forks: {project.forks}
                                </span>
                                <span>Ref: TRANSACTION-{project.id.toUpperCase()}-VERIFIED</span>
                              </div>

                            </div>

                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
