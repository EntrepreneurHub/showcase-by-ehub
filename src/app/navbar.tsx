import React from 'react';
import Link from 'next/link';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbarTitle">Entrepreneur Hub</div>
      <div className="navbarLinks">
        <Link href="/">Home</Link>
        <Link href="/">See Our Projects</Link>
        <Link href="/">Login In</Link>
        <Link href="/">Sign Up</Link>     
         </div>
    </nav>
  );
};

export default Navbar;