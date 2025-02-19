import React from 'react';
import Link from 'next/link';

const MeetTeam: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center p-8">
      <div className="flex-1 flex justify-center md:justify-start mb-4 md:mb-0">
        <Link href="/MeetTeam" legacyBehavior>
          <a className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors">
            Meet the Team
          </a>
        </Link>
      </div>
      <div className="flex-1 md:ml-8 text-center md:text-left">
        <Link href="/MeetTeam" legacyBehavior>
          <a>
            <h1 className="text-4xl mb-4 text-black">Get to Know Us</h1>
          </a>
        </Link>
        <p className="text-base leading-relaxed text-black">
          Interested in whos behind this project? Click on the button to the left to learn more about the team behind EntrepreneurHub!
        </p>
      </div>
    </div>
  );
};

export default MeetTeam;