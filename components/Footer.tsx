import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="text-center md:text-left">
             <h3 className="text-2xl font-bold text-white mb-2">Fisiosan</h3>
             <p className="text-sm text-slate-400">Innovazione in Fisioterapia</p>
          </div>

          {/* HBox Contact Info */}
          <div className="flex flex-col md:flex-row gap-6 md:gap-10 text-sm font-medium">
             <div className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors">
               <div className="p-2 bg-slate-800 rounded-full">
                 <Phone size={18} className="text-sky-400" />
               </div>
               <div className="flex flex-col">
                  <span>089 868910</span>
                  <span>338 1825742</span>
               </div>
             </div>

             <div className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors">
               <div className="p-2 bg-slate-800 rounded-full">
                 <Mail size={18} className="text-sky-400" />
               </div>
               <span>fisiosan@email.it</span>
             </div>

             <div className="flex items-center gap-3 justify-center md:justify-start hover:text-white transition-colors">
               <div className="p-2 bg-slate-800 rounded-full">
                 <MapPin size={18} className="text-sky-400" />
               </div>
               <span>Baronissi (SA)</span>
             </div>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
             <a 
               href="#" 
               onClick={(e) => e.preventDefault()}
               className="p-2 text-slate-400 hover:text-white hover:bg-sky-600 rounded-full transition-all"
             >
                <Facebook size={20} />
             </a>
             <a 
               href="#" 
               onClick={(e) => e.preventDefault()}
               className="p-2 text-slate-400 hover:text-white hover:bg-pink-600 rounded-full transition-all"
             >
                <Instagram size={20} />
             </a>
          </div>

        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
          &copy; {new Date().getFullYear()} Studio di Fisioterapia Fisiosan - Dr. Lucio Santaniello.
        </div>
      </div>
    </footer>
  );
};

export default Footer;