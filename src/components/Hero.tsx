import { useState, useEffect } from 'react';
import { Play, Calendar, Star } from 'lucide-react';
import fundoHero from '../assets/images/fundo-hero.jpg';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  const stats = [
    { number: "+100", label: "Aventureiros Felizes" },
    { number: "+50", label: "Passeios Realizados" },
    { number: "4.9", label: "Avaliação Média" },
    { number: "+3", label: "Anos de Experiência" }
  ];

  const texts = ['como nunca antes', 'de lancha', 'de jeep 4x4'];

  useEffect(() => {
    const currentText = texts[textIndex];
    
    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentText.substring(0, displayText.length - 1));
        
        if (displayText === '') {
          setIsDeleting(false);
          setTextIndex((textIndex + 1) % texts.length);
        }
      } else {
        setDisplayText(currentText.substring(0, displayText.length + 1));
        
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, textIndex, texts]);

  const scrollToReservas = () => {
    const element = document.getElementById('reservas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToSeguranca = () => {
    const element = document.getElementById('seguranca');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPacotes = () => {
    const element = document.getElementById('pacotes');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // const scrollToNext = () => {
  //   const element = document.getElementById('pacotes');
  //   if (element) {
  //     element.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28 md:pt-20"
      style={{
        backgroundImage: `url(${fundoHero})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 via-transparent to-blue-900/20" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-4 h-4 bg-yellow-400 rounded-full animate-float opacity-60" />
        <div className="absolute top-40 right-20 w-6 h-6 bg-orange-400 rounded-full animate-float-delayed opacity-50" />
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-blue-400 rounded-full animate-float opacity-70" />
        <div className="absolute bottom-60 right-10 w-5 h-5 bg-green-400 rounded-full animate-float-delayed opacity-60" />
        <div className="absolute top-60 left-1/3 w-2 h-2 bg-coral-500 rounded-full animate-float opacity-80" />
        <div className="absolute bottom-80 right-1/3 w-4 h-4 bg-yellow-300 rounded-full animate-float-delayed opacity-50" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-7xl mx-auto w-full min-h-[calc(100vh-7rem)] md:min-h-0 flex flex-col justify-center">
        <div className="animate-fade-in-up py-8 md:py-0">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-md text-white px-4 md:px-6 py-2 rounded-full mb-4 md:mb-6 border border-white/30 z-20">
            <Star className="text-yellow-400 fill-current" size={16} />
            <span className="text-xs md:text-sm font-semibold">Agência #1 em Ilhabela</span>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold text-white mb-4 md:mb-6 leading-tight px-2">
            Explore Ilhabela
            <span className="block bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-500 bg-clip-text text-transparent">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </h1>
          
          <p className="text-lg md:text-2xl lg:text-3xl text-white/90 mb-6 md:mb-8 max-w-4xl mx-auto font-light px-2">
            Aventuras emocionantes de <span className="font-semibold text-orange-300">Jeep 4x4</span> e <span className="font-semibold text-blue-300">Lancha</span> pelas paisagens mais selvagens e praias paradisíacas de Ilhabela
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 mb-6 md:mb-10 max-w-4xl mx-auto px-2">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl md:rounded-2xl p-3 md:p-4 border border-white/20">
                <div className="text-lg md:text-2xl lg:text-3xl font-bold text-white mb-1">{stat.number}</div>
                <div className="text-xs md:text-sm text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-6 md:mb-8 px-2">
            <button
              onClick={scrollToReservas}
              className="group bg-gradient-to-r from-orange-500 to-coral-500 text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 relative overflow-hidden w-full sm:w-auto"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <Calendar size={18} className="relative z-10" />
              <span className="relative z-10">Reserve Sua Aventura</span>
            </button>
            
            <button 
              onClick={scrollToPacotes}
              className="group border-2 border-white text-white px-6 md:px-8 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300 flex items-center space-x-2 backdrop-blur-sm w-full sm:w-auto"
            >
              <Play size={18} className="group-hover:scale-110 transition-transform" />
              <span>Conheça Nossos Passeios</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;