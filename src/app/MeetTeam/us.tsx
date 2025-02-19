"use client";

import React from 'react';
import Image from 'next/image';
import ovalBackground from '../img/ovalBackground.jpg'; 

const teamMembers = [
  { name: 'Saeed Khan', title: 'Founder', email: 'saeed.khan23@my.stjohns.edu' },
  { name: 'Richard Perez Jr', title: 'Admin/Full Stack Developer', email: 'richard.perez23@my.stjohns.edu' },
  { name: 'Sajid Amin', title: 'Engineer', email: 'Sajidagoat@gmail.com' },
  { name: 'Christiana Mattheopoulos ', title: 'UX Designer', email: 'cattyshima@gmail.com' },
  { name: 'Brian Martinez Flores', title: 'Front-End Developer', email: 'brianmflores697@gmail.com' },
  { name: 'Roni', title: 'Back-End Developer', email: 'roniakuffo@gmail.com ' },
];

const Bioface: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
      {teamMembers.map((member, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded-lg text-center shadow-lg m-4">
          <Image src={ovalBackground} alt={member.name} className="rounded-full mx-auto mb-4" width={100} height={150} />
          <div className="text-center">
            <h3 className="text-xl font-bold text-black">{member.name}</h3>
            <p className="text-gray-700">{member.title}</p>
            <p className="text-gray-500">{member.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Bioface;