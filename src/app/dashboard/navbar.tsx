// components/Navbar.tsx
'use client';

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="container mx-auto px-4 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="text-xl font-bold">
          <a href="/">My Dashboard</a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="sm:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="h-6 w-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <div
          className={`sm:flex sm:items-center ${
            isOpen ? 'block' : 'hidden'
          } w-full sm:w-auto`}
        >
          <ul className="flex flex-col sm:flex-row sm:space-x-6 mt-4 sm:mt-0">
            <li>
              <a href="/" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </a>
            </li>
            <li>
              <a href="/profile" className="hover:text-gray-400">
                Profile
              </a>
            </li>
            <li>
              <a href="/settings" className="hover:text-gray-400">
                Settings
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
