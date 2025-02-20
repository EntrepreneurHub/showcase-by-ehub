'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth/AuthContext';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="flex flex-col md:flex-row justify-between items-center bg-[#D9D9D9] p-4">
      <div className="text-black text-2xl md:mr-8 mb-4 md:mb-0">
        <Link href="/">Entrepreneur Hub</Link>
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-4">
        <Link href="/" className="text-black hover:text-gray-600">
          Home
        </Link>
        <Link href="/showcase/project-directory" className="text-black hover:text-gray-600">
          See Our Projects
        </Link>
        {user ? (
          <>
            <Link href="/dashboard" className="text-black hover:text-gray-600">
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="text-black hover:text-gray-600 bg-transparent border-none cursor-pointer"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link href="/login" className="text-black hover:text-gray-600">
              Login
            </Link>
            <Link href="/register" className="text-black hover:text-gray-600">
              Register
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;