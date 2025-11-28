import React, { useEffect, useState, useRef } from 'react';

const Hero: React.FC = () => {
  const [offset, setOffset] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="relative h-svh w-full overflow-hidden flex flex-col items-center justify-center bg-roov-black">
      {/* Parallax Background Video Container */}
      <div 
        className="absolute inset-0 z-0 w-full h-full pointer-events-none overflow-hidden"
        style={{ transform: `translateY(${offset * 0.5}px)` }} // Parallax effect
      >
        <div className="relative w-full h-[120%] -top-[10%]"> {/* Oversized for parallax */}
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto object-cover transform -translate-x-1/2 -translate-y-1/2 opacity-40 md:opacity-50 grayscale contrast-125"
          >
            {/* Cinematic Drone/Atmosphere Loop Placeholder */}
            <source src="https://res.cloudinary.com/dkmc21jp3/video/upload/v1764337137/ROOV_gma6cl.mp4" type="video/mp4" />
          </video>
          
          {/* Animated Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0f1929]/80 via-[#6b2d8f]/30 to-[#c1308d]/20 mix-blend-overlay animate-gradient-xy bg-[length:200%_200%]"></div>
          
          {/* Vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/40 to-black/90"></div>
        </div>
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 w-full">
        <div className="overflow-hidden mb-4 md:mb-6">
          <span className="block text-[10px] md:text-sm font-mono uppercase tracking-[0.3em] md:tracking-[0.5em] text-gray-300 opacity-0 animate-fade-in-delayed drop-shadow-lg pl-[0.3em] md:pl-[0.5em]">
            Cultural Movement
          </span>
        </div>

        {/* Responsive Typography: Scaled for mobile width without breaking */}
        <h1 className="font-heading font-bold text-[22vw] md:text-[18vw] leading-[0.8] tracking-tighter text-white mix-blend-difference opacity-0 animate-blur-fade-in select-none drop-shadow-2xl">
          ROOV
        </h1>

        <div className="mt-8 md:mt-12 max-w-[90%] md:max-w-2xl mx-auto opacity-0 animate-fade-in-slow">
          <p className="font-sans text-sm md:text-lg text-gray-200 tracking-wide leading-relaxed font-light drop-shadow-md">
            La Storia Incontra il Beat.<br className="hidden md:block"/>
            <span className="text-white font-medium block mt-2 md:inline md:mt-0">3 Location. Un'Esperienza Unica.</span>
          </p>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in-slow animation-delay-2000">
          <div className="w-[1px] h-12 bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-mono z-20 hidden md:block">
        42.0256° N
      </div>
      
      <div className="absolute bottom-6 right-6 text-[9px] md:text-[10px] text-gray-500 uppercase tracking-widest font-mono z-20 hidden md:block">
        Est. 2025
      </div>
    </section>
  );
};

export default Hero;