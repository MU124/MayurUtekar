"use client";

import React from "react";
import { motion } from "framer-motion";
import { timelineMilestones } from "@/data/portfolioData";
import { GraduationCap, Award, GitCommit, Building, Trophy, ArrowUpRight } from "lucide-react";

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
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            Promotions, team leadership milestones, and engineering growth.
          </p>
        </div>

        {/* Timeline Path */}
        <div className="mt-12 relative max-w-3xl mx-auto">
          <div className="absolute left-5 sm:left-1/2 top-0 bottom-0 w-0.5 bg-[var(--border-color)] sm:-translate-x-1/2" />

          <div className="space-y-8 relative">
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
                <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                  <div className="custom-card p-6 relative hover:border-blue-500 transition-colors">
                    <div className="flex items-center justify-between gap-2 mb-2">
                      <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 dark:bg-blue-950/60 text-[var(--brand-primary)]">
                        {item.year}
                      </span>
                      <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 border border-amber-200/50">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-[var(--text-primary)]">
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

                {/* Larger Timeline Dot Icon */}
                <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[var(--brand-primary)] text-white flex items-center justify-center shadow-lg shadow-blue-500/30 ring-4 ring-[var(--bg-secondary)] z-10">
                  <Trophy className="w-4.5 h-4.5" />
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
              <div className="w-full sm:w-1/2 pl-12 sm:pl-0">
                <div className="custom-card p-6 relative border-emerald-300 dark:border-emerald-900/40 hover:border-emerald-500 transition-colors">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                      Academic Background
                    </span>
                    <span className="px-2.5 py-0.5 rounded text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600">
                      Engineering
                    </span>
                  </div>

                  <h3 className="text-lg font-extrabold text-[var(--text-primary)]">
                    Diploma in Computer Engineering
                  </h3>
                  <p className="text-xs sm:text-sm text-[var(--text-secondary)] mt-1">
                    Foundational engineering concepts, algorithms, database systems, and computer network architecture.
                  </p>
                </div>
              </div>

              <div className="absolute left-5 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 ring-4 ring-[var(--bg-secondary)] z-10">
                <GraduationCap className="w-5 h-5" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
