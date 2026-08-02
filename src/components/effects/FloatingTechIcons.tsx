"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Cloud,
  Code2,
  Cpu,
  Database,
  GitBranch,
  Lock,
  Server,
  Shield,
  Terminal,
  Workflow,
} from "lucide-react";

type Floater = {
  icon: typeof Bot;
  x: string;
  y: string;
  delay: number;
  duration: number;
  size: number;
};

const floaters: Floater[] = [
  { icon: Bot, x: "6%", y: "12%", delay: 0, duration: 14, size: 26 },
  { icon: Cloud, x: "88%", y: "18%", delay: 1.1, duration: 16, size: 28 },
  { icon: GitBranch, x: "12%", y: "42%", delay: 0.4, duration: 13, size: 24 },
  { icon: Shield, x: "82%", y: "48%", delay: 1.8, duration: 15, size: 26 },
  { icon: Terminal, x: "22%", y: "72%", delay: 0.9, duration: 17, size: 22 },
  { icon: Database, x: "74%", y: "78%", delay: 2.2, duration: 14, size: 24 },
  { icon: Cpu, x: "48%", y: "8%", delay: 1.4, duration: 12, size: 22 },
  { icon: Server, x: "58%", y: "88%", delay: 0.6, duration: 18, size: 26 },
  { icon: Lock, x: "92%", y: "66%", delay: 2.6, duration: 13, size: 22 },
  { icon: Code2, x: "4%", y: "58%", delay: 1.6, duration: 15, size: 24 },
  { icon: Workflow, x: "36%", y: "28%", delay: 2.0, duration: 16, size: 22 },
];

/** Azure-style cloud glyph using Lucide Cloud with a badge feel */
function AzureBadge({ size }: { size: number }) {
  return (
    <span className="relative inline-flex items-center justify-center">
      <Cloud size={size} strokeWidth={1.4} />
      <span className="absolute -bottom-1 -right-1 font-mono text-[8px] font-bold text-secondary">
        Az
      </span>
    </span>
  );
}

export function FloatingTechIcons({
  density = "page",
}: {
  density?: "hero" | "page";
}) {
  const items =
    density === "hero"
      ? floaters.slice(0, 7)
      : [
          ...floaters,
          { icon: Bot, x: "28%", y: "55%", delay: 3, duration: 19, size: 20 },
          {
            icon: Shield,
            x: "66%",
            y: "34%",
            delay: 2.4,
            duration: 14,
            size: 20,
          },
        ];

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
    >
      {items.map((item, index) => {
        const Icon = item.icon;
        const isAzure = index === 1;
        return (
          <motion.div
            key={`${item.x}-${item.y}-${index}`}
            className="absolute text-primary/55"
            style={{ left: item.x, top: item.y }}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.45, 0.9, 0.55, 0.85],
              y: [0, -34, 12, -20, 0],
              x: [0, 16, -14, 10, 0],
              rotate: [0, 10, -8, 5, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <span className="relative inline-flex">
              <span className="absolute inset-0 rounded-full bg-primary/30 blur-xl" />
              <span className="relative drop-shadow-[0_0_18px_rgba(212,175,55,0.65)]">
                {isAzure ? (
                  <AzureBadge size={item.size} />
                ) : (
                  <Icon size={item.size} strokeWidth={1.6} />
                )}
              </span>
            </span>
          </motion.div>
        );
      })}
    </div>
  );
}
