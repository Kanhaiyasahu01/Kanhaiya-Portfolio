import React from "react";

const Footer = () => {
  return (
    <div className="bg-richblack-900 text-white py-6 px-4 md:px-12">
      {/* Horizontal Line */}
      <hr className="border-richblack-700 mb-6" />

      {/* Footer Content */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Left Section - Name & Social Icons */}
        <div className="flex flex-col items-start space-y-2">
          <h2 className="text-lg font-bold text-richblack-yellow">Your Name</h2>
          {/* Social Links */}
          <div className="flex space-x-4">
            <a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-github text-xl hover:text-richblack-yellow transition"></i>
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin text-xl hover:text-richblack-yellow transition"></i>
            </a>
            <a href="https://twitter.com/yourprofile" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter text-xl hover:text-richblack-yellow transition"></i>
            </a>
          </div>
        </div>

        {/* Right Section - Navigation Links or Other Information */}
        <div className="flex flex-col items-end space-y-2 text-sm">
          <a href="/" className="hover:text-richblack-yellow transition">Home</a>
          <a href="/about" className="hover:text-richblack-yellow transition">About</a>
          <a href="/projects" className="hover:text-richblack-yellow transition">Projects</a>
          <a href="/contact" className="hover:text-richblack-yellow transition">Contact</a>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center text-gray-500 text-xs mt-6">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
