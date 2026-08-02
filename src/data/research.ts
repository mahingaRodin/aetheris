export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  institution: string;
  date: string;
  abstract: string;
  keywords: string[];
  pdfPath: string;
  supervisor?: string;
  coverImage?: string;
  institutionLogo?: string;
}

export const researchPapers: ResearchPaper[] = [
  {
    id: "diffusion-medical-imaging",
    title:
      "Revolutionizing Medical Imaging: The Vital Role of Diffusion Models in Modern Image Augmentation",
    authors: ["Uwonkunda Mahinga Rodin"],
    institution: "Rwanda Coding Academy",
    date: "January 2026",
    supervisor: "Dr. Awet Fesseha",
    abstract:
      "A comprehensive overview of denoising diffusion models for medical image augmentation—covering methodology, comparative analysis against GANs and VAEs, current challenges, and future directions for diagnostic accuracy when labeled clinical datasets are scarce.",
    keywords: [
      "Diffusion Models",
      "Medical Imaging",
      "Data Augmentation",
      "Deep Learning",
      "GANs",
      "VAEs",
    ],
    pdfPath: "/research/rodin-research-paper.pdf",
    coverImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1400&h=900&fit=crop&q=80",
    institutionLogo:
      "https://cdn.simpleicons.org/academia/D4AF37",
  },
];
