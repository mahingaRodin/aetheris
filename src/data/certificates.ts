import type { Certificate } from "@/types";

export const certificates: Certificate[] = [
  {
    id: "aws-sap",
    title: "AWS Certified Solutions Architect — Professional",
    issuer: "Amazon Web Services",
    date: "2025",
    credentialId: "AWS-SAP-2025-88421",
    pdfPath: "/certificates/aws-solutions-architect.pdf",
  },
  {
    id: "cissp",
    title: "Certified Information Systems Security Professional",
    issuer: "(ISC)²",
    date: "2024",
    credentialId: "CISSP-2024-11903",
    pdfPath: "/certificates/cissp.pdf",
  },
  {
    id: "cka",
    title: "Certified Kubernetes Administrator",
    issuer: "Cloud Native Computing Foundation",
    date: "2024",
    credentialId: "CKA-2024-55217",
    pdfPath: "/certificates/cka.pdf",
  },
  {
    id: "ros-dev",
    title: "ROS 2 Developer Professional",
    issuer: "Open Robotics Institute",
    date: "2023",
    credentialId: "ROS2-PRO-2023-44109",
    pdfPath: "/certificates/ros2-developer.pdf",
  },
];
