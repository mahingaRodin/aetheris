"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, MapPin, Shield, Terminal } from "lucide-react";
import { aboutContent, siteConfig } from "@/data";

const pillarIcons = [Terminal, Bot, Shield];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-aetheris grid items-center gap-16 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 border border-primary/20" />
          <motion.div
            whileHover={{ scale: 1.015 }}
            transition={{ duration: 0.5 }}
            className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card shadow-[0_0_0_1px_rgba(212,175,55,0.25),0_30px_80px_rgba(0,0,0,0.65),0_0_60px_rgba(212,175,55,0.18)]"
          >
            <Image
              src={aboutContent.portraitImage}
              alt={`${siteConfig.name} — professional portrait`}
              fill
              className="object-cover object-top transition-all duration-700"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-primary/20" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 }}
            className="absolute bottom-6 right-6 max-w-[240px] border border-border bg-section/95 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md"
          >
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Core Philosophy
            </p>
            <p className="mt-2 font-sans text-sm italic text-muted">
              &ldquo;{aboutContent.philosophy}&rdquo;
            </p>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {aboutContent.eyebrow}
          </p>
          <h2 className="mb-3 font-display text-3xl font-bold tracking-tight md:text-4xl">
            {siteConfig.name.split(" ")[0]}&apos;s{" "}
            <span className="text-primary">Architecture</span>
          </h2>
          <p className="mb-2 flex items-center gap-2 font-mono text-xs text-muted">
            <MapPin size={14} className="text-primary" />
            {aboutContent.location} · {aboutContent.organizations}
          </p>
          <p className="mb-10 font-sans text-base leading-relaxed text-muted md:text-lg">
            {aboutContent.body}
          </p>

          <div className="space-y-7">
            {aboutContent.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Bot;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 6 }}
                  className="flex gap-5"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-primary/10 text-primary">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="mb-1 font-display text-lg font-semibold">
                      {pillar.title}
                    </h3>
                    <p className="font-sans text-sm leading-relaxed text-muted">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
