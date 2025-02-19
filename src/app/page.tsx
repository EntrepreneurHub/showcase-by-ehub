import React from 'react';
import Navbar from './navbar';
import FirstSection from './firstSection';
import SecondSection from './secondSection';
import WeDo from './weDo';
import MeetTeam from './meetTeam';
import Footer from './footer';
import './page.css';

export default function Home() {
  return (
    <div>
      <Navbar />
      <FirstSection />
      <SecondSection />
      <WeDo />
      <MeetTeam />
      <Footer />
    </div>
  );
}