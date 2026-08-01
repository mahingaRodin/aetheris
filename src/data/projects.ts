import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "nexus-swarm",
    title: "Nexus Swarm Orchestrator",
    description:
      "A distributed autonomy platform coordinating multi-agent robot fleets across industrial environments with sub-20ms decision latency and cryptographic command integrity.",
    techStack: ["ROS2", "C++", "Kubernetes", "gRPC", "CUDA"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    caseStudyLink: "#",
    imagePath: "/projects_images/nexus-swarm.svg",
    featured: true,
    category: "Robotics",
  },
  {
    id: "aegis-zero-trust",
    title: "Aegis Zero-Trust Edge",
    description:
      "Enterprise-grade security fabric for robotics endpoints—identity-aware networking, signed firmware pipelines, and continuous threat modeling at the silicon boundary.",
    techStack: ["Go", "mTLS", "Vault", "eBPF", "Terraform"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    caseStudyLink: "#",
    imagePath: "/projects_images/aegis-edge.svg",
    category: "Security",
  },
  {
    id: "forge-pipeline",
    title: "Forge Continuous Delivery",
    description:
      "Mission-critical CI/CD for embedded and cloud workloads—reproducible builds, hardware-in-the-loop gates, and golden-path deployments across hybrid fleets.",
    techStack: ["GitHub Actions", "Docker", "Ansible", "Python", "AWS"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    caseStudyLink: "#",
    imagePath: "/projects_images/forge-pipeline.svg",
    category: "Cloud",
  },
  {
    id: "helix-perception",
    title: "Helix Perception Stack",
    description:
      "Real-time multimodal perception combining LIDAR, stereo vision, and transformer-based scene understanding for precision navigation in unstructured terrain.",
    techStack: ["PyTorch", "OpenCV", "TensorRT", "Python", "FPGA"],
    githubLink: "https://github.com",
    liveLink: "https://example.com",
    caseStudyLink: "#",
    imagePath: "/projects_images/helix-perception.svg",
    category: "AI",
  },
];
