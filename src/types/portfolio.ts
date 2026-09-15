export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  fullOverview?: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  technologies: string[];
  highlights: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  category: 'AI/ML' | 'Full-Stack' | 'Systems';
  interactiveType: 'loop' | 'civicpulse' | 'krishimithra' | 'malware';
}

export interface SkillCategory {
  title: string;
  skills: {
    name: string;
    description: string;
    level?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string[];
}

export interface HackathonItem {
  id: string;
  role: string;
  name: string;
  organizer?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  placement: string;
  event: string;
  institution: string;
  date: string;
  description?: string;
}
