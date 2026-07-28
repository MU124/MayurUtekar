"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/app/providers";
import { Sun, Moon, Menu, X, Code2, ArrowUpRight } from "lucide-react";
import { personalDetails } from "@/data/portfolioData";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Timeline", href: "#timeline" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass-header border-b border-[var(--border-color)] py-3.5 shadow-sm"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#"
          className="flex items-center gap-2.5 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold shadow-md shadow-blue-500/20 group-hover:scale-105 transition-transform">
            <Code2 className="w-5.5 h-5.5" />
          </div>
          <div>
            <span className="font-bold text-lg tracking-tight text-[var(--text-primary)] block leading-tight">
              Mayur Utekar
            </span>
            <span className="text-xs text-[var(--text-secondary)] block">
              Senior Full Stack Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1.5 bg-[var(--bg-card)] border border-[var(--border-color)] px-4 py-1.5 rounded-full shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-[var(--text-secondary)] hover:text-[var(--brand-primary)] px-3 py-1.5 rounded-md transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Actions (Theme Toggle & CTA) */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2.5 rounded-xl border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:border-blue-500 transition-colors cursor-pointer"
            title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
          >
            {theme === "light" ? (
              <Moon className="w-4.5 h-4.5 text-slate-700" />
            ) : (
              <Sun className="w-4.5 h-4.5 text-amber-400" />
            )}
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4.5 py-2.5 text-sm font-semibold rounded-xl bg-[var(--brand-primary)] hover:bg-[var(--brand-hover)] text-white shadow-md shadow-blue-600/20 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Get in Touch
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-lg border border-[var(--border-color)] text-[var(--text-primary)]"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
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
        <div className="md:hidden glass-header border-b border-[var(--border-color)] px-4 pt-4 pb-6 mt-2">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[var(--text-primary)] hover:text-blue-600 py-2 border-b border-[var(--border-color)]/50"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 text-center px-4 py-2.5 text-sm font-semibold rounded-xl bg-blue-600 text-white"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
