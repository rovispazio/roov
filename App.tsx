import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import Hero from './components/Hero';
import About from './components/About';
import Events from './components/Events';
import InteractiveMap from './components/InteractiveMap';
import Benefits from './components/Benefits';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <main className="w-full min-h-screen bg-roov-black text-roov-text selection:bg-white selection:text-black">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 grid grid-cols-[auto_1fr_auto] md:grid-cols-3 items-center px-4 py-4 md:px-6 md:py-6 mix-blend-difference pointer-events-none">
        
        {/* Logo - Left aligned */}
        <div className="justify-self-start pointer-events-auto">
          <a 
            href="#hero" 
            onClick={(e) => scrollToSection(e, 'hero')}
            className="font-heading font-bold text-lg md:text-xl tracking-tighter text-white relative z-50"
          >
            ROOV
          </a>
        </div>
        
        {/* Desktop Navigation Links - Center aligned */}
        <div className="hidden md:flex justify-self-center gap-8 pointer-events-auto mix-blend-difference">
           <a href="#manifesto" onClick={(e) => scrollToSection(e, 'manifesto')} className="text-[10px] font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors">Manifesto</a>
           <a href="#timeline" onClick={(e) => scrollToSection(e, 'timeline')} className="text-[10px] font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors">Sequence</a>
           <a href="#events" onClick={(e) => scrollToSection(e, 'events')} className="text-[10px] font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors">Locations</a>
           <a href="#map" onClick={(e) => scrollToSection(e, 'map')} className="text-[10px] font-mono uppercase tracking-widest text-white/70 hover:text-white transition-colors">Territory</a>
        </div>

        {/* Right Side: Button + Mobile Menu Trigger */}
        <div className="justify-self-end pointer-events-auto flex items-center gap-4 relative z-50">
          <div className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] border border-white/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full backdrop-blur-md bg-white/5 text-white hover:bg-white/10 transition-colors cursor-default">
            Invitation Only
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-8 text-center">
          <a 
            href="#manifesto" 
            onClick={(e) => scrollToSection(e, 'manifesto')}
            className="font-heading text-4xl font-bold text-white hover:text-roov-accent transition-colors"
          >
            MANIFESTO
          </a>
          <a 
            href="#timeline" 
            onClick={(e) => scrollToSection(e, 'timeline')}
            className="font-heading text-4xl font-bold text-white hover:text-roov-accent transition-colors"
          >
            SEQUENCE
          </a>
          <a 
            href="#events" 
            onClick={(e) => scrollToSection(e, 'events')}
            className="font-heading text-4xl font-bold text-white hover:text-roov-accent transition-colors"
          >
            LOCATIONS
          </a>
          <a 
            href="#map" 
            onClick={(e) => scrollToSection(e, 'map')}
            className="font-heading text-4xl font-bold text-white hover:text-roov-accent transition-colors"
          >
            TERRITORY
          </a>
        </div>

        <div className="absolute bottom-12 text-[10px] font-mono text-gray-500 uppercase tracking-widest">
          ROOV • CULTURAL MOVEMENT
        </div>
      </div>

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