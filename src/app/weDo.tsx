import React from 'react';
import Link from 'next/link';
import './weDo.css';

const WeDo: React.FC = () => {
  return (
    <div className="weDo">
      <div className="textContent">
        <h1>Like What We Do?</h1>
        <p>Like what we’re about and want to stay updated on our development, the latest entrepreneurial news, other relevant, life-changing, high-impact events? 
        Want to join in one the entrepreneurial fun? Sign up today to put yourself on the map, along with other students around the globe!</p>
      </div>
      <div className="buttonContent">
        <Link href="/ProjectDirectory" legacyBehavior>
          <a className="seeProjectsButton">See our Projects</a>
        </Link>
      </div>
    </div>
  );
};

export default WeDo;