"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring } from "framer-motion";

type Ripple = { id: number; x: number; y: number };

export function MagicCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [ripples, setRipples] = useState<Ripple[]>([]);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 380, damping: 28, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 380, damping: 28, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;
    setEnabled(true);
    document.documentElement.classList.add("magic-cursor");

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement | null;
      const interactive = Boolean(
        target?.closest(
          "a, button, input, textarea, select, [role='button'], .cursor-magnetic",
        ),
      );
      setHovering(interactive);
    };

    const onDown = (e: MouseEvent) => {
      const id = Date.now();
      setRipples((prev) => [...prev.slice(-4), { id, x: e.clientX, y: e.clientY }]);
      window.setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id));
      }, 700);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    return () => {
      document.documentElement.classList.remove("magic-cursor");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 z-[120] mix-blend-screen"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      >
        <motion.div
          animate={{
            width: hovering ? 52 : 18,
            height: hovering ? 52 : 18,
            borderColor: hovering
              ? "rgba(244,211,94,0.95)"
              : "rgba(212,175,55,0.75)",
            backgroundColor: hovering
              ? "rgba(212,175,55,0.12)"
              : "rgba(212,175,55,0.35)",
          }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
          className="rounded-full border-2 shadow-[0_0_24px_rgba(212,175,55,0.45)]"
        />
      </motion.div>

      <AnimatePresence>
        {ripples.map((ripple) => (
          <motion.span
            key={ripple.id}
            aria-hidden
            className="pointer-events-none fixed z-[119] rounded-full border border-secondary"
            style={{ left: ripple.x, top: ripple.y }}
            initial={{ width: 8, height: 8, x: "-50%", y: "-50%", opacity: 0.9 }}
            animate={{ width: 96, height: 96, opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
          />
        ))}
      </AnimatePresence>
    </>
  );
}
