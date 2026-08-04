"use client";

import { useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Download, X } from "lucide-react";

type ImageViewerModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  imagePath: string;
};

export function ImageViewerModal({
  open,
  onClose,
  title,
  subtitle,
  imagePath,
}: ImageViewerModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[80] flex items-center justify-center p-3 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            aria-label="Close image preview"
            className="absolute inset-0 bg-[#07080D]/88 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[94vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-[0_0_0_1px_rgba(212,175,55,0.2),0_40px_100px_rgba(0,0,0,0.65)]"
          >
            <div className="flex items-start justify-between gap-4 border-b border-primary/20 bg-gradient-to-r from-primary/10 via-transparent to-secondary/5 p-5 md:p-6">
              <div className="min-w-0">
                {subtitle && (
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    {subtitle}
                  </p>
                )}
                <h3 className="mt-1 truncate font-display text-lg font-semibold md:text-2xl">
                  {title}
                </h3>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={imagePath}
                  download
                  className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-primary transition-colors hover:bg-primary/10"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={14} /> Save
                </a>
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-full border border-border p-2 text-muted transition-colors hover:border-primary hover:text-primary"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-auto bg-[#0b0b0b] p-4 md:p-8">
              <div className="relative h-[70vh] w-full max-w-3xl">
                <Image
                  src={imagePath}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
