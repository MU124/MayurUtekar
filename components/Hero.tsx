"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Briefcase, FileCode2, MapPin, Award, CheckCircle2, ShieldCheck } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glow Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-blue-500/10 dark:bg-blue-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Main Hero Content */}
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

            {/* Skill Badges */}
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

          {/* Profile Photo Avatar Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group w-full max-w-sm">
              {/* Decorative Card Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur-lg opacity-25 group-hover:opacity-40 transition duration-500 pointer-events-none" />

              <div className="relative custom-card p-4 overflow-hidden rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xl">
                <div className="relative aspect-4/5 w-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src="/mayur.png"
                    alt="Mayur Rajendra Utekar - Senior Full Stack Engineer"
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    priority
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating Badge Overlay */}
                <div className="absolute bottom-6 left-6 right-6 p-3.5 rounded-2xl glass-header border border-white/20 dark:border-slate-700/50 shadow-lg flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-extrabold text-[var(--text-primary)] leading-tight">
                      Mayur R. Utekar
                    </h3>
                    <p className="text-[11px] font-semibold text-[var(--brand-primary)]">
                      Senior Full Stack Engineer
                    </p>
                  </div>
                  <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 text-xs font-bold shrink-0">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    8+ Yrs
                  </div>
                </div>
              </div>
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
