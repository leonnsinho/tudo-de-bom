import { useState } from 'react';
import { MessageCircle, X, HelpCircle } from 'lucide-react';

interface ChatMessage {
  type: 'user' | 'bot';
  text: string;
  timestamp: Date;
}

const ChatFAQ = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([
    {
      type: 'bot',
      text: 'Olá! 👋 Como posso ajudar você hoje? Selecione uma das perguntas abaixo:',
      timestamp: new Date()
    }
  ]);
  const [showTooltip, setShowTooltip] = useState(true);

  const faqs = [
    { 
      question: 'Quais são os horários dos passeios?', 
      answer: 'Nossos passeios funcionam das 8h às 17h, todos os dias da semana. Os horários específicos variam de acordo com o tipo de passeio escolhido.' 
    },
    { 
      question: 'Como faço uma reserva?', 
      answer: 'É muito fácil! Você pode fazer sua reserva clicando no botão "Reservar" em qualquer passeio ou rolando até a seção de reservas na página principal.' 
    },
    { 
      question: 'Quais formas de pagamento vocês aceitam?', 
      answer: 'Aceitamos cartões de crédito e débito (Visa, Mastercard), Pix e dinheiro. Para sua comodidade, recomendamos o pagamento via Pix.' 
    },
    { 
      question: 'Os passeios são seguros para crianças?', 
      answer: 'Sim! Todos os nossos passeios são planejados com segurança total. Fornecemos coletes salva-vidas para crianças e temos guias especializados em turismo familiar.' 
    },
    { 
      question: 'Preciso levar alguma coisa específica?', 
      answer: 'Recomendamos: protetor solar, chapéu, roupa de banho, toalha, água e lanche. Para trilhas, sapatos fechados são obrigatórios.' 
    },
    { 
      question: 'E se chover no dia do passeio?', 
      answer: 'Em caso de chuva forte, podemos reagendar sem custo adicional. Chuvas leves geralmente não impedem os passeios, mas sempre priorizamos a segurança.' 
    }
  ];

  const handleQuestionClick = (faq: { question: string; answer: string }) => {
    // Adiciona a pergunta do usuário
    const userMessage: ChatMessage = {
      type: 'user',
      text: faq.question,
      timestamp: new Date()
    };

    // Adiciona a resposta do bot após um delay
    const botMessage: ChatMessage = {
      type: 'bot',
      text: faq.answer,
      timestamp: new Date()
    };

    setChatMessages(prev => [...prev, userMessage]);
    
    // Simula typing delay
    setTimeout(() => {
      setChatMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowTooltip(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && !isOpen && (
        <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap animate-bounce">
          Tem dúvidas? 💬
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-20 right-0 md:right-20 md:bottom-16 w-[calc(100vw-3rem)] max-w-96 md:w-80 lg:w-96 bg-white rounded-2xl shadow-2xl border animate-modalSlideIn max-h-[85vh] md:max-h-[70vh]">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-coral-500 text-white p-3 md:p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <HelpCircle size={18} className="md:w-5 md:h-5" />
              <span className="font-semibold text-sm md:text-base">Perguntas Frequentes</span>
            </div>
            <button
              onClick={toggleChat}
              className="text-white hover:bg-white hover:bg-opacity-20 rounded-full p-1 transition-colors"
            >
              <X size={16} className="md:w-4 md:h-4" />
            </button>
          </div>

          {/* Chat Messages */}
          <div className="h-48 md:h-56 overflow-y-auto p-3 md:p-4 space-y-3 md:space-y-4">
            {chatMessages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[85%] md:max-w-[75%] p-2 md:p-3 rounded-2xl ${
                    message.type === 'user'
                      ? 'bg-orange-500 text-white rounded-br-md'
                      : 'bg-gray-100 text-gray-800 rounded-bl-md'
                  }`}
                >
                  <p className="text-xs md:text-sm leading-relaxed">{message.text}</p>
                  <p className={`text-xs mt-1 ${
                    message.type === 'user' ? 'text-orange-100' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('pt-BR', { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* FAQ Buttons */}
          <div className="border-t p-3 md:p-4 bg-gray-50 rounded-b-2xl">
            <p className="text-xs md:text-sm font-semibold text-gray-700 mb-2">Escolha uma pergunta:</p>
            <div className="space-y-1 max-h-24 md:max-h-28 overflow-y-auto">
              {faqs.map((faq, index) => (
                <button
                  key={index}
                  onClick={() => handleQuestionClick(faq)}
                  className="w-full text-left bg-white hover:bg-orange-50 text-gray-800 px-2 md:px-3 py-1.5 md:py-2 rounded-lg text-xs md:text-sm border hover:border-orange-200 transition-colors leading-tight"
                >
                  {faq.question}
                </button>
              ))}
            </div>
            
            {/* WhatsApp Button */}
            <div className="mt-2 md:mt-3 pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-1.5">Não encontrou sua resposta?</p>
              <a
                href="https://wa.me/5512981722225?text=Olá! Tenho uma dúvida sobre os passeios da Tudo de Bom."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-500 hover:bg-green-600 text-white px-3 py-2 rounded-lg text-xs md:text-sm font-semibold transition-colors flex items-center justify-center space-x-2 shadow-md hover:shadow-lg"
              >
                <MessageCircle size={14} className="md:w-4 md:h-4" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={toggleChat}
        className="bg-gradient-to-r from-orange-500 to-coral-500 text-white p-3 md:p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      >
        <MessageCircle size={20} className="md:w-6 md:h-6" />
      </button>
    </div>
  );
};

export default ChatFAQ;
