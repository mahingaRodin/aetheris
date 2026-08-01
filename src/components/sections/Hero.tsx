"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/data";
import { HeroShader } from "@/components/effects/HeroShader";
import { MagneticButton } from "@/components/ui/MagneticButton";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 },
  },
};

const item = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export function Hero() {
  const [lead, ...rest] = siteConfig.headline.split("Intelligent Systems");

  return (
    <header
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden"
    >
      <HeroShader />

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 mx-auto max-w-5xl px-4 text-center md:px-16"
      >
        <motion.div variants={item} className="mb-6">
          <span className="inline-block border border-primary/40 bg-primary/5 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
            Strategic Robotics Leadership
          </span>
        </motion.div>

        <motion.h1
          variants={item}
          className="mb-8 font-display text-4xl font-extrabold leading-[1.1] tracking-tight md:text-6xl lg:text-[4rem]"
        >
          {lead}
          <span className="text-gold-gradient">Intelligent Systems</span>
          {rest.join("Intelligent Systems") || ""}
        </motion.h1>

        <motion.div
          variants={item}
          className="mb-12 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs uppercase tracking-[0.12em] text-muted md:text-sm"
        >
          {siteConfig.titles.map((title, index) => (
            <span key={title} className="inline-flex items-center gap-4">
              {index > 0 && (
                <span className="hidden text-primary sm:inline" aria-hidden>
                  •
                </span>
              )}
              <span>{title}</span>
            </span>
          ))}
        </motion.div>

        <motion.p
          variants={item}
          className="mx-auto mb-12 max-w-2xl font-sans text-base leading-relaxed text-muted md:text-lg"
        >
          {siteConfig.subheadline}
        </motion.p>

        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <MagneticButton href={siteConfig.ctaPrimary.href}>
            {siteConfig.ctaPrimary.label}
          </MagneticButton>
          <MagneticButton
            href={siteConfig.ctaSecondary.href}
            variant="secondary"
          >
            {siteConfig.ctaSecondary.label}
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-opacity hover:opacity-80"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">
          Explore
        </span>
        <ChevronDown size={20} className="animate-bounce" strokeWidth={1.5} />
      </motion.a>
    </header>
  );
}
