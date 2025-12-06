import { Heart, MessageCircle, Mail } from 'lucide-react';
import Logo from '../assets/images/Logo.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="Logo Tudo de Bom Passeios" className="w-8 h-8" />
              <span className="text-xl font-bold">Tudo de Bom Passeios</span>
            </div>
            <p className="text-gray-400 mb-4">
              Sua aventura em Ilhabela começa aqui. Experiências inesquecíveis de jeep 4x4 e lancha pelas paisagens mais selvagens da Ilha.
            </p>
            <div className="text-sm text-gray-500">
              <p>CNPJ: 40.842.473/0001-50</p>
              <p>Registro CADASTUR: SP-123456</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#pacotes" className="hover:text-orange-500 transition-colors">
                  Nossos Passeios
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-orange-500 transition-colors">
                  Depoimentos
                </a>
              </li>
              <li>
                <a href="#reservas" className="hover:text-orange-500 transition-colors">
                  Fazer Reserva
                </a>
              </li>
              <li>
                <a href="#contato" className="hover:text-orange-500 transition-colors">
                  Contato
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Data */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dados de Contato</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-500 p-2 rounded-full">
                  <MessageCircle className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">WhatsApp</p>
                  <a
                    href="https://wa.me/5512981722225"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-green-400 transition-colors font-medium"
                  >
                    (12) 98172-2225
                  </a>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-blue-500 p-2 rounded-full">
                  <Mail className="text-white" size={16} />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">E-mail</p>
                  <a
                    href="mailto:ilhapasseio@gmail.com"
                    className="text-white hover:text-blue-400 transition-colors font-medium"
                  >
                    ilhapasseio@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Tudo de Bom Passeios. Todos os direitos reservados.
            </div>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Feito com</span>
              <Heart className="text-red-500 fill-current" size={16} />
              <span>para aventureiros em Ilhabela</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;