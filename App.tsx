import React, { useState } from 'react';
import Hero from './components/Hero';
import VideoGallery from './components/VideoGallery';
import AboutMe from './components/AboutMe';
import Footer from './components/Footer';
import { GoogleGenAI } from '@google/genai';
import { Mail, MessageSquare, Phone, X } from 'lucide-react';

const ContactModal: React.FC<{ isOpen: boolean; onClose: () => void }> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-blue-900/20 backdrop-blur-md"
        onClick={onClose}
      />

      <div className="relative glass w-full max-w-xl p-8 md:p-10 rounded-[40px] shadow-2xl border-white/50">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 glass rounded-full hover:bg-white/50"
        >
          <X size={20} />
        </button>

        <h3 className="text-3xl font-bold mb-2">Let's Connect</h3>
        <p className="text-slate-500 mb-8">Choose your preferred way to reach out.</p>

        <div className="space-y-4">
          <a
            href="mailto:alanrogermoreiraaragao@proton.me"
            className="flex items-center gap-4 p-6 glass rounded-[24px]"
          >
            <Mail />
            <span>Email</span>
          </a>

          <a
            href="https://wa.me/5585985315653"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-6 glass rounded-[24px]"
          >
            <Phone />
            <span>WhatsApp</span>
          </a>

          <div
            className="flex items-center gap-4 p-6 glass rounded-[24px] cursor-pointer"
            onClick={() => navigator.clipboard.writeText('allenrodger.')}
          >
            <MessageSquare />
            <span>Discord: allenrodger.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  const [bio, setBio] = useState(
    'High-retention vertical video editing for Roblox content creators.'
  );
  const [isGenerating, setIsGenerating] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const refineBio = async () => {
    const apiKey = import.meta.env.VITE_GOOGLE_API_KEY;
    if (!apiKey) return; // 🔒 evita crash no deploy

    setIsGenerating(true);
    try {
      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents:
          'Generate a short, impactful bio for a Roblox video editor. Max 15 words.',
      });

      if (response.text) setBio(response.text.trim());
    } catch (err) {
      console.error('AI error:', err);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main>
        <Hero
          bio={bio}
          isGenerating={isGenerating}
          onRefine={refineBio}
          onContactClick={() => setIsContactOpen(true)}
        />

        <section id="portfolio" className="py-32 px-6 max-w-7xl mx-auto">
          <VideoGallery />
        </section>

        <AboutMe />
      </main>

      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Footer />
    </div>
  );
};

export default App;