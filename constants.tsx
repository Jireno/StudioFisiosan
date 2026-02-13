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
    bio: "Attivi dal 2005, esperti in terapia manuale, riabilitazione post-chirurgica e utilizzo di tecnologie avanzate come K-Laser e Onde d'Urto. Specializzati nella cura della spalla (protesi, cuffia dei rotatori), rieducazione post intervento e in contatto con i migliori chirurghi specialisti della spalla.",
    imageUrl: "/img/Lucio Santana.png"
  }
];

export const THERAPIES: Therapy[] = [
  {
    id: 1,
    title: "K-Laser Cube 4",
    shortDescription: "Terapia dinamica multi-fase per il dolore cronico e acuto.",
    fullDescription: "Tecnologia avanzata per il trattamento di dolori muscolo-scheletrici, infiammazioni, e riparazione rapida dei tessuti. Efficace per stomatologia, patologia orale e traumi sportivi.",
    icon: Zap,
    imageUrl: "/img/klaser.jpeg"
  },
  {
    id: 2,
    title: "Onde d'Urto",
    shortDescription: "Soluzione non invasiva per calcificazioni e tendiniti.",
    fullDescription: "Trattamento d'elezione per spina calcaneare, calcificazioni di spalla, epicondiliti e dolori cervicali. Stimola la rigenerazione tissutale.",
    icon: Target,
    imageUrl: "/img/onde-urto.jpeg",
    position: "object-center"
  },
  {
    id: 3,
    title: "Valutazione Ecografica",
    shortDescription: "Supporto diagnostico per un recupero mirato.",
    fullDescription: "Utilizzo dell'ecografia a supporto della fisioterapia per vedere in tempo reale la condizione dei tessuti e valutare la funzionalità muscolare in dinamica.",
    icon: ScanLine,
    imageUrl: "/img/ecografia.jpeg"
  },
  {
    id: 4,
    title: "Tecarterapia",
    shortDescription: "Stimolazione profonda per accelerare i tempi di recupero.",
    fullDescription: "Trattamento che riattiva i naturali processi riparativi e antinfiammatori, ideale per traumi acuti e patologie croniche osteoarticolari.",
    icon: Activity,
    imageUrl: "/img/tecar.jpeg"
  },
  {
    id: 5,
    title: "Idrogalvanoterapia",
    shortDescription: "Terapia in acqua con correnti galvaniche.",
    fullDescription: "Utilizza l'acqua come conduttore per l'elettroterapia, migliorando la circolazione e riducendo il dolore in zone difficili da trattare con elettrodi classici.",
    icon: Waves,
    imageUrl: "/img/idrogalvanoterapia.jpeg"
  },
  {
    id: 6,
    title: "Rieducazione Posturale",
    shortDescription: "Ginnastica correttiva e recupero funzionale.",
    fullDescription: "Percorsi di riabilitazione in palestra attrezzata con spalliere e macchinari specifici per correggere vizi posturali e recuperare il movimento.",
    icon: Move,
    imageUrl: "/img/posturale.jpeg"
  }
];

export const HOURS: WorkingHours[] = [
  { day: "Lunedì - Venerdì", hours: "08:00 – 12:30 / 14:00 – 18:00" },
  { day: "Si lavora su appuntamento", hours: "" }
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

export const GALLERY_IMAGES: GalleryImage[] = [
  {
    id: 1,
    src: "/img/studio-1.jpeg",
    alt: "Reception dello studio con dettagli blu",
    category: "Ambiente"
  },
  {
    id: 2,
    src: "/img/studio-2.jpeg",
    alt: "Terapia Manuale con Dr. Santaniello",
    category: "Terapia"
  },
  {
    id: 3,
    src: "/img/studio-3.jpeg",
    alt: "Corridoio e box terapia",
    category: "Ambiente"
  },
  {
    id: 4,
    src: "/img/studio-4.jpeg",
    alt: "Ingresso Principale Esterno",
    category: "Ambiente"
  },
  {
    id: 5,
    src: "/img/studio-5.jpeg",
    alt: "Attrezzatura per la riabilitazione",
    category: "Palestra"
  },
  {
    id: 6,
    src: "/img/studio-6.jpeg",
    alt: "Riabilitazione Ortopedica e Posturale",
    category: "Palestra"
  }
];