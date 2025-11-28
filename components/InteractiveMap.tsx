import React, { useState } from 'react';
import { X, MapPin, ArrowRight } from 'lucide-react';

interface LocationDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  video?: string;
  coords: { left: number; top: number }; // Changed to numbers for easier calculation
  alignment: 'top' | 'bottom';
}

const locations: LocationDetail[] = [
  {
    id: 'torre',
    title: 'TORRE CASTELLO',
    subtitle: 'BRANCACCIO',
    description: 'Il punto più alto di Roviano. Una fortificazione medievale che domina la valle, trasformata in una torre di controllo sonoro.',
    image: 'https://res.cloudinary.com/dkmc21jp3/image/upload/v1764339512/Roviano_7_wzmvbx.jpg',
    video: 'https://res.cloudinary.com/dkmc21jp3/video/upload/v1764339552/ROOV_Torre_itlmm6.mp4',
    coords: { left: 10.42, top: 49.54 },
    alignment: 'bottom'
  },
  {
    id: 'convento',
    title: 'CONVENTO',
    subtitle: 'EX OMNI',
    description: 'Un luogo di silenzio secolare riattivato. Un edifico vuoto che offre un\'esperienza mistica e immersiva. Le geometrie incontrano le frequenze elettroniche in un contrasto mistico.',
    image: 'https://res.cloudinary.com/dkmc21jp3/image/upload/v1764339534/Ex_monastero_di_Roviano_II_r3wzx8.jpg',
    video: 'https://res.cloudinary.com/dkmc21jp3/video/upload/v1764339527/ROOV_Convento_rqxzaw.mp4',
    coords: { left: 60.16, top: 32.04 },
    alignment: 'bottom'
  },
  {
    id: 'ponte',
    title: 'PONTE SCOTONICO',
    subtitle: 'VALLE DELL\'ANIENE',
    description: 'Sospesi tra due sponde. Il ponte romano diventa un palcoscenico lineare. Una location open-air dove la natura è parte integrante della scenografia.',
    image: 'https://res.cloudinary.com/dkmc21jp3/image/upload/v1764339513/257817c63b10486d511f9e86a7d60616_zy8jlr.jpg',
    video: 'https://res.cloudinary.com/dkmc21jp3/video/upload/v1764339529/ROOV_Ponte_bfpii4.mp4',
    coords: { left: 83.07, top: 68.89 },
    alignment: 'top'
  }
];

