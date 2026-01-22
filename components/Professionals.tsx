import React from 'react';
import { PROFESSIONALS } from '../constants';

const Professionals: React.FC = () => {
  const doctor = PROFESSIONALS[0];

  return (
    <section id="chi-siamo" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4">Il Nostro Professionista</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Image Column */}
          <div className="w-full md:w-1/2">
            <div className="relative aspect-[3/4] w-full max-w-md mx-auto md:mr-auto overflow-hidden rounded-2xl shadow-xl">
              <img
                src={doctor.imageUrl}
                alt={doctor.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h3 className="text-3xl font-bold text-slate-800 mb-2">{doctor.name}</h3>
            <p className="text-sky-600 font-bold text-lg mb-6 uppercase tracking-wider">{doctor.role}</p>

            <div className="prose prose-lg text-slate-600 leading-relaxed">
              <p className="mb-6 text-xl text-slate-700 italic">
                "{doctor.bio}"
              </p>
              <p>
                Il Dr. Santaniello guida lo studio con passione e dedizione, garantendo a ogni paziente un percorso su misura che unisce le più efficaci tecniche manuali alle tecnologie riabilitative d'avanguardia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Professionals;