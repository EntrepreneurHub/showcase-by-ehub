import React from 'react';
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
        <button className="seeProjectsButton">See our Projects</button>
      </div>
    </div>
  );
};

export default WeDo;