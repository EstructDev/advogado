
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-background-dark pt-32">
      <section className="py-24 border-b border-white/5">
        <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <div className="space-y-4">
                <h4 className="text-primary text-xs font-black uppercase tracking-[0.4em]">Nossa Missão</h4>
                <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                  Construído sobre <br/> <span className="text-primary italic">Integridade</span>
                </h2>
              </div>
              
              <div className="space-y-8 text-white/60 font-serif text-xl leading-relaxed">
                <p>
                  Há mais de três décadas, prestamos assessoria jurídica sofisticada a indivíduos e corporações, mantendo os mais altos padrões de excelência profissional em todos os casos que tratamos.
                </p>
                <p>
                  Nossa busca não é apenas pela vitória, mas pela restauração do equilíbrio e da justiça para aqueles que representamos. Acreditamos que a advocacia é um pilar fundamental da civilização e a exercemos com reverência.
                </p>
              </div>

              <div className="h-px w-full bg-white/10"></div>

              <div className="flex items-center gap-6">
                <div className="text-primary">
                  <span className="material-symbols-outlined !text-6xl">verified</span>
                </div>
                <div>
                  <h4 className="text-white font-black uppercase tracking-widest text-sm">Certificado de Excelência</h4>
                  <p className="text-white/40 text-sm italic">Eleito o melhor escritório de contencioso por 5 anos consecutivos.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-6">
                <div className="h-[400px] bg-surface-dark overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDNRsz_nN9kw0L2DVWXlZeF4nJKJbLJZk1xkKIk7NEzE7SodX9W6fGRhWUuiqmfBndxNvGi2xV2AnY3DV4jJOFQ4ChDKjcZYibfjZepLpoVMXeJz_HMfQg28xtoQ6paoO-WZdUoPaeWSnM0BVQrYCMZv5qs1UyJux60PlMlDPxUkhEALbLOdl6kk15d6MDj3_7VH4LFpVIUMnquOmMKKArHooIzOMxk_BehyCqxpV-Cq_JdrflnhmlDbfJ2PYuG6_a7yaAhoB7dvww" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Escritório"
                  />
                </div>
                <div className="h-[200px] bg-primary flex items-center justify-center text-center p-8">
                  <h3 className="text-background-dark text-3xl font-black uppercase tracking-tighter">Resultados Comprovados</h3>
                </div>
              </div>
              <div className="space-y-6 pt-12">
                <div className="h-[200px] bg-surface-dark flex flex-col items-center justify-center text-center p-8 space-y-2">
                  <div className="text-primary text-4xl font-black">1994</div>
                  <div className="text-white/40 text-[10px] font-black uppercase tracking-widest">Ano de Fundação</div>
                </div>
                <div className="h-[400px] bg-surface-dark overflow-hidden">
                  <img 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpNviAyhcnbkXXIm-jtrd6_qEgsaXFT4lITembPejt7m4KNIrSqDBGdfIrSs4PabI1LG82WIB6J7dm3jQKDNcmrA8DenkInFrLoMGYVIdsv5XnDENoHIITZbfRa9nWP0Vx7seJYBw7qKVr_TbMhihQD07R0uObZ7IbUZs3FmcwUpflDuJ5oqDI9dy1BhfqvG-XobEEmHcUtXgGpfj9LwmT_s-jmaTw238JIdAq2kRcT2C5j5XpO8ds-2Co9d57n5qWpytOYpFMnjw" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" 
                    alt="Balança da Justiça"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-surface-dark py-32">
        <div className="container mx-auto px-4 lg:px-20 max-w-[1200px]">
          <div className="flex flex-col items-center text-center space-y-12">
            <span className="material-symbols-outlined !text-7xl text-primary opacity-30">format_quote</span>
            <h2 className="text-primary italic text-3xl md:text-5xl font-serif leading-tight">
              "A justiça é a vontade constante e perpétua de dar a cada um o que é seu."
            </h2>
            <div className="space-y-2">
              <p className="text-white font-black uppercase tracking-[0.4em] text-sm">Ulpiano</p>
              <p className="text-white/30 text-xs uppercase tracking-widest">Jurista Romano</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
