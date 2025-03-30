
import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Locations = () => {
  const locations = [
    {
      name: "Viman Nagar",
      address: "Optimus, A-1B, West Ave, Viman Nagar, Pune, Maharashtra 411014",
      phone: "020 4729 4519",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.9707256359447!2d73.90866107496419!3d18.569245782533727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c193a5322caf%3A0xdb2f1430376d81d3!2sGame%20Dome!5e1!3m2!1sen!2sin!4v1742925050540!5m2!1sen!2sin"
    },
    {
      name: "Wakad",
      address: "B, Laxmi Avenue, 204, Nirmitee Signature Rd, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057",
      phone: "020 4729 4520",
      mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3594.4053387792205!2d73.75622297496481!3d18.59605038251218!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9006330b6c7%3A0x2beddeada395f1db!2sGame%20Dome%2C%20Wakad!5e1!3m2!1sen!2sin!4v1742925326752!5m2!1sen!2sin"
    }
  ];
  const { theme } = useTheme(); 
  return (
    <section
  id="locations"
  className={`py-20 md:py-28 relative ${theme === 'dark' ? 'bg-dark-theme' : 'bg-light-theme'}`}
>
      <div className="`absolute inset-0 ${theme === 'dark' ? 'bg-dark-pattern' : 'bg-light-pattern'}`}"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title reveal from-bottom">Our Locations</h2>
        <p className="section-subtitle reveal from-bottom">
          Visit us at our premium gaming centers located in Pune.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
          {locations.map((location, index) => (
            <div key={index} className="reveal from-bottom" style={{ transitionDelay: `${index * 200}ms` }}>
              <div className="glass-panel rounded-lg overflow-hidden h-full">
                <div className="aspect-w-16 aspect-h-9 w-full h-64">
                  <iframe 
                    src={location.mapUrl} 
                    className="w-full h-full border-0" 
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title={`Map of GameDome ${location.name}`}
                  ></iframe>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-4 flex items-center text-neon">
                    <MapPin size={20} className="mr-2" />
                    {location.name} Branch
                  </h3>
                  
                  <p className="text-sm mb-4 ">
                    {location.address}
                  </p>
                  
                  <div className="text-sm mb-2 flex items-center ">
                    <Phone size={18} className="mr-2" />
                    <span>{location.phone}</span>
                  </div>
                  
                  <div className="text-sm mb-2 flex items-center">
                    <Clock size={18} className="mr-2" />
                    <span>Open daily: 10 AM - 11 PM</span>
                  </div>
                  
                  <a 
                    href={`https://www.google.com/maps/search/?api=1&query=GameDome+${location.name}+Pune`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 button-outline inline-block"
                  >
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Locations;
