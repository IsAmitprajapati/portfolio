"use client";

import React, { useState } from "react";
import PaytmHeader from "@/components/PaytmHeader";
import PaytmHero from "@/components/PaytmHero";
import PaytmSoundbox from "@/components/PaytmSoundbox";
import PaytmQRScanner from "@/components/PaytmQRScanner";
import MiniAppStore from "@/components/MiniAppStore";
import PaytmPassbook from "@/components/PaytmPassbook";
import PaytmPostpaid from "@/components/PaytmPostpaid";
import PaytmPGForm from "@/components/PaytmPGForm";
import { ShieldCheck } from "lucide-react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // SEO Google Crawl Structured Data Schema
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "name": "Amit Prajapati",
      "alternateName": "itsamitprajapati",
      "jobTitle": "Full Stack Engineer & Software Developer",
      "url": "https://amitprajapati.co.in",
      "image": "https://amitprajapati.co.in/images/amitprajapati.png",
      "sameAs": [
        "https://www.linkedin.com/in/itsamitprajapati/",
        "https://github.com/isamitprajapati"
      ],
      "knowsAbout": [
        "React.js",
        "Next.js",
        "Node.js",
        "MongoDB",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "Socket.io",
        "Docker",
        "AWS",
        "REST APIs",
        "Fintech Software Development"
      ],
      "worksFor": {
        "@type": "Organization",
        "name": "ACL Digital (Europ Assistance)"
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-bg-app text-text-primary transition-colors duration-200">
      
      {/* JSON-LD Script block */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Header Bar */}
      <PaytmHeader onSearch={setSearchQuery} searchQuery={searchQuery} />

      {/* Main Content Layout */}
      <main className="flex-1 flex flex-col">
        
        {/* 2. Hero Section */}
        <PaytmHero />

        {/* 3. Interactive Soundbox Unit */}
        <PaytmSoundbox />

        {/* 4. Skills App Store */}
        <MiniAppStore searchQuery={searchQuery} />

        {/* 5. Projects Passbook */}
        <PaytmPassbook searchQuery={searchQuery} onSearchChange={setSearchQuery} />

        {/* 6. Timeline Postpaid upgrades */}
        <PaytmPostpaid />

        {/* 7. Standee QR scanner */}
        <PaytmQRScanner />

        {/* 8. Checkout Payment Gateway Form */}
        <PaytmPGForm />

      </main>

      {/* 9. Fintech styled Footer */}
      <footer className="bg-bg-panel-darker border-t border-border-theme text-text-muted py-8 px-6 text-xs font-mono select-none">
        <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col text-left space-y-1.5">
            <span className="font-extrabold text-paytm-secondary-blue text-sm flex items-center gap-1">
              <ShieldCheck size={14} className="text-emerald-500" />
              paytm developer edition
            </span>
            <p className="text-[10px] text-text-secondary leading-relaxed">
              Designed & developed by Amit Prajapati. Paytm Recruitment Portfolio &copy; 2026. <br />
              All rights reserved. Secure SSL simulated node verified.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 text-xs font-bold text-text-secondary">
            <a
              href="https://www.linkedin.com/in/itsamitprajapati/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-paytm-blue transition-colors"
            >
              LinkedIn
            </a>
            <span>•</span>
            <a
              href="https://github.com/isamitprajapati"
              target="_blank"
              rel="noreferrer"
              className="hover:text-paytm-blue transition-colors"
            >
              GitHub
            </a>
            <span>•</span>
            <a
              href="https://amitprajapati.co.in"
              target="_blank"
              rel="noreferrer"
              className="hover:text-paytm-blue transition-colors"
            >
              amitprajapati.co.in
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
