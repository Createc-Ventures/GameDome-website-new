
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../ui/carousel';
import { useTheme } from '../../contexts/ThemeContext';

const GameLibrary = () => {
  const [activeCategory, setActiveCategory] = useState('pc');
  const { theme } = useTheme();
  
  const games = {
    'pc': [
      { title: 'Cyberpunk 2077', image: '/lovable-uploads/2ec494f6-2c0a-4ef9-9fe0-06ba36046013.png', genre: 'RPG' },
      { title: 'Valorant', image: '/lovable-uploads/36720c47-e372-4085-b2cb-47acacafa460.png', genre: 'FPS' },
      { title: 'GTA V', image: '/lovable-uploads/a085dc1c-341e-4f36-bebd-9775c1072ad8.png', genre: 'Action' },
      { title: 'Apex Legends', image: '/lovable-uploads/d82edda3-9ef7-4dfa-9492-08ad0e5168db.png', genre: 'Battle Royale' },
      { title: 'League of Legends', image: '/lovable-uploads/5fc0a2b8-6939-4f5f-a7b9-f91d4bda26ed.png', genre: 'MOBA' },
      { title: 'Counter-Strike 2', image: '/lovable-uploads/0f6ebd18-e019-45f9-9aef-9e662ef7b6b6.png', genre: 'FPS' },
      { title: 'Fortnite', image: '/lovable-uploads/f1419d7c-0b74-417a-83d4-2d8f20fec6e5.png', genre: 'Battle Royale' },
      { title: 'Minecraft', image: '/lovable-uploads/a2c53725-2f46-4e86-961b-097ef841318b.png', genre: 'Sandbox' },
      { title: 'World of Warcraft', image: '/lovable-uploads/0ad1e30b-1e92-4bfb-b4a0-1e89087e79bc.png', genre: 'MMORPG' },
      { title: 'Dota 2', image: '/lovable-uploads/04e67b17-4514-4a7a-8dbb-f5d88564aedf.png', genre: 'MOBA' },
      { title: 'Rainbow Six Siege', image: '/lovable-uploads/6f5bff79-aeb4-4c64-a63e-adc64ab43d48.png', genre: 'Tactical FPS' },
      { title: 'Elden Ring', image: '/lovable-uploads/5995ea7b-02d2-42ac-942a-d5596ab3838c.png', genre: 'Action RPG' }
    ],
    'console': [
      { title: 'FIFA 23', image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8', genre: 'Sports' },
      { title: 'Call of Duty: Modern Warfare III', image: 'https://images.unsplash.com/photo-1605979257913-1704eb7b6246', genre: 'FPS' },
      { title: 'Spider-Man 2', image: 'https://images.unsplash.com/photo-1608889175250-c3b0c1667d3a', genre: 'Action' },
      { title: 'God of War Ragnarök', image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420', genre: 'Action-Adventure' },
      { title: 'Gran Turismo 7', image: 'https://images.unsplash.com/photo-1547394765-185e1e68f34e', genre: 'Racing' },
      { title: 'Horizon Forbidden West', image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d', genre: 'RPG' },
      { title: 'The Last of Us Part II', image: 'https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b', genre: 'Action-Adventure' },
      { title: 'Ghost of Tsushima', image: 'https://images.unsplash.com/photo-1561085618-eda187ba7148', genre: 'Action-Adventure' },
      { title: 'Halo Infinite', image: 'https://images.unsplash.com/photo-1580327344181-c1163234e5a0', genre: 'FPS' },
      { title: 'Animal Crossing: New Horizons', image: 'https://images.unsplash.com/photo-1539886675198-7a1c99add9a1', genre: 'Simulation' },
      { title: 'Final Fantasy XVI', image: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba', genre: 'JRPG' },
      { title: 'Starfield', image: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1', genre: 'RPG' }
    ]
  };

  return (
    <section id="games" className={`py-20 md:py-28 ${theme === 'dark' ? 'bg-gaming-light' : 'bg-gray-100'} relative`}>
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(236,168,41,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,168,41,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="section-title reveal from-bottom">Game Library</h2>
        <p className="section-subtitle reveal from-bottom">
          Explore our extensive collection of games available across different platforms.
        </p>
        
        <div className="flex justify-center mb-12 space-x-4 reveal from-bottom">
          <button
            onClick={() => setActiveCategory('pc')}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeCategory === 'pc'
                ? 'bg-neon text-gaming-dark font-medium'
                : theme === 'dark'
                  ? 'bg-gaming-card text-white/80 hover:text-white'
                  : 'bg-white text-gaming-dark/80 hover:text-gaming-dark'
            }`}
          >
            PC Games
          </button>
          <button
            onClick={() => setActiveCategory('console')}
            className={`px-6 py-3 rounded-lg transition-all duration-300 ${
              activeCategory === 'console'
                ? 'bg-neon text-gaming-dark font-medium'
                : theme === 'dark'
                  ? 'bg-gaming-card text-white/80 hover:text-white'
                  : 'bg-white text-gaming-dark/80 hover:text-gaming-dark'
            }`}
          >
            Console Games
          </button>
        </div>
        
        <div className="mb-6 reveal from-bottom">
          <div className="flex items-center justify-between mb-4">
            <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gaming-dark'}`}>
              {activeCategory === 'pc' ? 'PC Games' : 'Console Games'}
              <span className="text-neon ml-2">({games[activeCategory].length})</span>
            </h3>
            <div className={`hidden sm:flex items-center ${theme === 'dark' ? 'text-white/60' : 'text-gaming-dark/60'} text-sm`}>
              <ChevronLeft className="h-4 w-4 mr-1 text-neon" />
              <span>Scroll to explore all games</span>
              <ChevronRight className="h-4 w-4 ml-1 text-neon" />
            </div>
          </div>
          
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {games[activeCategory === 'pc' ? 'pc' : 'console'].map((game, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <GameCard game={game} index={index} theme={theme} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex items-center justify-center mt-8 gap-2">
              <CarouselPrevious className={`static transform-none h-9 w-9 ${theme === 'dark' ? 'bg-gaming-card border-white/10' : 'bg-white border-gray-200'} hover:bg-neon hover:text-gaming-dark hover:border-transparent`} />
              <CarouselNext className={`static transform-none h-9 w-9 ${theme === 'dark' ? 'bg-gaming-card border-white/10' : 'bg-white border-gray-200'} hover:bg-neon hover:text-gaming-dark hover:border-transparent`} />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

// Game Card Component
const GameCard = ({ game, index, theme }: { game: { title: string, image: string, genre: string }, index: number, theme: string }) => {
  return (
    <div 
      className={`group ${theme === 'dark' ? 'glass-panel' : 'bg-white shadow-md border border-gray-200'} overflow-hidden rounded-lg hover-scale h-full`}
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className="relative h-44 overflow-hidden">
        <img
          src={game.image}
          alt={game.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60"></div>
        <div className="absolute top-3 right-3">
          <span className="bg-neon/90 text-gaming-dark px-2 py-0.5 rounded-full text-xs font-medium">
            {game.genre}
          </span>
        </div>
      </div>
      <div className="p-4">
        <h3 className={`text-lg font-bold group-hover:text-neon transition-colors ${theme === 'dark' ? 'text-white' : 'text-gaming-dark'}`}>
          {game.title}
        </h3>
        <p className={`${theme === 'dark' ? 'text-white/60' : 'text-gaming-dark/60'} text-xs mt-1`}>
          Available at all locations
        </p>
      </div>
    </div>
  );
};

export default GameLibrary;
