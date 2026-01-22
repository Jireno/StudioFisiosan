import React from 'react';
import { PROFESSIONALS } from '../constants';

const Professionals: React.FC = () => {
  return (
    <section id="chi-siamo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4">I Nostri Professionisti</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Competenza ed empatia al servizio della tua salute.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROFESSIONALS.map((prof) => (
            <div key={prof.id} className="group bg-slate-50 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100">
              <div className="aspect-square overflow-hidden bg-slate-200">
                <img 
                  src={prof.imageUrl} 
                  onError={(e) => {
                    // Se l'immagine locale non esiste, carica un placeholder
                    e.currentTarget.src = "https://images.unsplash.com/photo-1576091160550-2187d80a18f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80"
                  }}
                  alt={prof.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 mb-1">{prof.name}</h3>
                <p className="text-sky-600 font-medium text-sm mb-4 uppercase tracking-wider">{prof.role}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{prof.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Professionals;