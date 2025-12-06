import { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import Logo from '../assets/images/logo.svg'; // Correct the SVG logo path

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <img src={Logo} alt="Logo" className="w-10 h-10" />
            <div className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent font-handwritten">
              <div>Tudo De Bom</div>
              <div className="text-lg text-gray-700 font-handwritten">passeios</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-700 hover:text-orange-500 transition-colors">
              Início
            </button>
            <button onClick={() => scrollToSection('pacotes')} className="text-gray-700 hover:text-orange-500 transition-colors">
              Passeios
            </button>
            <button onClick={() => scrollToSection('depoimentos')} className="text-gray-700 hover:text-orange-500 transition-colors">
              Depoimentos
            </button>
            <button onClick={() => scrollToSection('reservas')} className="text-gray-700 hover:text-orange-500 transition-colors">
              Reservas
            </button>
            <a
              href="https://wa.me/5512981722225"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={16} />
              <span>WhatsApp</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-700 hover:text-orange-500 transition-all duration-300 p-2 rounded-lg hover:bg-orange-50"
          >
            <div className="relative w-6 h-6">
              <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`}>
                <Menu size={24} />
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'}`}>
                <X size={24} />
              </span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation with Animation */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'max-h-[90vh] overflow-y-auto opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <nav className="mt-4 py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-gray-700 hover:text-orange-500 transition-all duration-200 text-left py-2 px-2 rounded-lg hover:bg-orange-50 transform hover:translate-x-2"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('pacotes')} 
                className="text-gray-700 hover:text-orange-500 transition-all duration-200 text-left py-2 px-2 rounded-lg hover:bg-orange-50 transform hover:translate-x-2"
              >
                Passeios
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')} 
                className="text-gray-700 hover:text-orange-500 transition-all duration-200 text-left py-2 px-2 rounded-lg hover:bg-orange-50 transform hover:translate-x-2"
              >
                Depoimentos
              </button>
              <button 
                onClick={() => scrollToSection('reservas')} 
                className="text-gray-700 hover:text-orange-500 transition-all duration-200 text-left py-2 px-2 rounded-lg hover:bg-orange-50 transform hover:translate-x-2"
              >
                Reservas
              </button>
              <a
                href="https://wa.me/5512981722225"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white px-4 py-3 rounded-full hover:bg-green-600 transition-all duration-300 flex items-center space-x-2 w-fit mt-2 hover:scale-105 hover:shadow-lg"
              >
                <MessageCircle size={16} />
                <span>WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;