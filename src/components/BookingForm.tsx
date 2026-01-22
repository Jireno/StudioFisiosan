import React, { useState, useEffect } from 'react';
import { VISIT_TYPES } from '../constants';
import { CheckCircle, AlertCircle, Calendar, Clock } from 'lucide-react';

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
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  const [availableSlots, setAvailableSlots] = useState<string[]>([]);

  // Regex patterns
  const patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    phone: /^(\+39)?\s?3\d{2}\s?\d{6,7}$|^(\+39)?\s?0\d{2,4}\s?\d{5,8}$/ // Accetta cellulari e fissi italiani standard
  };

  // Aggiorna gli slot orari quando cambia la data
  useEffect(() => {
    if (!formData.date) {
      setAvailableSlots([]);
      return;
    }

    const date = new Date(formData.date);
    const day = date.getDay(); // 0 = Domenica, 6 = Sabato

    let slots: string[] = [];

    if (day === 0) {
      // Domenica (Chiuso)
      slots = [];
    } else if (day === 6) {
      // Sabato (09:00 - 13:00)
      for (let i = 9; i < 13; i++) {
        slots.push(`${i}:00`);
        slots.push(`${i}:30`);
      }
      slots.push("13:00");
    } else {
      // Lun-Ven (08:30 - 19:30)
      slots.push("08:30");
      for (let i = 9; i < 19; i++) {
        slots.push(`${i}:00`);
        slots.push(`${i}:30`);
      }
      slots.push("19:00");
      slots.push("19:30");
    }

    setAvailableSlots(slots);
    
    // Se l'orario selezionato non è più valido per il nuovo giorno, resettalo
    if (formData.time && !slots.includes(formData.time) && day !== 0) {
      setFormData(prev => ({ ...prev, time: '' }));
    }
  }, [formData.date]);

  const validateField = (name: string, value: string) => {
    let error = "";

    switch (name) {
      case 'name':
        if (!value.trim()) error = "Il nome è obbligatorio.";
        else if (value.trim().length < 3) error = "Inserisci un nome valido (min 3 caratteri).";
        break;
      case 'email':
        if (!value.trim()) error = "L'email è obbligatoria.";
        else if (!patterns.email.test(value)) error = "Inserisci un indirizzo email valido.";
        break;
      case 'phone':
        if (!value.trim()) error = "Il telefono è obbligatorio.";
        else if (!patterns.phone.test(value.replace(/\s/g, ''))) error = "Inserisci un numero di telefono valido.";
        break;
      case 'visitType':
        if (!value) error = "Seleziona il tipo di visita.";
        break;
      case 'date':
        if (!value) {
          error = "Seleziona una data.";
        } else {
          const selectedDate = new Date(value);
          const day = selectedDate.getDay();
          if (day === 0) error = "Siamo chiusi la Domenica. Scegli un altro giorno.";
        }
        break;
      case 'time':
        if (!value) error = "Seleziona un orario.";
        break;
      default:
        break;
    }

    setErrors(prev => {
      const newErrors = { ...prev };
      if (error) newErrors[name] = error;
      else delete newErrors[name];
      return newErrors;
    });

    return error;
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    validateField(name, value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Valida in tempo reale solo se il campo è già stato toccato o se stiamo correggendo un errore esistente
    if (touched[name] || errors[name]) {
      validateField(name, value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Valida tutti i campi
    const validations = Object.keys(formData).map(key => {
      // Ignora 'notes' che è opzionale
      if (key === 'notes') return null;
      return validateField(key, (formData as any)[key]);
    });

    // Imposta tutti come toccati per mostrare gli errori
    const allTouched = Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {});
    setTouched(allTouched);

    const hasErrors = validations.some(error => error !== "" && error !== null);
    const hasActiveErrors = Object.keys(errors).length > 0;

    if (!hasErrors && !hasActiveErrors) {
      setStatus('submitting');
      // Simulate API call
      setTimeout(() => {
        setStatus('success');
      }, 1500);
    }
  };

  const resetForm = () => {
    setStatus('idle');
    setFormData({ name: '', email: '', phone: '', visitType: '', date: '', time: '', notes: '' });
    setErrors({});
    setTouched({});
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
            Grazie {formData.name}, abbiamo ricevuto la tua richiesta per il giorno {new Date(formData.date).toLocaleDateString('it-IT')}. 
            Ti contatteremo a breve al numero {formData.phone} per la conferma definitiva.
          </p>
          <button 
            onClick={resetForm}
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

        <form onSubmit={handleSubmit} className="bg-slate-50 p-8 md:p-10 rounded-2xl shadow-sm border border-slate-200" noValidate>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Nome */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Nome e Cognome *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-lg border ${errors.name && touched.name ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all`}
                placeholder="Mario Rossi"
              />
              {errors.name && touched.name && <p className="mt-1 text-sm text-red-500 flex items-center gap-1 animate-pulse"><AlertCircle size={12} /> {errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-lg border ${errors.email && touched.email ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all`}
                placeholder="mario@esempio.it"
              />
              {errors.email && touched.email && <p className="mt-1 text-sm text-red-500 flex items-center gap-1 animate-pulse"><AlertCircle size={12} /> {errors.email}</p>}
            </div>

            {/* Telefono */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Telefono *</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-lg border ${errors.phone && touched.phone ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all`}
                placeholder="+39 338 1825742"
              />
              {errors.phone && touched.phone && <p className="mt-1 text-sm text-red-500 flex items-center gap-1 animate-pulse"><AlertCircle size={12} /> {errors.phone}</p>}
            </div>

            {/* Tipo Visita */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Tipo di Visita *</label>
              <select
                name="visitType"
                value={formData.visitType}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-lg border ${errors.visitType && touched.visitType ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all bg-white`}
              >
                <option value="">Seleziona...</option>
                {VISIT_TYPES.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              {errors.visitType && touched.visitType && <p className="mt-1 text-sm text-red-500 flex items-center gap-1 animate-pulse"><AlertCircle size={12} /> {errors.visitType}</p>}
            </div>

            {/* Data */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                <Calendar size={14} className="text-slate-500"/> Data Desiderata *
              </label>
              <input
                type="date"
                name="date"
                min={new Date().toISOString().split('T')[0]}
                value={formData.date}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 rounded-lg border ${errors.date ? 'border-red-500 focus:ring-red-200 bg-red-50' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all`}
              />
              {errors.date && <p className="mt-1 text-sm text-red-600 font-medium flex items-center gap-1 animate-pulse"><AlertCircle size={12} /> {errors.date}</p>}
            </div>

            {/* Orario */}
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2 flex items-center gap-2">
                 <Clock size={14} className="text-slate-500"/> Orario *
              </label>
              <select
                name="time"
                value={formData.time}
                onChange={handleChange}
                onBlur={handleBlur}
                disabled={!formData.date || errors.date !== undefined}
                className={`w-full px-4 py-3 rounded-lg border ${errors.time && touched.time ? 'border-red-500 focus:ring-red-200' : 'border-slate-300 focus:ring-sky-200 focus:border-sky-500'} focus:ring-4 focus:outline-none transition-all bg-white disabled:bg-slate-100 disabled:text-slate-400`}
              >
                <option value="">
                  {!formData.date ? "Seleziona prima una data" : (errors.date ? "Data non valida" : "Seleziona slot...")}
                </option>
                {availableSlots.map(slot => (
                  <option key={slot} value={slot}>{slot}</option>
                ))}
              </select>
              {errors.time && touched.time && <p className="mt-1 text-sm text-red-500 flex items-center gap-1 animate-pulse"><AlertCircle size={12} /> {errors.time}</p>}
            </div>

            {/* Note */}
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
              className={`px-10 py-4 rounded-lg font-bold text-white shadow-lg transition-all transform hover:-translate-y-1 ${
                status === 'submitting' ? 'bg-slate-400 cursor-not-allowed' : 'bg-sky-600 hover:bg-sky-500 hover:shadow-sky-200'
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