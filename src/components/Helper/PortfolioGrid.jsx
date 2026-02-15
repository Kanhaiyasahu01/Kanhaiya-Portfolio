import React from "react";
import Globe from "../../assets/globe.png";
import { FaLinkedin } from "react-icons/fa";
import { motion, progress } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/project/aiContentCrafter.png";
import image2 from "../../assets/project/vaayu.png";
import image3 from "../../assets/project/assetmate.png";
import image4 from "../../assets/project/studyNotion1.png";
import logo from "../../assets/portfolio-logo.png";
import bootstrap from "../../assets/stack/Bootstrap.svg";
import cssPng from "../../assets/stack/CSS.png";
import ExpressPng from "../../assets/stack/Express.png";
import gitSvg from "../../assets/stack/Git.svg";
import HTML from "../../assets/stack/HTML.png";
import Javascript from "../../assets/stack/Javascript.svg";
import MongoDB from "../../assets/stack/MongoDB.svg";
import NodeJs from "../../assets/stack/NodeJs.svg";
import ReactPng from "../../assets/stack/React.png";
import Redux from "../../assets/stack/Redux.svg";
import Tailwind from "../../assets/stack/Tailwind.png";
import Typescript from "../../assets/stack/Typescript.svg";
const PortfolioGrid = () => {
  const techStack = [
    { name: "React", image: ReactPng },
    { name: "JavaScript", image: Javascript },
    { name: "HTML", image: HTML },
    { name: "TypeScript", image: Typescript },
    { name: "MongoDB", image: MongoDB },
    { name: "Node.js", image: NodeJs },
    { name: "Express.js", image: ExpressPng },
    { name: "Redux", image: Redux },
    { name: "CSS", image: cssPng },
    { name: "Git", image: gitSvg },
    { name: "Bootstrap", image: bootstrap },
    { name: "Tailwind CSS", image: Tailwind },
  ];

  return (
    <div className="w-full min-h-screen text-white p-4 bg-richblack-900">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-10/12 mx-auto">
        {/* Collaboration Card */}
        <Link
          to={"/projects"}
          className="bg-zinc-900 bg-opacity-50 border border-zinc-700 border-opacity-50  rounded-lg p-6 relative overflow-hidden md:col-span-2 transition-all duration-300 hover:shadow-lg hover:border-richblue-400 hover:shadow-richblue-500 group "
        >
          <div className="flex mb-6">
            <div className="w-16 h-16 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-richblack-50"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-wrap justify-center mb-6">
            {[
              { img: image1, rotation: "rotate-6" },
              { img: image2, rotation: "rotate-[-6deg]" },
              { img: image3, rotation: "rotate-6" },
              { img: image4, rotation: "rotate-[-4deg]" },
            ].map((project, index) => (
              <div
                key={index}
                className={`w-32 h-32 hover:rotate-0 hover:scale-110 hover:z-10 hover:shadow-xl transition-all duration-300 ease-in-out rounded-lg overflow-hidden m-1 transform ${project.rotation} perspective-500 hover:translate-z-12 border border-white border-opacity-20 hover:border-opacity-60`}
                style={{
                  transformStyle: "preserve-3d",
                  backfaceVisibility: "hidden",
                  transform: `${project.rotation} perspective(1000px) rotateY(5deg)`,
                  transition:
                    "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                }}
              >
                <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-800 ">
                  <img
                    src={project.img}
                    alt="project"
                    loading="lazy"
                    className="w-full h-full object-cover hover:brightness-110 transition-all opacity-90"
                  />
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-xl font-medium text-richblack-50">
            Innovative Project Development
          </h3>
          <p className="text-2xl font-bold mt-2 text-richblack-50">
            Crafting impactful solutions with cutting-edge technology, solving
            real-world problems through efficient and scalable development.
          </p>

          <div className="mt-6">
            <Link
              to={"/projects"}
              className="flex items-center text-richblack-50 font-medium"
            >
              View Projects
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
            </Link>
          </div>
        </Link>

        {/* Time Zone Card */}

        <div className="bg-zinc-900 bg-opacity-50 border border-zinc-700 border-opacity-50 rounded-lg p-6 relative overflow-hidden md:row-span-2 transition-all duration-300 hover:shadow-lg hover:border-richblue-400 hover:shadow-richblue-500 group">
          <div className="h-full relative flex flex-col justify-between ">
            <div className="text-right ">
              <h2 className="text-2xl font-bold text-richblack-50">
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
                  className="bg-zinc-900 border border-zinc-700 border-opacity-50 hover:bg-zinc-800 text-richblack-100 py-3 px-6 rounded-full flex items-center justify-center mx-auto"
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
                loading="lazy"
                animate={{ rotate: 360 }}
                transition={{
                  repeat: Infinity,
                  duration: 120,
                  ease: "linear",
                }}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-richblack-50"
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
                <p className="text-lg font-bold text-richblack-50">India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Card */}
        <Link
          to={"skills"}
          className="bg-zinc-900 bg-opacity-50 border border-zinc-700 border-opacity-50 rounded-lg p-2 relative overflow-hidden flex justify-center items-center transition-all duration-300 hover:shadow-lg hover:border-richblue-400 hover:shadow-richblue-500 group"
        >
          <div className="grid grid-cols-4 gap-2 w-full ">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="flex items-center justify-center h-16"
              >
                <div className="w-8 h-8 hover:scale-125 transition-all rounded-lg flex items-center justify-center">
                  <img
                    src={tech.image}
                    alt={tech.name}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </Link>

        {/* Contact Card */}
        <div className="bg-zinc-900 bg-opacity-50 border border-zinc-700 border-opacity-50 rounded-lg p-6 relative overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:border-richblue-400 hover:shadow-richblue-500 group">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <svg
                viewBox="0 0 100 30"
                className="absolute w-32 h-12 top-0 left-1/2 transform -translate-x-1/2"
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
              <div className="w-12 h-12 rounded-full bg-blue-800 flex items-center justify-center border-4 border-gray-800 z-10 relative">
                <span className="text-2xl font-bold ">
                  <img src={logo} alt="KS" />
                </span>
              </div>
            </div>
          </div>
          <div className="text-center flex flex-col items-center">
            <h2 className="text-3xl font-bold text-richblack-50">
              Let's work together
            </h2>
            <p className="text-2xl text-richblack-100 flex items-center gap-2">
              Connect me on
              <a
                href="https://www.linkedin.com/in/kanhaiyasahu01/"
                target="_blank"
                className="text-blue-400 hover:underline flex items-center"
              >
                <FaLinkedin className="ml-1" />
              </a>
            </p>

            <div className="mt-8">
              <a
                href="mailto:kanhaiyasahutools@gmail.com"
                className="  bg-zinc-900 border border-zinc-700 border-opacity-50 hover:bg-zinc-800 text-richblack-100 p-1 md:py-3 md:px-6 rounded-full flex items-center justify-center mx-auto break-all"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:h-10 md:w-10 lg:h-7 lg:w-7 mr-2"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                kanhaiyasahutools@gmail.com
              </a>
            </div>
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
