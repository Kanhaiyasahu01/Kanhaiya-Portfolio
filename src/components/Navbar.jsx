import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import logo from "../assets/portfolio-logo.png"
export const Navbar = () => {
  return (
    <nav className="w-full text-white sticky top-0 z-10 h-[10vh] backdrop-blur-sm">
      <div className="container mx-auto flex justify-between items-center p-5 gap-2 w-10/12">
        {/* Brand Name */}
        <Link to={'/'} className="text-2xl font-semibold font-inter ">
        <img src={logo} alt="Kanhaiya" className="h-10 w-10 rounded-md"/>
        </Link>

        {/* Navigation Links */}
        <div className="flex gap-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 border-b-2 border-blue-500 pb-1 text-lg "
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 border-b-2 border-blue-500 pb-1 text-lg "
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            About
          </NavLink>
          {/* <NavLink
            to="/achievements"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 border-b-2 border-blue-500 pb-1 text-lg "
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Achievements
          </NavLink> */}
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 border-b-2 border-blue-500 pb-1 text-lg "
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive
                ? "text-blue-100 border-b-2 border-blue-500 pb-1 text-lg "
                : "text-white font-thin text-lg hover:text-blue-500 transition-all"
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-blue-500 border-b-2 border-blue-500 pb-1 text-lg "
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
