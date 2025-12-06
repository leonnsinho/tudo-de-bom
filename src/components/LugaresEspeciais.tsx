import { useState } from 'react';
import { Mountain, Waves, MapPin, Star, Clock, Camera } from 'lucide-react';
import cachoeiraDaLage from '../assets/images/cachoeira-da-laje.jpg';
import cachoeiraDoPaqueta from '../assets/images/Cachoeira-do-Paqueta.webp';
import castelhanosImg from '../assets/images/castelhanos.jpg';



const LugaresEspeciais = () => {
  const [activeCategory, setActiveCategory] = useState('cachoeiras');

  const categorias = [
    { id: 'cachoeiras', nome: 'Cachoeiras', icon: Mountain },
    { id: 'praias', nome: 'Praias', icon: Waves },
    { id: 'curiosidades', nome: 'Curiosidades', icon: Star }
  ];

  const lugares = {
    cachoeiras: [
      {
        id: 1,
        nome: "Cachoeira dos Três Tombos",
        imagem: "https://cdn.prod.website-files.com/680f8dfb18edd53d6bf1cc4e/6876dc3f3a3e147758da19ac_Cachoeira-tres-tombos-1.jpeg",
        descricao: "Uma das cachoeiras mais famosas de Ilhabela, com três quedas d'água em sequência e piscinas naturais perfeitas para banho.",
        dificuldade: "Moderada",
        tempo: "2-3 horas",
        altura: "15 metros",
        detalhes: "Trilha bem marcada pela mata atlântica. Ideal para quem busca aventura e contato com a natureza."
      },
      {
        id: 4,
        nome: "Cachoeira da Lage",
        imagem: cachoeiraDaLage,
        descricao: "Uma cachoeira tranquila com uma grande laje de pedra, ideal para relaxar e aproveitar a natureza.",
        dificuldade: "Moderada",
        tempo: "1-2 horas",
        altura: "10 metros",
        detalhes: "Acesso por trilha leve, com áreas para piquenique e banho refrescante."
      },
      {
        id: 5,
        nome: "Cachoeira do Paquetá",
        imagem: cachoeiraDoPaqueta,
        descricao: "Uma cachoeira tranquila com uma grande laje de pedra, ideal para relaxar e aproveitar a natureza.",
        dificuldade: "Moderada",
        tempo: "1-2 horas",
        altura: "10 metros",
        detalhes: "Acesso por trilha leve, com áreas para piquenique e banho refrescante."
      }
    ],
    praias: [
      {
        id: 1,
        nome: "Praia de Castelhanos",
        imagem: castelhanosImg,
        descricao: "A praia mais famosa de Ilhabela, selvagem e preservada, acessível apenas por trilha ou barco.",
        extensao: "1,5 km",
        tipo: "Selvagem",
        ondas: "Fortes",
        detalhes: "Praia oceânica com ondas ideais para surf. Cercada por mata atlântica preservada."
      },
      {
        id: 2,
        nome: "Praia do Bonete",
        imagem: "https://cdn.prod.website-files.com/680f8dfb18edd53d6bf1cc4e/6815698e3f131c8d112c934c_8d79ae24760d43ab4a7eff231b5356c8.png",
        descricao: "Comunidade caiçara tradicional com praia paradisíaca e cultura local preservada.",
        extensao: "800 m",
        tipo: "Comunitária",
        ondas: "Moderadas",
        detalhes: "Praia com comunidade tradicional de pescadores. Experiência cultural única."
      },
      {
        id: 3,
        nome: "Praia do Curral",
        imagem: "https://cdn.prod.website-files.com/680f8dfb18edd53d6bf1cc4e/6876dd7970750adb262374dd_casa-pe-na-areia-praia-do-curral-ilhabela.webp",
        descricao: "Praia urbana com boa infraestrutura, ideal para famílias e com mar calmo.",
        extensao: "2 km",
        tipo: "Urbana",
        ondas: "Calmas",
        detalhes: "Praia protegida com águas calmas, restaurantes e pousadas próximas."
      }
    ],
    curiosidades: [
      {
        id: 1,
        nome: "Ilha das Cabras",
        imagem: "https://cdn.prod.website-files.com/680f8dfb18edd53d6bf1cc4e/6876ddf0020f276456fd4786_Projeto-destacada.jpg",
        descricao: "Pequena ilha onde cabras foram introduzidas no século XVIII e ainda vivem em estado selvagem.",
        curiosidade: "As cabras nadam entre as ilhas e se adaptaram perfeitamente ao ambiente marinho.",
        detalhes: "Hoje é possível observar esses animais únicos durante passeios de barco pela região."
      },
      {
        id: 2,
        nome: "Farol de Castelhanos",
        imagem: "https://cdn.prod.website-files.com/680f8dfb18edd53d6bf1cc4e/6876de244fe0219311a3e021_64_29112021_42029.jpg",
        descricao: "Construído em 1956, é um dos pontos mais isolados e belos da ilha.",
        curiosidade: "Era operado manualmente até os anos 90, com faroleiros vivendo isolados por meses.",
        detalhes: "Hoje automatizado, oferece uma das vistas mais espetaculares do litoral paulista."
      },
      {
        id: 3,
        nome: "Mata Atlântica Preservada",
        imagem: "https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        descricao: "Ilhabela possui 85% de seu território coberto por Mata Atlântica preservada.",
        curiosidade: "É um dos poucos lugares do Brasil onde se pode observar a floresta original intocada.",
        detalhes: "Abriga mais de 400 espécies de aves e é santuário de biodiversidade única."
      }
    ]
  };

  const lugaresAtivos = lugares[activeCategory as keyof typeof lugares];

  return (
    <section id="lugares-especiais" className="py-20 bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Lugares <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">Especiais</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Descubra os tesouros escondidos de Ilhabela: desde cachoeiras cristalinas até praias paradisíacas e curiosidades fascinantes
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categorias.map((categoria) => {
            const IconComponent = categoria.icon;
            return (
              <button
                key={categoria.id}
                onClick={() => setActiveCategory(categoria.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === categoria.id
                    ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white shadow-lg scale-105'
                    : 'bg-gray-800/80 text-gray-300 hover:bg-gray-700/80 hover:text-white shadow-md border border-gray-600'
                }`}
              >
                <IconComponent size={20} />
                <span>{categoria.nome}</span>
              </button>
            );
          })}
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {lugaresAtivos.map((lugar) => (
            <div
              key={lugar.id}
              className="group bg-gray-800/90 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={lugar.imagem}
                  alt={lugar.nome}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold text-white ${
                    activeCategory === 'cachoeiras' ? 'bg-green-500' :
                    activeCategory === 'praias' ? 'bg-blue-500' :
                    'bg-purple-500'
                  }`}>
                    {categorias.find(c => c.id === activeCategory)?.nome}
                  </span>
                </div>

                {/* Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex items-center space-x-4 text-sm">
                    {activeCategory === 'cachoeiras' && 'tempo' in lugar && (
                      <>
                        <div className="flex items-center space-x-1">
                          <Clock size={14} />
                          <span>{lugar.tempo}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Mountain size={14} />
                          <span>{lugar.altura}</span>
                        </div>
                      </>
                    )}
                    {activeCategory === 'praias' && 'extensao' in lugar && (
                      <>
                        <div className="flex items-center space-x-1">
                          <MapPin size={14} />
                          <span>{lugar.extensao}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Waves size={14} />
                          <span>{lugar.ondas}</span>
                        </div>
                      </>
                    )}
                    {activeCategory === 'curiosidades' && (
                      <div className="flex items-center space-x-1">
                        <Camera size={14} />
                        <span>Curiosidade Única</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{lugar.nome}</h3>
                <p className="text-gray-300 mb-4">{lugar.descricao}</p>

                {/* Specific Info */}
                {activeCategory === 'cachoeiras' && 'dificuldade' in lugar && (
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      lugar.dificuldade === 'Fácil' ? 'bg-green-900/50 text-green-300 border border-green-700' :
                      lugar.dificuldade === 'Moderada' ? 'bg-yellow-900/50 text-yellow-300 border border-yellow-700' :
                      'bg-red-900/50 text-red-300 border border-red-700'
                    }`}>
                      {lugar.dificuldade}
                    </span>
                  </div>
                )}

                {activeCategory === 'praias' && 'tipo' in lugar && (
                  <div className="mb-4">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                      lugar.tipo === 'Selvagem' ? 'bg-green-900/50 text-green-300 border border-green-700' :
                      lugar.tipo === 'Comunitária' ? 'bg-blue-900/50 text-blue-300 border border-blue-700' :
                      'bg-orange-900/50 text-orange-300 border border-orange-700'
                    }`}>
                      {lugar.tipo}
                    </span>
                  </div>
                )}

                {activeCategory === 'curiosidades' && 'curiosidade' in lugar && (
                  <div className="mb-4">
                    <p className="text-sm text-blue-400 font-medium italic">
                      "{lugar.curiosidade}"
                    </p>
                  </div>
                )}

                <p className="text-sm text-gray-400">{lugar.detalhes}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gray-800/80 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Quer conhecer todos esses lugares?
            </h3>
            <p className="text-gray-300 mb-6">
              Nossos guias especializados conhecem cada cantinho de Ilhabela e podem levar você para vivenciar essas experiências únicas com total segurança.
            </p>
            <button
              onClick={() => {
                const element = document.getElementById('reservas');
                if (element) element.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Reserve Sua Aventura
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LugaresEspeciais;
