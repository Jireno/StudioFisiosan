import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Immagine di sfondo locale */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/img/copertina.jpg" 
          onError={(e) => {
            // Fallback se l'immagine locale non esiste ancora
            e.currentTarget.src = "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80"
          }}
          alt="Studio Fisiosan Interni"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-sky-900/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-6 leading-tight">
          Innovazione in <br className="hidden sm:block" />
          <span className="text-sky-400">Fisioterapia.</span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-200 mb-10 max-w-2xl font-light">
          Allo Studio Fisiosan l'esperienza manuale e strumentale incontrano l'innovazione.
          Valutazione ecografica, K-Laser, Onde d'Urto e percorsi di recupero mirati.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
          <a 
            href="#prenota"
            onClick={(e) => handleScroll(e, '#prenota')}
            className="px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
          >
            Prenota una visita
            <ArrowRight size={20} />
          </a>
          <a 
            href="#terapie"
            onClick={(e) => handleScroll(e, '#terapie')}
            className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 font-semibold rounded-lg transition-all flex items-center justify-center"
          >
            Scopri i trattamenti
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;