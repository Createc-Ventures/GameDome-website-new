
import React, { useState } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Gallery = () => {
  const [activeLocation, setActiveLocation] = useState('viman-nagar');
  const { theme } = useTheme();
  
  const locations = {
    'viman-nagar': [
      { src: 'src/assets/1.png', alt: '' },
      { src: 'src/assets/2.png', alt: '' },
      { src: 'src/assets/3.png', alt: '' },
      { src: 'src/assets/4.png', alt: '' },
      { src: 'src/assets/5.png', alt: '' },
      { src: 'src/assets/6.jpg', alt: '' },
      { src: 'src/assets/7.png', alt: '' },
      { src: 'src/assets/8.jpg', alt: '' }
    ],
    'wakad': [
      { src: 'https://content3.jdmagicbox.com/v2/comp/mumbai/z2/022pxx22.xx22.230304093327.j9z2/catalogue/next-level-gaming-cafe-mumbai-gaming-console-dealers-mwmidbbhk8.jpg', alt: '' },
      { src: 'src/assets/wakad2.jpg', alt: '' },
      { src: 'https://t3.ftcdn.net/jpg/01/63/91/94/360_F_163919461_g76Kxgr6Q8oXhlI2xiJT2o0QWI6N0C0W.jpg', alt: '' },
      { src: 'https://t3.ftcdn.net/jpg/04/70/95/42/360_F_470954251_lZGymPRVehkWzscLdr1WUHAcJ7kdzZZt.jpg', alt: '' },
      { src: 'https://img.freepik.com/free-photo/medium-shot-victorious-gamers-winning_23-2149350009.jpg?t=st=1743342785~exp=1743346385~hmac=3e20712a4ecc475ff7fafeb96fd6fff92d95531ae0f8f81248d0124b4c0bbc43&w=996', alt: '' },
      { src: 'src/assets/wakad6.jpg', alt: '' },
      { src: 'src/assets/wakad7.jpg', alt: '' },
      { src: 'src/assets/wakad8.jpg', alt: '' }
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
