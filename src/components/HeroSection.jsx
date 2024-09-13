import React from 'react';
import profileImage from "../assets/Profile.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
// import blogImg from "../assets/userAsset/blobvector.png"
import circleImg from "../assets/userAsset/circle.png"
import cubeImg from "../assets/userAsset/cube.png"
import plusImg from "../assets/userAsset/plus.png"
import zigzagImg from "../assets/userAsset/zigzags.png"
// import { TypeAnimation } from 'react-type-animation';

export const HeroSection = () => {
  return (
    <section className="w-full h-[90vh] flex justify-center items-center bg-gradient-to-b from-richblack-900 to-blue-800 relative">
      {/* Container */}
      <div className="flex items-center justify-between px-5 w-10/12 mx-auto pb-[5vh] ">
        {/* Left Text Section */}
        <div className="text-white max-w-xlg space-y-5 ">
          <p className="text-xl text-blue-300">Welcome to my portfolio!</p>
          <h1 className="text-6xl font-bold">
            Hello, my <br />
            name is <br /> <span className="text-blue-500">Kanhaiya Lal Sahu</span>.
          </h1>
          <p className="text-lg">
            I’m a Full Stack Developer and Backend Engineer passionate about creating innovative solutions.
          </p>
          <div className="space-x-4 mt-5">
            <button className="bg-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all">
              Download CV
            </button>
            <button className="border border-blue-500 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all">
              See my work
            </button>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="relative flex-shrink-0">
            <div className="rounded-full border-4 border-blue-500 shadow-lg overflow-hidden animate-3d-bounce">
              <img
                src={profileImage}
                alt="Profile"
                className="w-80 h-80 object-cover"
              />
            </div>

            {/* Floating 3D-like Element */}
            <div className="absolute top-10 -left-10 w-16 h-16 bg-blue-500 rounded-full animate-bounce shadow-lg"></div>
          </div>
      </div>

      {/* Social Media Icons */}
      <div className="absolute top-1/2 right-10 transform -translate-y-1/2 space-y-4 text-white">
      <a href="https://www.linkedin.com/in/kanhaiyasahu01/" className="block p-3 bg-blue-600 rounded-full hover:bg-blue-100 transition">
          <FaLinkedin className="text-white text-2xl" /> 
      </a>
      
        <a href="https://github.com/Kanhaiyasahu01" className="block p-3 bg-blue-600 rounded-full hover:bg-pink-500 transition">
          {/* Add your Dribbble icon here */}
          <FaGithub className="text-white text-2xl"/>
        </a>
        <a href="https://leetcode.com/u/kanhaiyasahu01/" className="block p-3 bg-blue-600 rounded-full hover:bg-yellow-300 transition">
          {/* Add your GitHub icon here */}
          <SiLeetcode className="text-white text-2xl"/>
        </a>
      </div>

    
    </section>
  );
};
