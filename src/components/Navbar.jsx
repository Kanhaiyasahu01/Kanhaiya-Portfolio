import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="w-full text-white sticky top-0 z-10 h-[10vh] bg-richblack-900 shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-5 gap-2 w-10/12">
        {/* Brand Name */}
        <div className="text-2xl font-semibold font-inter">
          Kanhaiya
        </div>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1 text-lg font-semibold"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1 text-lg font-semibold"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            About
          </NavLink>
          <NavLink
            to="/achievements"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1 text-lg font-semibold"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Achievements
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1 text-lg font-semibold"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1 text-lg font-semibold"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1 text-lg font-semibold"
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Contact Me
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
