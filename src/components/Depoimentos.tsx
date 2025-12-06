import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

const Depoimentos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const depoimentos = [
    {
      id: 1,
      nome: "Marina Silva",
      cidade: "São Paulo",
      foto: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      texto: "Experiência incrível! O passeio de jeep para Castelhanos foi emocionante e seguro. Os guias são muito profissionais e conhecem cada cantinho da ilha. Recomendo demais!",
      passeio: "Jeep para Castelhanos"
    },
    {
      id: 2,
      nome: "Carlos Rodrigues",
      cidade: "Rio de Janeiro",
      foto: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      texto: "A lancha para Bonete superou todas as expectativas! Paisagens deslumbrantes, águas cristalinas e um atendimento excepcional. Voltaremos com certeza!",
      passeio: "Lancha para Bonete"
    },
    {
      id: 3,
      nome: "Ana Paula Costa",
      cidade: "Belo Horizonte",
      foto: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      texto: "O combo jeep + lancha foi perfeito para nossa lua de mel! Conseguimos ver Ilhabela de dois ângulos diferentes. Organização impecável e momentos inesquecíveis!",
      passeio: "Combo Jeep + Lancha"
    },
    {
      id: 4,
      nome: "Roberto Santos",
      cidade: "Campinas",
      foto: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      texto: "Excelente custo-benefício! Os equipamentos são de primeira qualidade e a equipe muito atenciosa. A lancha para Castelhanos foi o ponto alto da nossa viagem!",
      passeio: "Lancha para Castelhanos"
    },
    {
      id: 5,
      nome: "Juliana Oliveira",
      cidade: "Santos",
      foto: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      texto: "Primeira vez em Ilhabela e escolhemos a empresa certa! Segurança em primeiro lugar, diversão garantida e paisagens de tirar o fôlego. Já estamos planejando voltar!",
      passeio: "Jeep para Castelhanos"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + depoimentos.length) % depoimentos.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="depoimentos" className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-orange-600">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            O que nossos <span className="text-yellow-300">aventureiros</span> dizem
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Mais de 10.000 clientes satisfeitos já viveram experiências inesquecíveis conosco
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
              <div className="flex-shrink-0">
                <img
                  src={depoimentos[currentIndex].foto}
                  alt={depoimentos[currentIndex].nome}
                  className="w-24 h-24 rounded-full object-cover border-4 border-white/30"
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex justify-center md:justify-start space-x-1 mb-4">
                  {[...Array(depoimentos[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <blockquote className="text-lg md:text-xl text-white mb-4 italic">
                  "{depoimentos[currentIndex].texto}"
                </blockquote>
                
                <div className="text-yellow-300 font-semibold">
                  {depoimentos[currentIndex].nome}
                </div>
                <div className="text-blue-200">
                  {depoimentos[currentIndex].cidade} • {depoimentos[currentIndex].passeio}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300"
          >
            <ChevronRight size={24} />
          </button>

          {/* Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {depoimentos.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-yellow-400' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;