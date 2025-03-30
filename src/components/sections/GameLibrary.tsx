
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
      { title: 'Marvel Rivals', image: 'https://i.pinimg.com/736x/a2/cf/e6/a2cfe6a652caf3132f7276f89af9eb62.jpg', genre: 'Hero shooter' },
      { title: 'Valorant', image: 'https://i.pinimg.com/736x/01/21/83/012183603ad26aa3bd11f0128266589c.jpg', genre: 'FPS' },
      { title: 'GTA V', image: 'https://i.pinimg.com/736x/70/69/dc/7069dc3643cae3f76884d47946ea608b.jpg', genre: 'Action' },
      { title: 'Apex Legends', image: 'https://i.pinimg.com/736x/39/4f/bd/394fbdc1cdabab32667b923d3a6553fa.jpg', genre: 'Battle Royale' },
      { title: 'Call of Duty Warzone', image: 'https://i.pinimg.com/736x/c6/d4/aa/c6d4aae10de2a94ecb19488e9b6ffa21.jpg', genre: 'Battle RoyaleA' },
      { title: 'Counter-Strike 2', image: 'https://i.pinimg.com/736x/43/44/75/43447521000b3919cc8395f6f79f4160.jpg', genre: 'FPS' },
      { title: 'Fortnite', image: 'https://i.pinimg.com/736x/c7/ae/66/c7ae66b1ac804a763ae892d16fa61d5d.jpg', genre: 'Battle Royale' },
      { title: 'League of legends', image: 'https://i.pinimg.com/736x/c0/f0/ec/c0f0ecb1ad1e43a69914e64765b3bece.jpg', genre: 'MMORPG' },
      { title: 'PUBG PC', image: 'https://i.pinimg.com/736x/02/09/a4/0209a432013270bd49f3a4e7eed392ae.jpg', genre: 'Battle Royale' },
      { title: 'Genshin Impact', image: 'https://i.pinimg.com/736x/d7/75/09/d77509e4e1261bd3c15c5b9d4d05e903.jpg', genre: 'Open World' },
      { title: 'Dota 2', image: 'https://i.pinimg.com/736x/d9/42/8d/d9428db1a7ec4e39a7b66076c34deb7c.jpg', genre: 'MOBA' },
      { title: 'Overwatch', image: 'https://i.pinimg.com/736x/57/c6/01/57c6019c1c7ca1db67a88aee6c0d5cf7.jpg', genre: 'Tactical FPS' },
      { title: 'Rocket League', image: 'https://i.pinimg.com/736x/a0/4d/2b/a04d2bf0c5e882010c0f9c3a24b279c8.jpg', genre: 'Action RPG' },
      { title: 'The Finals', image: 'https://i.pinimg.com/736x/35/85/2c/35852ce344381d7d81ccab72aaa7795d.jpg', genre: 'FPS' }
      
    ],
    'console': [
      { title: 'FC 24', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2195250/f11315d7491f706b09b059d12424f711e9778b82/capsule_616x353.jpg?t=1743020121', genre: 'Sports' },
      { title: 'Ghost of Tsushima', image: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Ghost-of-Tsushima-Key-Art.jpg', genre: 'Open World' },
      { title: 'Spider-Man 2', image: 'https://cdn1.epicgames.com/offer/b2818b59c0bb420e9647983dfd254931/EGS_Octopus_InsomniacGamesNixxesSoftware_S1_2560x1440-f27da78f484626718d1e22e7d6950ca5', genre: 'Action' },
      { title: 'God of War Ragnarök', image: 'https://images2.alphacoders.com/137/1370582.jpeg', genre: 'Action-Adventure' },
      { title: 'Gran Turismo 7', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202202/2806/y4liLwBLXmhWHIvakDIMG1T1.jpg', genre: 'Racing' },
      { title: 'Horizon Forbidden West', image: 'https://image.api.playstation.com/vulcan/ap/rnd/202107/3100/yIa8STLMmCyhj48fGDpaAuRM.jpg', genre: 'RPG' },
      { title: 'The Last of Us Part II', image: 'https://static0.gamerantimages.com/wordpress/wp-content/uploads/wm/2024/09/the-last-of-us-3-fake-logo-abby-ellie-game-rant-feature.jpg', genre: 'Action-Adventure' },
      { title: 'Red Dead Redemption 2', image: 'https://gaming-cdn.com/images/products/16201/orig/red-dead-redemption-2-playstation-4-game-playstation-store-cover.jpg?v=1730298570', genre: 'Open World' },
      { title: 'Halo Infinite', image: 'https://cdn.dlcompare.com/game_tetiere/upload/gameimage/file/79d8-halo_infinite_(campaign).jpeg.webp', genre: 'FPS' },
      { title: 'The Witcher 3: Wild Hunt', image: 'https://cdn-l-thewitcher.cdprojektred.com/meta/TW3NG_thumbnail_en.png', genre: 'Open World' },
      { title: 'forza horizon 5', image: 'https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/1551360/capsule_616x353.jpg?t=1741106928', genre: 'Racing' },
      { title: 'Starfield', image: 'https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1716740/capsule_616x353.jpg?t=1727384525', genre: 'RPG' }
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
