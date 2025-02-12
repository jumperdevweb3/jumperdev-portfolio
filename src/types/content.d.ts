import { LucideIcon } from "lucide-react";

declare global {

  // Projects
  // -------------------------------
  interface IProjectLinks {
    live: string | null;
    github: string | null;
  }

  interface IProject {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    tech: string[];
    features: string[];
    links: ProjectLinks;
    teamType: 'Solo' | 'Team';
    icon: LucideIcon;
  }
  // -------------------------------

  // Achievements
  // -------------------------------
  interface IAchievement {
    title: string;
    description: string;
    features: string[];
  }
  // -------------------------------

  // Experience
  // -------------------------------
  interface IExperience {
    title: string;
    company: string;
    period: string;
    description: string;
    tech: string[];
    achievements: string[];
  }
  // -------------------------------

  // Technologies
  // -------------------------------
  interface ITechnology {
    icon: LucideIcon
    name: string
    skills: string[]
  }
  // -------------------------------

  // Testimonials
  // -------------------------------
  interface ITestimonial {
    text: string;
    author: string;
    position: string;
  }
  // -------------------------------
}

export {};
