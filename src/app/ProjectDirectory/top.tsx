import React from 'react';
import Link from 'next/link';

const Top: React.FC = () => {
  return (
    <div className="text-center mb-8">
      <h1 className="text-3xl font-bold text-white mb-4">Project Directory</h1>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
        <input
          type="text"
          placeholder="Search..."
          className="p-2 rounded border border-gray-300"
        />
        <Link href="/SignIn" legacyBehavior>
          <a className="bg-red-700 text-white px-4 py-2 rounded hover:bg-red-800 transition-colors">
            Click to create a project
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Top;