"use client";

import React, { useState } from "react";
import { MessageSquare, Star, CheckCircle2, Clock } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  relationship: string;
  rating: number;
  date: string;
  comment: string;
  project: string;
  avatarInitials: string;
}

const testimonialsData: Testimonial[] = [
  {
    id: "review-1",
    name: "CS Ankit Rathi",
    role: "Senior Consultant",
    company: "Jaishree Associates",
    relationship: "Client",
    rating: 4.8,
    date: "Aug 2025",
    comment: "Amit is one of the guys who will listen to you and deliver as per your wish with enhancements using his knowledge, making the final results much better than what was in the original thoughts. A true creative mind with more practical exposure",
    project: "Web Development",
    avatarInitials: "AR"
  },
  {
    id: "review-2",
    name: "CA Raghav Mittal",
    role: "Chartered Accountant",
    company: "Ktagro",
    relationship: "Client",
    rating: 5.0,
    date: "Aug 2025",
    comment: "I had a great experience working with Amit. They built a user-friendly and reliable app for my business, delivered on time, and ensured smooth communication throughout. Their professionalism, technical expertise, and commitment to quality make them highly recommended for anyone seeking effective software solutions.",
    project: "Mobile Application Development",
    avatarInitials: "RM"
  },
  {
    id: "review-3",
    name: "Pankaj Bansal",
    role: "Founder",
    company: "Solving Roots",
    relationship: "Client",
    rating: 5.0,
    date: "Nov 2024",
    comment: "Amit is a reliable developer and worked really well for our Mobile app. He was responsive and listened well to our demands. Recommended.",
    project: "Mobile Application Development",
    avatarInitials: "PB"
  }
];

export default function TestimonialsPanel() {
  const [selectedReview, setSelectedReview] = useState<Testimonial>(testimonialsData[0]);

  return (
    <section id="testimonials" className="w-full bg-bg-app border-b border-border-theme p-6 md:p-8 flex flex-col gap-6 select-none animate-fade-in">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black text-text-primary tracking-tight flex items-center gap-2">
            <span className="px-2 py-0.5 bg-red-600 text-[10px] rounded font-mono uppercase text-white font-bold">Review</span>
            Share Comments & Feedback
          </h2>
          <p className="text-xs text-text-secondary mt-1">
            Photoshop Style Review Panel - Read endorsements from team leads, clients, and senior architects.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* LEFT COLUMN: Comment Threads list (5 Cols) */}
        <div className="lg:col-span-5 bg-bg-panel border border-border-theme rounded-lg flex flex-col overflow-hidden h-[400px]">
          <div className="bg-bg-panel-darker px-3 py-2 border-b border-border-theme flex items-center justify-between text-xs text-text-primary font-semibold font-mono">
            <span className="flex items-center gap-1.5 font-bold">
              <MessageSquare size={12} className="text-red-500" />
              Active Comment Threads
            </span>
            <span className="text-[9px] bg-bg-panel border border-border-theme px-1.5 py-0.5 rounded text-text-muted">
              {testimonialsData.length} THREADS
            </span>
          </div>

          <div className="flex-1 overflow-y-auto p-3 space-y-2.5 scrollbar-thin">
            {testimonialsData.map((review) => {
              const isSelected = selectedReview.id === review.id;
              return (
                <div
                  key={review.id}
                  onClick={() => setSelectedReview(review)}
                  className={`p-3 rounded-lg border transition-all cursor-pointer flex gap-3 text-left ${
                    isSelected
                      ? "bg-red-600/10 border-red-500 shadow-md shadow-red-500/5"
                      : "bg-bg-panel-darker border-border-theme hover:bg-hover-theme"
                  }`}
                >
                  {/* Initials Avatar */}
                  <div className="w-8 h-8 rounded-full bg-bg-app border border-border-theme flex items-center justify-center text-xs font-bold text-text-primary shrink-0">
                    {review.avatarInitials}
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-text-primary truncate">{review.name}</p>
                      <span className="text-[9px] font-mono text-text-muted shrink-0 flex items-center gap-1">
                        <Clock size={8} />
                        {review.date}
                      </span>
                    </div>
                    <p className="text-[10px] text-text-muted font-mono truncate">{review.role} @ {review.company}</p>
                    <p className="text-xs text-text-secondary line-clamp-2 mt-1 leading-relaxed">{review.comment}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* RIGHT COLUMN: Detail Inspector (7 Cols) */}
        <div className="lg:col-span-7 bg-bg-panel border border-border-theme rounded-lg flex flex-col overflow-hidden h-[400px]">
          <div className="bg-bg-panel-darker px-3 py-2 border-b border-border-theme flex items-center justify-between text-xs text-text-primary font-semibold font-mono">
            <span className="flex items-center gap-1.5 font-bold">
              <CheckCircle2 size={12} className="text-red-500" />
              Inspector: Comments Details
            </span>
            <span className="text-[9px] bg-bg-panel border border-border-theme px-2 py-0.5 rounded text-text-muted capitalize">
              {selectedReview.relationship} Review
            </span>
          </div>

          <div className="flex-1 p-5 md:p-6 flex flex-col justify-between scrollbar-thin gap-4 overflow-y-auto">
            <div className="space-y-4 flex-1 flex flex-col">
              {/* Reviewer Header */}
              <div className="flex items-start gap-3 border-b border-border-theme/60 pb-3 shrink-0">
                <div className="w-10 h-10 rounded-full bg-red-600/10 text-red-500 border border-red-500/20 flex items-center justify-center font-bold text-sm">
                  {selectedReview.avatarInitials}
                </div>
                <div>
                  <p className="text-sm font-black text-text-primary">{selectedReview.name}</p>
                  <p className="text-xs text-text-secondary font-mono">{selectedReview.role} @ <span className="font-bold text-red-500">{selectedReview.company}</span></p>
                </div>
              </div>

              {/* Rating & Project Label */}
              <div className="flex flex-wrap items-center justify-between gap-3 text-xs shrink-0">
                <div className="flex items-center gap-1">
                  {Array.from({ length: selectedReview.rating }).map((_, i) => (
                    <Star key={i} size={12} className="text-yellow-500 fill-yellow-500" />
                  ))}
                  <span className="font-mono text-text-muted text-[10px] ml-1">({selectedReview.rating}.0)</span>
                </div>
                <div className="flex items-center gap-1 bg-bg-panel-darker border border-border-theme px-2 py-0.5 rounded font-mono text-[9px] text-text-secondary">
                  <span>Scope:</span>
                  <span className="font-bold">{selectedReview.project}</span>
                </div>
              </div>

              {/* Endorsement Body */}
              <div className="bg-bg-panel-darker/35 p-5 rounded-lg border border-border-theme leading-relaxed text-xs text-text-secondary italic flex-1 flex items-center">
                &ldquo;{selectedReview.comment}&rdquo;
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
