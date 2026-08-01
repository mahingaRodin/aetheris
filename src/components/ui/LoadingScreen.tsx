"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/data";

const BOOT_LINES = [
  "> initializing aetheris kernel...",
  "> loading systems architecture...",
  "> calibrating autonomy protocols...",
  "> handshake ready.",
];

type LoadingScreenProps = {
  onComplete?: () => void;
};

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [visible, setVisible] = useState(true);
  const [lineIndex, setLineIndex] = useState(0);
  const [typed, setTyped] = useState("");

  useEffect(() => {
    if (!visible) return;

    const current = BOOT_LINES[lineIndex] ?? "";
    if (typed.length < current.length) {
      const timeout = setTimeout(() => {
        setTyped(current.slice(0, typed.length + 1));
      }, 28);
      return () => clearTimeout(timeout);
    }

    if (lineIndex < BOOT_LINES.length - 1) {
      const timeout = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setTyped("");
      }, 320);
      return () => clearTimeout(timeout);
    }

    const exit = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 700);
    return () => clearTimeout(exit);
  }, [typed, lineIndex, visible, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="w-full max-w-lg px-6">
            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8 text-center font-display text-3xl font-extrabold tracking-tighter text-primary"
            >
              {siteConfig.brand}
            </motion.p>

            <div className="rounded-2xl border border-border bg-card/80 p-6 font-mono text-xs leading-relaxed text-muted md:text-sm">
              {BOOT_LINES.slice(0, lineIndex).map((line) => (
                <p key={line} className="mb-2 text-secondary/80">
                  {line}
                </p>
              ))}
              <p className="text-primary">
                {typed}
                <span className="ml-0.5 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
              </p>
            </div>

            <div className="mt-8 h-px overflow-hidden bg-border">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
