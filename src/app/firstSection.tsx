import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ImgOne from './Img/imgOne.jpg';
import './firstSection.css';

const FirstSection: React.FC = () => {
  return (
    <div className="firstSection">
      <div className="textContent">
        <h1>Innovation, Showcased</h1>
        <p>Whether it’s a Youtube idea, a unique coding project, or a research paper, you can display your work here for students around the world to see!</p>
        <div className="buttonGroup">
          <button className="judgeButton">For Judges</button>
          <Link href="/SignIn" legacyBehavior>
            <a className="participantButton">For Participants</a>
          </Link>
        </div>
      </div>
      <div className="imageContent">
        <Image src={ImgOne} alt="Showcase" width={500} height={300} />
      </div>
    </div>
  );
};

export default FirstSection;