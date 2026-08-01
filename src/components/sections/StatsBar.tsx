"use client";

import { motion } from "framer-motion";
import { stats } from "@/data";

export function StatsBar() {
  return (
    <section className="relative z-10 border-y border-border/60 bg-[#110e07]">
      <div className="container-aetheris grid grid-cols-2 gap-6 py-16 md:grid-cols-4 md:gap-8 md:py-24">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ delay: index * 0.08, duration: 0.6 }}
            className="text-center"
          >
            <p className="font-display text-4xl font-extrabold tracking-tight text-primary md:text-5xl lg:text-6xl">
              {stat.value}
            </p>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-muted md:text-xs">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
