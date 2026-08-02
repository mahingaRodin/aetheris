"use client";

import { motion } from "framer-motion";
import { Brain, Cloud, Cpu, Shield } from "lucide-react";
import { skillCategories } from "@/data";
import type { SkillCategory } from "@/types";

const iconMap: Record<SkillCategory["icon"], typeof Cloud> = {
  cloud: Cloud,
  shield: Shield,
  cpu: Cpu,
  brain: Brain,
};

export function Skills() {
  return (
    <section id="skills" className="bg-section py-24 md:py-32">
      <div className="container-aetheris">
        <div className="mb-14 flex flex-col gap-4 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
              Technical <span className="text-primary">Ecosystem</span>
            </h2>
            <p className="mt-4 max-w-xl font-sans text-muted">
              Comprehensive mastery over the modern technology stack, from
              silicon to software.
            </p>
          </div>
          <div className="divider-luxury hidden flex-1 md:mx-12 md:mb-3 md:block" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <motion.article
                key={category.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: index * 0.08, duration: 0.55 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.98 }}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-400 hover:border-primary"
              >
                <div className="mb-8 flex h-12 w-12 items-center justify-center bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={22} strokeWidth={1.5} />
                </div>
                <p className="mb-5 font-mono text-xs uppercase tracking-[0.15em] text-primary">
                  {category.title}
                </p>
                <ul className="space-y-3 font-mono text-sm text-muted">
                  {category.skills.map((skill) => (
                    <li key={skill} className="flex items-start gap-2">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
