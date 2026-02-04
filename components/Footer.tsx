
import React from 'react';
import { NAVIGATION } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-20 border-t border-white/5">
      <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center gap-3">
              <div className="text-primary">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path clipRule="evenodd" d="M12.0799 24L4 19.2479L9.95537 8.75216L18.04 13.4961L18.0446 4H29.9554L29.96 13.4961L38.0446 8.75216L44 19.2479L35.92 24L44 28.7521L38.0446 39.2479L29.96 34.5039L29.9554 44H18.0446L18.04 34.5039L9.95537 39.2479L4 28.7521L12.0799 24Z" fill="currentColor" fillRule="evenodd"></path>
                </svg>
              </div>
              <h2 className="text-white text-xl font-black uppercase tracking-tight">Lexington & Associates</h2>
            </div>
            <p className="text-white/40 font-serif text-lg leading-relaxed max-w-md italic">
              Representação jurídica de excelência para clientes sofisticados. Fundada nos princípios de integridade, excelência e defesa incansável.
            </p>
            <div className="flex gap-4">
              {['facebook', 'linkedin', 'instagram', 'share'].map((icon) => (
                <button key={icon} className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300">
                  <span className="material-symbols-outlined text-xl">{icon === 'share' ? 'share' : 'public'}</span>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-8">Navegação</h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-white/40 hover:text-primary transition-colors text-sm uppercase font-semibold tracking-widest">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-8">Contatos</h4>
            <div className="space-y-4 text-white/40 text-sm">
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">location_on</span>
                Av. Paulista, 1200 - Jardins, São Paulo
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">call</span>
                +55 (11) 5555-0198
              </p>
              <p className="flex items-center gap-3">
                <span className="material-symbols-outlined text-primary text-xl">mail</span>
                contato@lexingtonlaw.com.br
              </p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-white/20 uppercase tracking-[0.3em] font-bold">
          <p>© 2024 Lexington & Associates. Todos os direitos reservados.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-white transition-colors">Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
