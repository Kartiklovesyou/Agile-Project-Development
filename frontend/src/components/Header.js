import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-yellow-400 hover:text-yellow-300">
          TMS
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6">
          <Link
            to="/"
            className="text-lg font-medium text-gray-200 hover:text-yellow-300 transition"
          >
            Home
          </Link>
          <Link
            to="/dashboard"
            className="text-lg font-medium text-gray-200 hover:text-yellow-300 transition"
          >
            Dashboard
          </Link>
          <Link
            to="/login"
            className="text-lg font-medium text-gray-200 hover:text-yellow-300 transition"
          >
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
