"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";
import StatCounter from "./StatCounter";

export default function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      {/* Background Soft Lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[360px] bg-blue-500/10 dark:bg-blue-500/15 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-7">
            {/* Greeting */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400 tracking-wide mb-1.5 block"
            >
              Hi, I'm
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-tight"
            >
              Mayur <span className="text-blue-600 dark:text-blue-500">Utekar</span>
            </motion.h1>

            {/* Subtitle Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-2 text-xl sm:text-2xl font-bold text-slate-700 dark:text-slate-300"
            >
              Senior Full Stack Engineer
            </motion.h2>

            {/* Value Proposition Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed max-w-xl"
            >
              I build scalable enterprise software and web solutions that solve real business problems and deliver value.
            </motion.p>

            {/* Core Tech Stack Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.25 }}
              className="mt-6 flex flex-wrap gap-2"
            >
              {["ASP.NET Core", "Angular", "React", "SQL Server", "Node.js"].map((tech) => (
                <span
                  key={tech}
                  className="px-3.5 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/80 text-slate-700 dark:text-slate-300 text-xs font-semibold"
                >
                  {tech}
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
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-[var(--bg-card)] text-[var(--text-primary)] font-bold text-sm hover:border-blue-600 hover:text-blue-600 shadow-xs transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Contact Me
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </div>

          {/* Right Visual: Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center items-center relative"
          >
            <div className="relative w-full max-w-sm flex flex-col items-center justify-center">
              {/* Backdrop Glow Halo */}
              <div className="absolute w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full bg-gradient-to-tr from-blue-500/15 via-indigo-500/15 to-sky-400/15 blur-3xl pointer-events-none -z-10" />

              {/* Transparent Portrait Cutout with Bottom Mask */}
              <div
                className="relative z-10 w-full flex justify-center mt-2"
                style={{
                  WebkitMaskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 98%)",
                  maskImage: "linear-gradient(to bottom, rgba(0,0,0,1) 80%, rgba(0,0,0,0) 98%)",
                }}
              >
                <Image
                  src="/Mayur Utekar.webp"
                  alt="Mayur Rajendra Utekar - Senior Full Stack Engineer"
                  width={460}
                  height={560}
                  priority
                  className="object-contain drop-shadow-xl hover:scale-[1.02] transition-transform duration-500 h-[440px] sm:h-[480px] w-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Meaningful Stats Grid */}
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
              <span className="mt-1 text-sm font-semibold text-[var(--text-secondary)]">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
