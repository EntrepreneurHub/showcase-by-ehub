'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/AuthContext';

const HeroSection: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8">
      <div className="flex-1 md:mr-8 mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl mb-4 text-black">Showcase by EntrepreneurHub</h1>
        <p className="text-base leading-relaxed text-black">
          Experience real-time entrepreneurial presentations and competitions on EntrepreneurHub&apos;s live event platform! Whether you&apos;re a judge evaluating pitches or a participant showcasing your startup, our platform makes it seamless to present, evaluate, and engage in the moment.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-4 justify-center md:justify-start">
          {user ? (
            user.role === 'judge' ? (
              <Link href="/dashboard" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-center">
                Judge Dashboard
              </Link>
            ) : (
              <Link href="/dashboard" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-center">
                Your Dashboard
              </Link>
            )
          ) : (
            <>
              <Link href="/login" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors text-center">
                Login to Judge
              </Link>
              <Link href="/register" className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-colors text-center">
                Present Your Startup
              </Link>
            </>
          )}
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