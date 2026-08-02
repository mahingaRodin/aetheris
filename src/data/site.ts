import type { SiteConfig, NavLink } from "@/types";

export const siteConfig: SiteConfig = {
  brand: "RODIN",
  name: "Rodin Mahinga",
  headline: "Engineering Intelligent Systems for the Future",
  subheadline:
    "Backend, DevOps, Azure, and Machine Learning engineer from Kigali—building secure APIs, cloud-native pipelines, and AI systems that scale from silicon to production. Open to full-time roles.",
  titles: [
    "Software Engineer",
    "DevOps Engineer",
    "Machine Learning Engineer",
    "Systems Programmer",
  ],
  ctaPrimary: { label: "View Mission Control", href: "#projects" },
  ctaSecondary: {
    label: "View Credentials",
    href: "#certificates",
  },
  email: "mahingarodin@gmail.com",
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
  { label: "Research", href: "#research" },
  { label: "Credentials", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "7+", label: "Years of Experience" },
  { value: "95+", label: "Public Repositories" },
  { value: "40+", label: "Systems Shipped" },
  { value: "11", label: "Verified Credentials" },
];

export const aboutContent = {
  eyebrow: "Executive Summary",
  title: "The Architect's Vision",
  philosophy: "Precision in code, autonomy in action.",
  body: "I am Uwonkunda Mahinga Rodin—a Software, DevOps, and Machine Learning engineer based in Kigali. Through contract and part-time engagements with Aphezis, Loxotech, and Rwanda TVET Board, I have designed scalable APIs, hardened delivery pipelines (including Azure-oriented cloud workflows), and shipped data-driven systems for AI and IoT. I am now seeking full-time roles where rigorous engineering meets executive-grade product leadership.",
  pillars: [
    {
      title: "Backend Systems at Scale",
      description:
        "Spring Boot and FastAPI architectures with PostgreSQL, Redis, and Kafka—built for throughput, integrity, and operational clarity.",
    },
    {
      title: "AI & Machine Learning",
      description:
        "PyTorch and TensorFlow models for prediction, computer vision, and medical imaging research—including diffusion-based augmentation.",
    },
    {
      title: "Cloud, Azure & DevOps",
      description:
        "Dockerized CI/CD, Linux operations, and Microsoft Azure experience for reliable cloud delivery under real production pressure.",
    },
  ],
  portraitImage: "/profile/rodin.jpg",
  location: "Kigali, Rwanda",
  phone: "+250 794 415 318",
  organizations: "Open to opportunities · Contract alumni: EchoSols · Loxotech · RTB",
};
