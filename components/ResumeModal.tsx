"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, FileText, CheckCircle2, Briefcase, Award } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-3xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl p-6 sm:p-8 max-h-[88vh] overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-black text-[var(--text-primary)]">
                  Executive Resume Summary
                </h3>
                <p className="text-xs text-[var(--text-secondary)]">
                  Mayur Rajendra Utekar • Senior Full Stack Engineer & Lead
                </p>
              </div>
            </div>

            {/* Quick Highlights */}
            <div className="space-y-5 my-6">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-2">
                  <Briefcase className="w-4 h-4" />
                  Professional Profile Summary
                </h4>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {personalDetails.about}
                </p>
              </div>

              {/* Core Strengths */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-500" />
                  Key Strengths & SDLC Ownership
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {personalDetails.summaryPoints.map((point, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-medium text-[var(--text-primary)] flex items-start gap-2"
                    >
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="pt-4 border-t border-[var(--border-color)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[var(--text-muted)] font-medium">
                Official PDF Document • Last Updated 2026
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg border border-[var(--border-color)] text-xs font-bold text-[var(--text-secondary)] hover:bg-[var(--bg-secondary)] transition-colors cursor-pointer"
                >
                  Close
                </button>
                <a
                  href="/resume"
                  target="_blank"
                  className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs flex items-center justify-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
                >
                  <FileText className="w-4 h-4" />
                  View Executive Resume Page
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
