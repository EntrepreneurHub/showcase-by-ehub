import React from 'react';
import Image from 'next/image';

const TeamMembers: React.FC = () => {
  const teamMembers = [
    {
      name: "Saeed Khan",
      role: "Founder",
      description: "Founder of the project.",
      image: "/images/ovalBackground.jpg"
    },
    {
      name: "Richard Perez Jr",
      role: "Admin/Full Stack Developer",
      description: "Full stack developer and administrator.",
      image: "/images/ovalBackground.jpg"
    },
    {
      name: "Sajid Amin",
      role: "Engineer",
      description: "Engineering lead.",
      image: "/images/ovalBackground.jpg"
    },
    {
      name: "Christiana Mattheopoulos",
      role: "UX Designer",
      description: "Lead UX designer.",
      image: "/images/ovalBackground.jpg"
    },
    {
      name: "Brian Martinez Flores",
      role: "Front-End Developer",
      description: "Frontend development specialist.",
      image: "/images/ovalBackground.jpg"
    },
    {
      name: "Roni",
      role: "Back-End Developer",
      description: "Backend development specialist.",
      image: "/images/ovalBackground.jpg"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
          <div className="relative h-64 w-full">
            <Image
              src={member.image}
              alt={member.name}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-black mb-2">{member.name}</h3>
            <p className="text-blue-600 font-semibold mb-4">{member.role}</p>
            <p className="text-gray-600">{member.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers; 