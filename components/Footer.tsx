
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-12 flex justify-center items-center">
      <div className="text-sm font-medium text-slate-300 tracking-[0.2em]">
        {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
