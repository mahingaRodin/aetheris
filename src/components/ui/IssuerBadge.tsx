"use client";

import { cn } from "@/lib/utils";

const palette: Record<string, string> = {
  HackerRank: "bg-[#00EA64]/15 text-[#00EA64] border-[#00EA64]/40",
  CYBERIUM: "bg-primary/15 text-primary border-primary/40",
  "Professional Certification": "bg-[#ED8B00]/15 text-[#ED8B00] border-[#ED8B00]/40",
  "Verified Record": "bg-secondary/15 text-secondary border-secondary/40",
  "Rwanda Coding Academy": "bg-primary/15 text-primary border-primary/40",
};

type IssuerBadgeProps = {
  issuer: string;
  className?: string;
};

/** Reliable local badge — never depends on external CDN images */
export function IssuerBadge({ issuer, className }: IssuerBadgeProps) {
  const initials = issuer
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center rounded-xl border font-mono text-xs font-bold tracking-wider",
        palette[issuer] ?? "bg-primary/15 text-primary border-primary/40",
        className,
      )}
      aria-hidden
    >
      {initials}
    </span>
  );
}
