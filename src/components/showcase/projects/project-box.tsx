import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProjectBoxProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const ProjectBox: React.FC<ProjectBoxProps> = ({ title, description, image, link }) => {
  return (
    <Link href={link} className="block">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
          />
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-black mb-2">{title}</h3>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProjectBox; 