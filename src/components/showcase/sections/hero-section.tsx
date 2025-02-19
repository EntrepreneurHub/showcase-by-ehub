import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8">
      <div className="flex-1 md:mr-8 mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl mb-4 text-black">Innovation, Showcased</h1>
        <p className="text-base leading-relaxed text-black">
          Whether it's a Youtube idea, a unique coding project, or a research paper, you can display your work here for students around the world to see!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
          <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
            For Judges
          </button>
          <Link href="/showcase/auth" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-center">
            For Participants
          </Link>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <Image 
          src="/images/imgOne.jpg" 
          alt="Showcase" 
          width={500} 
          height={300} 
          className="max-w-full h-auto" 
        />
      </div>
    </div>
  );
};

export default HeroSection;