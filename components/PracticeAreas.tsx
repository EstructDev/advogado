
import React from 'react';

interface AreaCardProps {
  icon: string;
  title: string;
  description: string;
}

const AreaCard: React.FC<AreaCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-10 border border-gray-100 group hover:shadow-2xl hover:shadow-blue-700/5 hover:-translate-y-2 transition-all duration-300">
    <div className="text-blue-700 bg-blue-50 w-16 h-16 rounded-xl flex items-center justify-center mb-8 group-hover:bg-blue-700 group-hover:text-white transition-colors duration-300">
      <span className="material-symbols-outlined text-4xl">{icon}</span>
    </div>
    <h4 className="text-xl font-bold mb-4">{title}</h4>
    <p className="text-gray-500 text-sm leading-relaxed mb-6">{description}</p>
    <a href="#contato" className="text-xs font-black uppercase tracking-widest text-blue-700 flex items-center gap-2 hover:gap-4 transition-all">
      Saber Mais <span className="material-symbols-outlined text-sm">arrow_forward</span>
    </a>
  </div>
);

const PracticeAreas: React.FC = () => {
  const areas = [
    {
      icon: 'business_center',
      title: 'Direito Corporativo',
      description: 'Assessoria jurídica estratégica para empresas, focada em contratos, societário e compliance regulatório.'
    },
    {
      icon: 'gavel',
      title: 'Contencioso Cível',
      description: 'Resolução de disputas complexas envolvendo responsabilidade civil, contratos e direitos de propriedade.'
    },
    {
      icon: 'devices',
      title: 'Direito Digital',
      description: 'Proteção de dados, conformidade com a LGPD e consultoria para negócios de base tecnológica.'
    },
    {
      icon: 'work',
      title: 'Direito do Trabalho',
      description: 'Defesa preventiva e contenciosa para empresas, garantindo segurança jurídica nas relações laborais.'
    }
  ];

  return (
    <div className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-blue-700 font-bold tracking-[0.1em] uppercase mb-4 text-sm">Expertise Jurídica</h2>
            <h3 className="text-4xl md:text-5xl font-black tracking-tight text-[#111318]">
              Nossas Principais <br/> Áreas de Atuação
            </h3>
          </div>
          <p className="text-gray-500 max-w-sm text-lg leading-relaxed">
            Soluções inovadoras e estratégicas para enfrentar os desafios mais complexos do cenário jurídico atual.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-gray-100">
          {areas.map((area, index) => (
            <AreaCard key={index} {...area} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PracticeAreas;
