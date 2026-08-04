"use client";

import { cn } from "@/lib/utils";

const palette: Record<string, string> = {
  HackerRank: "bg-[#0B1410] border-[#00EA64]/50",
  ThinkCyber: "bg-[#0B1220] border-[#00E5FF]/45",
  Apple: "bg-[#111] border-white/25",
  HackerRankGo: "bg-[#00141C] border-[#00ADD8]/45",
  "Rwanda Coding Academy": "bg-primary/10 border-primary/40",
};

type IssuerBadgeProps = {
  issuer: string;
  logoSrc?: string;
  className?: string;
};

/** Official issuer mark when available; initials fallback otherwise */
export function IssuerBadge({ issuer, logoSrc, className }: IssuerBadgeProps) {
  const initials = issuer
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <span
      className={cn(
        "inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl border p-2",
        palette[issuer] ?? "bg-primary/10 border-primary/40",
        className,
      )}
      title={issuer}
      aria-label={issuer}
    >
      {logoSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoSrc}
          alt={issuer}
          width={28}
          height={28}
          className="h-7 w-7 object-contain"
        />
      ) : (
        <span className="font-mono text-xs font-bold tracking-wider text-primary">
          {initials}
        </span>
      )}
    </span>
  );
}
