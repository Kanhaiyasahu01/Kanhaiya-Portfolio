import React from "react";
import Globe from "../../assets/globe.png";
import { motion, progress } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/project/studyNotion1.png"
import image2 from "../../assets/project/studyNotion1.png"
import image3 from "../../assets/project/studyNotion1.png"
import image4 from "../../assets/project/studyNotion1.png"
import { image } from "framer-motion/client";
const PortfolioGrid = () => {
  return (
    <div className="w-full min-h-screen text-white p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12 mx-auto">
        {/* Collaboration Card */}
        <div className="bg-zinc-900 rounded-lg p-6 relative overflow-hidden md:col-span-2">
          <div className="flex mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <div className="flex flex-wrap mb-4">
            {[image1, image2, image3, image4].map(
              (projectImg, index) => (
                <div
                  key={index}
                  className="w-32 h-32 rounded-lg overflow-hidden m-1 transform rotate-3"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800">
                    <img src={projectImg} alt="project" className="w-full h-full"/>
                  </div>
                </div>
              )
            )}
          </div>
          </div>
  
          <h3 className="text-xl font-medium">Collaboration</h3>
          <p className="text-2xl font-bold mt-2">
            I prioritize client collaboration, fostering open communication
          </p>
          <div className="mt-6">
            <button className="flex items-center text-white font-medium">
              Book a call
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Time Zone Card */}

        <div className="bg-zinc-900 rounded-lg p-6 relative overflow-hidden md:row-span-2">
          <div className="h-full relative flex flex-col justify-between ">
            <div className="text-right ">
              <h2 className="text-2xl font-bold">
                I'm very flexible with time
              </h2>
              <p className="text-blue-400 text-2xl font-bold items-end">
                zone communications
              </p>
            </div>

            <div className="w-full flex flex-row-reverse ">
              <div className="items-end">
                <Link
                  to={"/contact"}
                  className="bg-richblack-100 bg-opacity-20 border hover:bg-zinc-700 text-white py-3 px-6 rounded-full flex items-center justify-center mx-auto"
                >
                  Contact Me
                  <span className="ml-2">
                    {" "}
                    <FaArrowRight />
                  </span>
                </Link>
              </div>
            </div>

            <div className="mt-4 relative">
              <motion.img
                src={Globe}
                alt="globe"
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 120, ease: "linear" }}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-lg font-bold">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <div className="bg-zinc-900 rounded-lg p-6 relative overflow-hidden">
          <div className="grid grid-cols-4 gap-4">
            {[
              { name: "react", icon: "⚛️" },
              { name: "js", icon: "JS" },
              { name: "html", icon: "5" },
              { name: "typescript", icon: "TS" },
              { name: "aws", icon: "λ" },
              { name: "android", icon: "🤖" },
              { name: "github", icon: "🐙" },
              { name: "next", icon: "N" },
              { name: "node", icon: "🟢" },
              { name: "flutter", icon: "↗️" },
              { name: "css", icon: "🎨" },
              { name: "firebase", icon: "🔥" },
            ].map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16"
              >
                <div
                  className={`w-10 h-10 rounded-lg flex items-center justify-center text-${getTechColor(
                    tech.name
                  )}-500 font-bold text-lg`}
                >
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <div className="bg-zinc-900 rounded-lg p-6 relative overflow-hidden flex flex-col justify-between">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg
                viewBox="0 0 100 30"
                className="absolute w-32 h-12 top-6 left-1/2 transform -translate-x-1/2"
              >
                <path
                  d="M 0,15 Q 50,-15 100,15"
                  fill="none"
                  stroke="#1E40AF"
                  strokeWidth="2"
                />
                <path
                  d="M 0,15 Q 50,45 100,15"
                  fill="none"
                  stroke="#1E40AF"
                  strokeWidth="2"
                />
              </svg>
              <div className="w-20 h-20 rounded-full bg-blue-800 flex items-center justify-center border-4 border-gray-800 z-10 relative">
                <span className="text-2xl font-bold">AB</span>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold">Let's work together</h2>
            <p className="text-2xl text-gray-400 mt-2">on your next project</p>
            <div className="mt-8">
              <button className="bg-zinc-800 hover:bg-zinc-700 text-white py-3 px-6 rounded-full flex items-center justify-center mx-auto">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                hello@aayushbharti.in
              </button>
            </div>
          </div>
        </div>

        {/* The Inside Scoop Card (5th card) */}
        <div className="bg-zinc-900 rounded-lg p-6 relative overflow-hidden md:col-span-3">
          <div className="flex items-center mb-6">
            <div className="w-12 h-12 mr-4 flex items-center justify-center bg-zinc-800 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <path d="M4 12h16" />
              </svg>
            </div>
            <h3 className="text-lg font-medium">The Inside Scoop</h3>
          </div>
          <h2 className="text-2xl font-bold">
            Currently building a Saas Application
          </h2>

          <div className="grid grid-cols-6 gap-4 mt-8">
            {[
              {
                title: "Analytics Dashboard",
                desc: "Provides real-time insights into user behavior",
              },
              {
                title: "Brand Identity",
                desc: "Unified design assets, including logos and themes",
              },
              {
                title: "API Documentation",
                desc: "Guides developers to integrate with the service",
              },
              {
                title: "User Onboarding",
                desc: "Step-by-step guides and tutorials",
              },
              {
                title: "Subscription Management",
                desc: "Handles recurring payments",
              },
              {
                title: "Additional Feature",
                desc: "Description of another feature",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-zinc-800 rounded-lg p-4 col-span-2 flex flex-col gap-1"
              >
                <h4 className="font-medium">{feature.title}</h4>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// Helper function for tech stack icon colors
const getTechColor = (tech) => {
  const colorMap = {
    react: "blue",
    js: "yellow",
    html: "red",
    typescript: "blue",
    aws: "yellow",
    android: "green",
    github: "purple",
    next: "indigo",
    node: "green",
    flutter: "blue",
    css: "indigo",
    firebase: "red",
  };

  return colorMap[tech] || "gray";
};

export default PortfolioGrid;
