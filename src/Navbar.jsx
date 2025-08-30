import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-slate-900 py-4 px-8 relative">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-2xl font-bold tracking-wide">
          GiftStore
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex space-x-8 text-white text-lg">
          <li className="hover:text-yellow-400 transition rounded px-2 cursor-pointer">
            Home
          </li>
          <li className="hover:text-green-400 transition rounded px-2 cursor-pointer">
            Gift Cards
          </li>
          <li className="hover:text-blue-400 transition rounded px-2 cursor-pointer">
            Deals
          </li>
          <li className="hover:text-pink-400 transition rounded px-2 cursor-pointer">
            Contact
          </li>
        </ul>

        {/* Desktop Buy Now */}
        <button className="hidden md:block bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(255,255,0,0.7)] transition">
          Buy Now
        </button>

        {/* Hamburger Menu - Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden flex flex-col items-center w-full bg-slate-900 py-4 space-y-4 absolute top-full left-0 z-20 shadow-md">
          <li className="text-white hover:text-yellow-400 px-2 cursor-pointer transition">
            Home
          </li>
          <li className="text-white hover:text-green-400 px-2 cursor-pointer transition">
            Gift Cards
          </li>
          <li className="text-white hover:text-blue-400 px-2 cursor-pointer transition">
            Deals
          </li>
          <li className="text-white hover:text-pink-400 px-2 cursor-pointer transition">
            Contact
          </li>
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(255,255,0,0.7)] transition">
            Buy Now
          </button>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
