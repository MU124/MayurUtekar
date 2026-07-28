"use client";

import React from "react";
import { Code2, ArrowUp } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[var(--bg-secondary)] border-t border-[var(--border-color)] py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[var(--brand-primary)] text-white flex items-center justify-center font-bold">
              <Code2 className="w-5 h-5" />
            </div>
            <div>
              <span className="font-bold text-base text-[var(--text-primary)] block">
                {personalDetails.name}
              </span>
              <span className="text-xs text-[var(--text-secondary)]">
                Senior Full Stack Engineer & Team Lead
              </span>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-xs text-[var(--text-secondary)] text-center">
            © {new Date().getFullYear()} Mayur Rajendra Utekar. All rights reserved.
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="p-3 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-secondary)] hover:text-[var(--brand-primary)] hover:border-blue-500 transition-colors cursor-pointer flex items-center gap-2 text-xs font-semibold"
          >
            Back to Top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
