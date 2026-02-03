import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const AboutMe: React.FC = () => {
  const topics = [
    {
      title: "Specialization",
      text: "25-year-old Brazilian video editor focused on high-retention short-form content."
    },
    {
      title: "Experience",
      text: "1 year of hands-on experience creating edits that hook fast and hold attention."
    },
    {
      title: "Professionalism",
      text: "Clear communication, fast responses, and absolute respect for deadlines."
    },
    {
      title: "Value",
      text: "Consistency and clarity to help you scale your digital presence without the stress."
    }
  ];

  return (
    <section id="about" className="py-32 bg-white/40 overflow-hidden relative">
      <div className="max-w-4xl mx-auto px-4 text-center flex flex-col items-center">

        {/* Header Section */}
        <div className="mb-12">
          <h2 className="text-6xl md:text-7xl font-bold mb-6 text-slate-900 tracking-tighter uppercase">
            ABOUT ME
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 rounded-full mx-auto"></div>
        </div>

        {/* Intro Greeting */}
        <div className="mb-16 max-w-2xl">
          <p className="text-2xl md:text-3xl font-medium text-slate-800 leading-tight">
            Hi, I'm <span className="text-blue-600">Alan</span> and I'm here to bring your channel to the next level with video editing
          </p>
        </div>

        {/* Info Cards Container */}
        <div className="glass p-8 md:p-14 rounded-[48px] mb-20 w-full max-w-3xl border-white/60 shadow-2xl shadow-blue-500/10 relative overflow-hidden group">
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/10 blur-[80px] rounded-full group-hover:bg-blue-500/20 transition-colors"></div>
          
          <div className="grid gap-8 text-left relative z-10">
            {topics.map((topic, index) => (
              <div key={index} className="flex gap-5 items-start group/item">
                <div className="mt-1 shrink-0 text-blue-600 group-hover/item:scale-125 transition-all duration-300">
                  <CheckCircle2 size={28} />
                </div>
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-blue-500 mb-2">
                    {topic.title}
                  </h4>
                  <p className="text-lg md:text-xl font-light text-slate-700 leading-relaxed">
                    {topic.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Profile Image Component */}
        <div className="relative group cursor-pointer flex flex-col items-center">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-8 border-white shadow-2xl bg-black mb-8 group-hover:scale-105 transition-all duration-500 ease-out">
            <img 
              src="/alan.jpeg" 
              alt="Alan Roger" 
              className="w-full h-full object-cover block"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.style.display = 'none';
              }}
            />
            {/* Overlay sutil apenas no hover */}
            <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </div>
          
          <div className="text-center">
            <h3 className="text-3xl font-bold text-slate-900 mb-1 tracking-tight">Alan Roger</h3>
            <p className="text-sm font-bold text-blue-600 uppercase tracking-widest">Short-Form Content Specialist</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;