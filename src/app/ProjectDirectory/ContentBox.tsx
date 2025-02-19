import React from 'react';
import Top from './top';
import ProjectGrid from './projectBox';

const ContentBox: React.FC = () => {
  return (
    <div className="bg-red-500 py-8 px-4 rounded-lg shadow-lg w-full max-w-6xl my-8">
      <Top />
      <ProjectGrid />
    </div>
  );
};

export default ContentBox;