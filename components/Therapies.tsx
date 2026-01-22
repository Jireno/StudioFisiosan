import React, { useState } from 'react';
import { THERAPIES } from '../constants';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Therapy } from '../types';

const TherapyCard: React.FC<{ therapy: Therapy }> = ({ therapy }) => {
  const [isOpen, setIsOpen] = useState(false);
  const Icon = therapy.icon;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-6">
        <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center text-sky-600 mb-4">
          <Icon size={24} />
        </div>
        {therapy.imageUrl && (
          <div className="mb-4 rounded-lg overflow-hidden h-40 w-full relative group">
            <img
              src={therapy.imageUrl}
              alt={therapy.title}
              className={`object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-500 ${therapy.position || 'object-center'}`}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
        )}
        <h3 className="text-xl font-bold text-slate-800 mb-2">{therapy.title}</h3>
        <p className="text-slate-600 mb-4">{therapy.shortDescription}</p>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-sky-600 font-medium text-sm flex items-center hover:text-sky-700 transition-colors focus:outline-none"
        >
          {isOpen ? 'Chiudi dettagli' : 'Scopri di più'}
          {isOpen ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
        </button>
      </div>

      {/* Accordion Content */}
      <div
        className={`bg-slate-50 px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 py-4 opacity-100 border-t border-slate-100' : 'max-h-0 py-0 opacity-0'
          }`}
      >
        <p className="text-sm text-slate-600 leading-relaxed">
          {therapy.fullDescription}
        </p>
      </div>
    </div>
  );
};

const Therapies: React.FC = () => {
  return (
    <section id="terapie" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4">Le Nostre Terapie</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Utilizziamo tecnologie innovative e terapie manuali consolidate.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {THERAPIES.map((therapy) => (
            <TherapyCard key={therapy.id} therapy={therapy} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Therapies;