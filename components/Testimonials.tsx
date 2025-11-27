import React from 'react';
import { Testimonial } from '../types';
import { Star } from 'lucide-react';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sofia',
    age: 22,
    city: 'Roma',
    quote: 'Ho ballato sotto un castello medievale con 49 sconosciuti che ora sono amici. ROOV è stata la serata più assurda dell\'estate. 10/10 😍🔥',
    rating: 5,
    image: 'https://picsum.photos/id/64/100/100'
  },
  {
    id: '2',
    name: 'Marco',
    age: 25,
    city: 'Tivoli',
    quote: 'Vibes incredibili. Non pensavo che un posto così antico potesse suonare così moderno. Organizzazione top.',
    rating: 5,
    image: 'https://picsum.photos/id/91/100/100'
  },
  {
    id: '3',
    name: 'Giulia',
    age: 20,
    city: 'Guidonia',
    quote: 'Finalmente qualcosa di diverso. Niente caos, solo buona musica e bella gente. Video ricordo pazzesco.',
    rating: 5,
    image: 'https://picsum.photos/id/129/100/100'
  },
    {
    id: '4',
    name: 'Luca',
    age: 28,
    city: 'Roma',
    quote: 'Location da film. Letteralmente. Mi sono sentito protagonista per una notte.',
    rating: 5,
    image: 'https://picsum.photos/id/177/100/100'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-roov-dark overflow-hidden">
       <div className="container mx-auto px-6 mb-12">
        <h2 className="font-heading text-3xl font-bold text-white">COSA DICONO DI NOI</h2>
       </div>

      <div className="flex overflow-x-auto pb-8 gap-6 px-6 no-scrollbar snap-x snap-mandatory">
        {testimonials.map((t) => (
          <div 
            key={t.id}
            className="flex-none w-[85vw] md:w-[400px] bg-[#1a253a] p-8 rounded-2xl border border-white/5 snap-center"
          >
            <div className="flex items-center gap-4 mb-6">
              <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover border-2 border-roov-magenta" />
              <div>
                <h4 className="font-bold text-white">{t.name}, {t.age}</h4>
                <p className="text-sm text-gray-400">{t.city}</p>
              </div>
              <div className="ml-auto flex gap-1">
                {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-roov-neon text-roov-neon" />
                ))}
              </div>
            </div>
            <p className="text-gray-200 italic leading-relaxed">"{t.quote}"</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
