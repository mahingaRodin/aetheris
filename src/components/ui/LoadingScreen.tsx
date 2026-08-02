"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RodinMark } from "@/components/ui/RodinMark";
import { siteConfig } from "@/data";

const BOOT_LINES = [
  "> Initializing Rodin Kernel...",
  "> Loading System Architecture...",
  "> Calibrating Autonomy Routines...",
  "> Handshake Established!",
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
      }, 26);
      return () => clearTimeout(timeout);
    }

    if (lineIndex < BOOT_LINES.length - 1) {
      const timeout = setTimeout(() => {
        setLineIndex((i) => i + 1);
        setTyped("");
      }, 280);
      return () => clearTimeout(timeout);
    }

    const exit = setTimeout(() => {
      setVisible(false);
      onComplete?.();
    }, 750);
    return () => clearTimeout(exit);
  }, [typed, lineIndex, visible, onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex w-full max-w-lg flex-col items-center px-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.6, filter: "blur(12px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="relative mb-8 flex h-28 w-36 items-center justify-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-primary/15"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-1 rounded-full border border-dashed border-primary/25"
              />
              <RodinMark
                width={120}
                height={91}
                className="relative z-10 drop-shadow-[0_0_36px_rgba(244,202,80,0.5)]"
              />
              <motion.div
                aria-hidden
                className="pointer-events-none absolute inset-0 overflow-hidden rounded-2xl"
              >
                <motion.div
                  className="absolute -inset-y-8 w-16 rotate-12 bg-gradient-to-r from-transparent via-secondary/40 to-transparent"
                  animate={{ x: ["-120%", "220%"] }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    repeatDelay: 0.6,
                  }}
                />
              </motion.div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="mb-8 font-display text-3xl font-extrabold tracking-tighter text-gold-gradient"
            >
              {siteConfig.brand}
            </motion.p>

            <div className="w-full rounded-2xl border border-border bg-card/80 p-6 font-mono text-xs leading-relaxed text-muted md:text-sm">
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

            <div className="mt-8 h-px w-full overflow-hidden bg-border">
              <motion.div
                className="h-full bg-primary"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
