"use client";

import React, { useState } from "react";
import AdobeMenuBar from "@/components/AdobeMenuBar";
import WorkspaceCanvas from "@/components/WorkspaceCanvas";
import SkillsPanel from "@/components/SkillsPanel";
import ServicesSection from "@/components/ServicesSection";
import TimelineExperience from "@/components/TimelineExperience";
import ProjectGrid from "@/components/ProjectGrid";
import TestimonialsPanel from "@/components/TestimonialsPanel";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  const [zoomLevel, setZoomLevel] = useState<number>(1.0);
  const [activeWorkspace, setActiveWorkspace] = useState<string>("Creative Cloud");
  const [clearTrigger, setClearTrigger] = useState<number>(0);
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  const handleClearForm = () => {
    setClearTrigger((prev) => prev + 1);
  };

  const handleThemeToggle = (newTheme: "dark" | "light") => {
    setTheme(newTheme);
    const htmlElement = document.documentElement;
    if (newTheme === "light") {
      htmlElement.classList.remove("dark");
      htmlElement.classList.add("light");
      htmlElement.classList.remove("adobe-theme");
    } else {
      htmlElement.classList.remove("light");
      htmlElement.classList.add("dark");
      if (activeWorkspace === "Creative Cloud") {
        htmlElement.classList.add("adobe-theme");
      }
    }
  };

  const handleWorkspaceChange = (mode: string) => {
    setActiveWorkspace(mode);
  };

  // Sync activeWorkspace class trigger on HTML element
  React.useEffect(() => {
    const htmlElement = document.documentElement;
    if (activeWorkspace === "Creative Cloud") {
      htmlElement.classList.add("adobe-theme");
    } else {
      htmlElement.classList.remove("adobe-theme");
    }
  }, [activeWorkspace]);

  // Structured Schema markup for SEO Google Indexing
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Amit Prajapati",
    "jobTitle": "Full Stack Developer",
    "url": "https://amitprajapati.co.in",
    "sameAs": [
      "https://www.linkedin.com/in/itsamitprajapati/",
      "https://github.com/isamitprajapati"
    ],
    "knowsAbout": [
      "Web Development",
      "Mobile Application Development",
      "ReactJS",
      "Next.js",
      "Node.js",
      "MongoDB",
      "Express",
      "TypeScript",
      "Tailwind CSS",
      "Socket.io",
      "Docker",
      "AWS"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Software Development Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Web Development",
            "description": "Full-stack web development specializing in high-performance React, Next.js, MERN stack, database integration, and search-optimized applications."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Mobile Application Development",
            "description": "Cross-platform mobile application development targeting high-performance user interfaces and responsive configurations."
          }
        }
      ]
    },
    "worksFor": {
      "@type": "Organization",
      "name": "ACL Digital (Europ Assistance)"
    }
  };

  return (
    <div className="min-h-screen flex flex-col transition-colors duration-250 bg-bg-app text-text-primary">
      {/* JSON-LD for Google crawling */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Adobe Style Header Menu */}
      <AdobeMenuBar
        onClearForm={handleClearForm}
        onThemeToggle={handleThemeToggle}
        onWorkspaceChange={handleWorkspaceChange}
        activeWorkspace={activeWorkspace}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
      />

      {/* Main Creative Dashboard Layout */}
      <main className="flex-1 flex flex-col">
        {/* Section 1: Photoshop Workspace Canvas (About & Details) */}
        <WorkspaceCanvas zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />

        {/* Section 1.5: Creative Cloud Swatches & Presets (Skills & Tech Stack) */}
        <SkillsPanel />

        {/* Section 1.6: After Effects Composition (Services Offered) */}
        <ServicesSection />

        {/* Section 2: Premiere Pro Timeline Track (Job Experience Details) */}
        <TimelineExperience />

        {/* Section 3: Lightroom Library Catalog (Projects Grid) */}
        <ProjectGrid />

        {/* Section 3.5: Creative Cloud Review (Testimonials Panel) */}
        <TestimonialsPanel />

        {/* Section 4: Application Preferences panel (MongoDB Resend Contact Form) */}
        <ContactForm clearTrigger={clearTrigger} />
      </main>

      {/* Custom Application Status Bar / Footer */}
      <footer className="bg-bg-panel border-t border-border-theme text-text-muted py-4 px-6 text-xs flex flex-col md:flex-row items-center justify-between gap-4 font-mono select-none">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-red-600"></span>
          <span>Application Version 1 (Amit Prajapati)</span>
        </div>
        <div className="flex gap-4">
          <a href="https://www.linkedin.com/in/itsamitprajapati/" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">LinkedIn</a>
          <span>•</span>
          <a href="https://github.com/isamitprajapati" target="_blank" rel="noreferrer" className="hover:text-text-primary transition-colors">GitHub</a>
          <span>•</span>
          <a href="https://amitprajapati.co.in" className="hover:text-text-primary transition-colors">amitprajapati.co.in</a>
        </div>
      </footer>
    </div>
  );
}
