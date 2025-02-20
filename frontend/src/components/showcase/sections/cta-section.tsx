'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/AuthContext';

const CTASection: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8">
      <div className="flex-1 md:mr-8 mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-4xl mb-4 text-black">Join EntrepreneurHub Events</h1>
        <p className="text-base leading-relaxed text-black">
          Don&apos;t miss out on upcoming startup competitions and showcase events on EntrepreneurHub! Whether you&apos;re ready to present your startup or interested in judging the next wave of innovation, join our platform to stay updated on upcoming events and participate in real-time showcases.
        </p>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        {user ? (
          <Link 
            href="/showcase/events" 
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 transition-colors"
          >
            View Upcoming Events
          </Link>
        ) : (
          <Link 
            href="/register" 
            className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-800 transition-colors"
          >
            Join Now
          </Link>
        )}
      </div>
    </div>
  );
};

export default CTASection;