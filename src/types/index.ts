export interface Card {
  title: string;
  description: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // Type for the icon
  darkIcon: React.FC<React.SVGProps<SVGSVGElement>>; // Type for the dark mode icon
}

export interface CardData {
  cards: Card[];
}

export interface Project {
  id: number;
  name: string;
  href: string;
  description: string;
  imageSrc: string;
  tags: string[];
  stack: string;
}

export interface ProjectData {
  projects: Project[];
}

export interface PrimarySkills {
  id: number;
  name: string;
  description: string;
  lang: string[];
  icons: React.FC<React.SVGProps<SVGSVGElement>>[];
}

export interface PrimarySkillsData {
  skills: PrimarySkills[];
}
