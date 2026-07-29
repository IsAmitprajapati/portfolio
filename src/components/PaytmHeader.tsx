"use client";

import React, { useEffect, useState } from "react";
import { Sun, Moon, Bell, Search, AlertCircle, Sparkles } from "lucide-react";
import Image from "next/image";

interface PaytmHeaderProps {
  onSearch: (query: string) => void;
  searchQuery: string;
}

export default function PaytmHeader({ onSearch, searchQuery }: PaytmHeaderProps) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    const html = document.documentElement;
    if (newTheme === "light") {
      html.classList.remove("dark");
    } else {
      html.classList.add("dark");
    }
  };

  const notifications = [
    {
      id: 1,
      title: "Hiring Opportunity",
      desc: "Amit Prajapati is actively interviewing for Full Stack Developer roles at Paytm.",
      time: "Just Now",
      unread: true,
    },
    {
      id: 2,
      title: "Skills Update",
      desc: "Added React Native mobile app development and Next.js 15 optimization to core stack.",
      time: "2 hrs ago",
      unread: false,
    },
    {
      id: 3,
      title: "Code Quality Check",
      desc: "Lighthouse audit score: 98% Performance, 100% Best Practices.",
      time: "1 day ago",
      unread: false,
    },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border-theme bg-bg-panel/95 backdrop-blur-md transition-colors duration-200">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">


         {/* Profile Card Trigger */}
          <div className="flex items-center gap-2 pl-2 border-border-theme">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-paytm-blue/40">
              <Image
                src="/images/amitprajapati.png"
                alt="Amit Prajapati"
                fill
                className="object-cover"
                sizes="32px"
              />
              <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full border-2 border-bg-panel"></span>
            </div>
            <div className="hidden lg:flex flex-col text-left">
              <span className="text-xs font-bold text-text-primary">Amit Prajapati</span>
              <span className="text-[9px] text-emerald-500 font-bold uppercase tracking-wider">Ready to Hire</span>
            </div>
          </div>

        {/* Global Search Bar */}
        <div className="hidden md:flex flex-1 max-w-md mx-8 relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-text-muted">
            <Search size={16} />
          </div>
          <input
            type="search"
            value={searchQuery}
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search projects, skills, or experience..."
            className="w-full pl-10 pr-4 py-1.5 bg-bg-panel-darker border border-border-theme rounded-full text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:ring-2 focus:ring-paytm-blue focus:border-transparent transition-all"
          />
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-3">

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-hover-theme text-text-secondary transition-colors"
            title="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={20} className="text-amber-500" /> : <Moon size={20} className="text-paytm-dark-blue" />}
          </button>

          {/* Notifications Panel */}
          <div className="relative">
            <button
              onClick={() => setShowNotifications(!showNotifications)}
              className="p-2 rounded-full hover:bg-hover-theme text-text-secondary transition-colors relative"
            >
              <Bell size={20} />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>

            {showNotifications && (
              <div className="absolute right-0 mt-3 w-80 sm:w-96 rounded-xl border border-border-theme bg-bg-panel shadow-2xl overflow-hidden animate-fade-in font-sans">
                <div className="bg-bg-panel-darker px-4 py-3 border-b border-border-theme flex items-center justify-between">
                  <span className="font-bold text-xs text-text-primary flex items-center gap-1.5">
                    <Sparkles size={14} className="text-paytm-blue" />
                    Live Activity Ledger
                  </span>
                  <span className="text-[10px] text-paytm-secondary-blue font-bold uppercase tracking-wider">Paytm updates</span>
                </div>
                <div className="max-h-72 overflow-y-auto divide-y divide-border-theme">
                  {notifications.map((notif) => (
                    <div key={notif.id} className={`p-4 text-xs transition-colors hover:bg-hover-theme ${notif.unread ? "bg-paytm-light-blue/20" : ""}`}>
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <span className="font-bold text-text-primary flex items-center gap-1">
                          {notif.unread && <span className="w-1.5 h-1.5 rounded-full bg-paytm-blue"></span>}
                          {notif.title}
                        </span>
                        <span className="text-[10px] text-text-muted">{notif.time}</span>
                      </div>
                      <p className="text-text-secondary font-medium leading-relaxed">{notif.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

         

        </div>
      </div>
    </header>
  );
}
