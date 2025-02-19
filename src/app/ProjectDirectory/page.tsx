import React from 'react';
import Navbar from '../navbar';
import ContentBox from './ContentBox';
import Footer from '../footer';

export default function ProjectDirectory() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <div className="flex-grow flex justify-center items-center">
        <ContentBox />
      </div>
      <Footer />
    </div>
  );
}