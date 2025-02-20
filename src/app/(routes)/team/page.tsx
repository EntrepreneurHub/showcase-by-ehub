import React from 'react';
import Link from 'next/link';
import TeamTitle from '@/components/team/title';
import TeamMembers from '@/components/team/members';

const TeamPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow container mx-auto px-4 py-8">
        <Link 
          href="/"
          className="inline-block mb-8 px-6 py-2 bg-gray-200 text-black rounded hover:bg-gray-300 transition-colors"
        >
          ← Back to home
        </Link>
        <TeamTitle />
        <TeamMembers />
      </main>
    </div>
  );
};

export default TeamPage; 