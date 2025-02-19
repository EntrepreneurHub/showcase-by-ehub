import React from 'react';
import Link from 'next/link';
import './navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbarTitle">Entrepreneur Hub</div>
      <div className="navbarLinks">
        <Link href="/">Home</Link>
        <Link href="/ProjectDirectory">See Our Projects</Link>
        <Link href="/SignIn">Login In</Link>
         </div>
    </nav>
  );
};

export default Navbar;