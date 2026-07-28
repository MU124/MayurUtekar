"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X, ArrowUpRight, Download } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";
import ResumeModal from "./ResumeModal";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resumeModalOpen, setResumeModalOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("about");

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Timeline", href: "#timeline", id: "timeline" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    // IntersectionObserver for scroll spy active section highlight
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled
            ? "bg-[var(--bg-primary)] border-[var(--border-color)] py-3.5 shadow-xs"
            : "bg-transparent border-transparent py-5 shadow-none"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo & Avatar */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none rounded-lg p-1"
          >
            <div className="relative w-10 h-10 rounded-xl overflow-hidden group-hover:scale-105 transition-transform shrink-0">
              <Image
                src="/mayur.png"
                alt="Mayur Utekar Profile Avatar"
                fill
                sizes="40px"
                className="object-cover object-top"
              />
            </div>
            <div>
              <span className="font-extrabold text-base tracking-tight text-[var(--text-primary)] block leading-tight">
                Mayur Utekar
              </span>
              <span className="text-xs text-[var(--text-secondary)] block font-medium">
                Senior Full Stack Engineer
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Scroll Spy Highlight */}
          <nav className="hidden md:flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border-color)] px-3 py-1.5 rounded-full shadow-xs">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`relative text-sm font-semibold px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                    isActive
                      ? "text-[var(--brand-primary)] bg-blue-50 dark:bg-blue-950/60"
                      : "text-[var(--text-secondary)] hover:text-[var(--brand-primary)]"
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Actions (CTA) */}
          <div className="hidden md:flex items-center gap-2.5">
            <button
              onClick={() => setResumeModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-blue-500 hover:text-blue-600 transition-all cursor-pointer shadow-2xs"
            >
              <Download className="w-3.5 h-3.5" />
              Resume
            </button>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-hover)] text-white shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)]"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[var(--bg-primary)] border-b border-[var(--border-color)] px-4 pt-4 pb-6 mt-2 shadow-lg">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-base font-semibold py-2 border-b border-[var(--border-color)]/50 ${
                  activeSection === link.id
                    ? "text-blue-600 font-bold"
                    : "text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setResumeModalOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-blue-500 hover:text-blue-600 transition-colors shadow-2xs cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Resume
              </button>

              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center px-4 py-2.5 text-sm font-bold rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20"
              >
                Get in Touch
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>

      <ResumeModal
        isOpen={resumeModalOpen}
        onClose={() => setResumeModalOpen(false)}
      />
    </>
  );
}
