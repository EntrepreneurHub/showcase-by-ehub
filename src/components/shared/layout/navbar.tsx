import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-[#D9D9D9] p-4">
      <div className="text-black text-2xl md:mr-8 mb-4 md:mb-0">Entrepreneur Hub</div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-4">
        <Link href="/showcase" className="text-black hover:text-gray-600">Home</Link>
        <Link href="/showcase/project-directory" className="text-black hover:text-gray-600">See Our Projects</Link>
        <Link href="/showcase/auth" className="text-black hover:text-gray-600">Login In</Link>
      </div>
    </nav>
  );
};

export default Navbar;