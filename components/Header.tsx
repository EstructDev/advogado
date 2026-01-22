
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="text-blue-700 w-8 h-8">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
            </svg>
          </div>
          <span className={`text-xl font-black uppercase tracking-tight ${
            isScrolled ? 'text-[#111318]' : 'text-white'
          }`}>Advocacia Moderna</span>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          {['Início', 'Expertise', 'Sobre', 'Depoimentos', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={`text-sm font-semibold uppercase tracking-wider transition-colors hover:text-blue-600 ${
                isScrolled ? 'text-[#111318]' : 'text-white/80 hover:text-white'
              }`}
            >
              {item}
            </a>
          ))}
          <button className="bg-blue-700 hover:bg-blue-800 text-white text-xs font-black uppercase tracking-widest px-6 py-3 rounded-lg transition-all shadow-lg hover:shadow-blue-700/20 active:scale-95">
            Agendar Agora
          </button>
        </nav>

        {/* Mobile menu button could be added here if needed, but keeping it minimalist per prompt style */}
      </div>
    </header>
  );
};

export default Header;
