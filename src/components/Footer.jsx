import React from "react";
import logo from "../assets/portfolio-logo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-richblack-900 text-white py-6 px-4 md:px-12 z-10">
      {/* Horizontal Line */}
      <hr className="border-richblack-700 mb-6" />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Section - Name */}
        <div className="flex-1 flex flex-col items-start space-y-2">
          <h2 className="text-lg font-bold text-richblack-yellow flex justify-center items-center gap-2">
            <span>
              <img className="h-6 w-6" src={logo} alt="Logo" />
            </span>
            Kanhaiya Lal Sahu
          </h2>
          {/* Bottom Line */}
          <p className="text-sm text-richblack-200 italic mt-2">
            Creating the lines of code that turn ideas into reality.
          </p>
        </div>

        {/* Middle Section - Social Links */}
        <div className="flex-1 flex justify-center">
          <div className="flex space-x-4">
            <a href="https://github.com/Kanhaiyasahu01" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/kanhaiyasahu01/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-8 h-8" />
            </a>
            <a href="https://leetcode.com/u/kanhaiyasahu01/" target="_blank" rel="noopener noreferrer">
              <SiLeetcode className="w-8 h-8" />
            </a>
          </div>
        </div>

        {/* Right Section - Navigation Links */}
        <div className="flex-1 flex flex-col items-end space-y-2 text-sm">
          <Link to={'/'} className="hover:text-richblack-yellow transition">
            Home
          </Link>
          <Link to={'/about'} className="hover:text-richblack-yellow transition">
            About
          </Link>
          <Link to={'/skills'} className="hover:text-richblack-yellow transition">
            Skills
          </Link>
          <Link to={'/projects'} className="hover:text-richblack-yellow transition">
            Projects
          </Link>
          <Link to={'/contact'} className="hover:text-richblack-yellow transition">
            Contact
          </Link>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Kanhaiya Lal Sahu. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;