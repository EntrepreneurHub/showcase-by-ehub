'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth/AuthContext';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const { login } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-blue-400 to-blue-700">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[360px] animate-fadeIn">
        <h2 className="text-3xl text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="email" className="mb-2 text-gray-600 font-bold">Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="px-3 py-2 mb-4 border border-gray-300 rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
          <label htmlFor="password" className="mb-2 text-gray-600 font-bold">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="px-3 py-2 mb-4 border border-gray-300 rounded focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all"
          />
          <div className="flex justify-between items-center mb-4 text-sm">
            <label htmlFor="remember" className="flex items-center cursor-pointer">
              <input
                id="remember"
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                className="mr-2"
              />
              Remember me
            </label>
            <a href="#" className="text-blue-500 hover:underline">Forgot Password?</a>
          </div>
          <button 
            type="submit"
            className="py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center text-gray-600 text-sm">
          <p>
            Don&apos;t have an account? <a href="#" className="text-blue-500 hover:underline">Sign Up</a>
          </p>
          <Link 
            href="/showcase"
            className="inline-block mt-4 px-6 py-2 bg-white text-black rounded hover:bg-gray-100 transition-colors"
          >
            Go back home
          </Link>
        </div>
      </div>
    </div>
  );
} 