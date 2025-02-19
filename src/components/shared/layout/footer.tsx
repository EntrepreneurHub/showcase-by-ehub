import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white text-center py-4">
      <div>
        <h1 className="text-2xl md:text-xl sm:text-lg mb-1">Entrepreneur Hub</h1>
        <p className="text-base md:text-sm sm:text-xs">&copy; Entrepreneur Hub Inc</p>
      </div>
    </footer>
  );
};

export default Footer;