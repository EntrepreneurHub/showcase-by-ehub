'use client';

import React from 'react';
import Image from 'next/image';

const AboutSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8">
      <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
        <Image 
          src="/images/imageTwo.png" 
          alt="About Us" 
          width={500} 
          height={300} 
          className="max-w-full h-auto" 
        />
      </div>
      <div className="flex-1 md:ml-8 text-center md:text-left">
        <h1 className="text-4xl mb-4 text-black">About Showcase by EntrepreneurHub</h1>
        <p className="text-base leading-relaxed text-black">
          Showcase by EntrepreneurHub is a dynamic live event platform that powers entrepreneurial competitions and pitch events. As part of the EntrepreneurHub ecosystem, it enables real-time presentation management, live judging, and instant feedback during startup competitions and demo days. Whether you&apos;re hosting an official EntrepreneurHub event or organizing your own startup showcase, our platform provides the tools to make your live event a success.
        </p>
      </div>
    </div>
  );
};

export default AboutSection;