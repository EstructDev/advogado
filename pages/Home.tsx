
import React from 'react';
import { PRACTICES } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Dynamic Hero Section */}
      <section className="relative min-h-[90vh] lg:min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center grayscale brightness-[0.35] animate-slow-zoom"
            style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop")' }}
          />
          <div className="absolute inset-0 hero-gradient" />
        </div>

        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px] relative z-10 pt-20">
          <div className="max-w-4xl space-y-8 lg:space-y-12 animate-fade-up">
            <div className="flex items-center gap-4">
              <div className="h-px w-8 lg:w-16 bg-primary"></div>
              <span className="text-primary text-[10px] lg:text-xs font-black uppercase tracking-[0.6em]">Justiça e Tradição</span>
            </div>
            
            <h1 className="text-white text-5xl md:text-7xl lg:text-9xl font-black uppercase leading-[0.9] tracking-tighter">
              Defesa de <br/>
              <span className="text-primary italic font-serif lowercase">elite</span> para<br/>
              casos complexos.
            </h1>

            <p className="text-white/60 font-serif text-lg lg:text-3xl italic leading-relaxed max-w-2xl">
              Unindo expertise jurídica sofisticada e estratégia incansável para proteger o que mais importa para você.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-6">
              <button className="bg-primary hover:bg-white text-background-dark px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all duration-300 shadow-2xl hover:-translate-y-1">
                Agendar Consultoria
              </button>
              <button className="border border-white/10 hover:border-primary text-white px-10 py-5 text-[11px] font-black uppercase tracking-[0.2em] transition-all hover:bg-white/5">
                Nossas Práticas
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section - Optimized for Mobile Grid */}
      <section className="bg-background-dark py-24 lg:py-40">
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10 mb-16 lg:mb-24">
            <div className="max-w-2xl space-y-4">
              <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Domínio Jurídico</h4>
              <h2 className="text-white text-4xl lg:text-7xl font-black uppercase tracking-tight">Especialidades</h2>
            </div>
            <p className="text-white/40 font-serif text-lg lg:text-2xl italic leading-relaxed lg:text-right max-w-sm">
              Cada causa é única. Nossa abordagem é feita sob medida para resultados extraordinários.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {PRACTICES.map((practice) => (
              <div key={practice.id} className="glass-card p-10 lg:p-14 group hover:bg-surface-dark transition-all duration-500 border border-white/5 hover:border-primary/20">
                <div className="w-16 h-16 bg-white/5 flex items-center justify-center mb-10 group-hover:bg-primary transition-all duration-500 rounded-sm">
                  <span className="material-symbols-outlined !text-4xl text-primary group-hover:text-background-dark">
                    {practice.icon}
                  </span>
                </div>
                <h3 className="text-white text-2xl lg:text-3xl font-black uppercase tracking-wider mb-5">
                  {practice.title}
                </h3>
                <p className="text-white/40 font-serif text-lg leading-relaxed mb-8 group-hover:text-white/60 transition-colors">
                  {practice.description}
                </p>
                <div className="flex items-center gap-4 text-primary text-[11px] font-black uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                  Saiba Mais <span className="material-symbols-outlined !text-sm">chevron_right</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modern Stats / Why Us */}
      <section className="bg-surface-dark py-24 lg:py-40 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 translate-x-1/2 pointer-events-none"></div>
        
        <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative group overflow-hidden order-2 lg:order-1">
              <img 
                src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop" 
                alt="Escritório" 
                className="w-full aspect-square lg:aspect-auto h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-[20px] border-background-dark/30 pointer-events-none"></div>
            </div>

            <div className="space-y-12 order-1 lg:order-2">
              <div className="space-y-4">
                <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.4em]">Diferenciais</h4>
                <h2 className="text-white text-4xl lg:text-7xl font-black uppercase tracking-tighter leading-none">A marca da <br/><span className="text-primary font-serif lowercase italic">excelência</span></h2>
              </div>
              
              <p className="text-white/50 font-serif text-lg lg:text-2xl leading-relaxed italic">
                Nossa reputação é construída sobre vitórias silenciosas e defesa vigorosa em casos de grande repercussão nacional.
              </p>

              <div className="grid grid-cols-2 gap-10">
                {[
                  { label: 'Vitórias em Tribunais', value: '98%' },
                  { label: 'Valor em Disputa', value: 'R$ 1.2B+' },
                  { label: 'Anos de Legado', value: '25+' },
                  { label: 'Clientes Ativos', value: '450' }
                ].map((stat) => (
                  <div key={stat.label} className="space-y-1 border-l border-white/10 pl-6">
                    <div className="text-white text-3xl lg:text-5xl font-black tracking-tighter">{stat.value}</div>
                    <div className="text-primary text-[9px] font-black uppercase tracking-widest">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Action Mobile CTA */}
      <a 
        href="#/contato" 
        className="fixed bottom-6 right-6 lg:hidden z-40 bg-primary text-background-dark w-16 h-16 rounded-full flex items-center justify-center shadow-2xl active:scale-95 transition-transform"
      >
        <span className="material-symbols-outlined !text-3xl">mail</span>
      </a>
    </div>
  );
};

export default Home;
