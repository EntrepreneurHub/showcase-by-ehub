import React from 'react';
import Image from 'next/image';
import ovalBackground from '../Img/ovalBackground.jpg';

const ProjectBox: React.FC = () => {
  return (
    <div className="bg-gray-300 p-4 rounded-lg text-center m-2">
      <div className="flex justify-center mb-4">
        <Image src={ovalBackground} alt="Project Image" className="rounded-full w-24 h-24 object-cover" />
      </div>
      <h2 className="text-xl font-bold text-black">Project</h2>
      <p className="text-black mt-2">This project can be for anything, just win on Saturday/example.</p>
    </div>
  );
};

const ProjectGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: 9 }).map((_, index) => (
        <ProjectBox key={index} />
      ))}
    </div>
  );
};

export default ProjectGrid;