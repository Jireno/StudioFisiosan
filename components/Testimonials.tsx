import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-20 left-10 text-sky-100 pointer-events-none opacity-50">
        <Quote size={200} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4">Dicono di Noi</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-6"></div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {TESTIMONIALS.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100 flex flex-col md:flex-row items-center gap-8 md:gap-12 max-w-4xl mx-auto">
                    
                    {/* User Image */}
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-sky-50 shadow-inner">
                        <img 
                          src={testimonial.imageUrl || "https://via.placeholder.com/150"} 
                          alt={testimonial.name} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left flex-grow">
                      <div className="flex justify-center md:justify-start gap-1 mb-4 text-sky-500">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} size={18} fill="currentColor" />
                        ))}
                      </div>
                      <blockquote className="text-lg md:text-xl text-slate-700 italic mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      <div>
                        <h4 className="text-lg font-bold text-slate-900">{testimonial.name}</h4>
                        <p className="text-sky-600 text-sm font-medium">{testimonial.role}</p>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-2 md:-left-12 -translate-y-1/2 p-3 bg-white text-sky-600 rounded-full shadow-lg hover:bg-sky-50 transition-colors focus:outline-none"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-2 md:-right-12 -translate-y-1/2 p-3 bg-white text-sky-600 rounded-full shadow-lg hover:bg-sky-50 transition-colors focus:outline-none"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'bg-sky-600 w-8' : 'bg-slate-300 hover:bg-sky-300'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;