const InteractiveMap: React.FC = () => {
  const [activeLocation, setActiveLocation] = useState<LocationDetail | null>(null);

  // Calculate transform to center the selected point and zoom
  const getMapTransform = () => {
    if (!activeLocation) return 'scale(1) translate(0, 0)';

    const scale = 2.5; // Zoom corposo
    
    // Target position percentages
    const x = activeLocation.coords.left;
    const y = activeLocation.coords.top;

    // Calculate translation needed to bring the point to the center (50, 50)
    // We scale around the center (default transform-origin: center), so we just need to translate the offset.
    const dx = 50 - x;
    const dy = 50 - y;

    return `scale(${scale}) translate(${dx}%, ${dy}%)`;
  };

  return (
    <section id="map" className="py-24 md:py-32 bg-roov-black border-t border-white/5 relative z-10">
      <div className="container mx-auto px-6 text-center mb-12 reveal-on-scroll">
        <h2 className="font-heading text-xl md:text-2xl text-white mb-2">TERRITORIO</h2>
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">Roviano, Roma — Valle dell'Aniene</p>
      </div>

      <div className="container mx-auto px-0 md:px-6 reveal-on-scroll relative h-[60vh] md:h-[70vh] w-full overflow-hidden border-y md:border border-white/10 bg-[#0a0a0a]">
        
        {/* Transformable Map Container */}
        <div 
          className="relative w-full h-full transition-transform duration-1000 cubic-bezier(0.23, 1, 0.32, 1) origin-center will-change-transform"
          style={{ transform: getMapTransform() }}
        >
          {/* Map Image */}
          <div className="absolute inset-0 w-full h-full">
             <img 
               src="https://res.cloudinary.com/dkmc21jp3/image/upload/v1764254831/mappa_roov_bjal8q.jpg" 
               alt="Mappa Roviano" 
               className="w-full h-full object-cover opacity-60 grayscale-[50%]"
             />
          </div>
          
          {/* Grid & Vignette Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80 pointer-events-none"></div>

          {/* Markers */}
          {locations.map((loc) => (
            <div 
              key={loc.id}
              className="absolute z-20" 
              style={{ left: `${loc.coords.left}%`, top: `${loc.coords.top}%` }}
              onClick={() => setActiveLocation(loc)}
            >
               {/* Marker Container - Counter-scales to keep marker size reasonable if desired, or let it grow */}
               <div className={`relative flex flex-col items-center -translate-x-1/2 -translate-y-1/2 group/marker cursor-pointer transition-all duration-1000 ${activeLocation ? 'scale-[0.4]' : 'hover:scale-110'}`}>
                  
                  {/* Pulse Effect */}
                  {activeLocation?.id === loc.id && (
                    <div className="absolute inset-0 -m-8 border border-roov-accent rounded-full w-20 h-20 animate-ping opacity-20"></div>
                  )}

                  <div className={`w-3 h-3 md:w-4 md:h-4 rounded-full shadow-[0_0_20px_rgba(255,255,255,0.8)] transition-colors duration-300 ${activeLocation?.id === loc.id ? 'bg-roov-accent scale-150' : 'bg-white animate-pulse'}`}></div>
                  
                  {/* Label - Always Visible but scaled down when zoomed */}
                  <div className={`absolute ${loc.alignment === 'top' ? 'bottom-full mb-4' : 'top-full mt-4'} transition-all duration-500`}>
                      <span 
                        className={`
                          block text-[9px] md:text-[10px] font-mono font-bold text-white bg-black/90 px-3 py-1.5 backdrop-blur-md border border-white/20 whitespace-nowrap tracking-widest uppercase shadow-xl
                          transition-colors duration-300
                          ${activeLocation?.id === loc.id ? 'bg-roov-accent border-roov-accent text-white' : 'hover:bg-white hover:text-black'}
                        `}
                      >
                          {loc.title}
                      </span>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* Sidebar / Modal - Fixed absolute over the map view */}
        <div 
          className={`absolute top-0 right-0 bottom-0 w-full md:w-[450px] bg-black/95 backdrop-blur-xl border-l border-white/10 p-8 md:p-12 transform transition-transform duration-700 cubic-bezier(0.23, 1, 0.32, 1) z-30 flex flex-col shadow-2xl ${
            activeLocation ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {activeLocation && (
            <>
              <button 
                onClick={(e) => { e.stopPropagation(); setActiveLocation(null); }}
                className="absolute top-6 right-6 md:top-8 md:right-8 text-white/50 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full z-10"
              >
                <X size={24} />
              </button>

              <div className="mt-6 md:mt-10 mb-8 overflow-hidden rounded-sm border border-white/10 h-56 w-full relative group bg-roov-gray">
                {activeLocation.video ? (
                  <video 
                    src={activeLocation.video}
                    poster={activeLocation.image}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  />
                ) : (
                  <img 
                    src={activeLocation.image} 
                    alt={activeLocation.title} 
                    className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" 
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
              </div>

              <div className="flex flex-col gap-2 mb-6 animate-fade-in">
                <span className="text-roov-accent text-xs font-mono uppercase tracking-[0.2em]">Selected Location</span>
                <h3 className="text-4xl md:text-5xl font-heading font-bold text-white leading-[0.9]">{activeLocation.title}</h3>
                <span className="text-xl md:text-2xl font-heading text-gray-500">{activeLocation.subtitle}</span>
              </div>

              <p className="text-gray-300 text-sm md:text-base leading-relaxed font-light mb-8 border-l-2 border-roov-accent/50 pl-6 animate-fade-in-delayed">
                {activeLocation.description}
              </p>

              <div className="mt-auto animate-fade-in-slow">
                <div className="flex items-center gap-2 text-[10px] font-mono uppercase tracking-widest text-gray-500 mb-3">
                  <MapPin size={12} />
                  <span>Coordinates: {activeLocation.coords.left}° N / {activeLocation.coords.top}° E</span>
                </div>
                <button className="w-full border border-white/20 bg-white/5 hover:bg-white hover:text-black text-white py-4 px-6 text-xs font-bold uppercase tracking-[0.2em] transition-all flex items-center justify-between group">
                  <span>Scopri Location</span>
                  <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </>
          )}
        </div>
        
        {/* Mobile Click Overlay to close */}
        {activeLocation && (
          <div className="absolute top-0 left-0 bottom-0 right-0 md:right-[450px] z-20 cursor-zoom-out" onClick={() => setActiveLocation(null)}></div>
        )}

      </div>
    </section>
  );
};

export default InteractiveMap;