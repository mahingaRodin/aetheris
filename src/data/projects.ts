import type { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "ingoboka",
    title: "Ingoboka Microinsurance Platform",
    description:
      "B2B2C digital microinsurance system serving underserved communities—authentication, policies, payments, claims, notifications, and partner integrations across a Spring Boot API and modern frontend.",
    techStack: ["Java", "Spring Boot", "PostgreSQL", "Next.js", "REST"],
    githubLink: "https://github.com/mahingaRodin/Ingoboka-api-v1",
    liveLink: "https://ingoboka-platform.vercel.app",
    caseStudyLink: "https://github.com/mahingaRodin/ingoboka-fe-v2",
    imagePath:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=1600&h=1000&fit=crop&q=80",
    featured: true,
    category: "Cloud",
  },
  {
    id: "multi-tenant-pos",
    title: "Multi-Tenant POS SaaS",
    description:
      "Production-minded multi-tenant point-of-sale platform with Dockerized Spring Boot APIs, Swagger docs, Kubernetes deployment paths, and a frontend for carts, shops, and tenant commerce.",
    techStack: ["Java", "Spring Boot", "Docker", "Kubernetes", "Swagger"],
    githubLink: "https://github.com/mahingaRodin/multi-tenant-pos-api",
    liveLink: "http://pos.185.229.227.70.nip.io/swagger-ui/index.html",
    caseStudyLink: "https://github.com/mahingaRodin/mutli-tenant-pos-fe",
    imagePath:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=1000&fit=crop&q=80",
    category: "Cloud",
  },
  {
    id: "epiguard",
    title: "EpiGuard AI Microservices",
    description:
      "Healthcare microservices architecture processing real-time clinic data through Kafka, PostgreSQL persistence, and Redis caching—paired with AI services for epidemiological intelligence.",
    techStack: ["Java", "Spring Boot", "Kafka", "Redis", "Python"],
    githubLink: "https://github.com/mahingaRodin/epiguard-microservices-be",
    liveLink: "https://github.com/mahingaRodin/epiguard-micorservice-ai",
    caseStudyLink: "https://github.com/mahingaRodin/epiguard-microservices-be",
    imagePath:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1600&h=1000&fit=crop&q=80",
    category: "AI",
  },
  {
    id: "water-meter-cv",
    title: "Rwanda Water Meter Vision",
    description:
      "Computer vision pipeline for automatic water meter detection and reading using YOLO—bridging embedded sensing, AI inference, and utility operations for real-world infrastructure.",
    techStack: ["Python", "YOLO", "OpenCV", "Computer Vision"],
    githubLink:
      "https://github.com/mahingaRodin/rwanda-water-meter-readiing-system",
    liveLink:
      "https://github.com/mahingaRodin/rwanda-water-meter-readiing-system",
    caseStudyLink:
      "https://github.com/mahingaRodin/rwanda-water-meter-readiing-system",
    imagePath:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=1600&h=1000&fit=crop&q=80",
    category: "AI",
  },
  {
    id: "facelocking",
    title: "FaceLocking Identity System",
    description:
      "Intelligent face locking system that recognizes and tracks a selected identity over time, with real-time action detection for secure access and continuous identity assurance.",
    techStack: ["Python", "OpenCV", "ONNX", "Deep Learning"],
    githubLink: "https://github.com/mahingaRodin/FaceLocking.v2",
    liveLink: "https://github.com/mahingaRodin/FaceLocking",
    caseStudyLink: "https://github.com/mahingaRodin/face_recogn_arc_onxx",
    imagePath:
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1600&h=1000&fit=crop&q=80",
    category: "Security",
  },
  {
    id: "pocketpilot",
    title: "PocketPilot Finance OS",
    description:
      "iOS finance navigator with smart budgets, AI insights, safe-to-spend logic, and chatbot assistance—backed by Swift and Go services for personal financial clarity.",
    techStack: ["Swift", "Go", "iOS", "AI Insights"],
    githubLink: "https://github.com/mahingaRodin/PocketPilot-Fe",
    liveLink: "https://github.com/mahingaRodin/PocketPilot-Be",
    caseStudyLink: "https://github.com/mahingaRodin/pocketpilot-api-v2",
    imagePath:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1600&h=1000&fit=crop&q=80",
    category: "Embedded",
  },
  {
    id: "solubility",
    title: "Solubility Predictor",
    description:
      "Machine learning model that predicts chemical solubility from molecular features—one of the highest-starred research-oriented projects in the public portfolio.",
    techStack: ["Python", "ML", "Data Science"],
    githubLink: "https://github.com/mahingaRodin/Solubility-Predictor",
    liveLink: "https://github.com/mahingaRodin/Solubility-Predictor",
    caseStudyLink: "https://github.com/mahingaRodin/Solubility-Predictor",
    imagePath:
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&h=1000&fit=crop&q=80",
    category: "AI",
  },
  {
    id: "cyber-maze",
    title: "Cyber Maze Security Lab",
    description:
      "Interactive cybersecurity training environment and maze lab designed to sharpen defensive thinking, operational security habits, and hands-on exploit awareness.",
    techStack: ["HTML", "Security", "Lab Simulation"],
    githubLink: "https://github.com/mahingaRodin/cyber-maze-security-lab",
    liveLink: "https://github.com/mahingaRodin/maze_game_lab",
    caseStudyLink: "https://github.com/mahingaRodin/Remote-Control-",
    imagePath:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1600&h=1000&fit=crop&q=80",
    category: "Security",
  },
];
