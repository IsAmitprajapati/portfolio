"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, SkipBack, SkipForward, Info, ChevronDown, ChevronRight, Settings, Sliders, Volume2, Film } from "lucide-react";

interface TimelineJob {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  track: "V1" | "V2";
  color: string;
  effects: { name: string; value: string; progress?: number }[];
}

const jobsData: TimelineJob[] = [
  {
    id: "acl",
    company: "ACL Digital (Europ Assistance)",
    role: "Full Stack Developer",
    duration: "Oct. 2025 – Present",
    location: "Mumbai, India (Full Time)",
    track: "V1",
    color: "bg-blue-600 border-blue-500",
    effects: [
      { name: "CRM & CMS Core Development", value: "Built and maintained CRM and CMS systems for policy management and subscription-based ticket creation.", progress: 95 },
      { name: "Search API Optimization", value: "Optimized search functionality to improve performance, accuracy, and user experience.", progress: 90 },
      { name: "Billing & Subscriptions", value: "Designed and implemented a scalable service subscription model to support flexible user plans and billing.", progress: 85 },
    ],
  },
  {
    id: "freelance",
    company: "Freelance Work",
    role: "Software Engineer",
    duration: "Feb. 2024 – Oct. 2025",
    location: "Mumbai, Maharashtra (Freelancer)",
    track: "V2",
    color: "bg-amber-600 border-amber-500",
    effects: [
      { name: "Client Alignment & UI/UX", value: "Communicated with clients to solve business problems and provide tailored solutions.", progress: 95 },
      { name: "React Native Application", value: "Developing and maintaining applications from scratch, with an emphasis on UI/UX, functionality, and brand identity. Converts designs into high-quality code.", progress: 98 },
      { name: "SaaS Communication Platform", value: "Building a SaaS platform using AI for real-time communication, featuring automatic transcripts, summaries, and contextual AI chat.", progress: 92 },
      { name: "Auth & CI/CD Integrations", value: "Integration of secure authentication, subscription management, responsive interfaces, and Al-assisted code reviews.", progress: 88 },
    ],
  },
  {
    id: "exalogic",
    company: "Exalogic Consulting",
    role: "Full Stack Developer",
    duration: "Nov. 2024 – March 2025",
    location: "Bangalore, Karnataka (Contract)",
    track: "V1",
    color: "bg-violet-600 border-violet-500",
    effects: [
      { name: "Centralized Portal", value: "Built a centralized platform for attendance, leave, events, and internal posts management.", progress: 92 },
      { name: "Strapi SuccessFactors SSO", value: "Integrated SuccessFactors authentication for secure SSO and role-based access control with Strapi CMS.", progress: 95 },
      { name: "NodeJS Reports API", value: "Designed scalable backend with dynamic reports and real-time notifications with Nodejs.", progress: 85 },
    ],
  },
  {
    id: "house",
    company: "HouseSeekers",
    role: "Full Stack Developer",
    duration: "Aug. 2023 – Jan. 2024",
    location: "Thane, Maharashtra (Full Time)",
    track: "V1",
    color: "bg-emerald-600 border-emerald-500",
    effects: [
      { name: "Booking Management Stack", value: "Built a Booking Management system from scratch using ReactJS with TypeScript, Node.js, and MongoDB, including hierarchical user permissions.", progress: 90 },
      { name: "Company Site HouseSeekers.in", value: "Designing and developing the company website HouseSeekers.in from scratch, focusing on UI/UX.", progress: 95 },
    ],
  },
  {
    id: "finestar",
    company: "Finestar Jewellery Diamonds",
    role: "Web Developer",
    duration: "Apr. 2023 – Jul. 2023",
    location: "Surat, Gujarat (Full Time)",
    track: "V2",
    color: "bg-pink-600 border-pink-500",
    effects: [
      { name: "Modernize Search UI", value: "Modernized Finestar diamonds Search Page, introduced new features and improved user experience by 50%.", progress: 95 },
      { name: "InfineIT Website Build", value: "Building InfineIT’s website (infineit.in) from scratch using the latest technologies.", progress: 92 },
      { name: "Reusable component libraries", value: "Developed UIs with reusable components and integrated APIs for functionality.", progress: 88 },
    ],
  },
  {
    id: "mariapps",
    company: "MariApps Marine Solutions",
    role: "React Developer",
    duration: "Jun. 2022 – Mar. 2023",
    location: "Mumbai, Maharashtra (Full Time)",
    track: "V2",
    color: "bg-cyan-600 border-cyan-500",
    effects: [
      { name: "Data Visualization UI", value: "Developed UIs from scratch, with reusable components and real-time data visualization (ChartJS).", progress: 95 },
      { name: "Map API Leaflet Integration", value: "Integrated APIs, including map tracking functionality using Leaflet.", progress: 90 },
      { name: "CCTV AI Behavior UI", value: "Designed frontend display of real-time human/object detection and behavior analysis from CCTV footage.", progress: 92 },
    ],
  },
];

