
import React, { useEffect } from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Services from '../components/sections/Services';
import Gallery from '../components/sections/Gallery';
import GameLibrary from '../components/sections/GameLibrary';
import Reviews from '../components/sections/Reviews';
import Locations from '../components/sections/Locations';
import FAQ from '../components/sections/FAQ';
import Footer from '../components/sections/Footer';

const Index = () => {
  useEffect(() => {
    // Create a smooth scroll effect for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
    
    // Preload images for better performance
    const preloadImages = () => {
      const imagesToPreload = [
        'https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b',
        'https://images.unsplash.com/photo-1542751371-adc38448a05e'
      ];
      
      imagesToPreload.forEach(image => {
        const img = new Image();
        img.src = image;
      });
    };
    
    preloadImages();
    
    // Initialize scroll reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Gallery />
      <GameLibrary />
      <Reviews />
      <Locations />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
