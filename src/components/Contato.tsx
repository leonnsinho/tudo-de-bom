import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle, Clock } from 'lucide-react';

const Contato = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-green-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Entre em <span className="text-yellow-300">Contato</span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Estamos sempre prontos para ajudar você a planejar sua aventura perfeita em Ilhabela
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <MapPin className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Localização</h4>
                    <p className="text-gray-300 text-sm">
                      Ilhabela, SP<br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-500 p-3 rounded-full">
                    <MessageCircle className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">WhatsApp</h4>
                    <a
                      href="https://wa.me/5512981722225"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-yellow-300 hover:text-yellow-200 transition-colors"
                    >
                      (12) 98172-2225
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-blue-500 p-3 rounded-full">
                    <Phone className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Telefone</h4>
                    <a
                      href="tel:+5512981722225"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      (12) 98172-2225
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-500 p-3 rounded-full">
                    <Mail className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">E-mail</h4>
                    <a
                      href="mailto:ilhapasseio@gmail.com"
                      className="text-blue-100 hover:text-white transition-colors"
                    >
                      ilhapasseio@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-orange-500 p-3 rounded-full">
                    <Clock className="text-white" size={20} />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Horário de Funcionamento</h4>
                    <p className="text-blue-100">
                      Segunda a Domingo<br />
                      8h às 18h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Redes Sociais</h3>
              
              <div className="flex space-x-4">
                <a
                  href="https://www.instagram.com/tudo_de_bom_passeios?igsh=M2w0NDE4dW4xdWxz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-br from-purple-500 to-pink-500 p-4 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <Instagram className="text-white" size={24} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61562110752089"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 p-4 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <Facebook className="text-white" size={24} />
                </a>
                <a
                  href="https://wa.me/5512981722225"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 p-4 rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <MessageCircle className="text-white" size={24} />
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-6">Nossa Localização</h3>
            
            <div className="aspect-video bg-gray-300 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29264.843406524963!2d-45.37847647910156!3d-23.77816548047486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cd65bb0f2e0a33%3A0x6cb2f41b0b8ab21!2sIlhabela%2C%20SP!5e0!3m2!1spt!2sbr!4v1642094847283!5m2!1spt!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização Tudo de Bom Passeios"
              />
            </div>
            
            <div className="mt-6 text-center">
              <p className="text-blue-100 mb-4">
                Estamos localizados no coração de Ilhabela, de fácil acesso para todos os visitantes
              </p>
              <a
                href="https://wa.me/5512981722225?text=Olá! Gostaria de saber como chegar até vocês."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={16} />
                <span>Como Chegar</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;