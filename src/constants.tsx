import {
  Activity,
  Zap,
  Move,
  Waves,
  ScanLine,
  Target
} from 'lucide-react';
import { Professional, Therapy, WorkingHours, VisitType, Testimonial, GalleryImage } from './types';

export const NAV_LINKS = [
  { name: 'Home', href: '#home' },
  { name: 'Chi Siamo', href: '#chi-siamo' },
  { name: 'Terapie', href: '#terapie' },
  { name: 'Studio', href: '#gallery' },
  { name: 'Orari', href: '#orari' },
  { name: 'Prenota', href: '#prenota' },
];

export const PROFESSIONALS: Professional[] = [
  {
    id: 1,
    name: "Dr. Lucio Santaniello",
    role: "Fisioterapista Titolare",
    bio: "Esperto in terapia manuale, riabilitazione post-chirurgica e utilizzo di tecnologie avanzate come K-Laser e Onde d'Urto.",
    // Assicurati di avere un file chiamato dottore.jpg in public/img/
    imageUrl: "/img/dottore.jpg"
  },
  {
    id: 2,
    name: "Team Fisiosan",
    role: "Staff Specializzato",
    bio: "Un'equipe di professionisti dedicati al recupero funzionale e al benessere del paziente attraverso percorsi personalizzati.",
    // Assicurati di avere un file chiamato staff.jpg in public/img/
    imageUrl: "/img/staff.jpg"
  },
  {
    id: 3,
    name: "Specialisti in Riabilitazione",
    role: "Riabilitazione Motoria",
    bio: "Focus su ginnastica correttiva, rieducazione posturale e recupero dell'atleta.",
    // Assicurati di avere un file chiamato riabilitazione.jpg in public/img/
    imageUrl: "/img/riabilitazione.jpg"
  }
];

// ... (imports remain)

export const THERAPIES: Therapy[] = [
  {
    id: 1,
    title: "K-Laser Cube 4",
    shortDescription: "Terapia dinamica multi-fase per il dolore cronico e acuto.",
    fullDescription: "Tecnologia avanzata per il trattamento di dolori muscolo-scheletrici, infiammazioni, e riparazione rapida dei tessuti. Efficace per stomatologia, patologia orale e traumi sportivi.",
    icon: Zap,
    imageUrl: "/img/klaser.jpg"
  },
  {
    id: 2,
    title: "Onde d'Urto",
    shortDescription: "Soluzione non invasiva per calcificazioni e tendiniti.",
    fullDescription: "Trattamento d'elezione per spina calcaneare, calcificazioni di spalla, epicondiliti e dolori cervicali. Stimola la rigenerazione tissutale.",
    icon: Target,
    imageUrl: "/img/onde-urto.jpg"
  },
  {
    id: 3,
    title: "Valutazione Ecografica",
    shortDescription: "Supporto diagnostico per un recupero mirato.",
    fullDescription: "Utilizzo dell'ecografia a supporto della fisioterapia per vedere in tempo reale la condizione dei tessuti e valutare la funzionalità muscolare in dinamica.",
    icon: ScanLine,
    imageUrl: "/img/ecografia.jpg"
  },
  {
    id: 4,
    title: "Tecarterapia",
    shortDescription: "Stimolazione profonda per accelerare i tempi di recupero.",
    fullDescription: "Trattamento che riattiva i naturali processi riparativi e antinfiammatori, ideale per traumi acuti e patologie croniche osteoarticolari.",
    icon: Activity,
    imageUrl: "/img/tecar.jpg"
  },
  {
    id: 5,
    title: "Idrogalvanoterapia",
    shortDescription: "Terapia in acqua con correnti galvaniche.",
    fullDescription: "Utilizza l'acqua come conduttore per l'elettroterapia, migliorando la circolazione e riducendo il dolore in zone difficili da trattare con elettrodi classici.",
    icon: Waves,
    imageUrl: "/img/idrogalvanoterapia.jpg"
  },
  {
    id: 6,
    title: "Rieducazione Posturale",
    shortDescription: "Ginnastica correttiva e recupero funzionale.",
    fullDescription: "Percorsi di riabilitazione in palestra attrezzata con spalliere e macchinari specifici per correggere vizi posturali e recuperare il movimento.",
    icon: Move,
    imageUrl: "/img/posturale.jpg"
  }
];

export const HOURS: WorkingHours[] = [
  { day: "Lunedì - Venerdì", hours: "08:30 – 19:30" },
  { day: "Sabato", hours: "09:00 – 13:00" },
  { day: "Domenica", hours: "Chiuso" }
];

export const VISIT_TYPES = Object.values(VisitType);

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Marco G.",
    role: "Paziente Sportivo",
    text: "Grazie al K-Laser ho risolto una tendinite che mi trascinavo da mesi. Il Dr. Santaniello è estremamente competente.",
    imageUrl: "https://randomuser.me/api/portraits/men/44.jpg"
  },
  {
    id: 2,
    name: "Maria Rossi",
    role: "Paziente",
    text: "Studio accogliente e pulito. Ho fatto un ciclo di onde d'urto per la spalla e sono tornata a muovermi senza dolore.",
    imageUrl: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  {
    id: 3,
    name: "Luigi V.",
    role: "Paziente Post-Operatorio",
    text: "La valutazione ecografica ha fatto la differenza per capire esattamente come procedere con la riabilitazione. Consigliatissimo.",
    imageUrl: "https://randomuser.me/api/portraits/men/68.jpg"
  }
];

// Inserisci le tue foto in public/img/ e chiamale studio-1.jpg, studio-2.jpg, ecc.
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/img/studio-1.jpg",
    alt: "Reception e Sala d'attesa",
    category: "Ambiente"
  },
  {
    id: 2,
    src: "/img/studio-2.jpg",
    alt: "Sala Terapia Manuale",
    category: "Terapia"
  },
  {
    id: 3,
    src: "/img/studio-3.jpg",
    alt: "Palestra Riabilitativa",
    category: "Palestra"
  },
  {
    id: 4,
    src: "/img/studio-4.jpg",
    alt: "Macchinario Laserterapia K-Laser",
    category: "Tecnologia"
  },
  {
    id: 5,
    src: "/img/studio-5.jpg",
    alt: "Strumentazione Tecarterapia",
    category: "Tecnologia"
  },
  {
    id: 6,
    src: "/img/studio-6.jpg",
    alt: "Box Terapia e Corridoio",
    category: "Ambiente"
  }
];