"use client";

import React from "react";
import { motion } from "framer-motion";
import { processWorkflow } from "@/data/portfolioData";
import { FileText, Cpu, Code2, ShieldCheck, Rocket, Wrench, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ProcessWorkflow() {
  const getStepIcon = (name: string) => {
    switch (name) {
      case "FileText":
        return <FileText className="w-5 h-5 text-blue-500" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-purple-500" />;
      case "Code2":
        return <Code2 className="w-5 h-5 text-emerald-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-amber-500" />;
      case "Rocket":
        return <Rocket className="w-5 h-5 text-rose-500" />;
      case "Wrench":
        return <Wrench className="w-5 h-5 text-cyan-500" />;
      default:
        return <Code2 className="w-5 h-5 text-blue-500" />;
    }
  };

  return (
    <section id="process" className="py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">
            Engineering Methodology
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            How I Work: End-to-End SDLC Process
          </p>
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            A disciplined, 6-phase engineering lifecycle for delivering high-performance, maintainable enterprise software.
          </p>
        </div>

        {/* Process Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {processWorkflow.map((step, idx) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="custom-card p-6 flex flex-col justify-between group hover:border-blue-500 transition-all hover:shadow-xl relative"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 group-hover:scale-110 transition-transform">
                    {getStepIcon(step.icon)}
                  </div>
                  <span className="text-2xl font-black text-slate-300 dark:text-slate-700 group-hover:text-[var(--brand-primary)] transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[var(--text-primary)] mb-2">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-color)]">
                <span className="text-[11px] font-extrabold text-[var(--text-muted)] uppercase tracking-wider block mb-2">
                  Key Deliverables:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {step.deliverables.map((item) => (
                    <span
                      key={item}
                      className="px-2.5 py-1 rounded text-[11px] font-semibold bg-[var(--bg-secondary)] text-[var(--text-primary)] border border-[var(--border-color)] flex items-center gap-1"
                    >
                      <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
