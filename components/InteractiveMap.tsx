import React from 'react';

const InteractiveMap: React.FC = () => {
  return (
    <section id="map" className="py-24 md:py-32 bg-roov-black border-t border-white/5">
      <div className="container mx-auto px-6 text-center mb-12 reveal-on-scroll">
        <h2 className="font-heading text-xl md:text-2xl text-white mb-2">TERRITORIO</h2>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Roviano, Roma — Valle dell'Aniene</p>
      </div>

      <div className="container mx-auto px-0 md:px-6 reveal-on-scroll">
        {/* Aspect Video Container to maintain marker positions relative to image */}
        <div className="relative w-full aspect-video bg-[#0a0a0a] overflow-hidden group border border-white/10 rounded-sm">
          
          {/* Map Image - Improved visibility */}
          <div className="absolute inset-0">
             <img 
               src="https://res.cloudinary.com/dkmc21jp3/image/upload/v1764254831/mappa_roov_bjal8q.jpg" 
               alt="Mappa Roviano" 
               className="w-full h-full object-cover opacity-70 md:opacity-80 transition-opacity duration-700 hover:opacity-100 grayscale-[30%]"
             />
          </div>
          
          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

          {/* Vignette for cinematic feel */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-black/80 pointer-events-none"></div>

          {/* Marker 1: Torre Castello Brancaccio */}
          {/* Pixel: 200, 535 -> %: 10.42, 49.54 */}
          <div className="absolute" style={{ left: '10.42%', top: '49.54%' }}>
             <div className="relative flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group/marker cursor-pointer">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                {/* Ping animation ring */}
                <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-ping opacity-75"></div>
                
                <div className="absolute top-full mt-3 opacity-0 group-hover/marker:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-[9px] font-mono text-white bg-black/90 px-3 py-1 backdrop-blur-md border border-white/20 whitespace-nowrap tracking-widest">
                        TORRE CASTELLO
                    </span>
                </div>
             </div>
          </div>

          {/* Marker 2: Convento Ex Omni */}
          {/* Pixel: 1155, 346 -> %: 60.16, 32.04 */}
          <div className="absolute" style={{ left: '60.16%', top: '32.04%' }}>
             <div className="relative flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group/marker cursor-pointer">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                 <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-ping opacity-75 animation-delay-500"></div>

                <div className="absolute top-full mt-3 opacity-0 group-hover/marker:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-[9px] font-mono text-white bg-black/90 px-3 py-1 backdrop-blur-md border border-white/20 whitespace-nowrap tracking-widest">
                        CONVENTO
                    </span>
                </div>
             </div>
          </div>

          {/* Marker 3: Ponte Scotonico */}
          {/* Pixel: 1595, 744 -> %: 83.07, 68.89 */}
          <div className="absolute" style={{ left: '83.07%', top: '68.89%' }}>
             <div className="relative flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group/marker cursor-pointer">
                <div className="w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-pulse shadow-[0_0_20px_rgba(255,255,255,0.8)]"></div>
                 <div className="absolute inset-0 w-3 h-3 md:w-4 md:h-4 bg-white rounded-full animate-ping opacity-75 animation-delay-1000"></div>

                <div className="absolute bottom-full mb-3 opacity-0 group-hover/marker:opacity-100 transition-opacity duration-300 pointer-events-none">
                    <span className="text-[9px] font-mono text-white bg-black/90 px-3 py-1 backdrop-blur-md border border-white/20 whitespace-nowrap tracking-widest">
                        PONTE SCOTONICO
                    </span>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InteractiveMap;