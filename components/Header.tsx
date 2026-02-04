
import React, { useState, useEffect } from 'react';
import { NAVIGATION } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-background-dark/80 backdrop-blur-xl border-b border-white/5 py-4 shadow-2xl' 
          : 'bg-transparent py-8 border-b border-transparent'
      }`}
    >
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="flex items-center justify-between">
          <a href="#/" className="flex items-center gap-4 group">
            <div className="text-primary transition-transform group-hover:rotate-12 duration-500">
              <svg className="w-9 h-9 md:w-11 md:h-11" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <div className="flex flex-col">
              <h1 className="text-white text-xl md:text-2xl font-black uppercase tracking-tighter leading-none">
                Lexington <span className="text-primary">&</span> Assoc.
              </h1>
              <span className="text-[9px] text-white/40 uppercase tracking-[0.4em] font-bold mt-1.5 hidden sm:block">Excellence in Law</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-12">
            {NAVIGATION.map((item) => (
              <a 
                key={item.href}
                href={item.href} 
                className="text-white/70 hover:text-primary text-[11px] font-black uppercase tracking-[0.25em] transition-all relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#/contato"
              className="bg-primary hover:bg-white text-background-dark px-7 py-3.5 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300 shadow-xl"
            >
              Consultoria
            </a>
          </nav>

          <button 
            className="lg:hidden w-12 h-12 flex items-center justify-center text-primary rounded-full hover:bg-white/5 transition-colors"
            onClick={() => setIsMobileMenuOpen(true)}
            aria-label="Abrir menu"
          >
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
      </div>

      {/* Modern Mobile Menu */}
      <div 
        className={`fixed inset-0 z-[60] bg-background-dark transition-all duration-500 lg:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute top-8 right-6">
          <button 
            className="w-12 h-12 flex items-center justify-center text-primary"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <span className="material-symbols-outlined text-4xl">close</span>
          </button>
        </div>
        
        <div className="flex flex-col justify-center h-full px-12 gap-10">
          {NAVIGATION.map((item, idx) => (
            <a 
              key={item.href}
              href={item.href} 
              className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
          <a 
            href="#/contato"
            className={`mt-6 bg-primary text-background-dark px-10 py-6 text-lg font-black uppercase tracking-widest text-center shadow-2xl transition-all duration-500 ${
              isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
            style={{ transitionDelay: `500ms` }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Agendar Consulta
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
