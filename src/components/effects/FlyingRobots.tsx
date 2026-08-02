"use client";

import { motion } from "framer-motion";
import { Bot } from "lucide-react";

const robots = [
  { x: "8%", y: "18%", delay: 0, duration: 9, size: 28 },
  { x: "78%", y: "22%", delay: 1.2, duration: 11, size: 34 },
  { x: "18%", y: "68%", delay: 0.6, duration: 10, size: 24 },
  { x: "86%", y: "62%", delay: 2, duration: 12, size: 30 },
  { x: "48%", y: "12%", delay: 1.5, duration: 8, size: 22 },
  { x: "62%", y: "78%", delay: 0.3, duration: 13, size: 26 },
];

export function FlyingRobots() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[5] overflow-hidden"
    >
      {robots.map((robot, index) => (
        <motion.div
          key={index}
          className="absolute text-primary/70"
          style={{ left: robot.x, top: robot.y }}
          initial={{ opacity: 0, y: 20 }}
          animate={{
            opacity: [0.25, 0.85, 0.35, 0.8],
            y: [0, -28, 10, -18, 0],
            x: [0, 18, -12, 8, 0],
            rotate: [0, 8, -6, 4, 0],
          }}
          transition={{
            duration: robot.duration,
            delay: robot.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="relative inline-flex">
            <span className="absolute inset-0 rounded-full bg-primary/20 blur-xl" />
            <Bot size={robot.size} strokeWidth={1.4} className="relative drop-shadow-[0_0_12px_rgba(212,175,55,0.55)]" />
          </span>
        </motion.div>
      ))}
    </div>
  );
}
