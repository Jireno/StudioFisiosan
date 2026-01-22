import { LucideIcon } from 'lucide-react';

export interface Professional {
  id: number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

export interface Therapy {
  id: number;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: LucideIcon;
  imageUrl?: string;
  position?: string;
}

export interface WorkingHours {
  day: string;
  hours: string;
}

export interface Testimonial {
  id: number;
  name: string;
  text: string;
  imageUrl?: string;
  role?: string; // e.g. "Paziente post-operatorio"
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
  position?: string; // e.g., 'object-top', 'object-center', 'object-bottom'
}

export enum VisitType {
  VALUTAZIONE = "Valutazione Iniziale",
  TERAPIA_MANUALE = "Terapia Manuale",
  RIABILITAZIONE = "Riabilitazione Post-Operatoria",
  TECAR = "Tecartherapia",
  LASER = "Laserterapia",
  MASSAGGIO = "Massaggio Terapeutico"
}