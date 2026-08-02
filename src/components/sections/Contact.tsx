"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { siteConfig } from "@/data";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-aetheris">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Secure Channel
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Initiate Handshake
          </h2>
          <p className="mx-auto mt-4 max-w-xl font-sans text-muted md:text-lg">
            For strategic collaborations, advisory engagements, and
            architecture partnerships. Direct line:{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-primary transition-opacity hover:opacity-80"
            >
              {siteConfig.email}
            </a>
            {" · "}
            <a
              href="tel:+250794415318"
              className="text-primary transition-opacity hover:opacity-80"
            >
              +250 794 415 318
            </a>
          </p>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="mx-auto mt-14 max-w-2xl space-y-6 rounded-2xl border border-border bg-card p-6 md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block text-left">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                Name
              </span>
              <input
                required
                name="name"
                type="text"
                placeholder="Your name"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 font-sans text-sm text-foreground outline-none transition-all placeholder:text-muted/50 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
              />
            </label>
            <label className="block text-left">
              <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                Email
              </span>
              <input
                required
                name="email"
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 font-sans text-sm text-foreground outline-none transition-all placeholder:text-muted/50 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
              />
            </label>
          </div>

          <label className="block text-left">
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Subject
            </span>
            <input
              required
              name="subject"
              type="text"
              placeholder="Engagement intent"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 font-sans text-sm text-foreground outline-none transition-all placeholder:text-muted/50 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
            />
          </label>

          <label className="block text-left">
            <span className="mb-2 block font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
              Message
            </span>
            <textarea
              required
              name="message"
              rows={5}
              placeholder="Outline the mission, scope, and timeline."
              className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 font-sans text-sm text-foreground outline-none transition-all placeholder:text-muted/50 focus:border-primary focus:shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
            />
          </label>

          <div className="flex flex-col items-center gap-4 pt-2 sm:flex-row sm:justify-between">
            <MagneticButton type="submit" className="w-full sm:w-auto">
              Transmit Message
            </MagneticButton>
            {status === "sent" && (
              <p className="font-mono text-xs text-primary">
                Message queued — backend wiring pending.
              </p>
            )}
          </div>
        </motion.form>
      </div>
    </section>
  );
}
