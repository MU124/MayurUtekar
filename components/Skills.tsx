"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skillCategories } from "@/data/portfolioData";
import { Server, Layout, Database, Wrench, Layers } from "lucide-react";

export default function Skills() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const categoryIcons: Record<string, React.ReactNode> = {
    "Backend & Architecture": <Server className="w-5 h-5" />,
    "Frontend & UI": <Layout className="w-5 h-5" />,
    "Database & Storage": <Database className="w-5 h-5" />,
    "Tools & DevOps": <Wrench className="w-5 h-5" />,
  };

  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">
            Technical Expertise
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Tools & Technologies I Master
          </p>
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            Comprehensive tech stack spanning modern backend services, high-performance database engines, and reactive frontend frameworks.
          </p>
        </div>

        {/* Skill Category Cards Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="custom-card p-6"
            >
              <div className="flex items-center gap-3 mb-5 border-b border-[var(--border-color)] pb-4">
                <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[var(--brand-primary)]">
                  {categoryIcons[cat.title] || <Layers className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-bold text-[var(--text-primary)]">
                  {cat.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {cat.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[var(--bg-secondary)] border border-[var(--border-color)] text-sm font-medium text-[var(--text-primary)] hover:border-[var(--brand-primary)] hover:bg-blue-50/50 dark:hover:bg-blue-950/30 transition-all cursor-default"
                  >
                    <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)]"></span>
                    {skill.name}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
