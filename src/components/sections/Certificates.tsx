"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";
import { certificates } from "@/data";
import type { Certificate } from "@/types";
import { PdfViewerModal } from "@/components/ui/PdfViewerModal";
import { ImageViewerModal } from "@/components/ui/ImageViewerModal";
import { IssuerBadge } from "@/components/ui/IssuerBadge";

export function Certificates() {
  const [active, setActive] = useState<Certificate | null>(null);

  const isImage =
    active?.previewType === "image" || Boolean(active?.imagePath && !active?.pdfPath);

  return (
    <section id="certificates" className="relative z-[2] py-24 md:py-32">
      <div className="container-aetheris">
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            Verified Credentials
          </p>
          <h2 className="font-display text-3xl font-bold tracking-tight md:text-4xl">
            Certificates
          </h2>
          <p className="mt-4 font-sans text-muted md:text-lg">
            Preview any credential on-site. Download only when you click Save.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {certificates.map((cert, index) => (
            <motion.button
              key={cert.id}
              type="button"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04, duration: 0.5 }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setActive(cert)}
              className="group cursor-magnetic overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[0_12px_40px_rgba(0,0,0,0.25)] transition-all duration-400 hover:border-primary hover:shadow-[0_20px_50px_rgba(212,175,55,0.12)]"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-[#111]">
                {cert.coverImage && (
                  <Image
                    src={cert.coverImage}
                    alt=""
                    fill
                    className={
                      cert.previewType === "image"
                        ? "object-contain bg-[#0b0b0b] p-3 opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
                        : "object-cover opacity-70 transition-transform duration-700 group-hover:scale-105"
                    }
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute left-4 top-4">
                  <IssuerBadge issuer={cert.issuer} logoSrc={cert.issuerLogo} />
                </div>
                <span className="absolute bottom-3 right-3 inline-flex items-center gap-1 rounded-full border border-primary/40 bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-primary opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100">
                  <Eye size={12} /> View
                </span>
              </div>
              <div className="p-5">
                <p className="mb-2 font-mono text-[10px] uppercase tracking-[0.15em] text-primary">
                  {cert.issuer}
                </p>
                <h3 className="mb-3 font-display text-base font-semibold leading-snug">
                  {cert.title}
                </h3>
                <p className="font-mono text-[10px] uppercase tracking-wider text-muted">
                  {cert.date}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <PdfViewerModal
        open={Boolean(active) && !isImage}
        onClose={() => setActive(null)}
        title={active?.title ?? ""}
        subtitle={
          active
            ? `${active.issuer} · ${active.date} · ${active.credentialId}`
            : undefined
        }
        pdfPath={active?.pdfPath ?? ""}
      />

      <ImageViewerModal
        open={Boolean(active) && isImage}
        onClose={() => setActive(null)}
        title={active?.title ?? ""}
        subtitle={
          active
            ? `${active.issuer} · ${active.date} · ${active.credentialId}`
            : undefined
        }
        imagePath={active?.imagePath ?? ""}
      />
    </section>
  );
}