export default function TimelineExperience() {
  const [selectedJob, setSelectedJob] = useState<TimelineJob>(jobsData[0]);
  const [expandedEffect, setExpandedEffect] = useState<string | null>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playheadPosition, setPlayheadPosition] = useState<number>(85);
  const [timecode, setTimecode] = useState<string>("00:03:25:12");

  const toggleEffect = (effectName: string) => {
    setExpandedEffect((prev) => (prev === effectName ? null : effectName));
  };

  useEffect(() => {
    let animationFrame: number;
    let lastTime = Date.now();

    const updatePlayhead = () => {
      if (!isPlaying) return;

      const now = Date.now();
      const delta = now - lastTime;
      lastTime = now;

      setPlayheadPosition((prev) => {
        let next = prev + (delta * 0.015);
        if (next > 98) {
          next = 2;
        }
        return next;
      });

      animationFrame = requestAnimationFrame(updatePlayhead);
    };

    if (isPlaying) {
      lastTime = Date.now();
      animationFrame = requestAnimationFrame(updatePlayhead);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isPlaying]);

  useEffect(() => {
    const totalFrames = Math.floor(playheadPosition * 12);
    const frames = totalFrames % 30;
    const seconds = Math.floor(totalFrames / 30) % 60;
    const minutes = Math.floor(totalFrames / 1800) % 60;
    
    setTimecode(
      `00:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}:${String(frames).padStart(2, "0")}`
    );

    let activeJobId = "acl";
    if (playheadPosition < 18) activeJobId = "mariapps";
    else if (playheadPosition >= 18 && playheadPosition < 34) activeJobId = "finestar";
    else if (playheadPosition >= 34 && playheadPosition < 50) activeJobId = "house";
    else if (playheadPosition >= 50 && playheadPosition < 66) activeJobId = "exalogic";
    else if (playheadPosition >= 66 && playheadPosition < 82) activeJobId = "freelance";
    else activeJobId = "acl";

    const currentJob = jobsData.find((j) => j.id === activeJobId);
    if (currentJob && currentJob.id !== selectedJob.id) {
      setSelectedJob(currentJob);
    }
  }, [playheadPosition]);

  const handleSkipNext = () => {
    const currentIndex = jobsData.findIndex((j) => j.id === selectedJob.id);
    const nextIndex = (currentIndex + 1) % jobsData.length;
    const nextJob = jobsData[nextIndex];
    setSelectedJob(nextJob);
    const positionMap: Record<string, number> = { mariapps: 10, finestar: 25, house: 42, exalogic: 58, freelance: 74, acl: 90 };
    setPlayheadPosition(positionMap[nextJob.id]);
  };

  const handleSkipPrev = () => {
    const currentIndex = jobsData.findIndex((j) => j.id === selectedJob.id);
    const prevIndex = (currentIndex - 1 + jobsData.length) % jobsData.length;
    const prevJob = jobsData[prevIndex];
    setSelectedJob(prevJob);
    const positionMap: Record<string, number> = { mariapps: 10, finestar: 25, house: 42, exalogic: 58, freelance: 74, acl: 90 };
    setPlayheadPosition(positionMap[prevJob.id]);
  };

  return (
    <section id="experience" className="w-full bg-bg-app border-b border-border-theme p-6 md:p-8 flex flex-col gap-6 select-none">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-text-primary tracking-tight flex items-center gap-2">
            <span className="px-2 py-0.5 bg-red-600 text-[10px] rounded font-mono uppercase text-white">Timeline</span>
            Experience Tracks
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            Premiere Pro Workspace - Click clip segments to inspect or click Play to slide the playhead sequencer.
          </p>
        </div>
        
        <div className="flex items-center gap-3 bg-bg-panel border border-border-theme rounded-md px-3 py-1.5 self-start text-text-secondary text-xs select-none">
          <button onClick={handleSkipPrev} className="hover:text-text-primary cursor-pointer transition-colors" title="Previous Track">
            <SkipBack size={14} />
          </button>
          <button 
            onClick={() => setIsPlaying(!isPlaying)} 
            className="text-red-500 hover:scale-110 cursor-pointer transition-transform flex items-center justify-center w-4 h-4" 
            title={isPlaying ? "Pause Playback" : "Start Playback"}
          >
            {isPlaying ? <Pause size={14} /> : <Play size={14} />}
          </button>
          <button onClick={handleSkipNext} className="hover:text-text-primary cursor-pointer transition-colors" title="Next Track">
            <SkipForward size={14} />
          </button>
          <span className="w-[1px] h-4 bg-border-theme"></span>
          <span className="font-mono text-text-muted select-all">{timecode}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <div className="lg:col-span-5 bg-bg-panel border border-border-theme rounded-lg flex flex-col overflow-hidden h-[450px]">
          <div className="bg-bg-panel-darker px-3 py-2 border-b border-border-theme flex items-center justify-between text-xs text-text-primary font-semibold font-mono">
            <span className="flex items-center gap-1.5 font-bold">
              <Sliders size={12} className="text-red-500" />
              Effect Controls: {selectedJob.company}
            </span>
            <span className="text-[10px] text-text-muted font-normal">Source: Portfolio.prproj</span>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs">
            <div className="bg-bg-app p-3 rounded border border-border-theme space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-text-muted font-mono uppercase">Company:</span>
                <span className="text-text-primary font-bold text-right">{selectedJob.company}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted font-mono uppercase">Role Title:</span>
                <span className="text-red-500 dark:text-red-400 font-bold font-mono text-right">{selectedJob.role}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted font-mono uppercase">Duration:</span>
                <span className="text-text-secondary font-mono text-right">{selectedJob.duration}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-text-muted font-mono uppercase">Location:</span>
                <span className="text-text-secondary text-right">{selectedJob.location}</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="text-[10px] text-text-muted font-bold uppercase tracking-wider font-mono">Key Responsibilities (Video Effects)</div>
              
              {selectedJob.effects.map((fx, idx) => (
                <div key={idx} className="border border-border-theme/80 rounded bg-bg-app/40 overflow-hidden">
                  <button
                    onClick={() => toggleEffect(fx.name)}
                    className="w-full flex items-center justify-between p-2.5 hover:bg-hover-theme/50 text-left transition-colors font-medium text-text-primary cursor-pointer"
                  >
                    <span className="flex items-center gap-1.5">
                      {expandedEffect === fx.name ? <ChevronDown size={14} className="text-red-500" /> : <ChevronRight size={14} />}
                      <span className="truncate max-w-[200px] sm:max-w-none">{fx.name}</span>
                    </span>
                    {fx.progress !== undefined && (
                      <span className="font-mono text-[10px] px-1.5 py-0.5 bg-bg-panel-darker rounded text-text-secondary">
                        val: {fx.progress}%
                      </span>
                    )}
                  </button>

                  <AnimatePresence>
                    {expandedEffect === fx.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="px-3.5 pb-3 text-text-secondary text-[11px] leading-relaxed border-t border-border-theme pt-2 bg-bg-app/60"
                      >
                        <p>{fx.value}</p>
                        {fx.progress !== undefined && (
                          <div className="mt-3 flex items-center gap-3">
                            <span className="text-[9px] font-mono text-text-muted uppercase">Intensity:</span>
                            <div className="flex-1 h-1.5 bg-bg-panel-darker rounded-full overflow-hidden">
                              <div
                                style={{ width: `${fx.progress}%` }}
                                className="h-full bg-gradient-to-r from-red-600 to-red-400"
                              />
                            </div>
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 bg-bg-panel border border-border-theme rounded-lg flex flex-col overflow-hidden h-[450px] relative">
          <div className="bg-bg-panel-darker px-3 py-2 border-b border-border-theme flex items-center justify-between text-xs text-text-primary font-semibold font-mono z-20">
            <span className="flex items-center gap-1.5">
              <Film size={12} className="text-red-500" />
              Sequence: Experience Timeline
            </span>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-zinc-400 dark:bg-zinc-700"></span>
              <span className="text-[10px] text-text-muted">Scale: 1 Frame/Sec</span>
            </div>
          </div>

          <div className="bg-bg-app h-7 border-b border-border-theme flex items-end pl-14 font-mono text-[9px] text-text-muted relative overflow-hidden select-none z-10">
            <div 
              style={{ left: `calc(56px + ${playheadPosition * 0.88}%)` }} 
              className="absolute top-0 bottom-0 w-[1px] bg-red-500 z-30 pointer-events-none"
            >
              <div className="absolute -top-0.5 -left-1.5 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-red-500" />
            </div>
            {Array.from({ length: 10 }).map((_, idx) => (
              <div key={idx} className="w-[10%] border-l border-border-theme/60 h-2 pl-1 whitespace-nowrap shrink-0">
                00:0{idx}:00
              </div>
            ))}
          </div>

          <div className="flex-1 overflow-y-auto flex flex-col relative select-none scrollbar-thin">
            <div 
              style={{ left: `calc(56px + ${playheadPosition * 0.88}%)` }} 
              className="absolute top-0 bottom-0 w-[1px] bg-red-500/30 z-30 pointer-events-none" 
            />

            <div className="flex items-center border-b border-border-theme/80 bg-bg-panel-darker/20 min-h-[90px] relative">
              <div className="w-14 min-w-[56px] h-full border-r border-border-theme bg-bg-panel flex flex-col justify-center items-center gap-1 text-[10px] text-text-secondary font-mono font-bold z-10">
                <Film size={12} className="text-text-muted" />
                <span>V1</span>
              </div>
              
              <div className="flex-1 flex gap-2 p-2 relative h-full items-center overflow-x-auto whitespace-nowrap scrollbar-thin">
                {jobsData.filter((j) => j.track === "V1").map((job) => {
                  const isSelected = selectedJob.id === job.id;
                  return (
                    <button
                      key={job.id}
                      onClick={() => { setSelectedJob(job); setIsPlaying(false); }}
                      className={`h-12 px-3 flex flex-col justify-center rounded border transition-all select-none text-left relative overflow-hidden group cursor-pointer shrink-0 ${
                        isSelected ? "bg-red-600/20 border-red-500 text-text-primary shadow-[inset_0_0_10px_rgba(239,68,68,0.2)]" : "bg-bg-panel-darker border-border-theme text-text-secondary hover:bg-hover-theme"
                      }`}
                    >
                      <span className="text-xs font-bold font-sans">{job.company.split(" ")[0]}</span>
                      <span className="text-[9px] font-mono opacity-80">{job.duration.split("–")[0]}</span>
                      {isSelected && (
                        <>
                          <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500" />
                          <div className="absolute top-0 bottom-0 right-0 w-1 bg-red-500" />
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center border-b border-border-theme/80 bg-bg-panel-darker/20 min-h-[90px] relative">
              <div className="w-14 min-w-[56px] h-full border-r border-border-theme bg-bg-panel flex flex-col justify-center items-center gap-1 text-[10px] text-text-secondary font-mono font-bold z-10">
                <Film size={12} className="text-text-muted" />
                <span>V2</span>
              </div>
              
              <div className="flex-1 flex gap-2 p-2 relative h-full items-center overflow-x-auto whitespace-nowrap scrollbar-thin">
                {jobsData.filter((j) => j.track === "V2").map((job) => {
                  const isSelected = selectedJob.id === job.id;
                  return (
                    <button
                      key={job.id}
                      onClick={() => { setSelectedJob(job); setIsPlaying(false); }}
                      className={`h-12 px-3 flex flex-col justify-center rounded border transition-all select-none text-left relative overflow-hidden group cursor-pointer shrink-0 ${
                        isSelected ? "bg-red-600/20 border-red-500 text-text-primary shadow-[inset_0_0_10px_rgba(239,68,68,0.2)]" : "bg-bg-panel-darker border-border-theme text-text-secondary hover:bg-hover-theme"
                      }`}
                    >
                      <span className="text-xs font-bold font-sans">{job.company.split(" ")[0]}</span>
                      <span className="text-[9px] font-mono opacity-80">{job.duration.split("–")[0]}</span>
                      {isSelected && (
                        <>
                          <div className="absolute top-0 bottom-0 left-0 w-1 bg-red-500" />
                          <div className="absolute top-0 bottom-0 right-0 w-1 bg-red-500" />
                        </>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="flex items-center border-b border-border-theme bg-bg-panel-darker/10 min-h-[60px] opacity-60">
              <div className="w-14 min-w-[56px] h-full border-r border-border-theme bg-bg-panel flex flex-col justify-center items-center gap-1 text-[10px] text-text-muted font-mono font-bold">
                <Volume2 size={12} />
                <span>A1</span>
              </div>
              <div className="flex-1 p-2 flex items-center gap-2">
                <div className="h-6 w-48 rounded bg-bg-panel-darker border border-border-theme text-[10px] text-text-muted flex items-center px-2 font-mono">ambient_coding_sound.wav</div>
              </div>
            </div>

            <div className="flex items-center bg-bg-panel-darker/10 min-h-[60px] opacity-60">
              <div className="w-14 min-w-[56px] h-full border-r border-border-theme bg-bg-panel flex flex-col justify-center items-center gap-1 text-[10px] text-text-muted font-mono font-bold">
                <Volume2 size={12} />
                <span>A2</span>
              </div>
              <div className="flex-1 p-2 flex items-center gap-2">
                <div className="h-6 w-32 rounded bg-bg-panel-darker border border-border-theme text-[10px] text-text-muted flex items-center px-2 font-mono">click_feedback.wav</div>
              </div>
            </div>
          </div>

          <div className="bg-bg-panel-darker px-3 py-2 border-t border-border-theme flex items-center justify-between text-[10px] text-text-muted">
            <span className="flex items-center gap-1.5">
              <Info size={10} />
              Hover or click on clips to view core responsibilities in detail.
            </span>
            <span className="font-mono uppercase text-text-secondary font-semibold flex items-center gap-1">
              <Settings size={10} className="animate-spin" style={{ animationDuration: "6s" }} /> Sequences synced to timeline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
