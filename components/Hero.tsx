"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, FileCode2, MapPin, ShieldCheck, Code2, Layers, Cpu, Database } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Abstract Grid Pattern & Radial Lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.04] dark:opacity-[0.07] pointer-events-none -z-20" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-blue-500/10 dark:bg-blue-500/15 blur-[130px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Hero Left Content */}
          <div className="lg:col-span-7">
            {/* Status & Name Label (20-30% Larger Name Display) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-3 mb-6"
            >
              <span className="text-xl sm:text-2xl font-black text-[var(--brand-primary)] tracking-wide">
                MAYUR UTEKAR
              </span>
              <span className="text-slate-300 dark:text-slate-700 font-light">|</span>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-semibold">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                Senior Full Stack Engineer & Lead
                <span className="mx-0.5">•</span>
                <MapPin className="w-3.5 h-3.5" /> Mumbai
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.12]"
            >
              Architecting Scalable <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-indigo-600 bg-clip-text text-transparent">
                Enterprise Software
              </span>{" "}
              & Web Solutions.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl"
            >
              Over <strong>{personalDetails.experienceYears} years</strong> of experience engineering high-throughput backend APIs (ASP.NET Core, C#, SQL Server) and modern responsive web frontends (Angular, React, Vue).
            </motion.p>

            {/* Floating Core Tech Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-[var(--text-secondary)]"
            >
              {[
                { name: "ASP.NET Core", color: "border-purple-200 dark:border-purple-900/40 text-purple-600 dark:text-purple-400" },
                { name: "C#", color: "border-blue-200 dark:border-blue-900/40 text-blue-600 dark:text-blue-400" },
                { name: "SQL Server Tuning", color: "border-emerald-200 dark:border-emerald-900/40 text-emerald-600 dark:text-emerald-400" },
                { name: "Angular", color: "border-red-200 dark:border-red-900/40 text-red-600 dark:text-red-400" },
                { name: "React", color: "border-cyan-200 dark:border-cyan-900/40 text-cyan-600 dark:text-cyan-400" },
                { name: "REST APIs", color: "border-amber-200 dark:border-amber-900/40 text-amber-600 dark:text-amber-400" },
              ].map((tag) => (
                <span
                  key={tag.name}
                  className={`px-3.5 py-1.5 rounded-lg bg-[var(--bg-secondary)] border ${tag.color} font-bold shadow-2xs`}
                >
                  {tag.name}
                </span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-8 flex flex-wrap items-center gap-4"
            >
              <a
                href="#projects"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-hover)] text-white font-semibold shadow-lg shadow-blue-600/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <FileCode2 className="w-5 h-5" />
                View Featured Projects
              </a>
              <a
                href="#experience"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] font-semibold hover:border-blue-500 hover:text-blue-600 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <Briefcase className="w-5 h-5" />
                Professional History
              </a>
            </motion.div>
          </div>

          {/* Seamless Cutout Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative pt-6"
          >
            <div className="relative w-full max-w-sm flex items-center justify-center">
              {/* Backdrop Halo & Rings */}
              <div className="absolute w-[340px] h-[340px] sm:w-[400px] sm:h-[400px] rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-sky-400/20 blur-3xl pointer-events-none -z-10" />
              <div className="absolute w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] rounded-full border border-blue-500/15 dark:border-blue-400/10 pointer-events-none -z-10" />

              {/* Transparent Portrait Cutout with Bottom Gradient Mask */}
              <div
                className="relative z-10 w-full flex justify-center"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 98%)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 78%, rgba(0,0,0,0) 98%)",
                }}
              >
                <Image
                  src="/Mayur Utekar.png"
                  alt="Mayur Rajendra Utekar - Senior Full Stack Engineer"
                  width={480}
                  height={580}
                  priority
                  className="object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 h-[490px] sm:h-[530px] w-auto"
                />
              </div>

              {/* Floating Badge - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-6 -right-4 sm:-right-8 z-20 glass-header px-4 py-2.5 rounded-2xl border border-[var(--border-color)] shadow-xl flex items-center gap-3 backdrop-blur-md"
              >
                <div className="p-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-md shadow-blue-500/30">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[var(--text-primary)] block leading-tight">
                    8+ Years
                  </span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-medium block">
                    Enterprise Exp.
                  </span>
                </div>
              </motion.div>

              {/* Floating Badge - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-12 -left-4 sm:-left-8 z-20 glass-header px-4 py-2.5 rounded-2xl border border-[var(--border-color)] shadow-xl flex items-center gap-3 backdrop-blur-md"
              >
                <div className="p-2 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-md shadow-indigo-500/30">
                  <Code2 className="w-4 h-4" />
                </div>
                <div>
                  <span className="text-xs font-extrabold text-[var(--text-primary)] block leading-tight">
                    Full Stack Lead
                  </span>
                  <span className="text-[10px] text-[var(--text-secondary)] font-medium block">
                    ASP.NET Core & SQL
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Animated Statistics Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {personalDetails.stats.map((stat, idx) => (
            <div
              key={idx}
              className="custom-card p-5 text-center sm:text-left flex flex-col justify-center hover:border-blue-500 transition-colors"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--brand-primary)] tracking-tight">
                <StatCounter value={stat.targetNumber} suffix={stat.suffix} />
              </span>
              <span className="mt-1 text-sm font-medium text-[var(--text-secondary)]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
