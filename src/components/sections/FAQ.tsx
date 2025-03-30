
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const FAQ = () => {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const { theme } = useTheme();
  
  const faqItems = [
    {
      question: "What are your opening hours?",
      answer: "GameDome is open daily from 10 AM to 11 PM at both our Viman Nagar and Wakad locations."
    },
    {
      question: "Do you allow group bookings?",
      answer: "Yes, we offer group bookings for birthday parties, corporate events, and tournaments. Please contact us at least 48 hours in advance to reserve your slots."
    },
    {
      question: "What payment options are available?",
      answer: "We accept cash, all major credit/debit cards, UPI payments (Google Pay, PhonePe, Paytm), and our own GameDome prepaid cards that offer additional benefits."
    },
    {
      question: "Are there membership discounts?",
      answer: "Yes, we offer several membership tiers with increasing benefits: Bronze, Silver, and Gold. Benefits include discounted rates, priority bookings, and free snacks."
    },
    {
      question: "Can I bring my own peripherals?",
      answer: "Absolutely! While we provide high-quality gaming peripherals, you're welcome to bring your own keyboard, mouse, headset, or controller for a more personalized experience."
    },
    {
      question: "Do you host tournaments?",
      answer: "Yes, we regularly host tournaments for popular titles like Valorant, CS2, and FIFA. Follow our social media pages for announcements and registration details."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title reveal from-bottom">Frequently Asked Questions</h2>
        <p className="section-subtitle reveal from-bottom">
          Find answers to the most common questions about GameDome.
        </p>
        
        <div className="max-w-3xl mx-auto mt-12 space-y-4 reveal from-bottom">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="glass-panel rounded-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => toggleItem(index)}
                className="flex justify-between items-center w-full p-6 text-left"
              >
                <span className={`text-lg font-bold ${theme === 'dark' ? 'text-white' : 'text-gaming-dark'}`}>
                  {item.question}
                </span>
                {openItem === index ? (
                  <ChevronUp size={20} className="text-neon" />
                ) : (
                  <ChevronDown size={20} className="text-neon" />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openItem === index ? 'max-h-60' : 'max-h-0'
                }`}
              >
                <div className={`p-6 pt-0 ${theme === 'dark' ? 'text-white/70' : 'text-gaming-dark/70'}`}>
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
