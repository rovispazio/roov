import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-roov-black pt-20 md:pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-16 mb-20 md:mb-24 reveal-on-scroll">
          
          <div className="w-full max-w-2xl">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-8 leading-[0.9]">
              JOIN THE<br />
              <span className="text-gray-700">INNER CIRCLE.</span>
            </h2>
            
            <div className="flex flex-col md:flex-row gap-4 w-full">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-transparent border-b border-white/30 py-4 w-full md:w-80 text-white text-sm focus:outline-none focus:border-white transition-colors placeholder:text-gray-700 font-sans rounded-none"
              />
              <button className="text-xs font-bold uppercase tracking-[0.2em] text-white border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition-all w-full md:w-auto">
                Request Access
              </button>
            </div>
            <p className="mt-6 text-[10px] md:text-xs text-gray-600 max-w-md leading-relaxed mx-auto md:mx-0">
              L'iscrizione non garantisce l'ingresso. I codici invito vengono rilasciati algoritmicamente in base alla disponibilità mensile.
            </p>
          </div>

          <div className="flex flex-row md:flex-col gap-8 md:gap-4 w-full md:w-auto justify-center md:justify-end border-t border-white/5 pt-8 md:border-none md:pt-0">
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs tracking-wider uppercase">Instagram</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs tracking-wider uppercase">Resident Advisor</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors text-xs tracking-wider uppercase">Contact</a>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5 text-[9px] text-gray-800 uppercase tracking-widest font-mono reveal-on-scroll">
          <p>© 2025 ROOV PROJECT • NON-PROFIT</p>
          <p>VALLE DELL'ANIENE, RM</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;