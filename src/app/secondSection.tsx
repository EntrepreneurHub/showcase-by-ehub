import React from 'react';
import Image from 'next/image';
import ImgTwo from './Img/imageTwo.png';

const SecondSection: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8">
      <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
        <Image src={ImgTwo} alt="About Us" width={500} height={300} className="max-w-full h-auto" />
      </div>
      <div className="flex-1 md:ml-8 text-center md:text-left">
        <h1 className="text-4xl mb-4 text-black">About Us</h1>
        <p className="text-base leading-relaxed text-black">
          Showcase by EHub is a project discovery platform designed to empower college students by giving them a space to showcase their entrepreneurial projects and small businesses. Whether its a YouTube channel, personal brand, local food shop, mechanic service, agency, app, or anything else—Showcase by EHub is here to help bring your any and all of your ideas to life.
        </p>
      </div>
    </div>
  );
};

export default SecondSection;