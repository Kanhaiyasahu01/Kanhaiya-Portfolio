import React from "react";
import CircularAnimation from "./Helper/CircularAnimation";

export const About = () => {
  return (
    <div className="text-white w-full h-full flex justify-center items-cente mb-5">
      <div className="w-10/12 flex flex-col lg:flex-row gap-8 items-center">
        {/* Left: Animated Circular Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">

          <CircularAnimation />
        </div>
        
        {/* Right: Heading and Description */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-2">
            About <span className="text-white">Me</span>
          </h2>
          <p className="text-richblack-50 mb-6 leading-relaxed">
            I'm <span className="text-blue-200 font-bold">Kanhaiya Lal Sahu</span>, a passionate software developer currently pursuing my B.Tech in Information Technology at <span className="text-blue-200 font-bold">Government Engineering College, Bilaspur</span> (Graduating in 2026). My focus is on continuous learning and innovation, building scalable and efficient solutions.
          </p>
          <div className="space-y-6">
            {/* Frontend Developer Card */}
            <div className="relative overflow-hidden bg-richblack-800 bg-opacity-50 border border-richblack-600 rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:shadow-green-500/30 group">
              {/* Red highlight corner */}
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rotate-45 transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
              
              {/* Content */}
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
            </div>
            {/* Backend Developer Card */}
            <div className="relative overflow-hidden bg-richblack-800 bg-opacity-50 border border-richblack-600 rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:shadow-green-500/30 group">
              {/* Blue highlight corner */}
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rotate-45 transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
              
              {/* Content */}
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
            </div>
            {/* Problem Solver Card */}
            <div className="relative overflow-hidden bg-richblack-800 bg-opacity-50 border border-richblack-600 rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:shadow-green-500/30 group">
              {/* Green highlight corner */}
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rotate-45 transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
              
              {/* Content */}
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};