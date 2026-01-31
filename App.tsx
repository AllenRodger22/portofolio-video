
import React, { useState } from 'react';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { GoogleGenAI } from "@google/genai";
import { Mail, MessageSquare, Phone, X } from 'lucide-react';

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-blue-900/20 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content - Increased width to max-w-xl */}
      <div className="relative glass w-full max-w-xl p-8 md:p-10 rounded-[40px] shadow-2xl border-white/50 animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 glass rounded-full hover:bg-white/50 transition-colors"
        >
          <X size={20} className="text-slate-600" />
        </button>

        <h3 className="text-3xl font-bold text-slate-900 mb-2">Let's Connect</h3>
        <p className="text-slate-500 mb-8 font-light">Choose your preferred way to reach out.</p>

        <div className="space-y-4">
          <a 
            href="mailto:alanrogermoreiraaragao@proton.me"
            className="flex items-center gap-4 p-4 md:p-6 glass rounded-[24px] hover:bg-blue-600 hover:text-white transition-all duration-300 group overflow-hidden"
          >
            <div className="p-3 bg-blue-100 rounded-2xl text-blue-600 group-hover:bg-white/20 group-hover:text-white transition-colors shrink-0">
              <Mail size={24} />
            </div>
            <div className="min-w-0">
              <p className="text-xs uppercase tracking-widest font-bold opacity-70">Email</p>
              <p className="font-semibold truncate text-sm md:text-base">alanrogermoreiraaragao@proton.me</p>
            </div>
          </a>

          <a 
            href="https://wa.me/5585985315653"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 md:p-6 glass rounded-[24px] hover:bg-green-500 hover:text-white transition-all duration-300 group"
          >
            <div className="p-3 bg-green-100 rounded-2xl text-green-600 group-hover:bg-white/20 group-hover:text-white transition-colors shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest font-bold opacity-70">WhatsApp</p>
              <p className="font-semibold">+55 (85) 98531-5653</p>
            </div>
          </a>

          <div 
            className="flex items-center gap-4 p-4 md:p-6 glass rounded-[24px] hover:bg-[#5865F2] hover:text-white transition-all duration-300 group cursor-pointer"
            onClick={() => {
              navigator.clipboard.writeText('allenrodger.');
              alert('Discord ID copied to clipboard!');
            }}
          >
            <div className="p-3 bg-[#5865F215] rounded-2xl text-[#5865F2] group-hover:bg-white/20 group-hover:text-white transition-colors shrink-0">
              <MessageSquare size={24} />
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-widest font-bold opacity-70">Discord</p>
              <p className="font-semibold">allenrodger.</p>
            </div>
            <span className="text-[10px] uppercase font-bold opacity-40 group-hover:opacity-100 transition-opacity whitespace-nowrap">Click to Copy</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [personalityBio, setPersonalityBio] = useState<string>("High-retention vertical video editing for Roblox content creators.");
  const [isGenerating, setIsGenerating] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const refineBio = async () => {
    if (!process.env.API_KEY) return;
    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const prompt = "Generate a short, impactful bio for a vertical video editing portfolio focused on Roblox and high retention. Use a creative, vibrant, and modern tone. Maximum 15 words.";
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: prompt,
      });
      if (response.text) {
        setPersonalityBio(response.text.trim());
      }
    } catch (error) {
      console.error("Failed to refine bio", error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 selection:bg-blue-500/20">
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute bottom-[-15%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[150px] rounded-full"></div>
        <div className="absolute top-[40%] left-[30%] w-[20%] h-[20%] bg-sky-400/5 blur-[100px] rounded-full"></div>
      </div>

      <main>
        <Hero 
          bio={personalityBio} 
          isGenerating={isGenerating} 
          onRefine={refineBio} 
          onContactClick={() => setIsContactModalOpen(true)}
        />
        
        <section id="portfolio" className="py-32 px-4 md:px-8 max-w-7xl mx-auto scroll-mt-20">
          <div className="mb-20 text-center md:text-left">
            <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">Proven Results</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-slate-900 tracking-tighter">Recent Projects</h2>
            <div className="h-1.5 w-32 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full mx-auto md:mx-0"></div>
          </div>
          <VideoGallery />
        </section>

        <AboutMe />
      </main>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <Footer />
    </div>
  );
};

export default App;
