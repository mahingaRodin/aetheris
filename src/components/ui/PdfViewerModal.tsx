"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Download, Loader2, X } from "lucide-react";

type PdfViewerModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  pdfPath: string;
};

/**
 * Renders PDFs with pdf.js onto canvas.
 * Loads via URL (not forced Content-Type headers) to avoid empty bodies.
 */
export function PdfViewerModal({
  open,
  onClose,
  title,
  subtitle,
  pdfPath,
}: PdfViewerModalProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const docRef = useRef<any>(null);
  const loadIdRef = useRef(0);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") {
        setPage((p) => Math.min(p + 1, pageCount || p + 1));
      }
      if (e.key === "ArrowLeft") setPage((p) => Math.max(p - 1, 1));
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose, pageCount]);

  useEffect(() => {
    if (!open || !pdfPath) return;

    const loadId = ++loadIdRef.current;
    let cancelled = false;
    setLoading(true);
    setError(null);
    setPage(1);
    setPageCount(0);
    docRef.current = null;

    (async () => {
      try {
        const pdfjs = await import("pdfjs-dist");
        pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.mjs";

        // Prefer URL loading — more reliable than arrayBuffer for large static PDFs
        const loadingTask = pdfjs.getDocument({
          url: pdfPath,
          withCredentials: false,
          // Disable range/streaming quirks that can yield empty docs on some hosts
          disableRange: true,
          disableStream: true,
          disableAutoFetch: true,
        });

        const doc = await loadingTask.promise;
        if (cancelled || loadId !== loadIdRef.current) {
          await doc.cleanup();
          return;
        }

        if (!doc.numPages) {
          throw new Error("PDF reported zero pages");
        }

        docRef.current = doc;
        setPageCount(doc.numPages);
        setLoading(false);
      } catch (err) {
        if (cancelled || loadId !== loadIdRef.current) return;
        console.error(err);
        setError(
          "Unable to preview this file in-app. Use Save to download it instead.",
        );
        setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      const doc = docRef.current;
      docRef.current = null;
      void doc?.cleanup?.();
    };
  }, [open, pdfPath]);

  useEffect(() => {
    if (!open || !docRef.current || !canvasRef.current || page < 1 || loading) {
      return;
    }

    let cancelled = false;

    (async () => {
      try {
        const doc = docRef.current;
        if (!doc) return;
        const pdfPage = await doc.getPage(page);
        if (cancelled) return;

        const canvas = canvasRef.current;
        if (!canvas) return;
        const context = canvas.getContext("2d");
        if (!context) return;

        const base = pdfPage.getViewport({ scale: 1 });
        const maxWidth = Math.min(960, window.innerWidth - 48);
        const scale = Math.min(maxWidth / base.width, 1.6);
        const viewport = pdfPage.getViewport({ scale });

        canvas.width = viewport.width;
        canvas.height = viewport.height;
        context.clearRect(0, 0, canvas.width, canvas.height);

        await pdfPage.render({
          canvasContext: context,
          viewport,
          canvas,
        }).promise;
      } catch (err) {
        if (!cancelled) {
          console.error(err);
          setError("Failed to render this page.");
        }
      }
    })();

    return () => {
      cancelled = true;
    };
  }, [open, page, pageCount, loading]);

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
            aria-label="Close PDF preview"
            className="absolute inset-0 bg-[#07080D]/88 backdrop-blur-md"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-primary/40 bg-card shadow-[0_0_0_1px_rgba(212,175,55,0.2),0_40px_100px_rgba(0,0,0,0.65)]"
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
                <p className="mt-1 font-mono text-[10px] text-muted">
                  In-app canvas preview
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={pdfPath}
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

            <div className="relative flex min-h-0 flex-1 flex-col items-center overflow-auto bg-[#0b0b0b] p-4">
              {loading && (
                <div className="flex h-[60vh] items-center justify-center gap-3 font-mono text-sm text-primary">
                  <Loader2 className="animate-spin" size={18} />
                  Rendering preview…
                </div>
              )}
              {error && !loading && (
                <div className="flex h-[40vh] max-w-md flex-col items-center justify-center gap-4 text-center">
                  <p className="font-sans text-sm text-muted">{error}</p>
                  <a
                    href={pdfPath}
                    download
                    className="inline-flex items-center gap-2 rounded-full border border-primary/40 px-4 py-2 font-mono text-xs uppercase tracking-wider text-primary"
                  >
                    <Download size={14} /> Download PDF
                  </a>
                </div>
              )}
              {!loading && !error && (
                <canvas
                  ref={canvasRef}
                  className="max-w-full rounded-lg shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                />
              )}
            </div>

            {pageCount > 0 && !error && (
              <div className="flex items-center justify-center gap-4 border-t border-border px-4 py-3">
                <button
                  type="button"
                  disabled={page <= 1}
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  className="rounded-full border border-border p-2 text-muted transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
                  aria-label="Previous page"
                >
                  <ChevronLeft size={16} />
                </button>
                <span className="font-mono text-xs text-muted">
                  Page {page} / {pageCount}
                </span>
                <button
                  type="button"
                  disabled={page >= pageCount}
                  onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                  className="rounded-full border border-border p-2 text-muted transition-colors hover:border-primary hover:text-primary disabled:opacity-30"
                  aria-label="Next page"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
