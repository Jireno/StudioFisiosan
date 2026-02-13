import React from 'react';
import { HOURS } from '../constants';
import { Clock, Calendar } from 'lucide-react';

const Hours: React.FC = () => {
  return (
    <section id="orari" className="py-20 bg-sky-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">

          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">Orari di Apertura</h2>
            <p className="text-sky-100 mb-8 text-lg">
              Si riceve esclusivamente su appuntamento.
              Contattaci per prenotare il tuo slot dedicato.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-sky-700/50">
              <div className="space-y-4">
                {HOURS.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-sky-800 pb-3 last:border-0 last:pb-0">
                    <span className="font-medium flex items-center gap-3">
                      <Calendar size={18} className="text-sky-400" />
                      {item.day}
                    </span>
                    <span className="font-bold tracking-wide flex items-center gap-2">
                      {item.hours && <Clock size={16} className="text-sky-400" />}
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 text-center lg:text-right">
            <div className="inline-block p-8 bg-sky-800 rounded-full border-4 border-sky-600/30">
              <Clock size={64} className="text-sky-300" />
            </div>
            <div className="mt-8 space-y-2">
              <p className="text-xl font-semibold">Si riceve esclusivamente</p>
              <p className="text-3xl font-bold text-sky-400 uppercase tracking-widest">Su Appuntamento</p>
              <p className="text-sky-200 mt-4">Contattaci per prenotare il tuo slot dedicato.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hours;