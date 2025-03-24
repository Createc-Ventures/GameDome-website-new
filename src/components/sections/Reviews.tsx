
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);
  
  const reviews = [
    {
      name: "Raj Sharma",
      rating: 4,
      review: "Best gaming cafe in Pune, hands down! The RTX rigs are insanely powerful and the staff is super friendly. I come here every weekend for my gaming sessions.",
      location: "Viman Nagar"
    },
    {
      name: "Priya Desai",
      rating: 5,
      review: "Amazing atmosphere and top-notch equipment. The competitive gaming setup at Wakad branch is perfect for tournaments. Met so many fellow gamers here!",
      location: "Wakad"
    },
    {
      name: "Arjun Mehta",
      rating: 4,
      review: "Great place to hang out with friends. The console gaming area is comfortable and they have all the latest games. Snacks could be better though.",
      location: "Viman Nagar"
    },
    {
      name: "Neha Patel",
      rating: 5,
      review: "As a content creator, their streaming setup is exactly what I needed. High-speed internet and professional equipment made my stream quality so much better.",
      location: "Wakad"
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
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full bg-gaming-card border border-white/10 flex items-center justify-center transition-all hover:bg-gaming-light hover:border-neon"
            aria-label="Previous review"
          >
            <ChevronLeft size={20} className="text-black" />
          </button>
          
          <button 
            onClick={nextReview}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full bg-gaming-card border border-white/10 flex items-center justify-center transition-all hover:bg-gaming-light hover:border-neon"
            aria-label="Next review"
          >
            <ChevronRight size={20} className="text-black" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
