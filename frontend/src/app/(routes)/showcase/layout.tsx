import React from 'react';
import Navbar from '@/components/shared/layout/navbar';
import Footer from '@/components/shared/layout/footer';

export default function ShowcaseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow bg-white">
        {children}
      </main>
      <Footer />
    </div>
  );
} 