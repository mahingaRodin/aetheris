"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "ghost";
  type?: "button" | "submit";
};

const variants = {
  primary:
    "bg-primary text-on-primary hover:brightness-110 shadow-[0_0_0_0_rgba(212,175,55,0)] hover:shadow-[0_0_24px_rgba(212,175,55,0.25)]",
  secondary:
    "border border-primary text-primary bg-transparent hover:bg-primary/10",
  ghost:
    "border border-border text-muted hover:border-primary/50 hover:text-foreground",
};

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  variant = "primary",
  type = "button",
}: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 180, damping: 16, mass: 0.4 });

  function handleMove(e: React.MouseEvent) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * 0.25);
    y.set(offsetY * 0.25);
  }

  function handleLeave() {
    x.set(0);
    y.set(0);
  }

  const sharedClass = cn(
    "inline-flex items-center justify-center px-8 py-3.5 font-mono text-sm font-bold uppercase tracking-[0.15em] rounded-full transition-all duration-300 min-w-[200px]",
    variants[variant],
    className,
  );

  if (href) {
    return (
      <motion.a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        style={{ x: springX, y: springY }}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.94 }}
        className={sharedClass}
        onClick={onClick}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={type}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.94 }}
      className={sharedClass}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}
