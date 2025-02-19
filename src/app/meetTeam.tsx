import React from 'react';
import './meetTeam.css';

const MeetTeam: React.FC = () => {
  return (
    <div className="meetTeam">
      <div className="buttonContent">
        <button className="meetTeamButton">Meet the Team</button>
      </div>
      <div className="textContent">
        <h1>Get to Know Us</h1>
        <p>Interested in who’s behind this project? Click on the button to the left to learn more about the team behind EntrepreneurHub!</p>
      </div>
    </div>
  );
};

export default MeetTeam;