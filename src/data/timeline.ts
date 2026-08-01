import type { TimelineItem } from "@/types";

export const timeline: TimelineItem[] = [
  {
    id: "exp-principal",
    type: "experience",
    title: "Principal Systems Engineer",
    organization: "Aether Dynamics",
    location: "Remote / Global",
    startDate: "2023",
    endDate: "Present",
    description:
      "Leading architecture for autonomous fleet platforms spanning embedded controllers, secure edge compute, and multi-cloud orchestration.",
    highlights: [
      "Reduced mission decision latency by 38% across production fleets",
      "Established zero-trust firmware signing and supply-chain attestation",
    ],
  },
  {
    id: "exp-staff",
    type: "experience",
    title: "Staff DevOps & Security Engineer",
    organization: "Nimbus Infrastructure",
    location: "San Francisco, CA",
    startDate: "2020",
    endDate: "2023",
    description:
      "Designed resilient delivery pipelines and defensive controls for high-availability robotics and industrial IoT platforms.",
    highlights: [
      "Migrated 120+ services to Kubernetes with blue-green releases",
      "Built continuous compliance framework for SOC2 and ISO 27001",
    ],
  },
  {
    id: "exp-embedded",
    type: "experience",
    title: "Embedded Systems Engineer",
    organization: "Vector Robotics",
    location: "Austin, TX",
    startDate: "2016",
    endDate: "2020",
    description:
      "Developed real-time control firmware and perception interfaces for mobile industrial robots operating in contested RF environments.",
  },
  {
    id: "edu-ms",
    type: "education",
    title: "M.S. Robotics & Autonomous Systems",
    organization: "Stanford University",
    location: "Stanford, CA",
    startDate: "2014",
    endDate: "2016",
    description:
      "Focused on motion planning, multi-agent coordination, and secure cyber-physical systems.",
  },
  {
    id: "edu-bs",
    type: "education",
    title: "B.S. Computer Engineering",
    organization: "Georgia Institute of Technology",
    location: "Atlanta, GA",
    startDate: "2010",
    endDate: "2014",
    description:
      "Specialization in embedded systems, digital design, and network security fundamentals.",
  },
];
