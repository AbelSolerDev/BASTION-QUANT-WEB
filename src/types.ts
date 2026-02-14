export type FeatureStatus = 'CONSTRUIDO' | 'EN DESARROLLO' | 'ROADMAP' | 'FUTURO';

export interface Feature {
  id: number;
  name: string;
  description: string;
  longDescription?: string; // "Para tontos" description
  status: FeatureStatus;
  icon: string;
  block: string;
}

export interface Block {
  id: string;
  title: string;
  description: string;
  phase: string;
}

export interface StatItem {
  value: string;
  label: string;
  subLabel?: string;
}