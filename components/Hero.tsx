"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, FileCode2, MapPin, ShieldCheck, Code2, Sparkles } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Ambient Background Radial Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/10 dark:bg-blue-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Text Content */}
          <div className="lg:col-span-7">
            {/* Status Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-200 dark:border-blue-900/60 bg-blue-50/80 dark:bg-blue-950/50 text-blue-700 dark:text-blue-300 text-xs font-semibold mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              Available for Senior & Team Lead Roles
              <span className="mx-1">•</span>
              <MapPin className="w-3.5 h-3.5" /> Mumbai, India
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[var(--text-primary)] leading-[1.15]"
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
              Hi, I&apos;m <strong className="text-[var(--text-primary)] font-semibold">{personalDetails.name}</strong>. A Senior Full Stack Engineer with <strong>{personalDetails.experienceYears} years</strong> of experience building high-throughput backend APIs (ASP.NET Core, C#, SQL Server) and modern web applications (Angular, React, Vue).
            </motion.p>

            {/* Key Skill Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 flex flex-wrap gap-2 text-xs font-medium text-[var(--text-secondary)]"
            >
              {["ASP.NET Core", "C#", "SQL Server Optimization", "Angular", "React", "REST APIs", "SignalR", "SDLC Leadership"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-md bg-[var(--bg-secondary)] border border-[var(--border-color)]"
                >
                  {tag}
                </span>
              ))}
            </motion.div>

            {/* Call to Action Buttons */}
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

          {/* Premium Seamless Cutout Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative pt-6"
          >
            <div className="relative w-full max-w-sm flex items-center justify-center">
              {/* Soft Backdrop Glow Halo */}
              <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-sky-400/20 blur-3xl pointer-events-none -z-10" />
              
              {/* Decorative Subtle Orbit Ring */}
              <div className="absolute w-[290px] h-[290px] sm:w-[340px] sm:h-[340px] rounded-full border border-blue-500/15 dark:border-blue-400/10 pointer-events-none -z-10" />

              {/* Transparent Portrait Cutout with Bottom Gradient Fade Mask */}
              <div
                className="relative z-10 w-full flex justify-center"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 98%)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 75%, rgba(0,0,0,0) 98%)",
                }}
              >
                <Image
                  src="/Mayur Utekar.png"
                  alt="Mayur Rajendra Utekar - Senior Full Stack Engineer"
                  width={460}
                  height={560}
                  priority
                  className="object-contain drop-shadow-2xl hover:scale-[1.02] transition-transform duration-500 h-[480px] sm:h-[520px] w-auto"
                />
              </div>

              {/* Floating Glass Badge - Top Right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute top-6 -right-3 sm:-right-6 z-20 glass-header px-4 py-2.5 rounded-2xl border border-[var(--border-color)] shadow-xl flex items-center gap-3 backdrop-blur-md"
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

              {/* Floating Glass Badge - Bottom Left */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="absolute bottom-12 -left-3 sm:-left-6 z-20 glass-header px-4 py-2.5 rounded-2xl border border-[var(--border-color)] shadow-xl flex items-center gap-3 backdrop-blur-md"
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

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {personalDetails.stats.map((stat, idx) => (
            <div
              key={idx}
              className="custom-card p-5 text-center sm:text-left flex flex-col justify-center"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-[var(--brand-primary)] tracking-tight">
                {stat.value}
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
