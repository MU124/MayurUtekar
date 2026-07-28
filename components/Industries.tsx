"use client";

import React from "react";
import { motion } from "framer-motion";
import { industriesData } from "@/data/portfolioData";
import { Landmark, Hospital, Building2, ShoppingCart, Tv, Utensils, Award, ArrowUpRight } from "lucide-react";

export default function Industries() {
  const getIndustryIcon = (iconName: string) => {
    switch (iconName) {
      case "Landmark":
        return <Landmark className="w-6 h-6 text-blue-500" />;
      case "Hospital":
        return <Hospital className="w-6 h-6 text-rose-500" />;
      case "Building2":
        return <Building2 className="w-6 h-6 text-purple-500" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-6 h-6 text-emerald-500" />;
      case "Tv":
        return <Tv className="w-6 h-6 text-amber-500" />;
      case "Utensils":
        return <Utensils className="w-6 h-6 text-indigo-500" />;
      default:
        return <Award className="w-6 h-6 text-blue-500" />;
    }
  };

  return (
    <section id="industries" className="py-20 bg-[var(--bg-secondary)] border-y border-[var(--border-color)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[var(--brand-primary)]">
            Domain Versatility
          </h2>
          <p className="mt-2 text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
            Industries Worked & Domain Expertise
          </p>
          <p className="mt-3 text-base text-[var(--text-secondary)]">
            Proven track record delivering mission-critical applications across regulated financial, government, healthcare, and retail sectors.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industriesData.map((ind, idx) => (
            <motion.div
              key={ind.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="custom-card p-6 flex flex-col justify-between group hover:border-blue-500 transition-all hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="p-3 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-900/40 group-hover:scale-110 transition-transform">
                    {getIndustryIcon(ind.icon)}
                  </div>
                  <span className="px-2.5 py-1 rounded-md text-[11px] font-extrabold bg-blue-50/80 dark:bg-blue-950/50 text-[var(--brand-primary)] border border-blue-200/50">
                    {ind.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-extrabold text-[var(--text-primary)] group-hover:text-[var(--brand-primary)] transition-colors mb-2">
                  {ind.name}
                </h3>
                <p className="text-xs sm:text-sm text-[var(--text-secondary)] leading-relaxed">
                  {ind.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
