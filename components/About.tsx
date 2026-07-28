"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  CheckCircle2,
  Award,
  Users2,
  Database,
  ShieldCheck,
  Cpu,
  Landmark,
  Building2,
  ShoppingCart,
  Hospital,
  Tv,
  Utensils,
} from "lucide-react";
import { personalDetails, industriesData } from "@/data/portfolioData";

export default function About() {
  const whyHireMe = [
    {
      title: "Enterprise Solutions Track Record",
      description: "Proven experience delivering robust mission-critical software for banking, government, and retail.",
      icon: ShieldCheck,
    },
    {
      title: "Backend & Database Optimization",
      description: "Deep expertise in C#, ASP.NET Core, SQL Server indexing, stored procedures, and query tuning.",
      icon: Database,
    },
    {
      title: "Full SDLC & Team Leadership",
      description: "Capable of driving projects from initial requirement gathering to production deployment and mentoring teams.",
      icon: Users2,
    },
    {
      title: "Clean Architecture & Scalability",
      description: "Focused on writing clean, maintainable, modular, and high-performance code built for long-term scale.",
      icon: Cpu,
    },
  ];

  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Landmark":
        return <Landmark className="w-4 h-4 text-blue-500" />;
      case "Building2":
        return <Building2 className="w-4 h-4 text-purple-500" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-4 h-4 text-emerald-500" />;
      case "Hospital":
        return <Hospital className="w-4 h-4 text-rose-500" />;
      case "Tv":
        return <Tv className="w-4 h-4 text-amber-500" />;
      case "Utensils":
        return <Utensils className="w-4 h-4 text-indigo-500" />;
      default:
        return <Award className="w-4 h-4 text-blue-500" />;
    }
  };

  return (
    <section id="about" className="py-20 border-b border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">
            About Me
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Building Enterprise Software with Precision
          </p>
        </div>

        {/* Industry Domain Badges Summary */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-center gap-3"
        >
          <span className="text-xs font-bold text-[var(--text-muted)] uppercase tracking-wider shrink-0 text-center">
            Domains Served:
          </span>
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-primary)] shadow-2xs hover:border-blue-500 transition-colors"
              >
                {getIndustryIcon(ind.icon)}
                <span>{ind.name}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          {/* Detailed Biography */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 custom-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-xl font-bold text-[var(--text-primary)] mb-4">
                Professional Bio & Engineering Focus
              </h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 text-sm sm:text-base">
                {personalDetails.about}
              </p>
              <p className="text-[var(--text-secondary)] leading-relaxed text-sm sm:text-base">
                Over the course of my career, I have taken full ownership of large-scale applications across digital signage, queue management, loan processing, and e-commerce. I thrive in environments where clean architecture, reliable database performance, and intuitive user experiences intersect.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[var(--border-color)]">
              <h4 className="text-sm font-semibold text-[var(--text-primary)] mb-3">
                Key Professional Summary:
              </h4>
              <ul className="space-y-2.5">
                {personalDetails.summaryPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                    <CheckCircle2 className="w-4.5 h-4.5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Why Hire Me Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {whyHireMe.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div
                  key={idx}
                  className="custom-card p-6 flex flex-col justify-between group hover:border-blue-500 transition-colors"
                >
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-[var(--brand-primary)] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h4 className="text-base font-bold text-[var(--text-primary)] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
