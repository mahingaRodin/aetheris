"use client";

import { motion } from "framer-motion";
import { RodinMark } from "@/components/ui/RodinMark";
import { cn } from "@/lib/utils";

type BrandLogoProps = {
  className?: string;
  size?: number;
  animated?: boolean;
  priority?: boolean;
};

export function BrandLogo({
  className,
  size = 40,
  animated = false,
}: BrandLogoProps) {
  const mark = (
    <RodinMark
      width={size}
      height={Math.round(size * 0.76)}
      className={cn(
        "drop-shadow-[0_0_18px_rgba(212,175,55,0.45)]",
        className,
      )}
    />
  );

  if (!animated) return mark;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.08, rotate: 2 }}
      whileTap={{ scale: 0.94 }}
      className="relative inline-flex items-center justify-center"
    >
      {mark}
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            "0 0 0 rgba(244,202,80,0)",
            "0 0 32px rgba(244,202,80,0.45)",
            "0 0 0 rgba(244,202,80,0)",
          ],
        }}
        transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
