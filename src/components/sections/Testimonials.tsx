"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { testimonials } from "@/data";

function QuoteCard({
  quote,
  name,
  role,
  company,
  avatarImage,
  index,
}: {
  quote: string;
  name: string;
  role: string;
  company: string;
  avatarImage: string;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [glow, setGlow] = useState({ x: 50, y: 50, active: false });

  function onMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setGlow({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.55 }}
      onMouseMove={onMove}
      onMouseLeave={() => setGlow((g) => ({ ...g, active: false }))}
      className="relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-transform duration-400 hover:-translate-y-1"
      style={{
        backgroundImage: glow.active
          ? `radial-gradient(420px circle at ${glow.x}% ${glow.y}%, rgba(212,175,55,0.12), transparent 45%)`
          : undefined,
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300"
        style={{
          opacity: glow.active ? 1 : 0,
          background: `linear-gradient(135deg, rgba(212,175,55,0.35), transparent 40%, transparent 60%, rgba(244,211,94,0.2))`,
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        }}
      />
      <p className="mb-8 font-sans text-base leading-relaxed text-muted md:text-lg">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-4">
        <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border">
          <Image
            src={avatarImage}
            alt={name}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <p className="font-display text-sm font-semibold">{name}</p>
          <p className="font-mono text-[11px] uppercase tracking-wider text-muted">
            {role} · {company}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-section py-24 md:py-32">
      <div className="container-aetheris">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Leadership Insights
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Endorsements
          </h2>
          <p className="mt-4 font-sans text-muted md:text-lg">
            Perspectives from executives and principal engineers who have
            partnered on mission-critical systems.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((item, index) => (
            <QuoteCard key={item.id} {...item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
