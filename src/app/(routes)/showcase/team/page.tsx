import React from 'react';
import Navbar from '@/components/shared/layout/navbar';
import Footer from '@/components/shared/layout/footer';
import TeamTitle from '@/components/team/title';
import TeamMembers from '@/components/team/members';

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="container mx-auto px-4">
        <TeamTitle />
        <TeamMembers />
      </div>
      <Footer />
    </div>
  );
} 