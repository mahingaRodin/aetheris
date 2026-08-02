import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "Microsoft Azure",
      "Docker / CI/CD",
      "Linux Administration",
      "Kubernetes Deployments",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "shield",
    skills: [
      "Network Fundamentals",
      "Phishing Detection ML",
      "Secure API Design",
      "Operational Security Labs",
    ],
  },
  {
    id: "robotics-embedded",
    title: "Systems & Embedded",
    icon: "cpu",
    skills: [
      "C / C++",
      "MQTT / IoT Control",
      "ANPR & Vision Hardware",
      "Bash Automation",
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    icon: "brain",
    skills: [
      "PyTorch / TensorFlow",
      "YOLO Computer Vision",
      "Diffusion Models Research",
      "FastAPI ML Services",
    ],
  },
];
