import React, { useEffect, useRef } from 'react';
import { useTheme } from '../../contexts/ThemeContext';

// Background images for light and dark themes
import bgLightLeft from '../../assets/8.jpg';
import bgLightRight from '../../assets/7.png';
import bgDarkLeft from '../../assets/6.jpg';
import bgDarkRight from '../../assets/5.png';

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
          if (el.tagName === 'H1') return; // Exclude title

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

  // Select background images based on theme
  const bgLeft = theme === 'dark' ? bgDarkLeft : bgLightLeft;
  const bgRight = theme === 'dark' ? bgDarkRight : bgLightRight;

  return (
    <section
      ref={heroRef}
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-cover bg-center"
      style={{
        backgroundImage: `
          linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
          url(${bgLeft}), 
          url(${bgRight})
        `,
        backgroundSize: '50% 100%, 50% 100%',
        backgroundPosition: 'left, right',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="absolute inset-0 transition-all duration-300"
        style={{
          backgroundColor: theme === 'dark' ? 'rgba(0, 0, 0, 0.25)' : 'rgba(0, 0, 0, 0.5)',
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="relative inline-block mb-4">
          <span className="text-white text-sm md:text-base uppercase tracking-[0.25em] font-medium">
            Pune's Premier Gaming Destination
          </span>
        </div>

        {/* Title */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-rajdhani font-bold mb-6 relative text-white">
          GAME<span className="neon-text">DOME</span>
        </h1>

        <p className="text-white text-lg md:text-xl max-w-xl mx-auto mb-10">
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
