import React, { useState } from 'react';
import { GALLERY_IMAGES } from '../constants';
import { GalleryImage } from '../types';
import { X, ZoomIn } from 'lucide-react';

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto'; // Restore scrolling
  };

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-800 sm:text-4xl mb-4">Il Nostro Studio</h2>
          <div className="w-20 h-1.5 bg-sky-500 mx-auto rounded-full mb-6"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Spazi moderni e attrezzature all'avanguardia nei colori del benessere.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div
              key={img.id}
              className="group relative h-64 rounded-xl overflow-hidden cursor-pointer shadow-sm hover:shadow-lg transition-all"
              onClick={() => openLightbox(img)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className={`w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 ${img.position || 'object-center'}`}
              />
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-sky-900/40 transition-colors duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                  <ZoomIn className="text-white w-10 h-10" />
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm font-medium">{img.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-900/90 backdrop-blur-sm p-4 animate-fade-in"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-sky-400 transition-colors p-2"
            onClick={closeLightbox}
          >
            <X size={40} />
          </button>

          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image wrapper
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[85vh] rounded-lg shadow-2xl object-contain"
            />
            <p className="absolute -bottom-10 left-0 text-white text-lg font-light tracking-wide">
              {selectedImage.alt}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;