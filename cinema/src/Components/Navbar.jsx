import React from 'react';
import Logo from '../assets/movielogo.jpg';
import { Link } from 'react-router-dom';

function Navbar({ watchlistCount }) {
  return (
    <div className="flex border items-center pl-4 space-x-6 md:space-x-8 relative">
      {/* Logo */}
      <img
        className="w-[80px] h-[60px] md:w-[100px] md:h-[80px]"
        src={Logo}
        alt="Logo"
      />

      {/* Home Link */}
      <Link
        to="/"
        className="text-blue-500 text-lg md:text-2xl font-semibold hover:text-blue-700 transition"
      >
        Home
      </Link>

      {/* Watchlist Link + Badge */}
      <div className="relative">
        <Link
          to="/watchlist"
          className="text-blue-500 text-lg md:text-2xl font-semibold hover:text-blue-700 transition"
        >
          Watchlist
        </Link>

        {watchlistCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-yellow-400 text-black text-xs font-bold rounded-full px-2 py-[2px] shadow-md">
            {watchlistCount}
          </span>
        )}
      </div>
    </div>
  );
}

export default Navbar;
