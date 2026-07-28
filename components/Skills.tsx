"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolioData";
import { Server, Layout, Database, Wrench, Layers, CheckCircle2, Star, Sparkles } from "lucide-react";

export default function Skills() {
  const [filterMode, setFilterMode] = useState<"All" | "Primary">("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Backend & Core": <Server className="w-5 h-5" />,
    "Frontend & UI": <Layout className="w-5 h-5" />,
    "Database & Storage": <Database className="w-5 h-5" />,
    "DevOps & Tools": <Wrench className="w-5 h-5" />,
  };

  return (
    <section id="skills" className="py-24 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">
            Technical Expertise
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Primary vs Additional Technology Stack
          </p>
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            Clear hierarchy highlighting core mastery in ASP.NET Core, C#, SQL Server, Angular, and React.
          </p>
        </div>

        {/* Filter Toggle Bar */}
        <div className="mt-8 flex justify-center items-center gap-2">
          <button
            onClick={() => setFilterMode("All")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer ${
              filterMode === "All"
                ? "bg-[var(--brand-primary)] text-white shadow-md shadow-blue-500/20"
                : "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--brand-primary)]"
            }`}
          >
            All Skills
          </button>
          <button
            onClick={() => setFilterMode("Primary")}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold transition-all cursor-pointer flex items-center gap-1.5 ${
              filterMode === "Primary"
                ? "bg-[var(--brand-primary)] text-white shadow-md shadow-blue-500/20"
                : "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--brand-primary)]"
            }`}
          >
            <Star className="w-3.5 h-3.5 fill-current text-amber-300" />
            Primary Core Focus
          </button>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => {
            const displayedSkills =
              filterMode === "Primary"
                ? cat.skills.filter((s) => s.isPrimary)
                : cat.skills;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="custom-card p-6 hover:border-blue-500/80 transition-all hover:shadow-xl"
              >
                <div className="flex items-center gap-3 mb-5 border-b border-[var(--border-color)] pb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 text-[var(--brand-primary)] shrink-0">
                    {categoryIcons[cat.title] || <Layers className="w-5 h-5" />}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[var(--text-primary)]">
                      {cat.title}
                    </h3>
                    <span className="text-xs text-[var(--text-secondary)] font-medium">
                      {displayedSkills.length} Technologies Listed
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {displayedSkills.map((skill) => (
                    <div
                      key={skill.name}
                      className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-sm font-semibold transition-all cursor-default shadow-2xs ${
                        skill.isPrimary
                          ? "bg-blue-50/90 dark:bg-blue-950/60 text-[var(--brand-primary)] border border-blue-300/80 dark:border-blue-800 font-extrabold hover:scale-[1.04]"
                          : "bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)] hover:border-blue-400"
                      }`}
                    >
                      {skill.isPrimary ? (
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-500 shrink-0" />
                      ) : (
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      )}
                      {skill.name}
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
