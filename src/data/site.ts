import type { SiteConfig, NavLink } from "@/types";

export const siteConfig: SiteConfig = {
  brand: "RODIN",
  name: "Systems Engineer",
  headline: "Engineering Intelligent Systems for the Future",
  subheadline:
    "Building autonomous platforms at the intersection of robotics, secure infrastructure, and executive-grade engineering leadership.",
  titles: [
    "Systems Engineer",
    "Software Engineer",
    "Cybersecurity Engineer",
    "DevOps Engineer",
    "Embedded Systems Developer",
  ],
  ctaPrimary: { label: "View Portfolio", href: "#projects" },
  ctaSecondary: { label: "Download Executive Brief", href: "#contact" },
  email: "handshake@aetheris.dev",
  socials: [
    { label: "GitHub", href: "https://github.com/mahingaRodin" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/m-rodin-1b21a9375/" },
    { label: "X", href: "https://x.com/rodin9878" },
  ],
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Trajectory", href: "#trajectory" },
  { label: "Projects", href: "#projects" },
  { label: "Credentials", href: "#certificates" },
  { label: "Insights", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "12+", label: "Years of Experience" },
  { value: "85+", label: "Projects Completed" },
  { value: "42", label: "Technologies" },
  { value: "15", label: "Global Certifications" },
];

export const aboutContent = {
  eyebrow: "Executive Summary",
  title: "The Architect's Vision",
  philosophy: "Precision in code, autonomy in action.",
  body: "In the intersection of high-level robotics and strategic leadership, I architect systems that don't just solve problems—they define new paradigms. My approach merges the rigorous discipline of embedded systems with the scalability of modern cloud-native architectures.",
  pillars: [
    {
      title: "Next-Gen Robotics",
      description:
        "Developing low-latency autonomous navigation and reactive swarm intelligence frameworks.",
    },
    {
      title: "AI-Driven Optimization",
      description:
        "Leveraging deep learning to refine real-time industrial workflows and predictive maintenance.",
    },
    {
      title: "Defensive Engineering",
      description:
        "Hardening robotics infrastructure against sophisticated cyber threats and edge vulnerabilities.",
    },
  ],
  portraitImage:
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1000&fit=crop&q=80",
};
