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
  ExternalLink,
  CheckCircle2,
  X,
  Layers,
  ChevronRight,
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
              className="custom-card p-6 flex flex-col justify-between group cursor-pointer"
              onClick={() => setActiveModalProject(project)}
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 group-hover:scale-110 transition-transform">
                    {getProjectIcon(project.iconName)}
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[var(--bg-secondary)] border border-[var(--border-color)] text-[var(--text-secondary)]">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed line-clamp-3">
                  {project.shortDescription}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[var(--border-color)]">
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded text-[11px] font-medium bg-blue-50/80 dark:bg-blue-950/40 text-[var(--brand-primary)] border border-blue-200/50 dark:border-blue-900/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="w-full py-2 px-3 rounded-lg text-xs font-bold text-[var(--brand-primary)] bg-[var(--bg-secondary)] hover:bg-blue-50 dark:hover:bg-blue-950/50 flex items-center justify-center gap-1.5 transition-colors">
                  View Project Details
                  <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
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
                className="absolute inset-0 bg-black/60 backdrop-blur-xs"
              />

              {/* Modal Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-2xl bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl p-6 sm:p-8 shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
              >
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="absolute top-5 right-5 p-2 rounded-xl border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-red-500 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100">
                    {getProjectIcon(activeModalProject.iconName)}
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-[var(--brand-primary)] uppercase tracking-wider">
                      {activeModalProject.category} System
                    </span>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)]">
                      {activeModalProject.title}
                    </h3>
                  </div>
                </div>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mt-4">
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
                    className="px-5 py-2.5 rounded-xl bg-[var(--brand-primary)] text-white text-sm font-semibold hover:bg-[var(--brand-hover)] transition-colors"
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
