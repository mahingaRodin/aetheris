"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { timeline } from "@/data";

export function Trajectory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="trajectory" className="py-24 md:py-32">
      <div className="container-aetheris">
        <div className="mb-16 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Chronology of Excellence
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Trajectory
          </h2>
          <p className="mt-4 font-sans text-muted md:text-lg">
            A deliberate path from embedded systems to executive-grade platform
            leadership.
          </p>
        </div>

        <div ref={ref} className="relative ml-3 md:ml-4">
          <div className="absolute bottom-0 left-0 top-0 w-px bg-border" />
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-0 top-0 w-px origin-top bg-gradient-to-b from-primary via-primary to-primary/10"
          />

          <div className="space-y-12 md:space-y-16">
            {timeline.map((item) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ delay: 0.05, duration: 0.55 }}
                className="relative pl-10 md:pl-14"
              >
                <span className="absolute left-[-5px] top-1.5 h-2.5 w-2.5 rounded-full border border-primary bg-background shadow-[0_0_12px_rgba(212,175,55,0.45)]" />
                <div className="mb-2 flex flex-wrap items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    {item.startDate} — {item.endDate}
                  </span>
                  <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-muted">
                    {item.type}
                  </span>
                </div>
                <h3 className="font-display text-xl font-semibold md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-1 font-mono text-sm text-muted">
                  {item.organization} · {item.location}
                </p>
                <p className="mt-4 max-w-2xl font-sans text-sm leading-relaxed text-muted md:text-base">
                  {item.description}
                </p>
                {item.highlights && (
                  <ul className="mt-4 space-y-2">
                    {item.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex gap-2 font-mono text-xs text-muted md:text-sm"
                      >
                        <span className="text-primary">▹</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-10 h-px w-full max-w-xl bg-gradient-to-r from-border to-transparent last:hidden md:mt-12" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
