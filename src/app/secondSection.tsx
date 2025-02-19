import React from 'react';
import Image from 'next/image';
import ImgTwo from './Img/imageTwo.png';
import './secondSection.css';

const SecondSection: React.FC = () => {
  return (
    <div className="secondSection">
      <div className="imageContent">
        <Image src={ImgTwo} alt="About Us" width={500} height={300} />
      </div>
      <div className="textContent">
        <h1>About Us</h1>
        <p>Showcase by EHub is a project discovery platform designed to empower college students by giving them a space to showcase their entrepreneurial projects and small businesses. Whether its a YouTube channel, personal brand, local food shop, mechanic service, agency, app, or anything else—Showcase by EHub is here to help bring your any and all of your ideas to life.</p>
      </div>
    </div>
  );
};

export default SecondSection;