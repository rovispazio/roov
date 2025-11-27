import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FaqItem } from '../types';

const faqs: FaqItem[] = [
  {
    question: "È DAVVERO GRATIS?",
    answer: "Sì. Zero costi. È un progetto culturale finanziato dalla Regione Lazio. Prenotazione obbligatoria."
  },
  {
    question: "DEVO PORTARE QUALCOSA?",
    answer: "Solo te stesso e voglia di ballare. Bevande incluse. ID obbligatorio (18+)."
  },
  {
    question: "COME ARRIVO?",
    answer: "Ti mandiamo dettagli GPS e parcheggi via email dopo la prenotazione."
  },
  {
    question: "POSSO PORTARE AMICI?",
    answer: "Certo! Ma devono prenotarsi separatamente. Max 50 per serata = posti limitati."
  },
  {
    question: "CI SARANNO FOTO/VIDEO?",
    answer: "Sì! Riprese professionali 4K. Firmando la prenotazione autorizzi l'uso per contenuti ROOV."
  },
  {
    question: "CHE MUSICA?",
    answer: "Elettronica live. House, techno, deep. Niente commercial. Solo vibes."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#0f1929]">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-center font-heading text-3xl font-bold text-white mb-12">FAQ VELOCISSIME</h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-white/10">
              <button 
                className="w-full py-4 flex items-center justify-between text-left text-white hover:text-roov-magenta transition-colors"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-bold pr-4">{faq.question}</span>
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-40 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
