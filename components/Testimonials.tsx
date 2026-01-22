
import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Ricardo Mendes',
      role: 'CEO, Tech Ventures',
      text: 'O Dr. Roberto e sua equipe cuidaram de todo o processo de sucessão da nossa empresa com uma agilidade e competência que nunca vimos antes.',
      rating: 5
    },
    {
      name: 'Juliana Costa',
      role: 'Empresária',
      text: 'Fui muito bem orientada sobre as questões de LGPD na minha startup. O atendimento é humano e realmente focado na prevenção de riscos.',
      rating: 5
    },
    {
      name: 'Carlos Alberto',
      role: 'Investidor',
      text: 'Excelente atuação em um caso civil complexo. Transparência total em cada etapa e um resultado muito acima do esperado pela nossa diretoria.',
      rating: 5
    }
  ];

  return (
    <div className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-blue-700 font-bold tracking-[0.1em] uppercase mb-4 text-sm">Depoimentos</h2>
          <h3 className="text-4xl font-black tracking-tight text-[#111318]">A Confiança de Nossos Clientes</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-[#f6f6f8] p-10 rounded-2xl relative">
              <div className="flex gap-1 text-yellow-400 mb-6">
                {[...Array(t.rating)].map((_, i) => (
                  <span key={i} className="material-symbols-outlined fill-1">star</span>
                ))}
              </div>
              <p className="text-gray-600 italic mb-8 text-lg leading-relaxed">"{t.text}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-700/10 flex items-center justify-center text-blue-700 font-black">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-[#111318]">{t.name}</h4>
                  <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
              <span className="absolute top-8 right-8 text-blue-700/10 text-6xl material-symbols-outlined">format_quote</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
