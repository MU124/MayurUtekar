"use client";

import React from "react";
import Link from "next/link";
import { personalDetails, experienceData, skillCategories, projectsData } from "@/data/portfolioData";
import { Download, ArrowLeft, Printer, Mail, MapPin, Linkedin, Github, Globe } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 dark:bg-slate-950 py-8 px-4 sm:px-6 print:p-0 print:bg-white print:text-black">
      {/* Floating Header Actions Bar (Hidden on Print) */}
      <div className="max-w-4xl mx-auto mb-6 flex items-center justify-between print:hidden">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Portfolio
        </Link>
        <div className="flex items-center gap-3">
          <button
            onClick={handlePrint}
            className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs shadow-md shadow-blue-600/20 flex items-center gap-2 transition-all hover:scale-[1.02] cursor-pointer"
          >
            <Printer className="w-4 h-4" />
            Print / Save as PDF
          </button>
        </div>
      </div>

      {/* Styled Executive Resume Document */}
      <main className="max-w-4xl mx-auto bg-white text-slate-900 shadow-2xl rounded-2xl p-8 sm:p-12 print:shadow-none print:rounded-none print:p-0 print:max-w-none">
        {/* Document Header */}
        <header className="border-b-2 border-blue-600 pb-6 mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6">
          <div>
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
              {personalDetails.name}
            </h1>
            <p className="text-lg font-bold text-blue-600 mt-1">
              {personalDetails.role}
            </p>
            <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed">
              {personalDetails.about}
            </p>
          </div>

          <div className="text-xs space-y-1.5 text-slate-600 shrink-0 font-medium border-l-2 border-blue-100 sm:pl-4">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span>{personalDetails.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <a href={`mailto:${personalDetails.email}`} className="hover:underline">
                {personalDetails.email}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Linkedin className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <a href={personalDetails.linkedin} target="_blank" rel="noreferrer" className="hover:underline">
                linkedin.com/in/mayur-utekar
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Github className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <a href={personalDetails.github} target="_blank" rel="noreferrer" className="hover:underline">
                github.com/MU124
              </a>
            </div>
          </div>
        </header>

        {/* 2-Column Grid Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:grid-cols-12">
          {/* Main Left Column (Experience & Projects) */}
          <div className="md:col-span-8 space-y-8">
            {/* Work History */}
            <section>
              <h2 className="text-xs font-black uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-4">
                Professional Experience
              </h2>
              <div className="space-y-6">
                {experienceData.map((exp, idx) => (
                  <div key={idx} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-base font-bold text-slate-900">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {exp.techBadges.map((badge) => (
                        <span
                          key={badge}
                          className="px-2 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100"
                        >
                          {badge}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Enterprise Projects Highlights */}
            <section>
              <h2 className="text-xs font-black uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-4">
                Key Enterprise Projects
              </h2>
              <div className="space-y-4">
                {projectsData.slice(0, 4).map((proj) => (
                  <div key={proj.id} className="p-3 rounded-xl bg-slate-50 border border-slate-200/80">
                    <div className="flex justify-between items-center mb-1">
                      <h3 className="text-sm font-bold text-slate-900">
                        {proj.title}
                      </h3>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {proj.roleBadge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-2">
                      {proj.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="text-[10px] font-semibold text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Sidebar Column (Skills & Highlights) */}
          <div className="md:col-span-4 space-y-6">
            {/* Core Competencies */}
            <section>
              <h2 className="text-xs font-black uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-4">
                Technical Expertise
              </h2>
              <div className="space-y-4">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <h3 className="text-xs font-bold text-slate-800 mb-1.5">
                      {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`text-[10px] font-bold px-2 py-1 rounded ${
                            skill.isPrimary
                              ? "bg-slate-900 text-white"
                              : "bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Core SDLC Strengths */}
            <section>
              <h2 className="text-xs font-black uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3">
                Key Strengths
              </h2>
              <ul className="space-y-2 text-xs text-slate-700 font-medium">
                {personalDetails.summaryPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1.5">
                    <span className="text-blue-600 font-bold">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
