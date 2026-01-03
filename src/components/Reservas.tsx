import React, { useState, useEffect } from 'react';
import { Calendar, Users } from 'lucide-react';
import PraiaDoBonete from '../assets/images/Praia-do-Bonete.jpg';
import TourSul from '../assets/images/tour-sul.jpg';
import TourNorte from '../assets/images/norte.webp';

const Reservas = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    passeio: '',
    data: '',
    pessoas: '1',
    observacoes: ''
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Check if form was submitted successfully
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccessModal(true);
      // Clean URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const passeios = [
    { id: 'jipe-fechado', nome: 'Jipe Fechado (até 10 pessoas)', preco: 'R$ 800', imagem: 'https://i.postimg.cc/qq7PywSQ/IMG-20250726-WA0008.jpg' },
    { id: 'jeep-castelhanos', nome: 'Jeep para Castelhanos', preco: 'R$ 130', imagem: 'https://i.postimg.cc/qq7PywSQ/IMG-20250726-WA0008.jpg' },
    { id: 'lancha-castelhanos', nome: 'Lancha para Castelhanos (ida e volta)', preco: 'R$ 320', imagem: 'https://cdn.prod.website-files.com/680f8dfb18edd53d6bf1cc4e/681a011b04f353ae50532662_caption.jpg' },
    { id: 'lancha-bonete', nome: 'Lancha para Bonete (ida e volta)', preco: 'R$ 250', imagem: PraiaDoBonete },
    { id: 'combo', nome: 'Combo Jeep + Lancha Castelhanos', preco: 'R$ 275', imagem: 'https://cdn.prod.website-files.com/680f8dfb18edd53d6bf1cc4e/681572dc52dfaa71f7f017cc_praia-fome.jpg' },
    { id: 'tour-sul-1', nome: 'Tour Sul da Ilha 1', preco: 'R$ 100', imagem: TourSul },
    { id: 'tour-sul-2', nome: 'Tour Sul da Ilha 2', preco: 'R$ 100', imagem: TourSul },
    { id: 'tour-sul-aventura', nome: 'Tour Sul Aventura', preco: 'R$ 110', imagem: TourSul },
    { id: 'tour-norte-ilha', nome: 'Tour Norte da Ilha', preco: 'R$ 120', imagem: TourNorte }
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Get minimum date (today)
  const today = new Date().toISOString().split('T')[0];

  return (
    <>
      <section id="reservas" className="relative py-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500 via-pink-500 to-purple-600">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </div>
      
      {/* Animated Blurs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-yellow-400/30 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-400/40 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute -bottom-40 -left-20 w-96 h-96 bg-pink-400/25 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute -bottom-20 -right-40 w-72 h-72 bg-purple-400/30 rounded-full blur-2xl animate-bounce" style={{ animationDuration: '4s', animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-yellow-300/20 rounded-full blur-xl animate-spin" style={{ animationDuration: '8s' }} />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reserve sua <span className="text-yellow-300">Aventura</span>
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Preencha os dados abaixo e em poucos cliques você estará pronto para viver momentos únicos em Ilhabela
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Opções de Reserva */}
          <div className="flex flex-col lg:flex-row gap-8 mb-12 items-center">
            {/* Opção WhatsApp */}
            <div className="flex-1 bg-green-500/20 backdrop-blur-lg rounded-3xl shadow-2xl border border-green-400/30 p-8 text-center hover:scale-105 transition-all duration-300">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.085"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reserva Rápida</h3>
              <p className="text-white/80 mb-6 text-sm">
                Fale direto conosco no WhatsApp para uma reserva mais rápida e tire todas suas dúvidas em tempo real
              </p>
              <button
                onClick={() => window.open('https://wa.me/5512981722225?text=Olá! Gostaria de fazer uma reserva de passeio em Ilhabela. Podem me ajudar?', '_blank')}
                className="w-full bg-green-500 text-white py-3 px-6 rounded-xl font-semibold hover:bg-green-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.485 3.085"/>
                </svg>
                <span>Reservar no WhatsApp</span>
              </button>
            </div>

            {/* Separador "OU" */}
            <div className="flex items-center justify-center">
              <div className="bg-white/20 backdrop-blur-lg rounded-full w-16 h-16 flex items-center justify-center">
                <span className="text-white font-bold text-lg">OU</span>
              </div>
            </div>

            {/* Texto explicativo */}
            <div className="flex-1 text-center lg:text-left">
              <h3 className="text-xl font-bold text-white mb-3">Formulário Online</h3>
              <p className="text-white/80 text-sm">
                Preencha o formulário abaixo com todos os detalhes da sua reserva
              </p>
            </div>
          </div>

          {/* Formulário */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="p-8 lg:p-12">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">Formulário de Reserva</h3>
                  <p className="text-white/80">Preencha os dados abaixo para fazer sua reserva online</p>
                </div>
              <form action="https://formsubmit.co/ilhapasseio@gmail.com" method="POST" className="space-y-6">
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <input type="hidden" name="_subject" value="Nova Reserva de Passeio - Turismo Ilhabela" />
                <input type="hidden" name="_next" value={`${window.location.origin}${window.location.pathname}?success=true`} />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nome" className="block text-sm font-semibold text-white mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      required
                      value={formData.nome}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/95 backdrop-blur border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 shadow-lg text-gray-800 placeholder-gray-500"
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div>
                    <label htmlFor="telefone" className="block text-sm font-semibold text-white mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        id="telefone"
                        name="telefone"
                        required
                        value={formData.telefone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/95 backdrop-blur border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 shadow-lg text-gray-800 placeholder-gray-500"
                        placeholder="(12) 99999-9999"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/95 backdrop-blur border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 shadow-lg text-gray-800 placeholder-gray-500"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="passeio" className="block text-sm font-semibold text-white mb-2">
                      Escolha seu Passeio *
                    </label>
                    <select
                      id="passeio"
                      name="passeio"
                      required
                      value={formData.passeio}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/95 backdrop-blur border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 shadow-lg text-gray-800"
                    >
                      <option value="" className="text-gray-500">Selecione um passeio</option>
                      {passeios.map((passeio) => (
                        <option key={passeio.id} value={passeio.id} className="text-gray-800">
                          {passeio.nome} - {passeio.preco}/pessoa
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label htmlFor="data" className="block text-sm font-semibold text-white mb-2">
                        <Calendar size={16} className="inline mr-1" />
                        Data *
                      </label>
                      <input
                        type="date"
                        id="data"
                        name="data"
                        required
                        min={today}
                        value={formData.data}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/95 backdrop-blur border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 shadow-lg text-gray-800"
                      />
                    </div>

                    <div>
                      <label htmlFor="pessoas" className="block text-sm font-semibold text-white mb-2">
                        <Users size={16} className="inline mr-1" />
                        Pessoas *
                      </label>
                      <select
                        id="pessoas"
                        name="pessoas"
                        required
                        value={formData.pessoas}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-white/95 backdrop-blur border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 shadow-lg text-gray-800"
                      >
                        {[...Array(12)].map((_, i) => (
                          <option key={i + 1} value={i + 1} className="text-gray-800">
                            {i + 1} {i === 0 ? 'pessoa' : 'pessoas'}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="observacoes" className="block text-sm font-semibold text-white mb-2">
                      Observações (opcional)
                    </label>
                    <textarea
                      id="observacoes"
                      name="observacoes"
                      rows={3}
                      value={formData.observacoes}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-white/95 backdrop-blur border border-white/30 rounded-xl focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition-all duration-300 shadow-lg resize-none text-gray-800 placeholder-gray-500"
                      placeholder="Alguma informação adicional?"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 text-white py-4 px-6 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
                  >
                    <Calendar size={20} />
                    <span>Reservar Agora</span>
                  </button>
                </form>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>

    {/* Success Modal */}
    {showSuccessModal && (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full text-center shadow-2xl">
          <div className="mb-6">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Reserva Enviada!</h3>
            <p className="text-gray-600">
              Sua reserva está sendo processada e você receberá a confirmação nos próximos 
              <span className="font-semibold text-orange-500"> 15 minutos</span>.
            </p>
          </div>
          <button
            onClick={() => setShowSuccessModal(false)}
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white py-3 px-6 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Fechar
          </button>
        </div>
      </div>
    )}
  </>
  );
};

export default Reservas;