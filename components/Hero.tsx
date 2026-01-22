
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative min-h-[90vh] flex items-center bg-[#0a0f1a] text-white pt-20 px-6">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-700/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col gap-8">
          <div>
            <span className="text-blue-500 font-bold tracking-[0.2em] uppercase text-sm block mb-4">
              Escritório Boutique de Advocacia
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] tracking-tighter mb-6">
              Compromisso <br /> com a sua <span className="text-blue-600">Justiça.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 font-normal leading-relaxed max-w-xl">
              Excelência jurídica e atendimento personalizado para proteger seus direitos e seu patrimônio. Atuamos com transparência e foco em resultados concretos.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-700 text-white text-sm font-bold px-10 py-5 rounded-lg hover:bg-blue-800 hover:scale-105 transition-all shadow-xl shadow-blue-700/20">
              Agendar Consulta Gratuita
            </button>
            <button className="border border-white/20 text-white text-sm font-bold px-10 py-5 rounded-lg hover:bg-white/10 transition-all">
              Conheça Nossos Serviços
            </button>
          </div>

          <div className="flex items-center gap-8 mt-4 pt-8 border-t border-white/10">
            <div>
              <p className="text-3xl font-black text-blue-500">15+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Anos de Experiência</p>
            </div>
            <div>
              <p className="text-3xl font-black text-blue-500">500+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500">Casos Resolvidos</p>
            </div>
          </div>
        </div>

        <div className="hidden lg:block relative">
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl relative">
            <img 
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&q=80&w=1000" 
              alt="Advogado em escritório moderno" 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-transparent to-transparent opacity-40"></div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl text-[#111318]">
            <p className="text-xs font-bold text-blue-700 uppercase tracking-widest mb-1">Destaque</p>
            <p className="text-sm font-medium italic">"Excelência e discrição em <br/> todas as etapas do processo."</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
