
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0a0f1a] text-white/40 text-sm border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 text-white mb-6">
              <div className="size-6 text-blue-700">
                <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                </svg>
              </div>
              <span className="font-black uppercase tracking-tight text-lg">Advocacia Moderna</span>
            </div>
            <p className="leading-relaxed">
              Soluções jurídicas inovadoras com foco na ética, transparência e agilidade para garantir os melhores resultados para nossos clientes.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Navegação</h4>
            <ul className="space-y-4">
              {['Início', 'Expertise', 'Sobre', 'Contato'].map(item => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="hover:text-blue-500 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Legal</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-500 transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="hover:text-blue-500 transition-colors">OAB/SP 000.000</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold uppercase tracking-widest text-xs mb-6">Redes Sociais</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all">
                <i className="fab fa-linkedin-in"></i>
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-blue-700 hover:border-blue-700 hover:text-white transition-all">
                <i className="fab fa-instagram"></i>
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 gap-4">
          <p>© 2024 Advocacia Moderna. Todos os direitos reservados.</p>
          <p className="text-xs">Desenvolvido com excelência técnica.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
