"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Bot, Shield, Terminal } from "lucide-react";
import { aboutContent } from "@/data";

const pillarIcons = [Bot, Terminal, Shield];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container-aetheris grid items-center gap-16 md:grid-cols-2 md:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 translate-x-4 translate-y-4 border border-primary/20" />
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-card">
            <Image
              src={aboutContent.portraitImage}
              alt="Executive portrait"
              fill
              className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              sizes="(max-width: 768px) 100vw, 40vw"
              priority={false}
            />
          </div>
          <div className="absolute bottom-6 right-6 max-w-[220px] border border-border bg-section/95 p-5 shadow-[0_20px_40px_rgba(0,0,0,0.4)] backdrop-blur-md">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-primary">
              Core Philosophy
            </p>
            <p className="mt-2 font-sans text-sm italic text-muted">
              &ldquo;{aboutContent.philosophy}&rdquo;
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-15%" }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            {aboutContent.eyebrow}
          </p>
          <h2 className="mb-8 font-display text-3xl font-bold tracking-tight md:text-4xl">
            The Architect&apos;s <span className="text-primary">Vision</span>
          </h2>
          <p className="mb-10 font-sans text-base leading-relaxed text-muted md:text-lg">
            {aboutContent.body}
          </p>

          <div className="space-y-7">
            {aboutContent.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index] ?? Bot;
              return (
                <div key={pillar.title} className="flex gap-5">
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
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
