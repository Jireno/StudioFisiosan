import React from 'react';
import { Activity, Home } from 'lucide-react';

const OtherServices: React.FC = () => {
  const services = [
    {
      title: "Noleggio Macchinari Kinetec",
      description: "Ideale per la riabilitazione degli arti inferiori direttamente a casa tua.",
      icon: Activity,
    },
    {
      title: "Magnetoterapia a Domicilio",
      description: "Servizio di noleggio per affrontare un intero ciclo di magnetoterapia comodamente al tuo domicilio.",
      icon: Home,
    }
  ];

  return (
    <section id="altri-servizi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4">Altri Servizi e Noleggio</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Offriamo soluzioni flessibili per permetterti di continuare i tuoi trattamenti anche a casa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div key={index} className="bg-slate-50 rounded-xl p-8 border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center text-sky-600 mb-6">
                  <Icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OtherServices;
