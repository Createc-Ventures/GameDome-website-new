
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Gallery = () => {
  const [activeLocation, setActiveLocation] = useState('viman-nagar');
  const { theme } = useTheme();
  
  const locations = {
    'viman-nagar': [
      { src: 'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b', alt: 'Gaming Setup at Viman Nagar' },
      { src: 'https://images.unsplash.com/photo-1542751371-adc38448a05e', alt: 'Esports Setup at Viman Nagar' },
      { src: 'https://images.unsplash.com/photo-1593305841991-05c297ba4575', alt: 'PC Gaming Zone at Viman Nagar' },
      { src: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6', alt: 'Lounge Area at Viman Nagar' },
    ],
    'wakad': [
      { src: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f', alt: 'Gaming Setup at Wakad' },
      { src: 'https://images.unsplash.com/photo-1560253023-3ec5d502959f', alt: 'Console Gaming at Wakad' },
      { src: 'https://images.unsplash.com/photo-1605782173610-d2540c8343fa', alt: 'Tournament Area at Wakad' },
      { src: 'https://images.unsplash.com/photo-1548484352-ea579e5233a8', alt: 'Streaming Setup at Wakad' },
    ],
  };

  return (
    <section id="gallery" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title reveal from-bottom">Photo Gallery</h2>
        <p className="section-subtitle reveal from-bottom">
          Take a virtual tour of our state-of-the-art gaming centers at both locations.
        </p>
        
        <div className="flex justify-center mb-12 space-x-4 reveal from-bottom">
          <button
            onClick={() => setActiveLocation('viman-nagar')}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeLocation === 'viman-nagar'
                ? 'bg-neon text-gaming-dark font-medium'
                : theme === 'dark'
                  ? 'bg-gaming-card text-white/80 hover:text-white'
                  : 'bg-gray-200 text-gaming-dark/80 hover:text-gaming-dark'
            }`}
          >
            Viman Nagar
          </button>
          <button
            onClick={() => setActiveLocation('wakad')}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeLocation === 'wakad'
                ? 'bg-neon text-gaming-dark font-medium'
                : theme === 'dark'
                  ? 'bg-gaming-card text-white/80 hover:text-white'
                  : 'bg-gray-200 text-gaming-dark/80 hover:text-gaming-dark'
            }`}
          >
            Wakad
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations[activeLocation === 'viman-nagar' ? 'viman-nagar' : 'wakad'].map((image, index) => (
            <div 
              key={index} 
              className="group overflow-hidden rounded-lg reveal from-bottom" 
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden h-64 w-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-white font-medium text-lg">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
