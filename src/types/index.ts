export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  liveLink: string;
  caseStudyLink: string;
  imagePath: string;
  featured?: boolean;
  category?: "Robotics" | "Cloud" | "Security" | "AI" | "Embedded";
}

export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId: string;
  /** PDF path for document certificates */
  pdfPath?: string;
  /** Image path for image certificates (e.g. Apple Swift) */
  imagePath?: string;
  previewType?: "pdf" | "image";
  issuerLogo?: string;
  coverImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  avatarImage: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: "cloud" | "shield" | "cpu" | "brain";
  skills: string[];
}

export interface TimelineItem {
  id: string;
  type: "experience" | "education" | "award";
  title: string;
  organization: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  highlights?: string[];
  engagement?: "contract" | "part-time" | "award" | "education";
}

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  brand: string;
  name: string;
  headline: string;
  subheadline: string;
  titles: string[];
  ctaPrimary: { label: string; href: string };
  ctaSecondary: { label: string; href: string };
  email: string;
  socials: { label: string; href: string }[];
}
