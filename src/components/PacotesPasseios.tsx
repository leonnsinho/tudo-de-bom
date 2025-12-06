import { useState, useEffect } from 'react';
import { Clock, Users, Star, HelpCircle, X, ChevronLeft, ChevronRight, MapPin, Calendar, MessageCircle } from 'lucide-react';

interface Pacote {
  id: number;
  titulo: string;
  imagem: string | string[];
  descricao: string;
  preco: string;
  duracao: string;
  pessoas: string;
  rating: number;
  features: string[];
  destaque: boolean;
  comoFunciona: string;
  isTourPromo?: boolean;
}

const PacotesPasseios = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPacote, setSelectedPacote] = useState<Pacote | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<{[key: number]: number}>({});

  // Helper functions for image handling
  const getImages = (imagem: string | string[]): string[] => {
    return Array.isArray(imagem) ? imagem : [imagem];
  };

  const getCurrentImage = (pacote: Pacote): string => {
    const images = getImages(pacote.imagem);
    const currentIndex = currentImageIndex[pacote.id] || 0;
    return images[currentIndex];
  };

  const nextImage = (pacoteId: number, images: string[]) => {
    if (images.length <= 1) return;
    setCurrentImageIndex(prev => ({
      ...prev,
      [pacoteId]: ((prev[pacoteId] || 0) + 1) % images.length
    }));
  };

  const prevImage = (pacoteId: number, images: string[]) => {
    if (images.length <= 1) return;
    setCurrentImageIndex(prev => ({
      ...prev,
      [pacoteId]: ((prev[pacoteId] || 0) - 1 + images.length) % images.length
    }));
  };

  const pacotes = [
    {
      id: 1,
      titulo: "Jeep para Castelhanos",
      imagem: "/jeep-caste.jpg",
      preco: "R$ 130/pessoa",
      duracao: "5 horas",
      pessoas: "Até 10 pessoas",
      descricao: "Aventura 4x4 pela trilha até a praia mais famosa de Ilhabela.",
      features: ["Trilha 4x4", "Praia Castelhanos", "Guia especializado"],
      rating: 4.9,
      destaque: true,
      comoFunciona: "Saída às 10h da marina central. Aventura 4x4 pela trilha histórica até a paradisíaca Praia de Castelhanos. Fazemos paradas em cachoeiras e no mirante no caminho até a praia. Paradas estratégicas para fotos e contemplação da Mata Atlântica. Tempo livre para banho e exploração. Retorno às 15h30 pelo mesmo trajeto com paradas diferentes."
    },
    {
      id: 2,
      titulo: "Lancha para Castelhanos",
      imagem: "/lancha-caste.jpg",
      preco: "R$ 320/pessoa",
      duracao: "5 horas",
      pessoas: "Até 10 pessoas",
      descricao: "Passeio de lancha pela costa até Castelhanos com paradas para banho.",
      features: ["Lancha rápida", "Paradas para banho", "Vista panorâmica"],
      rating: 4.7,
      destaque: false,
      comoFunciona: "Embarque às 10h na Praia em frente ao posto Ipiranga (Perequê) ou às 10h20 no píer da Vila. Navegação com paradas de 25 minutos na Praia da Fome e 25 minutos na Praia do Saco do Eustáquio. Chegada em Castelhanos com tempo livre para exploração e banho. Retorno às 15h10 com paradas de 15 minutos nas mesmas praias. Crianças de 0 a 2 anos não pagam, de 2 a 5 anos pagam meia. Embarcações vistoriadas e com todas as normas de segurança."
    },
    {
      id: 3,
      titulo: "Lancha para Bonete",
      imagem: "/lancha-bonete.jpg",
      preco: "R$ 250/pessoa",
      duracao: "5 horas",
      pessoas: "Até 10 pessoas",
      descricao: "Viagem de lancha até a paradisíaca praia do Bonete.",
      features: ["Praia selvagem", "Comunidade caiçara", "Surf"],
      rating: 4.8,
      destaque: false,
      comoFunciona: "Embarque às 10h no píer da Vila ou às 10h20 na Praia em frente ao posto Ipiranga (Perequê). Navegação pela costa norte com parada de 40 minutos na Praia do Indaiauba. Chegada na Praia do Bonete, uma das mais preservadas da ilha, com tempo livre para banho, surf e conhecer a comunidade caiçara tradicional. Retorno às 15h40. Tolerância de 10 minutos de atraso no embarque."
    },
    {
      id: 4,
      titulo: "Combo Lancha + Jeep",
      imagem: "/lancha e jeep.jpg",
      preco: "R$ 275/pessoa",
      duracao: "5 horas",
      pessoas: "Até 10 pessoas",
      descricao: "Experiência completa: ida de lancha e volta de jeep em Castelhanos.",
      features: ["Experiência 2 em 1", "Dia completo", "Guia especializado"],
      rating: 5.0,
      destaque: true,
      comoFunciona: "Experiência completa começando às 10h com lancha até Castelhanos via mar com paradas de 25 minutos na Praia da Fome e 25 minutos na Praia do Saco do Eustáquio. Tempo livre na praia para aproveitar as águas cristalinas. Retorno de jeep 4x4 pela trilha histórica com paradas nas cachoeiras e mirante para fotos da Mata Atlântica. Inclui: guia especializado, equipamentos de segurança. Retorno às 15:30h."
    },
    {
      id: 5,
      titulo: "Tours Personalizados",
      imagem: "/tours.jpeg",
      descricao: "Conheça nossos tours exclusivos pelo Norte e Sul da Ilhabela com roteiros personalizados",
      preco: "",
      duracao: "Flexível",
      pessoas: "Até 10 pessoas",
      rating: 4.9,
      features: ["Roteiros personalizados", "Norte e Sul da ilha", "Praias e cachoeiras"],
      destaque: false,
      comoFunciona: "Oferecemos diversos tours personalizados pela ilha! Clique no botão abaixo para ver todos os nossos roteiros disponíveis na aba Tours. Temos opções para o Norte e Sul da Ilhabela, com diferentes níveis de dificuldade e pontos turísticos. Escolha o tour ideal para seu perfil e aproveite o melhor da ilha!",
      isTourPromo: true
    }
  ];

  // Tabs: 'pacotes' = produtos/pacotes normais, 'tours' = lista de tours informativa
  const [activeTab, setActiveTab] = useState<'pacotes' | 'tours'>('pacotes');

  const toursData = [
    {
      id: 'sul-1',
      titulo: 'Tour Sul da Ilha 1',
      pontos: ['Cachoeira da água branca', 'Mirante', 'Praia da Feiticeira', 'Praia Grande'],
      preco: 'R$ 100',
      imagem: '/Tour Sul da Ilha 1.jpg'
    },
    {
      id: 'sul-2',
      titulo: 'Tour Sul da Ilha 2',
      pontos: ['Cachoeira da água branca', 'Mirante', 'Praia do Julião', 'Praia do Curral'],
      preco: 'R$ 100',
      imagem: '/Tour Sul da Ilha 2.jpg'
    },
    {
      id: 'sul-aventura',
      titulo: 'Tour Sul Aventura',
      pontos: ['Cachoeira da água branca', 'Piscina natural', 'Praia secreta do São Pedro'],
      nota: 'Dificuldade: Alta (trilhas e trechos irregulares)',
      preco: 'R$ 110',
      imagem: '/Tour Sul Aventura.jpg'
    },
    {
      id: 'norte',
      titulo: 'Tour Norte da Ilha',
      pontos: ['Mirante', 'Praia do Sino', 'Praia do Jabaquara'],
      preco: 'R$ 120',
      imagem: '/Tour Norte da Ilha.jpg'
    }
  ];

  const scrollToReservas = () => {
    const element = document.getElementById('reservas');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const openModal = (pacote: Pacote) => {
    setSelectedPacote(pacote);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedPacote(null);
  };

  // Handle keyboard navigation in modal
  const handleKeyDown = (e: KeyboardEvent) => {
    if (!modalOpen || !selectedPacote) return;
    
    const images = getImages(selectedPacote.imagem);
    if (images.length <= 1) return;

    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevImage(selectedPacote.id, images);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextImage(selectedPacote.id, images);
    }
  };

  // Add keyboard event listener
  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [modalOpen, selectedPacote, currentImageIndex]);

  return (
    <section id="pacotes" className="py-16 md:py-20 bg-gradient-to-br from-orange-50 to-blue-50">
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Nossos <span className="bg-gradient-to-r from-orange-500 to-coral-500 bg-clip-text text-transparent">Passeios</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2">
            Escolha sua aventura ideal e descubra os tesouros escondidos de Ilhabela com total segurança e conforto
          </p>
        </div>

        {/* Tabs header */}
        <div className="flex justify-center mb-8 px-4">
          <div className="inline-flex bg-gradient-to-r from-orange-100 to-blue-100 rounded-full p-1.5 md:p-2 shadow-xl border-2 border-orange-200 w-full max-w-md md:w-auto">
            <button
              onClick={() => setActiveTab('pacotes')}
              aria-selected={activeTab === 'pacotes'}
              className={`flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 rounded-full font-bold transition-all text-sm md:text-lg lg:text-xl ${
                activeTab === 'pacotes' ? 'bg-gradient-to-r from-orange-500 to-coral-500 text-white shadow-xl scale-105' : 'text-gray-700 hover:bg-white/70 hover:scale-102'
              }`}
            >
              Passeios
            </button>
            <button
              onClick={() => setActiveTab('tours')}
              aria-selected={activeTab === 'tours'}
              className={`flex-1 md:flex-none px-6 md:px-10 py-3 md:py-4 rounded-full font-bold transition-all text-sm md:text-lg lg:text-xl ${
                activeTab === 'tours' ? 'bg-gradient-to-r from-orange-500 to-coral-500 text-white shadow-xl scale-105' : 'text-gray-700 hover:bg-white/70 hover:scale-102'
              }`}
            >
              Tours
            </button>
          </div>
        </div>

        {/* Content: either pacotes grid or tours list */}
        {activeTab === 'pacotes' ? (
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {pacotes.map((pacote) => (
              <div
                key={pacote.id}
                className={`group relative bg-white rounded-xl md:rounded-2xl shadow-lg md:shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 md:hover:-translate-y-2 ${
                  pacote.destaque ? 'ring-2 md:ring-4 ring-orange-400 ring-opacity-50' : ''
                } ${pacote.isTourPromo ? 'md:col-span-2' : ''}`}
              >
                {pacote.destaque && (
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 z-10">
                    <span className="bg-gradient-to-r from-orange-500 to-coral-500 text-white px-2 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold">
                      Mais Popular
                    </span>
                  </div>
                )}

                {pacote.isTourPromo ? (
                  // Layout especial para o card de Tours Personalizados
                  <div className="flex flex-col md:flex-row h-full">
                    {/* Imagem à esquerda */}
                    <div className="relative w-full md:w-1/2 h-48 sm:h-56 md:h-auto overflow-hidden">
                      <img
                        src={pacote.imagem as string}
                        alt={pacote.titulo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-black/30 to-transparent" />
                    </div>
                    
                    {/* Conteúdo à direita */}
                    <div className="flex-1 p-4 sm:p-6 md:p-8 flex flex-col justify-center">
                      <div className="mb-3 md:mb-4">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2 md:mb-3">{pacote.titulo}</h3>
                        <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed mb-3 md:mb-4">{pacote.descricao}</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-3 mb-4 md:mb-6">
                        {pacote.features.map((feature, index) => (
                          <div key={index} className="flex items-center space-x-2 text-gray-700">
                            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                            <span className="text-xs sm:text-sm md:text-base">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-4 md:mb-6">
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Clock size={16} className="md:w-5 md:h-5" />
                          <span className="font-medium text-xs sm:text-sm md:text-base">{pacote.duracao}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-gray-600">
                          <Users size={16} className="md:w-5 md:h-5" />
                          <span className="font-medium text-xs sm:text-sm md:text-base">{pacote.pessoas}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Star className="text-yellow-400 fill-current" size={16} />
                          <span className="font-semibold text-gray-800 text-sm md:text-base">{pacote.rating}</span>
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          setActiveTab('tours');
                          setTimeout(() => {
                            const element = document.getElementById('pacotes');
                            if (element) {
                              element.scrollIntoView({ behavior: 'smooth' });
                            }
                          }, 100);
                        }}
                        className="bg-gradient-to-r from-orange-500 to-coral-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base md:text-lg flex items-center justify-center space-x-2 md:space-x-3 w-full md:w-auto touch-manipulation"
                      >
                        <MapPin size={18} className="md:w-5 md:h-5" />
                        <span>Explorar Todos os Tours</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  // Layout normal para os outros cards
                  <>
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  {(() => {
                    const images = getImages(pacote.imagem);
                    const currentIndex = currentImageIndex[pacote.id] || 0;
                    const currentImg = images[currentIndex];
                    
                    return (
                      <>
                        <img
                          src={currentImg}
                          alt={pacote.titulo}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        
                        {/* Carousel controls - only show if multiple images */}
                        {images.length > 1 && (
                          <>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                prevImage(pacote.id, images);
                              }}
                              className="absolute left-2 md:left-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition-all duration-200 touch-manipulation"
                            >
                              <ChevronLeft size={18} className="md:w-4 md:h-4" />
                            </button>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                nextImage(pacote.id, images);
                              }}
                              className="absolute right-2 md:right-3 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2 md:p-3 rounded-full transition-all duration-200 touch-manipulation"
                            >
                              <ChevronRight size={18} className="md:w-4 md:h-4" />
                            </button>
                            
                            {/* Image counter */}
                            <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-black/60 text-white px-2 py-1 rounded-full text-xs font-semibold">
                              {currentIndex + 1}/{images.length}
                            </div>
                            
                            {/* Image indicators */}
                            <div className="absolute bottom-12 md:bottom-16 left-1/2 transform -translate-x-1/2 flex space-x-2">
                              {images.map((_, index) => (
                                <button
                                  key={index}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImageIndex(prev => ({
                                      ...prev,
                                      [pacote.id]: index
                                    }));
                                  }}
                                  className={`w-2.5 h-2.5 md:w-2 md:h-2 rounded-full transition-all duration-200 touch-manipulation ${
                                    index === currentIndex 
                                      ? 'bg-white' 
                                      : 'bg-white/50 hover:bg-white/70'
                                  }`}
                                />
                              ))}
                            </div>
                          </>
                        )}
                        
                        <div className="absolute bottom-6 md:bottom-8 left-3 md:left-4 right-3 md:right-4">
                          <div className="flex items-center space-x-1 mb-2">
                            <Star className="text-yellow-400 fill-current" size={14} />
                            <span className="text-white font-semibold text-sm">{pacote.rating}</span>
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </div>

                <div className="p-4 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-2 leading-tight">{pacote.titulo}</h3>
                  <p className="text-gray-600 mb-4 text-sm md:text-base leading-relaxed line-clamp-3">{pacote.descricao}</p>

                  <div className="flex flex-wrap gap-1.5 md:gap-2 mb-4">
                    {pacote.features.map((feature, index) => (
                      <span
                        key={index}
                        className="inline-block bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs md:text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Clock size={14} className="md:w-4 md:h-4" />
                      <span>{pacote.duracao}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users size={14} className="md:w-4 md:h-4" />
                      <span className="text-xs md:text-sm">{pacote.pessoas}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                    <div className="text-center sm:text-left">
                      <span className="text-xl md:text-2xl font-bold text-orange-500">{pacote.preco}</span>
                    </div>
                    
                    {/* Mobile: Stack buttons vertically, Desktop: Horizontal */}
                    <div className="flex flex-col sm:flex-row gap-2 sm:gap-2">
                      {pacote.isTourPromo ? (
                        <button
                          onClick={() => {
                            setActiveTab('tours');
                            setTimeout(() => {
                              const element = document.getElementById('pacotes');
                              if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                              }
                            }, 100);
                          }}
                          className="bg-gradient-to-r from-orange-500 to-coral-500 text-white px-6 py-2.5 sm:py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 sm:hover:scale-105 text-sm touch-manipulation flex items-center justify-center space-x-2"
                        >
                          <MapPin size={16} />
                          <span>Ver Todos os Tours</span>
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={() => openModal(pacote)}
                            className="bg-gray-100 text-gray-700 px-3 py-2.5 sm:py-2 rounded-full font-semibold hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-1 text-sm touch-manipulation"
                          >
                            <HelpCircle size={14} />
                            <span>Como funciona?</span>
                          </button>
                          <button
                            onClick={scrollToReservas}
                            className="bg-gradient-to-r from-orange-500 to-coral-500 text-white px-4 py-2.5 sm:py-2 rounded-full font-semibold hover:shadow-lg transition-all duration-300 sm:hover:scale-105 text-sm touch-manipulation"
                          >
                            Reservar
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                </>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
            {toursData.map((tour) => (
              <div key={tour.id} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col">
                {/* Imagem do tour */}
                <div className="relative aspect-square overflow-hidden">
                  <img 
                    src={tour.imagem} 
                    alt={tour.titulo} 
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 right-3 bg-orange-500 text-white px-3 py-1 rounded-full font-bold text-sm shadow-lg">
                    {tour.preco}
                  </div>
                </div>
                
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center space-x-2 mb-3">
                    <MapPin className="text-orange-500" size={20} />
                    <h4 className="font-semibold text-gray-800">{tour.titulo}</h4>
                  </div>
                  <ul className="text-gray-600 text-sm list-disc list-inside space-y-1 mb-4 flex-grow">
                    {tour.pontos.map((ponto: string, idx: number) => (
                      <li key={idx}>{ponto}</li>
                    ))}
                  </ul>
                  {tour.nota && <p className="text-xs text-gray-500 mb-4">{tour.nota}</p>}
                  
                  {/* Botões de ação */}
                  <div className="flex flex-col sm:flex-row gap-2 mt-auto">
                    <button
                      onClick={scrollToReservas}
                      className="flex-1 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2.5 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center space-x-2"
                    >
                      <Calendar size={16} />
                      <span>Agendar</span>
                    </button>
                    <a
                      href={`https://wa.me/5512981722225?text=Olá! Gostaria de saber mais sobre o ${tour.titulo}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-500 hover:bg-green-600 text-white px-4 py-2.5 rounded-lg font-semibold transition-colors text-sm flex items-center justify-center space-x-2"
                    >
                      <MessageCircle size={16} />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      {modalOpen && selectedPacote && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 animate-fadeIn">
          <div className="bg-white rounded-xl md:rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-modalSlideIn">
            <div className="relative">
              <div className="h-48 sm:h-56 md:h-64 overflow-hidden rounded-t-xl md:rounded-t-2xl relative">
                {(() => {
                  const images = getImages(selectedPacote.imagem);
                  const currentIndex = currentImageIndex[selectedPacote.id] || 0;
                  const currentImg = images[currentIndex];
                  
                  return (
                    <>
                      <img
                        src={currentImg}
                        alt={selectedPacote.titulo}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Carousel controls in modal - only show if multiple images */}
                      {images.length > 1 && (
                        <>
                          <button
                            onClick={() => prevImage(selectedPacote.id, images)}
                            className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 md:p-3 rounded-full transition-all duration-200 z-10 touch-manipulation"
                          >
                            <ChevronLeft size={18} className="md:w-5 md:h-5" />
                          </button>
                          <button
                            onClick={() => nextImage(selectedPacote.id, images)}
                            className="absolute right-3 md:right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 text-white p-2.5 md:p-3 rounded-full transition-all duration-200 z-10 touch-manipulation"
                          >
                            <ChevronRight size={18} className="md:w-5 md:h-5" />
                          </button>
                          
                          {/* Image counter in modal */}
                          <div className="absolute top-3 md:top-4 left-3 md:left-4 bg-black/60 text-white px-2.5 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-semibold z-10">
                            {currentIndex + 1}/{images.length}
                          </div>
                          
                          {/* Image indicators in modal */}
                          <div className="absolute bottom-3 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                            {images.map((_, index) => (
                              <button
                                key={index}
                                onClick={() => {
                                  setCurrentImageIndex(prev => ({
                                    ...prev,
                                    [selectedPacote.id]: index
                                  }));
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-200 touch-manipulation ${
                                  index === currentIndex 
                                    ? 'bg-white' 
                                    : 'bg-white/50 hover:bg-white/70'
                                }`}
                              />
                            ))}
                          </div>
                        </>
                      )}
                      
                      {/* Close button */}
                      <button
                        onClick={closeModal}
                        className="absolute top-3 md:top-4 right-3 md:right-4 bg-white bg-opacity-90 backdrop-blur-sm text-gray-800 rounded-full p-2 hover:bg-opacity-100 transition-all duration-300 z-20 touch-manipulation"
                      >
                        <X size={18} className="md:w-5 md:h-5" />
                      </button>
                    </>
                  );
                })()}
              </div>
              
              <div className="p-4 md:p-6">
                <div className="mb-6">
                  <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-3">Como funciona este passeio?</h4>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">{selectedPacote.comoFunciona}</p>
                  
                  {/* Image navigation tip */}
                  {getImages(selectedPacote.imagem).length > 1 && (
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                      <p className="text-xs md:text-sm text-blue-700">
                        💡 <strong>Dica:</strong> Use as setas do teclado (← →) ou clique nos controles para navegar entre as imagens!
                      </p>
                    </div>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="text-orange-500 w-4 h-4 md:w-5 md:h-5" />
                      <span className="font-semibold text-gray-800 text-sm md:text-base">Duração</span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">{selectedPacote.duracao}</p>
                  </div>
                  <div className="bg-gray-50 p-3 md:p-4 rounded-lg">
                    <div className="flex items-center space-x-2 mb-2">
                      <Users className="text-orange-500 w-4 h-4 md:w-5 md:h-5" />
                      <span className="font-semibold text-gray-800 text-sm md:text-base">Capacidade</span>
                    </div>
                    <p className="text-gray-600 text-sm md:text-base">{selectedPacote.pessoas}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="font-semibold text-gray-800 mb-3 text-sm md:text-base">O que está incluído:</h5>
                  <div className="flex flex-wrap gap-2">
                    {selectedPacote.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-orange-100 text-orange-800 px-2.5 py-1 md:px-3 md:py-1 rounded-full text-xs md:text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border-t pt-4 gap-4">
                  <div className="text-center sm:text-left">
                    <span className="text-2xl md:text-3xl font-bold text-orange-500">{selectedPacote.preco}</span>
                  </div>
                  <button
                    onClick={() => {
                      closeModal();
                      scrollToReservas();
                    }}
                    className="bg-gradient-to-r from-orange-500 to-coral-500 text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 sm:hover:scale-105 touch-manipulation"
                  >
                    Fazer Reserva
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PacotesPasseios;