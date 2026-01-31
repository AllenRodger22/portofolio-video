
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 px-4 py-4">
      <div className="max-w-7xl mx-auto glass rounded-full px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold tracking-tighter">
          <span className="text-gradient">VV</span> Portfolio
        </div>
        <div className="hidden md:flex gap-8 text-sm font-light uppercase tracking-widest">
          <a href="#" className="hover:text-pink-500 transition-colors">Home</a>
          <a href="#portfolio" className="hover:text-pink-500 transition-colors">Portfolio</a>
          <a href="#about" className="hover:text-pink-500 transition-colors">About</a>
          <a href="#contact" className="hover:text-pink-500 transition-colors">Contact</a>
        </div>
        <button className="bg-white text-black px-6 py-1.5 rounded-full text-sm font-semibold hover:bg-pink-500 hover:text-white transition-all">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
