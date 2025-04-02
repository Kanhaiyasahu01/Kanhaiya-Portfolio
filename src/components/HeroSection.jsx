import React from "react";
// import profileImage from "../assets/Profile.jpg";
import profileImage from "../assets/userAsset/Profile.jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";

import homebg from "../assets/home-bg.jpg"

export const HeroSection = () => {
  return (
    <section className="w-full h-[90vh] flex justify-center items-center relative">
      {/* Container */}
      <div className="flex items-center justify-between px-5 w-10/12 mx-auto pb-[5vh] ">
        {/* Left Text Section */}
        <div className="text-white max-w-xlg space-y-5">
          <p className="text-xl text-blue-300 mb-4">Welcome to my portfolio!</p>{" "}
          {/* Added margin bottom */}
          <h1 className="text-4xl font-bold mb-4">
            {" "}
            {/* Added margin bottom */}
            Hii There!{" "}
            <span
              className="wave inline-block"
              role="img"
              aria-labelledby="wave"
            >
              👋🏻
            </span>
            <br />
            I'm{" "}
            <span className="text-blue-300 text-6xl my-5">
              Kanhaiya Lal Sahu
            </span>
            .
          </h1>
          <p className="text-lg mb-4">
            {" "}
            {/* Added margin bottom */}
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500, // Wait for 1.5 seconds
                "Competitive Coder",
                1500,
                "Software Developer",
                1500,
                "Open Source Contributor",
                1500,
                "Freelancer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              className="text-4xl font-semibold" // Tailwind classes for text styling
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
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
        <style jsx>{`
          .wave {
            animation: wave 2s infinite;
            transform-origin: 70% 70%;
          }

          @keyframes wave {
            0% {
              transform: rotate(0deg);
            }
            15% {
              transform: rotate(14deg);
            }
            30% {
              transform: rotate(-8deg);
            }
            40% {
              transform: rotate(14deg);
            }
            50% {
              transform: rotate(-4deg);
            }
            60% {
              transform: rotate(10deg);
            }
            100% {
              transform: rotate(0deg);
            }
          }
        `}</style>

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
        <a
          href="https://www.linkedin.com/in/kanhaiyasahu01/"
          className="block p-3 bg-blue-600 rounded-full hover:bg-blue-100 transition"
        >
          <FaLinkedin className="text-white text-2xl" />
        </a>

        <a
          href="https://github.com/Kanhaiyasahu01"
          className="block p-3 bg-blue-600 rounded-full hover:bg-pink-500 transition"
        >
          {/* Add your Dribbble icon here */}
          <FaGithub className="text-white text-2xl" />
        </a>
        <a
          href="https://leetcode.com/u/kanhaiyasahu01/"
          className="block p-3 bg-blue-600 rounded-full hover:bg-yellow-300 transition"
        >
          {/* Add your GitHub icon here */}
          <SiLeetcode className="text-white text-2xl" />
        </a>
      </div>
    </section>
  );
};
