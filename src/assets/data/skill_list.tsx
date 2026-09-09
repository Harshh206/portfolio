import type { ComponentType } from "react";
import { Palette, Brain, Globe, Wrench, BarChart3 } from "lucide-react";

export interface Skill {
  name: string;
  level: number;
  isPrimary?: boolean;
}


export interface SkillCategory {
  icon: ComponentType<{ className?: string }>;
  title: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    icon: Palette,
    title: "Programming Languages",
    skills: [
      { name: "Python", level: 95, isPrimary: true },
      { name: "SQL", level: 80 },
      { name: "JavaScript", level: 75 },
      { name: "R", level: 75 },
    ],
  },
  {
    icon: BarChart3,
    title: "Data & Visualization",
    skills: [
      { name: "Pandas", level: 80 },
      { name: "NumPy", level: 80 },
      { name: "Matplotlib", level: 80 },
    ],
  },
  {
    icon: Brain,
    title: "AI/ML Frameworks",
    skills: [
      { name: "PyTorch", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "Scikit-learn", level: 80 },
      { name: "Hugging Face", level: 75 },
      { name: "LangGraph", level: 80 },
    ],
  },
  {
    icon: Globe,
    title: "Web Development",
    skills: [
      { name: "Django", level: 70 },
      { name: "HTML/CSS", level: 85 },
      { name: "Tailwind CSS", level: 75 },
      { name: "TypeScript", level: 70 },
      { name: "Responsive Design", level: 80 },
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Workflow",
    skills: [
      { name: "Git/GitHub", level: 85 },
      { name: "Figma", level: 75 },
      { name: "Canva", level: 75 },

    ],
  },
];
