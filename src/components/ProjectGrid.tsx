"use client";

import React, { useState } from "react";
import { ExternalLink, Star, GitFork, Image, SlidersHorizontal, Search, ZoomIn } from "lucide-react";

const Github = ({ size = 18 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);


interface Project {
  id: string;
  title: string;
  category: "E-commerce" | "Chat" | "Social" | "Invoice" | "Code Editor";
  stars: number;
  forks: number;
  description: string;
  features: string[];
  tech: string[];
  githubUrl: string;
  demoUrl?: string;
  imageUrl?: string;
  metadata: {
    iso: string;
    aperture: string;
    speed: string;
    dimensions: string;
  };
  svgThumbnail: React.ReactNode;
}

const projectsData: Project[] = [
  {
    id: "ecommerce",
    title: "Electronic E-commerce Website",
    category: "E-commerce",
    stars: 284,
    forks: 204,
    description: "A comprehensive electronic shopping portal featuring advanced search/filtering, full-featured cart management, secure checkout, and a full-scale admin portal.",
    features: [
      "Dynamic filtering & searching",
      "Stripe payment integration & order flow",
      "Robust Admin Panel with metrics"
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Express", "Stripe", "JWT"],
    githubUrl: "https://github.com/isamitprajapati",
    demoUrl: "https://amitprajapati.co.in",
    imageUrl: "/images/ecommerce.png",
    metadata: {
      iso: "ISO 100",
      aperture: "f/2.8",
      speed: "1/250 sec",
      dimensions: "3840 x 2160 (4K)",
    },
    svgThumbnail: (
      <svg viewBox="0 0 100 60" fill="none" className="w-full h-full text-zinc-700 bg-zinc-950 p-2">
        <rect width="100" height="60" rx="3" fill="#18181b" />
        <rect x="5" y="5" width="90" height="8" rx="1.5" fill="#27272a" />
        <circle cx="10" cy="9" r="2" fill="#ef4444" />
        <circle cx="15" cy="9" r="2" fill="#eab308" />
        <circle cx="20" cy="9" r="2" fill="#22c55e" />
        <rect x="5" y="18" width="42" height="18" rx="2" fill="#3f3f46" />
        <rect x="53" y="18" width="42" height="18" rx="2" fill="#3f3f46" />
        <rect x="5" y="40" width="30" height="4" rx="1" fill="#ef4444" />
        <rect x="53" y="40" width="30" height="4" rx="1" fill="#ef4444" />
        <path d="M78 28 h-6 l-1.5 -4 h-4" stroke="#ff0000" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="70" cy="30" r="1.5" fill="#ffffff" />
        <circle cx="76" cy="30" r="1.5" fill="#ffffff" />
      </svg>
    ),
  },
  {
    id: "chat",
    title: "Real-time Chat Application",
    category: "Chat",
    stars: 103,
    forks: 80,
    description: "An instant messaging platform delivering low-latency real-time communications, typing statuses, database logs, and custom chats.",
    features: [
      "Bidirectional socket triggers",
      "Typing indicators & active statuses",
      "Persistent MongoDB logs"
    ],
    tech: ["React.js", "Socket.io", "Node.js", "MongoDB", "Redux-Toolkit"],
    githubUrl: "https://github.com/isamitprajapati",
    demoUrl: "https://amitprajapati.co.in",
    imageUrl: "/images/chat app.png",
    metadata: {
      iso: "ISO 400",
      aperture: "f/1.8",
      speed: "1/125 sec",
      dimensions: "1920 x 1080 (FHD)",
    },
    svgThumbnail: (
      <svg viewBox="0 0 100 60" fill="none" className="w-full h-full text-zinc-700 bg-zinc-950 p-2">
        <rect width="100" height="60" rx="3" fill="#18181b" />
        <rect x="5" y="5" width="25" height="50" rx="2" fill="#27272a" />
        <rect x="35" y="5" width="60" height="50" rx="2" fill="#27272a" />
        <rect x="40" y="12" width="35" height="10" rx="3" fill="#ef4444" />
        <rect x="55" y="28" width="35" height="10" rx="3" fill="#3f3f46" />
        <circle cx="12" cy="12" r="3" fill="#3f3f46" />
        <circle cx="12" cy="22" r="3" fill="#ef4444" />
        <circle cx="12" cy="32" r="3" fill="#3f3f46" />
      </svg>
    ),
  },
  {
    id: "social",
    title: "Premium Social Media Dashboard",
    category: "Social",
    stars: 95,
    forks: 48,
    description: "A dynamic social hub enabling interactive uploads, feed posts, user connections, timeline comments, and live notifications.",
    features: [
      "Interactive post generation",
      "Like & Comment triggers",
      "User network connection nodes"
    ],
    tech: ["React.js", "Node.js", "MongoDB", "Tailwind CSS", "Express"],
    githubUrl: "https://github.com/isamitprajapati",
    demoUrl: "https://amitprajapati.co.in",
    imageUrl: "/images/socialmedia.png",
    metadata: {
      iso: "ISO 200",
      aperture: "f/2.0",
      speed: "1/500 sec",
      dimensions: "1080 x 1350 (Portrait)",
    },
    svgThumbnail: (
      <svg viewBox="0 0 100 60" fill="none" className="w-full h-full text-zinc-700 bg-zinc-950 p-2">
        <rect width="100" height="60" rx="3" fill="#18181b" />
        <circle cx="18" cy="20" r="10" fill="#3f3f46" />
        <circle cx="18" cy="20" r="5" fill="#ef4444" />
        <rect x="35" y="12" width="55" height="5" rx="1.5" fill="#27272a" />
        <rect x="35" y="20" width="40" height="5" rx="1.5" fill="#27272a" />
        <path d="M12 42 h20 v12 h-20 z" fill="#27272a" />
        <circle cx="18" cy="48" r="2" fill="#ef4444" />
        <rect x="23" y="46" width="6" height="3" rx="0.5" fill="#3f3f46" />
        <path d="M42 42 h20 v12 h-20 z" fill="#27272a" />
        <circle cx="48" cy="48" r="2" fill="#ef4444" />
        <rect x="53" y="46" width="6" height="3" rx="0.5" fill="#3f3f46" />
      </svg>
    ),
  },
  {
    id: "invoice",
    title: "NextJS Invoice SaaS App",
    category: "Invoice",
    stars: 120,
    forks: 60,
    description: "A billing portal built with Next.js 15, TypeScript, Magic Link authentication, automatic PDF generation, and automated cron email reminders.",
    features: [
      "Magic Link login & SSO security",
      "Dynamic HTML to PDF invoices",
      "Cron reminders for unpaid bills"
    ],
    tech: ["Next.js", "React.js", "MongoDB", "Tailwind CSS", "Resend", "Cron"],
    githubUrl: "https://github.com/isamitprajapati",
    demoUrl: "https://amitprajapati.co.in",
    imageUrl: "/images/Build-and-Deploy-Invoice-app-in-Next-js-15-with-Typescript.png",
    metadata: {
      iso: "ISO 100",
      aperture: "f/4.0",
      speed: "1/500 sec",
      dimensions: "2560 x 1440 (QHD)",
    },
    svgThumbnail: (
      <svg viewBox="0 0 100 60" fill="none" className="w-full h-full text-zinc-700 bg-zinc-950 p-2">
        <rect width="100" height="60" rx="3" fill="#18181b" />
        <rect x="10" y="10" width="80" height="40" rx="2" fill="#27272a" stroke="#ef4444" strokeWidth="1" strokeLinecap="round" />
        <rect x="20" y="20" width="30" height="4" rx="1" fill="#3f3f46" />
        <rect x="20" y="30" width="40" height="3" rx="1" fill="#3f3f46" />
        <circle cx="75" cy="25" r="5" fill="#22c55e" />
      </svg>
    ),
  },
  {
    id: "codeeditor",
    title: "Online Collaborative Code Editor",
    category: "Code Editor",
    stars: 150,
    forks: 85,
    description: "A collaborative browser-based editor workspace supporting real-time compiler code execution, file systems tree, and secure sandboxing.",
    features: [
      "Secure compilation execution terminal",
      "Custom file manager sidebar tree",
      "Monaco editor themes & shortcuts"
    ],
    tech: ["Next.js", "React.js", "Node.js", "Docker Sandbox", "Socket.io"],
    githubUrl: "https://github.com/isamitprajapati",
    demoUrl: "https://amitprajapati.co.in",
    imageUrl: "/images/Full Stack Editor.png",
    metadata: {
      iso: "ISO 320",
      aperture: "f/2.2",
      speed: "1/1000 sec",
      dimensions: "1920 x 1080 (FHD)",
    },
    svgThumbnail: (
      <svg viewBox="0 0 100 60" fill="none" className="w-full h-full text-zinc-700 bg-zinc-950 p-2">
        <rect width="100" height="60" rx="3" fill="#18181b" />
        <rect x="5" y="5" width="20" height="50" rx="1.5" fill="#27272a" />
        <rect x="30" y="5" width="65" height="50" rx="1.5" fill="#27272a" />
        <path d="M40 15 l10 5 l-10 5" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
        <rect x="55" y="16" width="30" height="3" rx="1" fill="#3f3f46" />
      </svg>
    ),
  },
];

export default function ProjectGrid() {
  const [filter, setFilter] = useState<"All" | "E-commerce" | "Chat" | "Social" | "Invoice" | "Code Editor">("All");
  const [zoomLevel, setZoomLevel] = useState<number>(3); // 1 = Detail View (1-col), 2 = Grid (2-col), 3 = Grid (3-col), 4 = Catalog (4-col)
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>("ecommerce");

  const filteredProjects = projectsData.filter((p) => filter === "All" || p.category === filter);
  const selectedProject = projectsData.find((p) => p.id === selectedProjectId) || projectsData[0];

  // Grid styling based on slider
  const getGridColsClass = () => {
    switch (zoomLevel) {
      case 1:
        return "grid-cols-1";
      case 2:
        return "grid-cols-1 md:grid-cols-2";
      case 3:
        return "grid-cols-1 md:grid-cols-2 lg:grid-cols-3";
      case 4:
        return "grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
      default:
        return "grid-cols-1 md:grid-cols-3";
    }
  };

  // Generate dynamic Lightroom histogram curve based on active selection
  const getHistogramPath = (id: string) => {
    switch (id) {
      case "ecommerce":
        return "M0 50 Q10 40 20 20 T40 5 T60 30 T80 45 T100 50 L100 50 L0 50";
      case "chat":
        return "M0 50 Q15 45 30 10 T60 25 T80 38 T100 50 L100 50 L0 50";
      case "social":
        return "M0 50 Q12 30 25 15 T50 40 T75 20 T100 50 L100 50 L0 50";
      case "invoice":
        return "M0 50 Q8 25 20 5 T45 35 T70 15 T100 50 L100 50 L0 50";
      case "codeeditor":
        return "M0 50 Q18 35 35 15 T60 10 T85 45 T100 50 L100 50 L0 50";
      default:
        return "M0 50 Q10 40 20 20 T40 5 T60 30 T80 45 T100 50 L100 50 L0 50";
    }
  };

  return (
    <section id="projects" className="w-full bg-bg-app border-b border-border-theme p-6 md:p-8 flex flex-col gap-6 select-none animate-fade-in">
      {/* Catalog Title */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-text-primary tracking-tight flex items-center gap-2">
            <span className="px-2 py-0.5 bg-red-600 text-[10px] rounded font-mono uppercase text-white font-bold">Library</span>
            Projects Catalog
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            Lightroom Vibe - Toggle filters or drag the thumbnail zoom slider to dynamically adjust the layout.
          </p>
        </div>

        {/* Lightroom Toolbar Controls */}
        <div className="flex flex-wrap items-center gap-4 bg-bg-panel border border-border-theme rounded-md p-2 text-xs text-text-secondary">
          {/* Zoom Slider */}
          <div className="flex items-center gap-2">
            <ZoomIn size={14} className="text-text-muted" />
            <span className="text-[10px] font-mono">Zoom:</span>
            <input
              type="range"
              min="1"
              max="4"
              step="1"
              value={zoomLevel}
              onChange={(e) => setZoomLevel(parseInt(e.target.value))}
              className="w-20 accent-red-600 h-1 bg-bg-panel-darker rounded-lg appearance-none cursor-pointer"
            />
            <span className="font-mono text-[10px] w-4">{zoomLevel}</span>
          </div>

          <span className="hidden sm:inline w-[1px] h-4 bg-border-theme"></span>

          {/* Filters */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <SlidersHorizontal size={12} className="text-text-muted shrink-0" />
            {(["All", "E-commerce", "Chat", "Social", "Invoice", "Code Editor"] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-2 py-1 rounded transition-colors text-[10px] font-bold cursor-pointer whitespace-nowrap ${
                  filter === cat ? "bg-red-600 text-white font-bold" : "hover:bg-hover-theme text-text-secondary hover:text-text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: PROJECTS GRID (9 Cols) */}
        <div className="xl:col-span-8 flex flex-col gap-4">
          <div className={`grid gap-4 ${getGridColsClass()}`}>
            {filteredProjects.map((project) => {
              const isSelected = selectedProjectId === project.id;
              return (
                <div
                  key={project.id}
                  onClick={() => setSelectedProjectId(project.id)}
                  className={`group rounded-lg border bg-bg-panel overflow-hidden cursor-pointer transition-all duration-300 relative flex flex-col ${
                    isSelected
                      ? "border-red-500 shadow-lg shadow-red-500/10 scale-[0.99]"
                      : "border-border-theme hover:border-zinc-500 hover:scale-[1.01]"
                  }`}
                >
                  {/* Thumbnail frame */}
                  <div className="aspect-[1.6/1] w-full border-b border-border-theme relative overflow-hidden bg-bg-panel-darker flex items-center justify-center select-none">
                    {project.imageUrl ? (
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 select-none pointer-events-none"
                      />
                    ) : (
                      project.svgThumbnail
                    )}
                    <div className="absolute inset-0 bg-red-600/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="text-[10px] bg-bg-panel border border-border-theme px-2 py-0.5 rounded text-text-primary font-mono shadow">
                        Inspect
                      </span>
                    </div>
                  </div>

                  {/* Info block */}
                  <div className="p-3.5 flex-1 flex flex-col justify-between gap-3">
                    <div>
                      <div className="flex justify-between items-start gap-2">
                        <h3 className="font-bold text-sm text-text-primary group-hover:text-red-500 transition-colors line-clamp-1">
                          {project.title}
                        </h3>
                        <span className="text-[9px] px-1.5 py-0.5 rounded bg-bg-panel-darker border border-border-theme/60 font-mono text-text-secondary capitalize shrink-0">
                          {project.category}
                        </span>
                      </div>
                      
                      {zoomLevel <= 2 && (
                        <p className="text-xs text-text-secondary mt-1.5 line-clamp-2 leading-relaxed">
                          {project.description}
                        </p>
                      )}
                    </div>

                    {/* Stats metrics line */}
                    <div className="flex items-center gap-4 text-text-muted text-xs font-mono border-t border-border-theme pt-2">
                      <span className="flex items-center gap-1">
                        <Star size={12} className="text-yellow-500/80 fill-yellow-500/10" />
                        {project.stars}
                      </span>
                      <span className="flex items-center gap-1">
                        <GitFork size={12} className="text-text-muted" />
                        {project.forks}
                      </span>
                    </div>
                  </div>

                  {/* Lightroom Selection Badge */}
                  {isSelected && (
                    <div className="absolute top-2 left-2 w-4 h-4 bg-red-600 rounded border border-white flex items-center justify-center text-[10px] text-white font-black font-mono shadow">
                      ✓
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: LIGHTROOM METADATA INSPECTOR (4 Cols) */}
        <div className="xl:col-span-4 bg-bg-panel border border-border-theme rounded-lg flex flex-col overflow-hidden">
          <div className="bg-bg-panel-darker px-3 py-2 border-b border-border-theme flex items-center justify-between text-xs text-text-primary font-semibold font-mono">
            <span className="flex items-center gap-1.5">
              <Search size={12} className="text-red-500" />
              Metadata Info
            </span>
            <span className="text-[10px] bg-bg-panel border border-border-theme px-1 py-0.5 rounded text-text-muted">EXIF</span>
          </div>

          <div className="p-4 space-y-4 text-xs">
            {/* Histogram Mock */}
            <div className="space-y-1.5">
              <div className="text-[10px] text-text-muted font-bold uppercase tracking-wider font-mono">Histogram</div>
              <div className="h-16 bg-bg-app rounded border border-border-theme flex items-end p-1 overflow-hidden relative">
                {/* SVG mock histogram representing RGB spectrum */}
                <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full opacity-60">
                  <path 
                    d={getHistogramPath(selectedProject.id)} 
                    fill="url(#histGrad)" 
                    className="transition-all duration-500 ease-in-out" 
                  />
                  <defs>
                    <linearGradient id="histGrad" x1="0" y1="0" x2="1" y2="1">
                      <stop offset="0%" stopColor="#ef4444" />
                      <stop offset="50%" stopColor="#ef4444" />
                      <stop offset="100%" stopColor="#3f3f46" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex justify-between px-2 items-center text-[8px] text-text-muted font-mono">
                  <span>Shadows</span>
                  <span>Midtones</span>
                  <span>Highlights</span>
                </div>
              </div>
              
              {/* Camera Settings Line */}
              <div className="grid grid-cols-4 text-center bg-bg-app p-2 rounded border border-border-theme font-mono text-[10px]">
                <div className="border-r border-border-theme flex flex-col justify-center">
                  <span className="text-text-muted">ISO</span>
                  <span className="text-text-primary font-bold">{selectedProject.metadata.iso}</span>
                </div>
                <div className="border-r border-border-theme flex flex-col justify-center">
                  <span className="text-text-muted">APER</span>
                  <span className="text-text-primary font-bold">{selectedProject.metadata.aperture}</span>
                </div>
                <div className="border-r border-border-theme flex flex-col justify-center">
                  <span className="text-text-muted">SPEED</span>
                  <span className="text-text-primary font-bold">{selectedProject.metadata.speed}</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="text-text-muted">LENS</span>
                  <span className="text-text-primary font-bold">50mm</span>
                </div>
              </div>
            </div>

            {/* Core Project Details */}
            <div className="space-y-3 pt-2 border-t border-border-theme">
              <div className="text-[10px] text-text-muted font-bold uppercase tracking-wider font-mono">File Details</div>
              
              <div className="space-y-2 bg-bg-app/40 p-3 rounded border border-border-theme/60 leading-relaxed text-text-secondary">
                <p className="text-text-primary font-bold text-sm">{selectedProject.title}</p>
                <p className="text-xs text-text-secondary mt-1">{selectedProject.description}</p>
              </div>

              {/* Expandable Key Features */}
              <div className="space-y-1 bg-bg-app/20 p-2.5 rounded border border-border-theme/60">
                <span className="text-[9px] font-mono text-text-muted uppercase font-bold">Features Included:</span>
                <ul className="list-disc list-inside text-text-secondary text-[11px] space-y-0.5 mt-1">
                  {selectedProject.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </div>

              {/* Tags Panel */}
              <div className="space-y-1.5">
                <span className="text-[9px] font-mono text-text-muted uppercase font-bold">Applied Tags:</span>
                <div className="flex flex-wrap gap-1">
                  {selectedProject.tech.map((tag) => (
                    <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-bg-panel-darker border border-border-theme/50 text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2 pt-2">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-bg-panel-darker hover:bg-hover-theme text-xs text-text-secondary hover:text-text-primary transition-colors border border-border-theme font-bold cursor-pointer"
                >
                  <Github size={14} />
                  <span>Repository</span>
                </a>
                {selectedProject.demoUrl && (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 rounded bg-red-600 hover:bg-red-500 text-xs text-white transition-all shadow-md shadow-red-950/20 font-bold cursor-pointer"
                  >
                    <ExternalLink size={14} />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
