import React from 'react';
import Image from 'next/image';

const ProjectsHeader: React.FC = () => {
  return (
    <div className="relative h-96 w-full mb-12">
      <Image
        src="/images/ovalBackground.jpg"
        alt="Projects Header"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white">
        <h1 className="text-5xl font-bold mb-4">Our Projects</h1>
        <p className="text-xl max-w-2xl text-center px-4">
          Discover amazing projects created by students from around the world. From innovative apps to groundbreaking research, explore what the next generation of entrepreneurs is building.
        </p>
      </div>
    </div>
  );
};

export default ProjectsHeader; 