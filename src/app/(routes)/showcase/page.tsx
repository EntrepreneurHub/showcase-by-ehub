import React from 'react';
import Navbar from '@/components/shared/layout/navbar';
import Footer from '@/components/shared/layout/footer';
import HeroSection from '@/components/showcase/sections/hero-section';
import AboutSection from '@/components/showcase/sections/about-section';
import CTASection from '@/components/showcase/sections/cta-section';
import TeamSection from '@/components/showcase/sections/team-section';

// Main showcase feature page of EntrepreneurHub
export default function ShowcasePage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <CTASection />
      <TeamSection />
      <Footer />
    </main>
  );
}