"use client";

import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "@/data/portfolioData";
import { Briefcase, Calendar, MapPin, CheckCircle, Trophy } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">
            Career Journey
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Professional Experience
          </p>
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            Over 8 years of progression from technical production support to leading full-stack development teams.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          {experienceData.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="custom-card p-6 sm:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--border-color)] pb-6 mb-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 dark:bg-blue-950/60 text-[var(--brand-primary)] text-xs font-bold mb-2">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.type}
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                    {exp.role}
                  </h3>
                  <p className="text-lg font-semibold text-[var(--brand-primary)] mt-0.5">
                    {exp.company}
                  </p>
                </div>

                <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 text-sm text-[var(--text-secondary)]">
                  <span className="inline-flex items-center gap-1.5 font-medium px-3 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border-color)]">
                    <Calendar className="w-4 h-4 text-blue-500" />
                    {exp.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium px-3 py-1 rounded-md bg-[var(--bg-primary)] border border-[var(--border-color)]">
                    <MapPin className="w-4 h-4 text-emerald-500" />
                    {exp.location}
                  </span>
                </div>
              </div>

              {/* Responsibilities */}
              <div className="mb-6">
                <h4 className="text-sm font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                  Core Responsibilities:
                </h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {exp.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                      <CheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Achievements & Contributions */}
              <div className="pt-5 border-t border-[var(--border-color)]/70 bg-blue-50/40 dark:bg-blue-950/20 p-4 rounded-xl">
                <h4 className="text-sm font-bold text-[var(--text-primary)] flex items-center gap-2 mb-2">
                  <Trophy className="w-4 h-4 text-amber-500" />
                  Key Achievements & Impact:
                </h4>
                <ul className="space-y-1.5">
                  {exp.contributions.map((item, i) => (
                    <li key={i} className="text-xs sm:text-sm text-[var(--text-secondary)] flex items-start gap-2">
                      <span className="text-blue-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
