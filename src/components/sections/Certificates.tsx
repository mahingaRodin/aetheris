"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, ExternalLink, X } from "lucide-react";
import { certificates } from "@/data";
import type { Certificate } from "@/types";

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  return (
    <section id="certificates" className="py-24 md:py-32">
      <div className="container-aetheris">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Verified Credentials
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Certificates
          </h2>
          <p className="mt-4 font-sans text-muted md:text-lg">
            Industry-recognized validation across cloud architecture, security,
            orchestration, and robotics.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, duration: 0.5 }}
              onClick={() => setActive(cert)}
              className="group rounded-2xl border border-border bg-card p-6 text-left transition-all duration-400 hover:-translate-y-1 hover:border-primary"
            >
              <div className="mb-6 flex h-11 w-11 items-center justify-center bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <Award size={20} strokeWidth={1.5} />
              </div>
              <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                {cert.issuer}
              </p>
              <h3 className="mb-4 font-display text-base font-semibold leading-snug">
                {cert.title}
              </h3>
              <div className="mt-auto flex items-center justify-between font-mono text-[10px] uppercase tracking-wider text-muted">
                <span>{cert.date}</span>
                <span className="inline-flex items-center gap-1 text-primary opacity-0 transition-opacity group-hover:opacity-100">
                  Preview <ExternalLink size={12} />
                </span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <button
              type="button"
              aria-label="Close certificate preview"
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
              onClick={() => setActive(null)}
            />
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.35 }}
              className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[0_30px_80px_rgba(0,0,0,0.55)]"
            >
              <div className="flex items-start justify-between gap-4 border-b border-border p-5 md:p-6">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    {active.issuer} · {active.date}
                  </p>
                  <h3 className="mt-1 font-display text-lg font-semibold md:text-xl">
                    {active.title}
                  </h3>
                  <p className="mt-1 font-mono text-xs text-muted">
                    ID: {active.credentialId}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setActive(null)}
                  className="rounded-full border border-border p-2 text-muted transition-colors hover:border-primary hover:text-primary"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
              <div className="min-h-[50vh] flex-1 bg-[#0d0d0d]">
                <iframe
                  title={active.title}
                  src={active.pdfPath}
                  className="h-[60vh] w-full border-0"
                />
                <div className="border-t border-border p-4 text-center">
                  <p className="font-mono text-xs text-muted">
                    PDF preview — drop files into{" "}
                    <span className="text-primary">/public/certificates</span>
                  </p>
                  <a
                    href={active.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-primary"
                  >
                    Open PDF <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
