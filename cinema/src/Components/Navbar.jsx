import React from 'react';
import Logo from '../assets/movielogo.jpg';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="flex border items-center pl-4   space-x-6 md:space-x-8">
      {/* Logo */}
      <img className="w-[80px] h-[60px] md:w-[100px] md:h-[80px]" src={Logo} alt="Logo" />

      {/* Navigation Links */}
      <Link
        to="/"
        className="text-blue-500 text-lg md:text-2xl font-semibold hover:text-blue-700 transition"
      >
        Home
      </Link>
      <Link
        to="/watchlist"
        className="text-blue-500 text-lg md:text-2xl font-semibold hover:text-blue-700 transition"
      >
        Watchlist
      </Link>
    </div>
  );
}

export default Navbar;
