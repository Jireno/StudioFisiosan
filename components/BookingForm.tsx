import React, { useState } from 'react';
import { VISIT_TYPES } from '../constants';
import { CheckCircle, AlertCircle } from 'lucide-react';

const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    visitType: '',
    date: '',
    time: '',
    notes: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Il nome è obbligatorio";
    if (!formData.email.trim()) {
      newErrors.email = "L'email è obbligatoria";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email non valida";
    }
    if (!formData.phone.trim()) newErrors.phone = "Il telefono è obbligatorio";
    if (!formData.visitType) newErrors.visitType = "Seleziona un tipo di visita";
    if (!formData.date) newErrors.date = "Seleziona una data";
    if (!formData.time) newErrors.time = "Seleziona un orario";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setStatus('submitting');

      try {
        const response = await fetch("https://formsubmit.co/ajax/studiofisiosanprenotazioni@gmail.com", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            ...formData,
            _subject: `Nuova Prenotazione da ${formData.name}`,
            _template: 'table' // Optional: clean table format
          })
        });

        if (response.ok) {
          setStatus('success');
        } else {
          console.error("Errore nell'invio del modulo");
          alert("Si è verificato un errore nell'invio. Per favore riprova o contattaci telefonicamente.");
          setStatus('idle');
        }
      } catch (error) {
        console.error("Errore di rete:", error);
        alert("Errore di connessione. Controlla la tua internet o riprova più tardi.");
        setStatus('idle');
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => {
        const newErr = { ...prev };
        delete newErr[name];
        return newErr;
      });
    }
  };

  // Helper to generate time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let i = 9; i < 19; i++) {
      slots.push(`${i}:00`);
      slots.push(`${i}:30`);
    }
    return slots;
  };

  if (status === 'success') {
    return (
      <div id="prenota" className="py-24 bg-white flex justify-center items-center">
        <div className="text-center p-8 bg-sky-50 rounded-2xl max-w-lg mx-4 border border-sky-100 shadow-lg animate-fade-in-up">
          <div className="w-20 h-20 bg-sky-100 text-sky-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h3 className="text-2xl font-bold text-slate-800 mb-4">Prenotazione Inviata!</h3>
          <p className="text-slate-600 mb-6">
            Grazie {formData.name}, abbiamo ricevuto la tua richiesta. Ti contatteremo a breve al numero {formData.phone} per confermare l'appuntamento.
          </p>
          <button
            onClick={() => {
              setStatus('idle');
              setFormData({ name: '', email: '', phone: '', visitType: '', date: '', time: '', notes: '' });
            }}
            className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-semibold"
          >
            Nuova Prenotazione
          </button>
        </div>
      </div>
    );
  }

  return (
    <section id="prenota" className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-800 mb-4">Prenota un Appuntamento</h2>
          <p className="text-slate-600">Compila il modulo sottostante per richiedere la disponibilità.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Nome e Cognome *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all`}
                placeholder="Mario Rossi"
              />
              {errors.name && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all`}
                placeholder="mario@esempio.it"
              />
              {errors.email && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.email}</p>}
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Telefono *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all`}
                placeholder="+39 338 1825742"
              />
              {errors.phone && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.phone}</p>}
            </div>

            {/* Visit Type */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tipo di Visita *</label>
              <select
                name="visitType"
                value={formData.visitType}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.visitType ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all bg-white`}
              >
                <option value="">Seleziona...</option>
                {VISIT_TYPES.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.visitType && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.visitType}</p>}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Data Desiderata *</label>
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.date ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all`}
              />
              {errors.date && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.date}</p>}
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Orario *</label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${errors.time ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all bg-white`}
              >
                <option value="">Seleziona slot...</option>
                {generateTimeSlots().map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {errors.time && <p className="mt-1 text-sm text-red-500 flex items-center gap-1"><AlertCircle size={12} /> {errors.time}</p>}
            </div>

            {/* Notes */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-slate-700 mb-2">Note Aggiuntive</label>
              <textarea
                name="notes"
                value={formData.notes}
                onChange={handleChange}
                rows={3}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-4 focus:ring-sky-200 focus:border-sky-500 focus:outline-none transition-all"
                placeholder="Descrivi brevemente il tuo problema o lascia un messaggio..."
              ></textarea>
            </div>
          </div>

          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={status === 'submitting'}
              className={`px-10 py-4 rounded-lg font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 ${status === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-500 hover:shadow-sky-200'
                }`}
            >
              {status === 'submitting' ? 'Invio in corso...' : 'Conferma Prenotazione'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;