
import React from 'react';
import ServiceCard from '../ui/ServiceCard';
import { Cpu, Gamepad2, Trophy, Tv } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Services = () => {
  const services = [
    {
      title: "PC Gaming",
      description: "Experience gaming on top-tier PCs with RTX GPUs, 240Hz monitors, and premium peripherals.",
      icon: Cpu
    },
    {
      title: "Console Gaming",
      description: "Enjoy the latest PlayStation and Xbox titles on 4K displays with comfortable gaming setups.",
      icon: Gamepad2
    },
    {
      title: "Esports Tournaments",
      description: "Host and participate in competitive gaming events with professional tournament infrastructure.",
      icon: Trophy
    },
    {
      title: "Game Streaming",
      description: "Use our dedicated streaming setups with high-quality cameras, lighting, and fast internet.",
      icon: Tv
    }
  ];

  return (
    <section id="services" className="py-20 md:py-28 bg-gaming- relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgb(255, 255, 255)_0,rgb(255, 255, 255)_70%)]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title reveal from-bottom">Our Services</h2>
        <p className="section-subtitle reveal from-bottom">
          Experience premium gaming services designed for casual players and professionals alike.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {services.map((service, index) => (
            <div key={index} className="reveal from-bottom" style={{ transitionDelay: `${index * 100}ms` }}>
              <ServiceCard
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
