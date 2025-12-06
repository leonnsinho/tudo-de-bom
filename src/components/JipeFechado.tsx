import { Users, Clock, Calendar, MessageCircle } from 'lucide-react';

const JipeFechado = () => {
  const scrollToReservas = () => {
    const element = document.getElementById('reservas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="jipe-fechado" className="py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Jipe Fechado Exclusivo
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Perfeito para grupos e famílias! Conforto e segurança em uma aventura única
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              {/* Images */}
              <div className="relative flex flex-col gap-2 p-4 bg-gray-100">
                <div className="relative flex-1 rounded-lg overflow-hidden">
                  <img 
                    src="/jipe 1.jpg" 
                    alt="Jipe Fechado 4x4 em Ilhabela - Vista 1" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative flex-1 rounded-lg overflow-hidden">
                  <img 
                    src="/jipe 2.jpg" 
                    alt="Jipe Fechado 4x4 em Ilhabela - Vista 2" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute top-8 right-8 bg-orange-500 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  R$ 700
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                  Aventura 4x4 com Todo Conforto
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Explore Ilhabela com segurança e conforto no nosso jipe! 
                  Ideal para grupos grandes, famílias com crianças e quem busca proteção 
                  contra sol e chuva durante a aventura.
                </p>

                {/* Features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <Users className="text-orange-500 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-gray-800">Capacidade</p>
                      <p className="text-sm text-gray-600">Até 10 pessoas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3 bg-gray-50 p-3 rounded-lg">
                    <Clock className="text-orange-500 flex-shrink-0" size={24} />
                    <div>
                      <p className="font-semibold text-gray-800">Duração</p>
                      <p className="text-sm text-gray-600">Dia completo</p>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div className="bg-gradient-to-r from-orange-50 to-coral-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">O que está incluído:</h4>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Motorista/guia experiente e credenciado</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Equipamentos de segurança completos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Paradas nos melhores pontos turísticos</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Proteção contra sol e chuva</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-orange-500 mr-2">✓</span>
                      <span>Ideal para crianças e idosos</span>
                    </li>
                  </ul>
                </div>                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={scrollToReservas}
                    className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3.5 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Calendar size={20} />
                    <span>Reservar Agora</span>
                  </button>
                  
                  <a
                    href="https://wa.me/5512981722225?text=Olá! Gostaria de saber mais sobre o Jipe Fechado para até 10 pessoas."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3.5 rounded-lg font-bold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <MessageCircle size={20} />
                    <span>WhatsApp</span>
                  </a>
                </div>

                {/* Price Note */}
                <p className="text-xs text-gray-500 text-center mt-4">
                  Valor fixo de R$ 700,00 para grupos de até 10 pessoas (Somente Dinheiro ou Pix)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="max-w-4xl mx-auto mt-8 text-center">
          <p className="text-sm text-gray-600">
            <span className="font-semibold">Dica:</span> Perfeito para dividir entre amigos e família! 
            Com 10 pessoas, sai apenas R$ 70 por pessoa.
          </p>
        </div>
      </div>
    </section>
  );
};

export default JipeFechado;
