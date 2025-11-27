import React from 'react';

const Philosophy: React.FC = () => {
  const items = [
    { title: "VISUAL", desc: "Cinema quality production" },
    { title: "SOUND", desc: "Curated electronic acts" },
    { title: "HERITAGE", desc: "Historic locations only" },
    { title: "ACCESS", desc: "Strictly limited capacity" }
  ];

  return (
    <section id="philosophy" className="py-32 bg-roov-black border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <div key={i} className="border-t border-white/20 pt-6 group hover:border-white transition-colors duration-500 reveal-on-scroll" style={{transitionDelay: `${i * 100}ms`}}>
               <h3 className="font-heading font-bold text-2xl text-white mb-2">{item.title}</h3>
               <p className="text-gray-500 text-sm font-mono uppercase tracking-wide group-hover:text-gray-300 transition-colors">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;