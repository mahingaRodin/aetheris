import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.join(__dirname),
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "cdn.simpleicons.org" },
    ],
  },
  async headers() {
    return [
      {
        source: "/certificates/:path*.pdf",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/research/:path*.pdf",
        headers: [
          { key: "Content-Disposition", value: "inline" },
          { key: "Cache-Control", value: "public, max-age=3600" },
        ],
      },
      {
        source: "/resume/:path*.pdf",
        headers: [
          { key: "Content-Disposition", value: "inline" },
        ],
      },
    ];
  },
};

export default nextConfig;
