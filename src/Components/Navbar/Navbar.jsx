import React, { useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import { Link, NavLink } from "react-router";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="container mx-auto">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <h2 className="text-2xl font-bold">
            Deal<span className="text-primary">Craft</span>
          </h2>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-6 font-medium ">
            <li className="hover:text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">All Products</li>
            <li className="hover:text-primary cursor-pointer">My Products</li>
            <li className="hover:text-primary cursor-pointer">My Bids</li>
            <li className="hover:text-primary cursor-pointer">
              Create Product
            </li>
          </ul>

          {/* Profile & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary">
              {/* <img
                src="https://i.ibb.co/CBSQShL/profile.jpg"
                alt="user"
                className="w-full h-full object-cover"
              /> */}
            </div>
            <Link to="/register" className="btn my-btn text-white">
              Register
            </Link>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl text-primary"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="md:hidden flex flex-col gap-3 px-4 pb-4 font-medium bg-white border-t border-gray-100">
            <li className="text-primary cursor-pointer">Home</li>
            <li className="hover:text-primary cursor-pointer">All Products</li>
            <li className="hover:text-primary cursor-pointer">My Products</li>
            <li className="hover:text-primary cursor-pointer">My Bids</li>
            <li className="hover:text-primary cursor-pointer">
              Create Product
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
