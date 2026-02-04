
import React from 'react';
import { ATTORNEYS } from '../constants';

const Team: React.FC = () => {
  return (
    <div className="pt-40 pb-32 bg-background-dark">
      <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
        <div className="flex flex-col items-center text-center mb-24 space-y-6">
          <h4 className="text-primary text-xs font-black uppercase tracking-[0.4em]">Liderança de Elite</h4>
          <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tight">Conheça Nossos Sócios</h2>
          <div className="h-1 w-24 bg-primary mx-auto"></div>
          <p className="text-white/50 font-serif text-xl max-w-2xl italic">
            Uma equipe formada pelos mais renomados profissionais do país, dedicados a superar as expectativas de nossos clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {ATTORNEYS.map((attorney) => (
            <div key={attorney.id} className="group flex flex-col items-center text-center">
              <div className="relative mb-10 overflow-hidden bg-surface-dark border-2 border-primary/20 p-2 transition-all duration-500 group-hover:border-primary">
                <img 
                  src={attorney.imageUrl} 
                  alt={attorney.name} 
                  className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
              
              <div className="space-y-4">
                <div className="space-y-1">
                  <h3 className="text-white text-2xl font-black uppercase tracking-wider group-hover:text-primary transition-colors">
                    {attorney.name}
                  </h3>
                  <p className="text-primary text-xs font-black uppercase tracking-[0.3em]">
                    {attorney.role}
                  </p>
                </div>
                <p className="text-white/40 font-serif text-lg leading-relaxed max-w-sm">
                  {attorney.description}
                </p>
                <div className="flex justify-center gap-6 pt-4">
                  <span className="material-symbols-outlined text-white/20 hover:text-primary cursor-pointer transition-colors text-xl">mail</span>
                  <span className="material-symbols-outlined text-white/20 hover:text-primary cursor-pointer transition-colors text-xl">share</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
