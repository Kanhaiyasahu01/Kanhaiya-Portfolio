import React, { useEffect, useState } from "react";
// import profileImage from "../assets/Profile.jpg";
import profileImage from "../assets/userAsset/Profile (1).jpg";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";

export const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Set visibility after a short delay to trigger animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="w-full h-[90vh] flex justify-center items-center relative mt-8 sm:mt-4 md:mt-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden -z-5">
        {/* Large blue gradient circle/blob */}
        <div
          className={`absolute top-16 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/20 blur-3xl transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Smaller purple-blue gradient blob */}
        <div
          className={`absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-richblue-600/20 to-blue-400/10 blur-3xl transition-opacity duration-1000 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>

        {/* Medium size blue gradient in center-right */}
        <div
          className={`absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-blue-300/20 to-indigo-500/10 blur-3xl transition-opacity duration-1000 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        ></div>
      </div>
      {/* Container */}
      <div className="flex flex-col md:flex-row items-center justify-between sm:px-2 w-10/12 mx-auto pb-[5vh] gap-6 sm:gap-8">
        {/* Left Text Section */}
        <div
          className={`text-white text-center md:text-left space-y-4 sm:space-y-5 transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <p className="text-sm sm:text-base md:text-lg text-blue-300 mb-2 sm:mb-3 md:mb-4">
            Welcome to my portfolio!
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3 md:mb-4">
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
            <span className="text-blue-300 text-2xl sm:text-3xl md:text-4xl lg:text-6xl my-1 sm:my-2 md:my-5">
              Kanhaiya Lal Sahu
            </span>
            .
          </h1>
          <p className="text-sm sm:text-base md:text-lg mb-2 sm:mb-3 md:mb-4">
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1500,
                "Competitive Coder",
                1500,
                "Software Developer",
                1500,
                "Freelancer",
                1500,
              ]}
              wrapper="span"
              speed={50}
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold"
              style={{ display: "inline-block" }}
              repeat={Infinity}
            />
          </p>
          <div className="flex items-center text-richblack-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12 2a7 7 0 00-7 7c0 5.25 7 11 7 11s7-5.75 7-11a7 7 0 00-7-7zm0 9a2 2 0 110-4 2 2 0 010 4z"
                clipRule="evenodd"
              />
            </svg>
            Chhattisgarh, India
          </div>
          <div className="space-x-2 sm:space-x-3 md:space-x-4 mt-3 sm:mt-4 md:mt-5 flex justify-center md:justify-start">
            <Link
              to={"/projects"}
              className="border z-10 border-blue-500 text-white px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 rounded-lg shadow-lg hover:bg-blue-500 hover:text-white transition-all text-xs sm:text-sm md:text-base"
            >
              See my work
            </Link>
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
        <div
          className={`relative flex-shrink-0 mt-6 sm:mt-8 md:mt-0 transition-all duration-1000 delay-300 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <div className="rounded-full border-4 border-blue-500 shadow-lg overflow-hidden animate-3d-bounce">
            <img
              src={profileImage}
              alt="Profile"
              loading="lazy"
              className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 object-cover"
            />
          </div>
          {/* Floating 3D-like Element */}
          <div
            className={`absolute top-4 sm:top-6 md:top-10 -left-4 sm:-left-6 md:-left-10 w-10 sm:w-12 md:w-16 h-10 sm:h-12 md:h-16 bg-blue-500 rounded-full animate-bounce shadow-lg transition-opacity duration-1000 delay-700 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          ></div>
        </div>
      </div>

      {/* Social Media Icons */}
      <div
        className={`absolute top-1/2 right-2 sm:right-4 md:right-10 transform -translate-y-1/2 space-y-2 sm:space-y-3 md:space-y-4 text-white hidden sm:flex flex-col transition-all duration-1000 delay-500 ${
          isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
        }`}
      >
        <a
          href="https://www.linkedin.com/in/kanhaiyasahu01/"
          target="_blank"
          className="block p-1.5 sm:p-2 md:p-3 bg-blue-600 rounded-full hover:bg-blue-100 transition"
        >
          <FaLinkedin className="text-white text-lg sm:text-xl md:text-2xl" />
        </a>
        <a
          href="https://github.com/Kanhaiyasahu01"
          target="_blank"
          className="block p-1.5 sm:p-2 md:p-3 bg-blue-600 rounded-full hover:bg-pink-500 transition"
        >
          <FaGithub className="text-white text-lg sm:text-xl md:text-2xl" />
        </a>
        <a
          href="https://leetcode.com/u/kanhaiyasahu01/"
          target="_blank"
          className="block p-1.5 sm:p-2 md:p-3 bg-blue-600 rounded-full hover:bg-hoverColour-500 transition"
        >
          <SiLeetcode className="text-white text-lg sm:text-xl md:text-2xl" />
        </a>
      </div>
    </section>
  );
};
