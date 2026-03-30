import { Shield, CheckCircle, Users, Settings, Award, AlertTriangle } from 'lucide-react';

const Seguranca = () => {
  const itensSeguranca = [
    {
      icon: <Shield className="w-8 h-8" />,
      titulo: "Veículos Vistoriados",
      descricao: "Todos os nossos veículos passam por rigorosa vistoria técnica mensal e manutenção preventiva para garantir sua segurança.",
      destacar: true
    },
    {
      icon: <Users className="w-8 h-8" />,
      titulo: "Condutores Certificados",
      descricao: "Nossa equipe possui habilitação especializada, treinamento em primeiros socorros e anos de experiência nas trilhas de Ilhabela.",
      destacar: false
    },
    {
      icon: <Settings className="w-8 h-8" />,
      titulo: "Equipamentos de Segurança",
      descricao: "Fornecemos todos os EPIs necessários: capacetes, cintos de segurança reforçados e equipamentos de proteção individual.",
      destacar: false
    },
    {
      icon: <Award className="w-8 h-8" />,
      titulo: "Certificações",
      descricao: "Somos licenciados pelo IBAMA, cadastrados no Ministério do Turismo e seguimos todas as normas de turismo sustentável.",
      destacar: true
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      titulo: "Protocolos de Emergência",
      descricao: "Contamos com comunicação via rádio, kit de primeiros socorros completo e parceria com o Corpo de Bombeiros local.",
      destacar: false
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      titulo: "Seguro Completo",
      descricao: "Todos os passeios possuem cobertura de seguro de acidentes pessoais e responsabilidade civil para sua total tranquilidade.",
      destacar: true
    }
  ];

  return (
    <section id="seguranca" className="py-20 bg-gradient-to-br from-blue-50 via-gray-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Sua <span className="bg-gradient-to-r from-green-500 to-blue-500 bg-clip-text text-transparent">Segurança</span> em Primeiro Lugar
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Na Tudo de Bom, a segurança não é apenas uma prioridade, é o nosso compromisso. 
            Cada detalhe é pensado para que você viva momentos inesquecíveis com total tranquilidade.
          </p>
        </div>

        {/* Security Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {itensSeguranca.map((item, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                item.destacar ? 'ring-2 ring-green-200 bg-gradient-to-br from-green-50 to-white' : ''
              }`}
            >
              {item.destacar && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-500 to-blue-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  DESTAQUE
                </div>
              )}
              
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${
                item.destacar 
                  ? 'bg-gradient-to-r from-green-500 to-blue-500 text-white' 
                  : 'bg-gray-100 text-gray-600 group-hover:bg-gradient-to-r group-hover:from-green-500 group-hover:to-blue-500 group-hover:text-white transition-all duration-300'
              }`}>
                {item.icon}
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {item.titulo}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.descricao}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Aventura com Responsabilidade
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Nossa experiência e cuidado garantem que você aproveite cada momento 
              sabendo que está em mãos seguras e profissionais.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Licenciado IBAMA</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Cadastur Ativo</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/20 rounded-lg px-4 py-2">
                <CheckCircle className="w-5 h-5" />
                <span className="text-sm font-medium">Seguro Total</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Seguranca;
