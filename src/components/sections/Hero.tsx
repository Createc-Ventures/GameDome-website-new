import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    let animationFrameId: number;

    const parallaxEffect = (e: MouseEvent) => {
      if (!heroRef.current) return;

      const mouseX = e.clientX / window.innerWidth - 0.5;
      const mouseY = e.clientY / window.innerHeight - 0.5;
      const moveFactor = 20;

      animationFrameId = requestAnimationFrame(() => {
        heroRef.current?.querySelectorAll('.parallax').forEach((el) => {
          if (el.tagName === 'H1') return;
          const htmlEl = el as HTMLElement;
          const speedX = parseFloat(htmlEl.getAttribute('data-speed-x') || '1');
          const speedY = parseFloat(htmlEl.getAttribute('data-speed-y') || '1');
          const moveX = mouseX * moveFactor * speedX;
          const moveY = mouseY * moveFactor * speedY;
          htmlEl.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
      });
    };

    document.addEventListener('mousemove', parallaxEffect);

    return () => {
      document.removeEventListener('mousemove', parallaxEffect);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const scrollToLocations = () => {
    const locationsSection = document.getElementById('locations');
    if (locationsSection) {
      locationsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const backgroundColor = theme === 'dark' ? '#000000' : '#FFFFFF';

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Neon Orbs */}
      <div className="absolute top-10 left-20 w-24 h-24 rounded-full neon-orb animate-float" style={{ backgroundColor: theme === 'dark' ? '#eca829' : '#eca829' }}></div>
      <div className="absolute bottom-16 right-24 w-16 h-16 rounded-full neon-orb animate-float-slow" style={{ backgroundColor: theme === 'dark' ? '#eca829' : '#eca829' }}></div>
      <div className="absolute top-1/3 right-1/3 w-20 h-20 rounded-full neon-orb animate-float" style={{ backgroundColor: theme === 'dark' ? '#eca829' : '#eca829' }}></div>

      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.05)',
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="relative inline-block mb-4">
          <span className={`text-sm md:text-base uppercase tracking-[0.25em] font-medium ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
            Pune's Premier Gaming Destination
          </span>
        </div>

        <h1 className={`text-6xl md:text-7xl lg:text-8xl font-rajdhani font-bold mb-6 relative ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          GAME<span className="neon-text">DOME</span>
        </h1>

        <p className={`text-lg md:text-xl max-w-xl mx-auto mb-10 ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
          The ultimate high-tech gaming café with top-tier equipment, immersive experiences, and competitive thrills.
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
    </section>
  );
};

export default Hero;
