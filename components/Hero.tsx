
import React from 'react';
import { Sparkles, ArrowDown, MessageCircle } from 'lucide-react';

interface HeroProps {
  bio: string;
  onRefine: () => void;
  isGenerating: boolean;
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ bio, onRefine, isGenerating, onContactClick }) => {
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      {/* Subtle Top Label */}
      <div className="absolute top-12 left-0 w-full flex justify-center pointer-events-none animate-in fade-in slide-in-from-top-4 duration-1000">
        <span className="text-[10px] md:text-xs font-light uppercase tracking-[0.5em] text-slate-700 select-none">
          Gaming Video Editing • <span className="font-bold">Roblox</span>
        </span>
      </div>

      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?auto=format&fit=crop&q=80&w=2000" 
          className="w-full h-full object-cover opacity-5"
          alt="Abstract bright background"
        />
      </div>

      <div className="relative z-10 max-w-4xl glass p-8 md:p-16 rounded-[40px] mt-8">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 glass rounded-full text-xs font-semibold uppercase tracking-tighter text-blue-600 mb-8 animate-pulse">
          <Sparkles size={14} />
          Visual Excellence
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 leading-none text-slate-900">
          YOUR CONTENT <br /><span className="text-gradient">DESERVES</span> BETTER.
        </h1>
        
        <p className="text-lg md:text-xl font-light text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          {bio}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a 
            href="#portfolio" 
            onClick={scrollToPortfolio}
            className="px-8 py-4 bg-blue-600 text-white rounded-full font-semibold text-lg hover:scale-105 transition-transform w-full sm:w-auto shadow-lg shadow-blue-500/20 active:scale-95"
          >
            Recent Projects
          </a>
          <button 
            onClick={onContactClick}
            className="px-8 py-4 glass text-slate-800 rounded-full font-semibold text-lg hover:bg-white/40 transition-colors w-full sm:w-auto flex items-center justify-center gap-2 active:scale-95 group"
          >
            <MessageCircle size={20} className="group-hover:rotate-12 transition-transform" />
            Contact Me
          </button>
        </div>
        
        <button 
          onClick={onRefine}
          disabled={isGenerating}
          className="mt-6 text-xs text-slate-400 hover:text-blue-500 transition-colors uppercase tracking-widest font-bold flex items-center gap-2 mx-auto"
        >
          {isGenerating ? 'Refining bio...' : '✨ AI Personality Refine'}
        </button>
      </div>

      <div className="absolute bottom-10 animate-bounce flex flex-col items-center opacity-30">
        <ArrowDown size={24} className="text-slate-900" />
      </div>
    </section>
  );
};

export default Hero;
