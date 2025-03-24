
import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const parallaxEffect = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      
      const moveFactor = 20; // How much elements move
      
      const elements = heroRef.current.querySelectorAll('.parallax');
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speedX = parseFloat(htmlEl.getAttribute('data-speed-x') || '1');
        const speedY = parseFloat(htmlEl.getAttribute('data-speed-y') || '1');
        
        const moveX = mouseX * moveFactor * speedX;
        const moveY = mouseY * moveFactor * speedY;
        
        htmlEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener('mousemove', parallaxEffect);
    
    return () => {
      document.removeEventListener('mousemove', parallaxEffect);
    };
  }, []);

  const scrollToLocations = () => {
    const locationsSection = document.getElementById('locations');
    if (locationsSection) {
      locationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={heroRef}
      id="hero" 
      className={`min-h-screen flex items-center justify-center ${theme === 'dark' ? 'bg-gaming-dark' : 'bg-gray-50'} relative overflow-hidden`}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255, 255, 255, 0.97)_0,rgb(255, 255, 255)_70%)] dark:opacity-100 light:opacity-20"></div>
      
      {/* Decorative elements */}
      <div className="absolute w-64 h-64 top-[20%] left-[15%] bg-neon/5 rounded-full blur-[100px] parallax" data-speed-x="0.5" data-speed-y="0.7"></div>
      <div className="absolute w-96 h-96 bottom-[10%] right-[5%] bg-neon/10 rounded-full blur-[120px] parallax" data-speed-x="-0.3" data-speed-y="-0.5"></div>
      
      {/* Grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(236,168,41,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,168,41,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="text-center">
          <div className="relative inline-block mb-4">
            <span className={`${theme === 'dark' ? 'text-white/60' : 'text-gaming-dark/60'} text-sm md:text-base uppercase tracking-[0.25em] font-medium`}>
              Pune's Premier Gaming Destination
            </span>
          </div>
          
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-rajdhani font-bold mb-6 relative parallax" data-speed-x="0.1" data-speed-y="0.1">
            <span className={theme === 'dark' ? 'text-white' : 'text-gaming-dark'}>GAME</span>
            <span className="neon-text">DOME</span>
          </h1>
          
          <p className={`${theme === 'dark' ? 'text-white/80' : 'text-gaming-dark/80'} text-lg md:text-xl max-w-xl mx-auto mb-10`}>
            The ultimate high-tech gaming café with top-tier equipment,
            immersive experiences, and competitive thrills.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button onClick={scrollToLocations} className="button-primary animate-glow-pulse">
              Explore Our Locations
            </button>
            <a href="#services" className="button-outline">
              View Services
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className={`${theme === 'dark' ? 'text-white/60' : 'text-gaming-dark/60'} text-sm mb-2`}>Scroll Down</span>
        <div className={`w-6 h-10 rounded-full ${theme === 'dark' ? 'border-2 border-white/20' : 'border-2 border-gaming-dark/20'} flex justify-center pt-2`}>
          <div className="w-1.5 h-1.5 rounded-full bg-neon animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
