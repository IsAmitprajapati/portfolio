"use client";

import React, { useState, useEffect } from "react";
import { Monitor, Moon, Sun, Clock, Download, RefreshCw, HelpCircle, Eye, Sliders, Menu, X } from "lucide-react";

interface AdobeMenuBarProps {
  onClearForm?: () => void;
  onThemeToggle?: (theme: "dark" | "light") => void;
  onWorkspaceChange?: (mode: string) => void;
  activeWorkspace?: string;
  zoomLevel: number;
  setZoomLevel: React.Dispatch<React.SetStateAction<number>>;
}

export default function AdobeMenuBar({
  onClearForm,
  onThemeToggle,
  onWorkspaceChange,
  activeWorkspace = "Creative Cloud",
  zoomLevel,
  setZoomLevel,
}: AdobeMenuBarProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [time, setTime] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleDropdownClick = (name: string) => {
    if (activeDropdown === name) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(name);
    }
  };

  const handleAction = (action: () => void) => {
    action();
    setActiveDropdown(null);
    setIsMobileMenuOpen(false);
  };

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    if (onThemeToggle) onThemeToggle(newTheme);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Menu Options Configuration
  const menuConfig = {
    File: [
      {
        label: "Export Resume (PDF)",
        icon: <Download size={14} />,
        action: () => {
          // Trigger resume download or open it in a new window
          window.open("/Amit_Prajapati.pdf", "_blank");
        },
      },
      {
        label: "New Project Canvas",
        icon: <RefreshCw size={14} />,
        action: () => {
          if (onClearForm) onClearForm();
        },
      },
    ],
    Edit: [
      {
        label: "Clear Enquiry Form",
        icon: <RefreshCw size={14} />,
        action: () => {
          if (onClearForm) onClearForm();
        },
      },
      {
        label: "Toggle Theme Mode",
        icon: theme === "dark" ? <Sun size={14} /> : <Moon size={14} />,
        action: toggleTheme,
      },
    ],
    Workspace: [
      {
        label: "Creative Cloud Theme",
        icon: <Sliders size={14} />,
        action: () => onWorkspaceChange?.("Creative Cloud"),
        active: activeWorkspace === "Creative Cloud",
      },
      {
        label: "Premiere Timeline Focus",
        icon: <Monitor size={14} />,
        action: () => {
          onWorkspaceChange?.("Premiere Focus");
          // scrollToSection("experience");
        },
        active: activeWorkspace === "Premiere Focus",
      },
    ],
    View: [
      {
        label: `Zoom In (${Math.round(zoomLevel * 100)}%)`,
        icon: <Eye size={14} />,
        action: () => setZoomLevel((z) => Math.min(z + 0.1, 1.3)),
      },
      {
        label: "Zoom Out",
        icon: <Eye size={14} />,
        action: () => setZoomLevel((z) => Math.max(z - 0.1, 0.8)),
      },
      {
        label: "Reset Zoom",
        icon: <Eye size={14} />,
        action: () => setZoomLevel(1.0),
      },
    ],
    Help: [
      {
        label: "About Amit",
        icon: <HelpCircle size={14} />,
        action: () => scrollToSection("about"),
      },
      {
        label: "Contact Support",
        icon: <HelpCircle size={14} />,
        action: () => scrollToSection("contact"),
      },
    ],
  };

  useEffect(() => {
    const handleOutsideClick = () => {
      setActiveDropdown(null);
    };
    window.addEventListener("click", handleOutsideClick);
    return () => window.removeEventListener("click", handleOutsideClick);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full select-none bg-bg-panel border-b border-border-theme text-text-secondary text-sm font-medium">
      <div className="flex items-center justify-between px-4 h-10">
        {/* Left Section: Adobe App Identity & Menu */}
        <div className="flex items-center space-x-4">
          {/* Logo simulating Ps/Ai/Pr box */}
          <div className="flex items-center justify-center w-6 h-6 bg-red-600 rounded text-white font-extrabold text-xs select-none shadow-md shadow-red-900/30">
            Ap
          </div>

          {/* Desktop Menu Options */}
          <nav className="hidden md:flex items-center space-x-1" onClick={(e) => e.stopPropagation()}>
            {Object.keys(menuConfig).map((menuName) => {
              const items = menuConfig[menuName as keyof typeof menuConfig];
              return (
                <div key={menuName} className="relative">
                  <button
                    onClick={() => handleDropdownClick(menuName)}
                    className={`px-3 py-1.5 rounded transition-colors hover:bg-hover-theme hover:text-text-primary cursor-pointer ${
                      activeDropdown === menuName ? "bg-hover-theme text-text-primary" : ""
                    }`}
                  >
                    {menuName}
                  </button>

                  {activeDropdown === menuName && (
                    <div className="absolute left-0 mt-1 w-56 bg-bg-dropdown border border-border-theme rounded-md shadow-2xl py-1 z-50 text-text-secondary">
                      {items.map((item, index) => (
                        <button
                          key={index}
                          onClick={() => handleAction(item.action)}
                          className={`flex items-center justify-between w-full px-4 py-2 hover:bg-red-600 hover:text-white text-left transition-colors cursor-pointer ${
                            "active" in item && item.active ? "bg-hover-theme font-bold border-l-2 border-red-500 text-text-primary" : ""
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            {item.icon}
                            {item.label}
                          </span>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </div>

        {/* Middle Section: Quick Section Navigation */}
        <div className="hidden lg:flex items-center space-x-6 text-text-muted">
          <button onClick={() => scrollToSection("about")} className="hover:text-text-primary transition-colors cursor-pointer">
            About
          </button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-text-primary transition-colors cursor-pointer">
            Skills
          </button>
          <button onClick={() => scrollToSection("services")} className="hover:text-text-primary transition-colors cursor-pointer">
            Services
          </button>
          <button onClick={() => scrollToSection("experience")} className="hover:text-text-primary transition-colors cursor-pointer">
            Experience
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-text-primary transition-colors cursor-pointer">
            Projects
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="hover:text-text-primary transition-colors cursor-pointer">
            Reviews
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-text-primary transition-colors cursor-pointer">
            Contact
          </button>
        </div>

        {/* Right Section: System stats & Theme */}
        <div className="flex items-center space-x-4">
          {/* Workspace label */}
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded bg-bg-panel-darker border border-border-theme text-xs text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Workspace: {activeWorkspace}
          </div>

          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md hover:bg-hover-theme hover:text-text-primary transition-colors text-text-secondary cursor-pointer"
            title="Toggle color theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>

          {/* Clock */}
          <div className="flex items-center gap-1.5 font-mono text-text-muted select-none text-xs">
            <Clock size={14} />
            <span>{time || "00:00:00 PM"}</span>
          </div>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-1.5 rounded hover:bg-hover-theme text-text-secondary"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border-theme bg-bg-panel/95 backdrop-blur-md px-4 py-4 space-y-3 z-50">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <button
              onClick={() => handleAction(() => scrollToSection("about"))}
              className="py-2.5 px-3 bg-bg-panel-darker hover:bg-hover-theme text-center rounded text-text-secondary"
            >
              About
            </button>
            <button
              onClick={() => handleAction(() => scrollToSection("skills"))}
              className="py-2.5 px-3 bg-bg-panel-darker hover:bg-hover-theme text-center rounded text-text-secondary"
            >
              Skills
            </button>
            <button
              onClick={() => handleAction(() => scrollToSection("experience"))}
              className="py-2.5 px-3 bg-bg-panel-darker hover:bg-hover-theme text-center rounded text-text-secondary"
            >
              Experience
            </button>
            <button
              onClick={() => handleAction(() => scrollToSection("projects"))}
              className="py-2.5 px-3 bg-bg-panel-darker hover:bg-hover-theme text-center rounded text-text-secondary"
            >
              Projects
            </button>
            <button
              onClick={() => handleAction(() => scrollToSection("contact"))}
              className="py-2.5 px-3 bg-bg-panel-darker hover:bg-hover-theme text-center rounded col-span-2 text-red-400 font-bold"
            >
              Contact
            </button>
          </div>
          <div className="border-t border-border-theme pt-3 flex flex-col gap-2">
            <button
              onClick={() => handleAction(menuConfig.File[0].action)}
              className="flex items-center gap-2 text-left py-1 text-text-secondary hover:text-text-primary"
            >
              <Download size={14} /> Export Resume (PDF)
            </button>
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 text-left py-1 text-text-secondary hover:text-text-primary"
            >
              {theme === "dark" ? <Sun size={14} /> : <Moon size={14} />} Toggle Theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
