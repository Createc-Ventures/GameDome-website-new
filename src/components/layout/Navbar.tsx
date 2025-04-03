
import React, { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { Switch } from '@/components/ui/switch';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Games', href: '#games' },
    { name: 'Locations', href: '#locations' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? theme === 'dark' 
            ? 'bg-gaming-dark/90 backdrop-blur-md shadow-lg' 
            : 'bg-white/90 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <a href="#" className="flex items-center">
            <span className="text-2xl font-rajdhani font-bold neon-text">GAME</span>
            <img 
              src="src/assets/gamedome logo.png" 
              alt="GameDome Logo" 
              className="h-8 mx-1 object-contain" 
            />
            <span className="text-2xl font-rajdhani font-bold neon-text">DOME</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neon hover:text-white dark:hover:text-black transition-colors font-medium"

              >
                {link.name}
              </a>
            ))}
            
            {/* Theme Toggle */}
            <div className="flex items-center space-x-2">
              <Sun size={18} className={theme === 'dark' ? 'text-white/50' : 'text-neon'} />
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className={theme === 'dark' ? 'bg-neon' : 'bg-gaming-light'}
              />
              <Moon size={18} className={theme === 'dark' ? 'text-neon' : 'text-gaming-dark/50'} />
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center space-x-4">
            {/* Theme Toggle for Mobile */}
            <div className="flex items-center space-x-1">
              <Sun size={16} className={theme === 'dark' ? 'text-white/50' : 'text-neon'} />
              <Switch 
                checked={theme === 'dark'}
                onCheckedChange={toggleTheme}
                className={theme === 'dark' ? 'bg-neon' : 'bg-gaming-light'}
              />
              <Moon size={16} className={theme === 'dark' ? 'text-neon' : 'text-gaming-dark/50'} />
            </div>
            
            <button 
              onClick={toggleMobileMenu} 
              className={`${theme === 'dark' ? 'text-white' : 'text-gaming-dark'} hover:text-neon transition-colors`}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`absolute top-full left-0 w-full ${
          theme === 'dark' ? 'bg-gaming-card/95' : 'bg-white/95'
        } backdrop-blur-lg transition-transform duration-300 md:hidden ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={toggleMobileMenu}
              className={`${
                theme === 'dark' ? 'text-white/80 hover:text-neon' : 'text-gaming-dark/80 hover:text-neon'
              } transition-colors py-2 font-medium`}
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
