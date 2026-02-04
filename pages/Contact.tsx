
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 lg:pt-48 pb-24 bg-background-dark min-h-screen">
      <div className="container mx-auto px-6 lg:px-12 max-w-[1400px]">
        <div className="grid lg:grid-cols-2 gap-20 lg:gap-32">
          
          <div className="space-y-12 lg:space-y-20 animate-fade-up">
            <div className="space-y-6">
              <h4 className="text-primary text-[10px] font-black uppercase tracking-[0.5em]">Pronto Atendimento</h4>
              <h2 className="text-white text-5xl lg:text-8xl font-black uppercase tracking-tighter leading-none">
                Estamos <br/> <span className="text-primary italic font-serif lowercase">online</span>
              </h2>
              <p className="text-white/40 font-serif text-xl lg:text-3xl italic leading-relaxed max-w-md">
                Análise jurídica imediata e confidencial para seu próximo passo estratégico.
              </p>
            </div>

            <div className="grid gap-10">
              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass-card flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl">location_on</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-white/30 font-black uppercase tracking-[0.3em] text-[9px]">Localização</h4>
                  <p className="text-white text-lg lg:text-2xl font-serif">Av. Paulista, 1200 - Jardins<br/>São Paulo, Brasil</p>
                </div>
              </div>

              <div className="flex items-start gap-8 group">
                <div className="w-16 h-16 glass-card flex items-center justify-center shrink-0 border border-white/5 group-hover:border-primary transition-all">
                  <span className="material-symbols-outlined text-primary text-3xl">call</span>
                </div>
                <div className="space-y-1">
                  <h4 className="text-white/30 font-black uppercase tracking-[0.3em] text-[9px]">Telefone Direto</h4>
                  <p className="text-primary text-2xl lg:text-4xl font-black tracking-tighter">+55 (11) 5555-0198</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-card p-10 lg:p-16 border border-white/5 relative shadow-2xl animate-fade-up [animation-delay:200ms]">
            <div className="absolute -top-6 left-10 bg-primary px-6 py-2 text-background-dark text-[10px] font-black uppercase tracking-widest">
              Formulário de Contato
            </div>
            
            <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-8">
                <div className="relative group">
                  <input 
                    type="text" 
                    id="nome"
                    placeholder=" " 
                    className="peer w-full bg-transparent border-0 border-b-2 border-white/10 py-4 focus:border-primary focus:ring-0 text-white font-serif text-xl placeholder-transparent transition-all"
                  />
                  <label 
                    htmlFor="nome"
                    className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-white/30 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-placeholder-shown:font-serif peer-placeholder-shown:italic peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:text-primary transition-all"
                  >
                    Seu Nome Completo
                  </label>
                </div>

                <div className="relative group">
                  <input 
                    type="email" 
                    id="email"
                    placeholder=" " 
                    className="peer w-full bg-transparent border-0 border-b-2 border-white/10 py-4 focus:border-primary focus:ring-0 text-white font-serif text-xl placeholder-transparent transition-all"
                  />
                  <label 
                    htmlFor="email"
                    className="absolute left-0 -top-4 text-[10px] font-black uppercase tracking-widest text-white/30 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-placeholder-shown:font-serif peer-placeholder-shown:italic peer-focus:-top-4 peer-focus:text-[10px] peer-focus:font-black peer-focus:text-primary transition-all"
                  >
                    E-mail Corporativo
                  </label>
                </div>

                <div className="space-y-2">
                  <label className="text-white/30 text-[10px] font-black uppercase tracking-widest">Área de Interesse</label>
                  <select className="w-full bg-transparent border-0 border-b-2 border-white/10 py-4 focus:border-primary focus:ring-0 text-white font-serif italic text-xl transition-all appearance-none cursor-pointer">
                    <option className="bg-surface-dark">Direito Corporativo</option>
                    <option className="bg-surface-dark">Defesa Criminal</option>
                    <option className="bg-surface-dark">Direito de Família</option>
                    <option className="bg-surface-dark">Outros</option>
                  </select>
                </div>

                <div className="space-y-2 pt-4">
                  <textarea 
                    rows={4} 
                    placeholder="Como podemos ser úteis?" 
                    className="w-full bg-white/5 border-2 border-white/5 p-6 focus:border-primary/30 focus:ring-0 text-white font-serif italic text-xl transition-all resize-none outline-none"
                  ></textarea>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-white text-background-dark py-6 lg:py-8 text-xs font-black uppercase tracking-[0.25em] transition-all shadow-2xl hover:-translate-y-1">
                Solicitar Consulta Confidencial
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
