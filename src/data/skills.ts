import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "cloud-devops",
    title: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "AWS / Azure / GCP",
      "Kubernetes (EKS/GKE)",
      "CI/CD Automation",
      "Terraform / IaC",
    ],
  },
  {
    id: "cybersecurity",
    title: "Cybersecurity",
    icon: "shield",
    skills: [
      "Ethical Hacking",
      "Network Forensics",
      "Zero Trust Architecture",
      "Compliance Standards",
    ],
  },
  {
    id: "robotics-embedded",
    title: "Robotics & Embedded",
    icon: "cpu",
    skills: [
      "ROS2 / C++ / Python",
      "RTOS (FreeRTOS)",
      "FPGA / Verilog",
      "LIDAR & Computer Vision",
    ],
  },
  {
    id: "ai-ml",
    title: "AI / ML",
    icon: "brain",
    skills: [
      "TensorFlow / PyTorch",
      "Reinforcement Learning",
      "NLP / LLM Integration",
      "Neural Networks",
    ],
  },
];
