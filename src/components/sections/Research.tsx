"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, FileText } from "lucide-react";
import { researchPapers } from "@/data";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { PdfViewerModal } from "@/components/ui/PdfViewerModal";
import { IssuerBadge } from "@/components/ui/IssuerBadge";

export function Research() {
  const paper = researchPapers[0];
  const [open, setOpen] = useState(false);
  if (!paper) return null;

  return (
    <section id="research" className="relative z-[2] py-24 md:py-32">
      <div className="container-aetheris">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65 }}
          className="mb-14 max-w-3xl"
        >
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Academic Contribution
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Research <span className="text-primary">Paper</span>
          </h2>
          <p className="mt-4 font-sans text-muted md:text-lg">
            Open the paper in a full-screen viewer on this site or download the PDF file.
          </p>
        </motion.div>

        <motion.article
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ y: -4 }}
          className="overflow-hidden rounded-2xl border border-border bg-card transition-shadow duration-500 hover:border-primary hover:shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
        >
          <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
            <div className="p-8 md:p-12">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center bg-primary/10 text-primary">
                  <FileText size={22} strokeWidth={1.5} />
                </div>
                <IssuerBadge issuer={paper.institution} />
              </div>
              <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                {paper.institution} · {paper.date}
              </p>
              <h3 className="mb-4 font-display text-xl font-bold leading-snug md:text-2xl">
                {paper.title}
              </h3>
              <p className="mb-2 font-mono text-xs text-muted">
                {paper.authors.join(", ")}
                {paper.supervisor ? ` · Supervisor: ${paper.supervisor}` : ""}
              </p>
              <p className="mb-8 font-sans text-sm leading-relaxed text-muted md:text-base">
                {paper.abstract}
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {paper.keywords.map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-md border border-border bg-section px-3 py-1 font-mono text-[11px] text-muted"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <MagneticButton
                onClick={() => setOpen(true)}
                className="min-w-0 gap-2 px-6"
              >
                <Eye size={14} />
                View Paper In App
              </MagneticButton>
            </div>

            <button
              type="button"
              onClick={() => setOpen(true)}
              className="relative min-h-[280px] border-t border-border lg:border-l lg:border-t-0"
            >
              {paper.coverImage && (
                <Image
                  src={paper.coverImage}
                  alt="Medical imaging research cover"
                  fill
                  className="object-cover opacity-80 transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <span className="absolute bottom-6 left-6 inline-flex items-center gap-2 rounded-full border border-primary/40 bg-background/80 px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary backdrop-blur-md">
                <Eye size={14} /> Open viewer
              </span>
            </button>
          </div>
        </motion.article>
      </div>

      <PdfViewerModal
        open={open}
        onClose={() => setOpen(false)}
        title={paper.title}
        subtitle={`${paper.institution} · ${paper.date}`}
        pdfPath={paper.pdfPath}
      />
    </section>
  );
}
