import React from 'react';
import Link from 'next/link';

const CTASection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8">
      <div className="flex-1 md:mr-8 mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl mb-4 text-black">Like What We Do?</h1>
        <p className="text-base leading-relaxed text-black">
          Like what we're about and want to stay updated on our development, the latest entrepreneurial news, other relevant, life-changing, high-impact events? 
          Want to join in one the entrepreneurial fun? Sign up today to put yourself on the map, along with other students around the globe!
        </p>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <Link 
          href="/showcase/project-directory" 
          className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 transition-colors"
        >
          See our Projects
        </Link>
      </div>
    </div>
  );
};

export default CTASection;