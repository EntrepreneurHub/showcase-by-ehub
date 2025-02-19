import React from 'react';

const ContentBox: React.FC<{ title: string; description: string }> = ({ title, description }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <h2 className="text-2xl font-bold text-black mb-4">{title}</h2>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default ContentBox; 