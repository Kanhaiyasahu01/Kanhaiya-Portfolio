import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../assets/portfolio-logo.png";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from react-icons

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="w-full text-white sticky top-0 z-20 h-[10vh] backdrop-blur-sm ">
      <div className="container mx-auto flex justify-between items-center py-4 px-2 gap-2 w-10/12 glow-border">
        {/* Brand Name */}
        <Link to="/" className="text-2xl font-semibold font-inter">
          <img src={logo} alt="Kanhaiya" className="h-10 w-10 rounded-md" />
        </Link>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 text-lg"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 text-lg"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 text-lg"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 text-lg"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 text-lg"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Contact Me
          </NavLink>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            className="text-white text-2xl focus:outline-none"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-[10vh] left-0 w-full bg-richblack-900 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col items-center gap-4 p-5">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-100 border-b-2 border-blue-500 pb-1 text-lg"
                  : "text-white font-thin text-lg hover:text-blue-500 transition-all"
              }
              onClick={toggleMobileMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-100 border-b-2 border-blue-500 pb-1 text-lg"
                  : "text-white font-thin text-lg hover:text-blue-500 transition-all"
              }
              onClick={toggleMobileMenu}
            >
              About
            </NavLink>
            <NavLink
              to="/skills"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-100 border-b-2 border-blue-500 pb-1 text-lg"
                  : "text-white font-thin text-lg hover:text-blue-500 transition-all"
              }
              onClick={toggleMobileMenu}
            >
              Skills
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-100 border-b-2 border-blue-500 pb-1 text-lg"
                  : "text-white font-thin text-lg hover:text-blue-500 transition-all"
              }
              onClick={toggleMobileMenu}
            >
              Projects
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive
                  ? "text-blue-500 border-b-2 border-blue-500 pb-1 text-lg"
                  : "text-white font-thin text-lg hover:text-blue-500 transition-all"
              }
              onClick={toggleMobileMenu}
            >
              Contact Me
            </NavLink>
          </div>
        </div>
      </div>

      {/* Custom CSS for Bottom-Only Glowing Border */}
      <style>
  {`
    .glow-border {
      position: relative;
      border-bottom: 2px solid #074B5D; /* Updated to cyan */
    }

    .glow-border::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: -2px; /* Aligns with the border */
      height: 2px;
      background: transparent;
      box-shadow: 0 4px 8px rgba(7, 75, 93, 0.8), 0 8px 16px rgba(7, 75, 93, 0.6);
      animation: glow 1.5s ease-in-out infinite alternate;
    }

    @keyframes glow {
      from {
        box-shadow: 0 4px 8px rgba(7, 75, 93, 0.8), 0 8px 16px rgba(7, 75, 93, 0.6);
      }
      to {
        box-shadow: 0 6px 12px rgba(7, 75, 93, 1), 0 12px 24px rgba(7, 75, 93, 0.8);
      }
    }
  `}
</style>
    </nav>
  );
};