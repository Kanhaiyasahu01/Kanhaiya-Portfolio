import React from "react";
import CircularAnimation from "./Helper/CircularAnimation";

export const About = () => {
  return (
    <div className="text-white w-full h-full flex justify-center items-center">
      <div className="w-10/12 flex flex-col lg:flex-row gap-8 items-center">
        {/* Left: Animated Circular Images */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <CircularAnimation />
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 blur-[100px] opacity-40"></div>
        </div>

        {/* Right: Heading and Description */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-6">
            About <span className="text-white">Me</span>
          </h2>

          <p className="text-lg text-gray-400 mb-6 leading-relaxed">
            I'm <span className="text-blue-200 font-bold">Kanhaiya Lal Sahu</span>, a passionate software developer currently pursuing my B.Tech in Information Technology at <span className="text-blue-200 font-bold">Government Engineering College, Bilaspur</span> (Graduating in 2026). My focus is on continuous learning and innovation, building scalable and efficient solutions.
          </p>

          <div className="space-y-4">
            {/* Flashlight Hover Effect */}
            {[
              { title: "Frontend Developer (React.js)", bg: "blue", desc: "I specialize in creating responsive, visually appealing, and optimized web applications using modern technologies." },
              { title: "Backend Developer (Node.js, Express.js, MongoDB)", bg: "purple", desc: "Experienced in building scalable backend systems with efficient database management and API development." },
              { title: "Problem Solver", bg: "green", desc: "Enjoy solving problems with data structures and algorithms, actively on LeetCode, Codeforces, CodeChef, etc." }
            ].map((item, index) => (
              <div
                key={index}
                className={`relative group bg-richblack-800 p-4 rounded-lg shadow-md transition duration-300 transform hover:scale-105`}
              >
                {/* Flashlight Effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-300`}
                  style={{
                    background: `radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 60%)`,
                  }}
                ></div>

                <h3 className="text-xl font-semibold text-blue-100">{item.title}</h3>
                <p className="text-richblack-100">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
