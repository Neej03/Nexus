export type CategoryId = 
  | 'all'
  | 'ai'
  | 'design'
  | 'datascience'
  | 'education'
  | 'healthcare'
  | 'weather'
  | 'ecommerce'
  | 'cybersecurity'
  | 'visualization'
  | 'utilities'
  | 'architecture';

export type ThemeMode = 'dark' | 'cyberpunk' | 'midnight' | 'ocean' | 'purpleneon' | 'light';

export interface Project {
  id: string;
  title: string;
  category: CategoryId;
  categoryLabel: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  url: string;
  features: string[];
  technologies: string[];
  featured?: boolean;
  launchCount: number;
  rating: number;
  gradient: string;
  badge?: string;
  accentColor: string;
}

export interface CategoryInfo {
  id: CategoryId;
  label: string;
  icon: string;
  count: number;
  description: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  tag: string;
  projectsCount: number;
}
