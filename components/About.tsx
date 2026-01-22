
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-[#f6f6f8] py-24 px-6">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="w-full lg:w-1/2 relative">
          <div className="aspect-[4/3] md:aspect-[16/10] rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=1200" 
              alt="Nossa Equipe" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-10 -right-10 hidden md:block w-64 h-64 bg-blue-700 rounded-2xl -z-10 opacity-10"></div>
          <div className="absolute -top-10 -left-10 hidden md:block w-32 h-32 border-4 border-blue-700 rounded-2xl -z-10 opacity-20"></div>
        </div>

        <div className="w-full lg:w-1/2 flex flex-col gap-8">
          <div>
            <span className="text-blue-700 font-bold tracking-[0.1em] uppercase text-sm mb-4 block">Sobre o Escritório</span>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[#111318] mb-6">Tradição em Inovar.</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Com mais de 15 anos de atuação sólida, nosso escritório nasceu com o propósito de modernizar a advocacia, unindo a tradição da técnica jurídica com a agilidade das novas tecnologias.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Focamos em oferecer soluções que priorizam a transparência e a segurança jurídica de nossos clientes, garantindo que cada caso receba a atenção personalizada que merece.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="text-blue-700 flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">verified</span>
              </div>
              <div>
                <p className="font-bold text-[#111318] mb-1">Ética Inabalável</p>
                <p className="text-sm text-gray-500">Compromisso total com a verdade e a conduta profissional exemplar.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-blue-700 flex-shrink-0">
                <span className="material-symbols-outlined text-3xl">psychology</span>
              </div>
              <div>
                <p className="font-bold text-[#111318] mb-1">Visão Estratégica</p>
                <p className="text-sm text-gray-500">Antecipamos riscos e criamos caminhos seguros para o sucesso.</p>
              </div>
            </div>
          </div>

          <button className="w-fit bg-white border border-gray-200 text-[#111318] font-bold py-4 px-10 rounded-lg hover:bg-gray-50 transition-all flex items-center gap-3">
            Nossa História Completa
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
