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
      <main className="max-w-4xl mx-auto bg-white text-slate-900 shadow-2xl rounded-2xl p-8 sm:p-12 print:shadow-none print:rounded-none print:p-0 print:max-w-none print:w-full">
        <style jsx global>{`
          @media print {
            @page {
              size: A4 portrait;
              margin: 12mm 12mm 12mm 12mm;
            }
            body {
              background: white !important;
              color: black !important;
              -webkit-print-color-adjust: exact !important;
              print-color-adjust: exact !important;
            }
            .print-break-inside-avoid {
              break-inside: avoid !important;
              page-break-inside: avoid !important;
            }
          }
        `}</style>

        {/* Document Header */}
        <header className="border-b-2 border-blue-600 pb-5 mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 print:flex-row print:justify-between print:pb-4 print:mb-6">
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900 print:text-2xl">
              {personalDetails.name}
            </h1>
            <p className="text-base font-bold text-blue-600 mt-0.5 print:text-sm">
              {personalDetails.role}
            </p>
            <p className="text-xs text-slate-600 mt-1 max-w-xl leading-relaxed print:text-[11px]">
              {personalDetails.about}
            </p>
          </div>

          <div className="text-xs space-y-1 text-slate-600 shrink-0 font-medium sm:border-l-2 sm:border-blue-100 sm:pl-4 print:text-[11px] print:border-l-2 print:border-blue-200 print:pl-3">
            <div>📍 {personalDetails.location}</div>
            <div>✉️ {personalDetails.email}</div>
            <div>🔗 linkedin.com/in/mayur-utekar</div>
            <div>💻 github.com/MU124</div>
          </div>
        </header>

        {/* Main Resume Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 print:block print:space-y-6">
          {/* Main Left Column / Section */}
          <div className="md:col-span-8 space-y-6 print:w-full">
            {/* Work History */}
            <section className="print-break-inside-avoid">
              <h2 className="text-xs font-black uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3 print:text-[11px]">
                Professional Experience
              </h2>
              <div className="space-y-5">
                {experienceData.map((exp, idx) => (
                  <div key={idx} className="space-y-1.5 print-break-inside-avoid">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 print:text-xs">
                          {exp.role}
                        </h3>
                        <p className="text-xs font-semibold text-blue-600 print:text-[11px]">
                          {exp.company}
                        </p>
                      </div>
                      <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded print:text-[10px] print:bg-slate-100">
                        {exp.period}
                      </span>
                    </div>

                    <ul className="list-disc list-inside text-xs text-slate-700 space-y-1 pl-1 print:text-[11px]">
                      {exp.responsibilities.map((item, i) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-1 pt-1">
                      {exp.techBadges.map((badge) => (
                        <span
                          key={badge}
                          className="px-1.5 py-0.5 rounded bg-blue-50 text-blue-700 text-[10px] font-bold border border-blue-100 print:text-[9px]"
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
            <section className="print-break-inside-avoid">
              <h2 className="text-xs font-black uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3 print:text-[11px]">
                Key Enterprise Projects
              </h2>
              <div className="space-y-3">
                {projectsData.slice(0, 4).map((proj) => (
                  <div key={proj.id} className="p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 print-break-inside-avoid print:bg-slate-50">
                    <div className="flex justify-between items-center mb-0.5">
                      <h3 className="text-xs font-bold text-slate-900 print:text-[11px]">
                        {proj.title}
                      </h3>
                      <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800">
                        {proj.roleBadge}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed mb-1 print:text-[10px]">
                      {proj.shortDescription}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {proj.techStack.map((tech) => (
                        <span key={tech} className="text-[9px] font-semibold text-slate-600 bg-white px-1.5 py-0.5 rounded border border-slate-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column / Section */}
          <div className="md:col-span-4 space-y-6 print:w-full print:pt-4">
            {/* Core Competencies */}
            <section className="print-break-inside-avoid">
              <h2 className="text-xs font-black uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-3 print:text-[11px]">
                Technical Expertise
              </h2>
              <div className="space-y-3">
                {skillCategories.map((cat) => (
                  <div key={cat.title}>
                    <h3 className="text-xs font-bold text-slate-800 mb-1 print:text-[11px]">
                      {cat.title}
                    </h3>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((skill) => (
                        <span
                          key={skill.name}
                          className={`text-[10px] font-bold px-1.5 py-0.5 rounded print:text-[9px] ${
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
            <section className="print-break-inside-avoid">
              <h2 className="text-xs font-black uppercase tracking-wider text-blue-600 border-b border-slate-200 pb-1 mb-2 print:text-[11px]">
                Key Strengths
              </h2>
              <ul className="space-y-1 text-xs text-slate-700 font-medium print:text-[10px]">
                {personalDetails.summaryPoints.map((pt, i) => (
                  <li key={i} className="flex items-start gap-1">
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
