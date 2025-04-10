import React from "react";
import { motion } from "framer-motion";
import CircularAnimation from "./Helper/CircularAnimation";

export const About = () => {
  // Animation variants for different sections
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
  };

  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <div className="text-white w-full h-full flex justify-center items-center my-5 relative">
      <div className="absolute inset-0 overflow-hidden -z-5">
        {/* Large blue gradient circle/blob */}
        <div className="absolute top-16 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/20 blur-3xl"></div>
        
        {/* Smaller purple-blue gradient blob */}
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-richblue-600/20 to-blue-400/10 blur-3xl"></div>
        
        {/* Medium size blue gradient in center-right */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-blue-300/20 to-indigo-500/10 blur-3xl"></div>
      </div>
      <motion.div
        className="w-10/12 flex flex-col lg:flex-row gap-8 items-center"
        initial="initial"
        animate="animate"
        variants={staggerChildren}
      >
        {/* Left: Animated Circular Images */}
        <motion.div
          className="relative w-full md:w-1/2 flex justify-center"
          variants={fadeInUp}
        >
          <CircularAnimation />
        </motion.div>
        
        {/* Right: Heading and Description */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left mt-2 md:mt-0"
          variants={fadeInUp}
        >
          <motion.h2
            className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2"
            variants={fadeInUp}
          >
            About <span className="text-white">Me</span>
          </motion.h2>
          <motion.p
            className="text-richblack-50 mb-6 leading-relaxed"
            variants={fadeInUp}
          >
            I'm <span className="text-blue-200 font-bold">Kanhaiya Lal Sahu</span>, a passionate software developer currently pursuing my B.Tech in Information Technology at <span className="text-blue-200 font-bold">Government Engineering College, Bilaspur</span> (Graduating in 2026). My focus is on continuous learning and innovation, building scalable and efficient solutions.
          </motion.p>
          <motion.div
            className="space-y-4"
            variants={staggerChildren}
          >
            {/* Frontend Developer Card */}
            <motion.div
              className="relative overflow-hidden bg-richblack-800 bg-opacity-50 border border-richblack-600 rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:shadow-green-500/30 group"
              variants={fadeInUp}
            >
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rotate-45 transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
              <div className="relative z-10 text-richblack-100">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-richblack-50">Frontend Developer</h3>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "TailwindCSS", "HTML5", "CSS3"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-richblack-600 bg-opacity-50 border border-richblack-500 border-opacity-50 text-richblack-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  I specialize in creating responsive, visually appealing, and optimized web applications using modern technologies.
                </p>
              </div>
            </motion.div>
            {/* Backend Developer Card */}
            <motion.div
              className="relative overflow-hidden bg-richblack-800 bg-opacity-50 border border-richblack-600 rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:shadow-green-500/30 group"
              variants={fadeInUp}
            >
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rotate-45 transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
              <div className="relative z-10 text-richblack-100">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-richblack-50">Backend Developer</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Express.js", "MongoDB", "REST API"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-richblack-600 bg-opacity-50 border border-richblack-500 border-opacity-50 text-richblack-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Experienced in building scalable backend systems with efficient database management and API development.
                </p>
              </div>
            </motion.div>
            {/* Problem Solver Card */}
            <motion.div
              className="relative overflow-hidden bg-richblack-800 bg-opacity-50 border border-richblack-600 rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:shadow-green-500/30 group"
              variants={fadeInUp}
            >
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rotate-45 transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
              <div className="relative z-10 text-richblack-100">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-richblack-50">Problem Solver</h3>
                  <div className="flex flex-wrap gap-2">
                    {["DSA", "LeetCode", "Codeforces", "CodeChef"].map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium px-2 py-1 rounded-full bg-richblack-600 bg-opacity-50 border border-richblack-500 border-opacity-50 text-richblack-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-400">
                  Enjoy solving problems with data structures and algorithms, actively participating on competitive programming platforms.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};