"use client";

import { useId, type SVGProps } from "react";
import { cn } from "@/lib/utils";

type RodinMarkProps = SVGProps<SVGSVGElement> & {
  title?: string;
};

/** Standalone transparent Rodin R-mark — safe for any background */
export function RodinMark({
  className,
  title = "Rodin",
  ...props
}: RodinMarkProps) {
  const uid = useId().replace(/:/g, "");
  const gradId = `rodin-gold-${uid}`;

  return (
    <svg
      viewBox="0 0 500 380"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label={title}
      className={cn("overflow-visible", className)}
      {...props}
    >
      <title>{title}</title>
      <defs>
        <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#F4CA50" />
          <stop offset="48%" stopColor="#D09220" />
          <stop offset="100%" stopColor="#7A4C08" />
        </linearGradient>
      </defs>
      <polygon
        points="136,93 398,93 398,116 106,116"
        fill={`url(#${gradId})`}
      />
      <polygon
        points="106,126 216,191 106,256 106,234 192,191 106,148"
        fill={`url(#${gradId})`}
      />
      <polygon
        points="144,126 254,191 144,256 144,234 230,191 144,148"
        fill={`url(#${gradId})`}
      />
      <path
        fillRule="evenodd"
        fill={`url(#${gradId})`}
        d="M 266,93 A 132,49 0 0 1 266,191 Z M 282,111 A 100,32 0 0 1 282,175 Z"
      />
      <polygon
        points="263,197 303,197 398,280 358,280"
        fill={`url(#${gradId})`}
      />
    </svg>
  );
}
