
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      name: "Rahil Hippargi",
      rating: 5,
      review: "Heaven for games!! Food is good too and the vibe is awesome Must visit this place👍👍",
      location: "Viman Nagar"
    },
    {
      name: "Vaish",
      rating: 5,
      review: "Best experience in affordable price and variety of games in ps and Xbox . Vibe is extremely cozy and perfect for gaming. Totally worth it.",
      location: "Viman Nagar"
    },
    {
      name: "Pawan Kalluri",
      rating: 5,
      review: "Amazing prices and great food at this place. There are multiple games you can play at Game Dome. There are PC games and PS5 available with low rates. I would definitely recommend to visit this place with your gaming squad.",
      location: "Viman Nagar"
    },
    {
      name: "Atul Shemdekar",
      rating: 5,
      review: "Being the Customer for more than 3yrs i can asure its One of the Best Place For Gaming and Chilling..... Pc and Internet Runs very well... Sometimes it might get technical issue...after all its the machine... But problems get solved immediately.... Must visit if you are looking for gaming and chilling with friends.",
      location: "Viman Nagar"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearInterval(interval);
  }, [reviews.length]);

  const nextReview = () => {
    setCurrentReview((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevReview = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-title reveal from-bottom">What Gamers Say</h2>
        <p className="section-subtitle reveal from-bottom">
          Don't take our word for it – hear what our community has to say.
        </p>
        
        <div className="max-w-4xl mx-auto mt-12 relative reveal from-bottom">
          <div className="relative glass-panel p-8 md:p-12 rounded-xl">
            {/* Quote decoration */}
            <div className="absolute -top-6 -left-6 text-6xl text-neon/20 font-serif">"</div>
            <div className="absolute -bottom-6 -right-6 text-6xl text-neon/20 font-serif rotate-180">"</div>
            
            <div className="flex flex-col items-center text-center">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < reviews[currentReview].rating ? "#ECA829" : "none"} 
                    className={i < reviews[currentReview].rating ? "text-neon" : "text-black/30"} 
                  />
                ))}
              </div>
              
              <p className="text-base mb-3 text-center italic">
                "{reviews[currentReview].review}"
              </p>
              
              <div className="mt-4">
                <h4 className="text-base mb-3 text-center font-bold ">{reviews[currentReview].name}</h4>
                <p className="text-sm mb-3 text-center ">GameDome {reviews[currentReview].location}</p>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center mt-8 space-x-3">
            {reviews.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentReview(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentReview === index ? 'bg-neon' : 'bg-white/20'
                }`}
                aria-label={`View review ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={prevReview}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full  border border-white/10 flex items-center justify-center transition-all hover:border-neon"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} className="flex" />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full  border border-white/10 flex items-center justify-center transition-all  hover:border-neon"
            aria-label="Next review"
          >
            <ChevronRight size={20} className="flex" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
