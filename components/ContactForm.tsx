
import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    assunto: 'Direito Corporativo',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.nome || !formData.email || !formData.mensagem) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    setIsSubmitting(true);
    // Simulating API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ nome: '', email: '', assunto: 'Direito Corporativo', mensagem: '' });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="py-24 px-6 bg-[#0a0f1a] text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20">
        <div className="w-full lg:w-1/2">
          <h2 className="text-blue-500 font-bold tracking-[0.1em] uppercase mb-4 text-sm">Fale Conosco</h2>
          <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Vamos discutir seu caso?</h3>
          <p className="text-gray-400 text-lg mb-10 leading-relaxed max-w-lg">
            Nossa equipe de especialistas está pronta para ouvir você e encontrar a melhor solução jurídica para sua necessidade.
          </p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="bg-blue-700/10 p-3 rounded-lg text-blue-500">
                <span className="material-symbols-outlined">location_on</span>
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Endereço</p>
                <p className="text-gray-400">Av. Paulista, 1000 - 12º Andar<br/>Bela Vista, São Paulo - SP</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-blue-700/10 p-3 rounded-lg text-blue-500">
                <span className="material-symbols-outlined">mail</span>
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">E-mail</p>
                <p className="text-gray-400">contato@advocaciamoderna.com.br</p>
              </div>
            </div>
            <div className="flex items-start gap-5">
              <div className="bg-blue-700/10 p-3 rounded-lg text-blue-500">
                <span className="material-symbols-outlined">phone_iphone</span>
              </div>
              <div>
                <p className="font-bold text-white uppercase text-xs tracking-widest mb-1">Telefone</p>
                <p className="text-gray-400">+55 (11) 99999-9999</p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-1/2">
          <div className="bg-white/5 p-8 md:p-12 rounded-2xl border border-white/10 backdrop-blur-sm">
            {isSuccess ? (
              <div className="text-center py-12">
                <span className="material-symbols-outlined text-6xl text-green-500 mb-4">check_circle</span>
                <h4 className="text-2xl font-bold mb-2">Mensagem Enviada!</h4>
                <p className="text-gray-400">Em breve um de nossos consultores entrará em contato.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Nome Completo</label>
                    <input 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all text-white"
                      placeholder="Seu nome"
                      value={formData.nome}
                      onChange={(e) => setFormData({...formData, nome: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase font-bold tracking-widest text-gray-400">E-mail</label>
                    <input 
                      type="email" 
                      className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all text-white"
                      placeholder="seu@email.com"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Área de Interesse</label>
                  <select 
                    className="w-full bg-[#101622] border border-white/10 rounded-lg p-4 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all text-white"
                    value={formData.assunto}
                    onChange={(e) => setFormData({...formData, assunto: e.target.value})}
                  >
                    <option value="Direito Corporativo">Direito Corporativo</option>
                    <option value="Direito Cível">Direito Cível</option>
                    <option value="Direito Digital">Direito Digital</option>
                    <option value="Direito do Trabalho">Direito do Trabalho</option>
                    <option value="Outros">Outros</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase font-bold tracking-widest text-gray-400">Mensagem</label>
                  <textarea 
                    rows={4}
                    className="w-full bg-white/5 border border-white/10 rounded-lg p-4 focus:border-blue-700 focus:ring-1 focus:ring-blue-700 outline-none transition-all text-white resize-none"
                    placeholder="Como podemos ajudar?"
                    value={formData.mensagem}
                    onChange={(e) => setFormData({...formData, mensagem: e.target.value})}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 hover:bg-blue-800 disabled:opacity-50 text-white font-black uppercase tracking-[0.2em] py-5 rounded-lg transition-all shadow-xl shadow-blue-700/20 active:scale-[0.98]"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Solicitação'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
