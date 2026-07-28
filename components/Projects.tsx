"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projectsData, ProjectItem } from "@/data/portfolioData";
import {
  Users,
  Utensils,
  Monitor,
  CreditCard,
  ShoppingBag,
  ShieldCheck,
  Tv,
  CheckCircle2,
  X,
  Layers,
  ChevronRight,
  Sparkles,
  ExternalLink,
  Award,
} from "lucide-react";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const getProjectIcon = (name: string) => {
    switch (name) {
      case "Users":
        return <Users className="w-6 h-6 text-blue-500" />;
      case "Utensils":
        return <Utensils className="w-6 h-6 text-amber-500" />;
      case "Monitor":
        return <Monitor className="w-6 h-6 text-purple-500" />;
      case "CreditCard":
        return <CreditCard className="w-6 h-6 text-emerald-500" />;
      case "ShoppingBag":
        return <ShoppingBag className="w-6 h-6 text-pink-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-indigo-500" />;
      case "Tv":
        return <Tv className="w-6 h-6 text-cyan-500" />;
      default:
        return <Layers className="w-6 h-6 text-blue-500" />;
    }
  };

  const categories = ["All", "Enterprise", "Web App", "System Architecture"];

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">
            Featured Portfolio
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Enterprise Projects & Systems
          </p>
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            Real-world production systems built for banking, retail, healthcare, digital signage, and financial management.
          </p>
        </div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? "bg-[var(--brand-primary)] text-white shadow-md shadow-blue-500/20"
                  : "bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)] hover:border-[var(--brand-primary)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="custom-card overflow-hidden flex flex-col justify-between group cursor-pointer hover:border-blue-500 transition-all hover:shadow-xl"
              onClick={() => setActiveModalProject(project)}
            >
              {/* Project Card Decorative Top Header Banner */}
              <div className="h-2.5 bg-gradient-to-r from-blue-600 via-indigo-500 to-sky-400 group-hover:h-3 transition-all" />

              <div className="p-6">
                {/* Badges Bar: Category, Role & Status */}
                <div className="flex items-center justify-between gap-2 mb-4 flex-wrap">
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-blue-50 dark:bg-blue-950/60 text-[var(--brand-primary)] border border-blue-200/60 dark:border-blue-900/40">
                    {project.roleBadge}
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-900/40">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    {project.statusBadge}
                  </span>
                </div>

                <div className="flex items-start gap-3.5 mb-3">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 group-hover:scale-110 transition-transform shrink-0">
                    {getProjectIcon(project.iconName)}
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors leading-snug">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>

              <div className="p-6 pt-0">
                <div className="mt-4 pt-4 border-t border-[var(--border-color)]">
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-color)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-white bg-[var(--brand-primary)] hover:bg-[var(--brand-hover)] flex items-center justify-center gap-1.5 shadow-md shadow-blue-500/20 transition-all">
                    View Case Study
                    <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal Drawer */}
        <AnimatePresence>
          {activeModalProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setActiveModalProject(null)}
                className="absolute inset-0 bg-black/65 backdrop-blur-xs"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3.5 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100">
                    {getProjectIcon(activeModalProject.iconName)}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-bold text-[var(--brand-primary)] uppercase tracking-wider">
                        {activeModalProject.category} System
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600">
                        {activeModalProject.statusBadge}
                      </span>
                    </div>
                    <h3 className="text-2xl font-extrabold text-[var(--text-primary)]">
                      {activeModalProject.title}
                    </h3>
                  </div>
                </div>

                <div className="inline-block px-3 py-1 rounded-lg bg-blue-50 dark:bg-blue-950/60 text-[var(--brand-primary)] text-xs font-bold mb-4">
                  Role: {activeModalProject.roleBadge}
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-2">
                  {activeModalProject.fullDescription}
                </p>

                <div className="mt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                    Architectural & Engineering Highlights:
                  </h4>
                  <ul className="space-y-2">
                    {activeModalProject.highlights.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-xs sm:text-sm text-[var(--text-secondary)]"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-5 border-t border-[var(--border-color)]">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] mb-3">
                    Technologies Used:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeModalProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-lg text-xs font-semibold bg-blue-50 dark:bg-blue-950/50 text-[var(--brand-primary)] border border-blue-200 dark:border-blue-900/40"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="px-6 py-2.5 rounded-xl bg-[var(--brand-primary)] text-white text-sm font-semibold hover:bg-[var(--brand-hover)] transition-colors shadow-md shadow-blue-500/20"
                  >
                    Close Overview
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
