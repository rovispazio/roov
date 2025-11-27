import React, { useState } from 'react';

const events = [
  {
    id: '1',
    title: 'LA TORRE',
    subtitle: 'CASTELLO BRANCACCIO',
    date: '17.05',
    type: 'ACT I',
    image: 'https://images.unsplash.com/photo-1533669955142-6a73332af4db?q=80&w=2000&auto=format&fit=crop',
    status: 'INCOMING'
  },
  {
    id: '2',
    title: 'IL PONTE',
    subtitle: 'SCOTONICO',
    date: '14.06',
    type: 'ACT II',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=2000&auto=format&fit=crop',
    status: 'INCOMING'
  },
  {
    id: '3',
    title: 'IL CONVENTO',
    subtitle: 'EX OMNI',
    date: '12.07',
    type: 'ACT III',
    image: 'https://images.unsplash.com/photo-1514525253440-b39345208668?q=80&w=2000&auto=format&fit=crop',
    status: 'INCOMING'
  }
];

const Events: React.FC = () => {
  const [activeImage, setActiveImage] = useState<string | null>(null);

  return (
    <section id="events" className="py-20 md:py-32 bg-roov-black relative overflow-hidden min-h-[80vh] flex items-center">
      {/* Dynamic Background - Hidden on mobile to save data/battery, visible md+ */}
      <div className="hidden md:block absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out opacity-30 pointer-events-none">
        {activeImage && (
          <img 
            src={activeImage} 
            alt="Background" 
            className="w-full h-full object-cover filter blur-sm scale-105 transition-transform duration-[10s]" 
          />
        )}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="mb-12 border-b border-white/10 pb-4 flex justify-between items-end reveal-on-scroll">
          <h2 className="font-heading text-xs font-bold tracking-[0.2em] uppercase text-gray-500">The Season</h2>
          <span className="font-mono text-xs text-gray-600">2025</span>
        </div>

        <div className="flex flex-col">
          {events.map((event) => (
            <div 
              key={event.id}
              className="group relative border-b border-white/10 py-8 md:py-14 cursor-default transition-colors hover:border-white/30 reveal-on-scroll"
              onMouseEnter={() => setActiveImage(event.image)}
              onMouseLeave={() => setActiveImage(null)}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8">
                
                {/* Event Info */}
                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-12">
                  <span className="font-mono text-[10px] md:text-xs text-roov-accent/80 uppercase tracking-wider self-start md:self-auto">{event.type}</span>
                  <div>
                    <h3 className="font-heading text-4xl md:text-7xl font-bold text-gray-400 group-hover:text-white transition-colors duration-500 leading-none">
                      {event.title}
                    </h3>
                    <span className="font-heading text-4xl md:text-7xl font-bold text-gray-600 md:text-transparent md:group-hover:text-gray-600 md:stroke-text transition-colors duration-500 leading-none">
                      {event.subtitle}
                    </span>
                  </div>
                </div>
                
                {/* Meta Data */}
                <div className="flex items-center justify-between w-full md:w-auto md:gap-8 mt-4 md:mt-0">
                   <span className="font-heading text-xl md:text-3xl text-white italic">{event.date}</span>
                   <span className={`text-[9px] md:text-[10px] uppercase tracking-[0.2em] border px-3 py-1 rounded-full transition-all ${
                     event.status === 'SOLD OUT' ? 'border-red-900 text-red-700' :
                     event.status === 'WAITLIST' ? 'border-white/30 text-white' :
                     'border-white/10 text-gray-500'
                   }`}>
                     {event.status}
                   </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;