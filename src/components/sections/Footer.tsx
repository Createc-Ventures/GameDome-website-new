
import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Youtube } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const Footer = () => {
  const { theme } = useTheme();
  
  return (
    <footer id="contact" className={`pt-20 pb-8 ${theme === 'dark' ? 'bg-gaming-dark border-t border-white/10' : 'bg-gray-100 border-t border-gray-200'}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="reveal from-left">
            <h3 className="text-2xl font-bold mb-6 neon-text">GAMEDOME</h3>
            <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gaming-dark/70'} mb-6`}>
              Pune's premier gaming destination with state-of-the-art equipment,
              immersive experiences, and a vibrant gaming community.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gaming-light' : 'bg-gray-200'} flex items-center justify-center transition-colors hover:bg-neon/20`}
              >
                <Instagram size={20} className="text-neon" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full ${theme === 'dark' ? 'bg-gaming-light' : 'bg-gray-200'} flex items-center justify-center transition-colors hover:bg-neon/20`}
              >
                <Youtube size={20} className="text-neon" />
              </a>
            </div>
          </div>
          
          <div className="reveal from-bottom">
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gaming-dark'}`}>Contact Us</h3>
            <ul className={`space-y-4 ${theme === 'dark' ? 'text-white/70' : 'text-gaming-dark/70'}`}>
              <li className="flex items-start">
                <Phone size={18} className="text-neon mr-3 mt-1 flex-shrink-0" />
                <span>020 4729 4519</span>
              </li>
              <li className="flex items-start">
                <Mail size={18} className="text-neon mr-3 mt-1 flex-shrink-0" />
                <span>contact@gamedome.com</span>
              </li>
              <li className="flex items-start">
                <Clock size={18} className="text-neon mr-3 mt-1 flex-shrink-0" />
                <span>Open daily: 10 AM - 11 PM</span>
              </li>
            </ul>
          </div>
          
          <div className="reveal from-bottom">
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gaming-dark'}`}>Viman Nagar</h3>
            <div className="flex items-start">
              <MapPin size={18} className="text-neon mr-3 mt-1 flex-shrink-0" />
              <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gaming-dark/70'}`}>
                Optimus, A-1B, West Ave, Viman Nagar, Pune, Maharashtra 411014
              </p>
            </div>
          </div>
          
          <div className="reveal from-right">
            <h3 className={`text-xl font-bold mb-6 ${theme === 'dark' ? 'text-white' : 'text-gaming-dark'}`}>Wakad</h3>
            <div className="flex items-start">
              <MapPin size={18} className="text-neon mr-3 mt-1 flex-shrink-0" />
              <p className={`${theme === 'dark' ? 'text-white/70' : 'text-gaming-dark/70'}`}>
                B, Laxmi Avenue, 204, Nirmitee Signature Rd, Shankar Kalat Nagar, Wakad, Pimpri-Chinchwad, Maharashtra 411057
              </p>
            </div>
          </div>
        </div>
        
        <div className={`${theme === 'dark' ? 'border-t border-white/10 pt-8 text-white/50' : 'border-t border-gray-200 pt-8 text-gaming-dark/50'} text-center text-sm reveal from-bottom`}>
          <p>© {new Date().getFullYear()} GameDome. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
