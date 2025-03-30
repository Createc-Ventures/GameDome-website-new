
import React, { useEffect } from 'react';
import { Cpu, Gamepad2, Trophy, Coffee } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const About = () => {
  const { theme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      const reveals = document.querySelectorAll('.reveal');
      
      reveals.forEach((reveal) => {
        const windowHeight = window.innerHeight;
        const revealTop = reveal.getBoundingClientRect().top;
        const revealPoint = 150;
        
        if (revealTop < windowHeight - revealPoint) {
          reveal.classList.add('active');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once to show elements that are already in viewport on load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const features = [
    {
      icon: Cpu,
      title: "High-End PC Gaming",
      description: "Experience gaming on the latest RTX-powered rigs with high refresh rate monitors for ultimate performance.",
      delay: "100"
    },
    {
      icon: Gamepad2,
      title: "Console Gaming",
      description: "Play the latest titles on PlayStation 5 and Xbox Series X consoles with premium peripherals.",
      delay: "200"
    },
    {
      icon: Trophy,
      title: "Esports Arena",
      description: "Compete in tournaments and events with professional setups designed for competitive gaming.",
      delay: "300"
    },
    {
      icon: Coffee,
      title: "Gaming Fuel",
      description: "Keep your energy levels high with our selection of snacks, beverages, and energy drinks.",
      delay: "400"
    }
  ];

  return (
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title reveal from-bottom">About Us</h2>
        <p className="section-subtitle reveal from-bottom">
          GameDome is Pune's ultimate gaming hub, providing state-of-the-art gaming experiences with the latest technology and equipment.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gaming-card' : 'bg-gray-100'} neon-border-hover reveal from-bottom`}
              style={{ transitionDelay: `${feature.delay}ms` }}
            >
              <div className="w-14 h-14 rounded-full bg-gaming-light flex items-center justify-center mb-6 mx-auto">
                <feature.icon size={28} className="text-neon" />
              </div>
              <h3 className={`text-xl font-bold mb-3 text-center ${theme === 'dark' ? 'text-white' : 'text-gaming-dark'}`}>
                {feature.title}
              </h3>
              <p className={`text-center text-sm ${theme === 'dark' ? 'text-white/70' : 'text-gaming-dark/70'}`}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-full h-96 -translate-y-1/2 bg-neon/5 blur-[150px] -z-10"></div>
    </section>
  );
};

export default About;
