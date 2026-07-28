"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Code2,
  Database,
  Cpu,
  Globe,
  Layers,
  Terminal,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function TechStrip() {
  const techBadges = [
    { name: "ASP.NET Core", category: "Backend", icon: Server },
    { name: "Angular", category: "Frontend", icon: Code2 },
    { name: "React", category: "Frontend", icon: Globe },
    { name: "Node.js", category: "Backend", icon: Cpu },
    { name: "SQL Server", category: "Database", icon: Database },
    { name: "TypeScript", category: "Language", icon: Code2 },
    { name: "Dapper ORM", category: "Database", icon: Zap },
    { name: "REST Web APIs", category: "Architecture", icon: Layers },
    { name: "SignalR Hubs", category: "Real-time", icon: Terminal },
    { name: "Jenkins CI/CD", category: "DevOps", icon: ShieldCheck },
    { name: "IIS Web Server", category: "DevOps", icon: Server },
  ];

  // Duplicate for seamless infinite marquee loop
  const marqueeList = [...techBadges, ...techBadges];

  return (
    <div className="py-8 bg-[var(--bg-secondary)] border-y border-[var(--border-color)] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-3 text-center">
        <span className="text-[11px] font-extrabold uppercase tracking-widest text-[var(--text-muted)]">
          Featured Core Stack & Technologies
        </span>
      </div>

      <div className="relative flex overflow-x-hidden">
        <motion.div
          className="flex items-center gap-4 whitespace-nowrap py-2"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {marqueeList.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className="inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] text-xs font-extrabold text-[var(--text-primary)] shadow-2xs hover:border-[var(--brand-primary)] transition-all cursor-default"
              >
                <IconComp className="w-4 h-4 text-[var(--brand-primary)] shrink-0" />
                <span>{item.name}</span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] font-semibold">
                  {item.category}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
