import React from 'react';
import SignIn from './sign-in';
import Navbar from '@/components/shared/layout/navbar';
import Footer from '@/components/shared/layout/footer';

export default function AuthPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <SignIn />
      <Footer />
    </div>
  );
}


