import React, { useEffect } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import InteractiveMap from './components/InteractiveMap';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main className="w-full min-h-screen bg-roov-black text-roov-text selection:bg-white selection:text-black">
      {/* Minimal Floating Header */}
      <nav className="fixed top-0 left-0 right-0 z-40 grid grid-cols-2 md:grid-cols-3 items-center px-4 py-4 md:px-6 md:py-6 mix-blend-difference pointer-events-none">
        {/* Logo - Left aligned */}
        <div className="justify-self-start">
          <a href="#hero" className="font-heading font-bold text-lg md:text-xl tracking-tighter pointer-events-auto text-white">ROOV</a>
        </div>
        
        {/* Desktop Navigation Links - Center aligned */}
        <div className="hidden md:flex justify-self-center gap-8 pointer-events-auto mix-blend-difference">
           <a href="#manifesto" className="text-[10px] font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors">Manifesto</a>
           <a href="#timeline" className="text-[10px] font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors">Sequence</a>
           <a href="#events" className="text-[10px] font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors">Locations</a>
        </div>

        {/* Button - Right aligned */}
        <div className="justify-self-end pointer-events-auto">
          <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-md bg-white/5 text-white hover:bg-white/10 transition-colors cursor-default">
            Invitation Only
          </div>
        </div>
      </nav>

      <Hero />
      <About />
      <Timeline />
      <Events />
      <InteractiveMap />
      <Benefits />
      <Footer />
    </main>
  );
};

export default App;