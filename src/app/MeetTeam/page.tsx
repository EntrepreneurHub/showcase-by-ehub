import React from 'react';
import Navbar from '../navbar';
import Title from './title';
import Bioface from './us';
import Footer from '../footer';

export default function MeetTeam() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Title />
      <div className="flex-grow flex flex-col justify-center items-center">
        <Bioface />
      </div>
      <Footer />
    </div>
  );
}