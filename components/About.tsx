import React from 'react';

const About: React.FC = () => {
  return (
    <section id="manifesto" className="py-20 md:py-48 bg-roov-black relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-32 items-start">
          
          {/* Header Column: Relative on mobile to prevent overlap, Sticky on Desktop */}
          <div className="w-full md:w-1/2 relative md:sticky md:top-32 z-10 mb-8 md:mb-0 reveal-on-scroll">
            <h2 className="font-heading text-5xl md:text-7xl font-bold leading-[0.85] text-white mb-6 md:mb-8 tracking-tight">
              SILENCE<br />
              IS NOT<br />
              EMPTY.
            </h2>
            <div className="w-8 md:w-12 h-[1px] bg-white mb-6 md:mb-8"></div>
            <p className="font-heading text-lg md:text-2xl text-gray-500 italic leading-tight">
              "Riportiamo il battito dove il tempo si è fermato."
            </p>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 space-y-12 md:pt-24">
            <div className="space-y-6 md:space-y-8 reveal-on-scroll">
              <p className="text-base md:text-xl font-light text-gray-300 leading-relaxed">
                <strong className="text-white font-normal">ROOV non è un festival.</strong> È un'occupazione sonora temporanea. 
                Attiviamo spazi, per trasformarli in casse di risonanza.
              </p>
              <p className="text-base md:text-xl font-light text-gray-400 leading-relaxed">
                Nessun palco, nessuna barriera. 
                Solo architettura e frequenze.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 md:gap-8 border-t border-white/10 pt-6 md:pt-8 reveal-on-scroll">
              <div>
                <span className="block text-3xl md:text-4xl font-heading font-bold text-white mb-1">50</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-600">Guests Only</span>
              </div>
              <div>
                <span className="block text-3xl md:text-4xl font-heading font-bold text-white mb-1">III</span>
                <span className="text-[10px] md:text-xs uppercase tracking-widest text-gray-600">Acts</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;