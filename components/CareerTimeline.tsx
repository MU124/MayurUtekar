"use client";

import React from "react";
import { motion } from "framer-motion";
import { timelineMilestones } from "@/data/portfolioData";
import { GraduationCap, Award, GitCommit, CheckCircle2 } from "lucide-react";

export default function CareerTimeline() {
  return (
    <section id="timeline" className="py-20 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">
            Milestones
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Career Timeline & Education
          </p>
        </div>

        {/* Timeline Path */}
        <div className="mt-14 relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-color)] sm:-translate-x-1/2" />

          <div className="space-y-12 relative">
            {timelineMilestones.map((item, idx) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className={`flex flex-col sm:flex-row items-start ${
                  idx % 2 === 0 ? "sm:flex-row-reverse" : ""
                } gap-6`}
              >
                {/* Milestone Content Box */}
                <div className="w-full sm:w-1/2 pl-10 sm:pl-0">
                  <div className="custom-card p-6 relative">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/60 text-[var(--brand-primary)] mb-2">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-bold text-[var(--text-primary)]">
                      {item.title}
                    </h3>
                    <p className="text-sm font-semibold text-[var(--brand-primary)] mb-2">
                      {item.company}
                    </p>
                    <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot Icon */}
                <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 z-10">
                  <GitCommit className="w-4 h-4" />
                </div>
              </motion.div>
            ))}

            {/* Education Milestone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-start sm:flex-row-reverse gap-6"
            >
              <div className="w-full sm:w-1/2 pl-10 sm:pl-0">
                <div className="custom-card p-6 relative border-emerald-300 dark:border-emerald-900/40">
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 mb-2">
                    Academic Background
                  </span>
                  <h3 className="text-lg font-bold text-[var(--text-primary)]">
                    Diploma in Computer Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                    Foundational engineering concepts, algorithms, database systems, and computer network architecture.
                  </p>
                </div>
              </div>

              <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 z-10">
                <GraduationCap className="w-4 h-4" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
