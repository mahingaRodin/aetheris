import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "RODIN | Rodin Mahinga — Engineering Intelligent Systems",
  description:
    "Portfolio of Uwonkunda Mahinga Rodin — Software, DevOps, Azure, and Machine Learning engineer from Kigali building secure APIs, AI systems, and production platforms.",
  keywords: [
    "Rodin Mahinga",
    "Uwonkunda Mahinga Rodin",
    "Backend Engineer",
    "DevOps",
    "Azure",
    "Machine Learning",
    "Kigali",
    "Rwanda Coding Academy",
    "Spring Boot",
    "portfolio",
  ],
  authors: [{ name: "Rodin Mahinga" }],
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/brand/rodin-favicon.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/brand/rodin-favicon.png", type: "image/png" }],
    shortcut: ["/favicon.svg"],
  },
  openGraph: {
    title: "RODIN | Rodin Mahinga",
    description:
      "Engineering intelligent systems — Backend, DevOps, Azure, and Machine Learning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} ${jetbrains.variable} dark h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-background font-sans text-foreground">
        {children}
      </body>
    </html>
  );
}
