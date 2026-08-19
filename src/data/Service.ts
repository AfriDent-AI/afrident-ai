import {
  GraduationCap,
  Globe2,
  ScanLine,
  TrendingUp,
  ScanBarcode,
  Globe,
} from "lucide-react";

export const services = [
  {
    id: "ai-assistant",
    title: "Multilingual AI Assistant (LLM)",
    description: "Ask questions and get oral-health information in your preferred African language.",
    items: [
      "Ask dental questions",
      "Clinical consultation",
      "Multilingual translation",
    ],
    icon:Globe ,
    color: "blue",
    path: "assistant",
  },
  {
    id: "education",
    title: "Patient Oral Health Education",
    description: "Learn about oral diseases, prevention and everyday oral hygiene.",
    items: [
      "Learn about oral diseases",
      "Preventive care",
      "Oral hygiene tutorials",
    ],
    icon: GraduationCap,
    color: "teal",
    path: "patients",
  },
  {
    id: "clinical-support",
    title: "Clinical Decision Support",
    description: "Support dentists with AI-powered clinical decision-making.",
    items: [
      "Differential diagnosis",
      "Treatment planning",
      "Clinical guidelines",
    ],
    icon: ScanBarcode,
    color: "cyan",
    path: "dentists",
  },
  {
    id: "research-policy",
    title: "Dental Research & Policy",
    description: "Explore African oral-health data, research and policy resources.",
    items: [
      "African oral health statistics",
      "Publications",
      "Policy dashboard",
    ],
    icon: TrendingUp,
    color: "green",
    path: "researchers",
  },
];