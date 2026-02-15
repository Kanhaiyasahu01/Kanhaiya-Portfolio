import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CircularAnimation from "./Helper/CircularAnimation";

export const About = () => {
  // State for LeetCode stats
  const [leetcodeStats, setLeetcodeStats] = useState({
    rating: 1847,
    ranking: 'Knight',
    totalSolved: 400,
    easySolved: 150,
    mediumSolved: 200,
    hardSolved: 50,
    loading: true
  });

  // Fetch LeetCode stats
  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Using LeetCode API proxy (there are several available)
        const response = await fetch('https://leetcode-api-faisalshohag.vercel.app/kanhaiyasahu01');
        const data = await response.json();
        
        if (data && !data.errors) {
          setLeetcodeStats({
            rating: data.contestRating || 1847,
            ranking: data.contestRanking || 'Knight',
            totalSolved: data.totalSolved || 400,
            easySolved: data.easySolved || 150,
            mediumSolved: data.mediumSolved || 200,
            hardSolved: data.hardSolved || 50,
            loading: false
          });
        } else {
          setLeetcodeStats(prev => ({ ...prev, loading: false }));
        }
      } catch (error) {
        console.log('Using fallback LeetCode stats');
        setLeetcodeStats(prev => ({ ...prev, loading: false }));
      }
    };

    fetchLeetCodeStats();
  }, []);

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
          className="relative w-full md:w-1/2 flex justify-center mt-8 mx-2 mb-4 md:mt-10  lg:mt-4 lg:mb-0 lg:mx-0"
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
            About <span className="text-richblack-50">Me</span>
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
                        {/* Problem Solver Card with Live LeetCode Stats */}
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
                <p className="text-sm text-gray-400 mb-4">
                  Passionate about solving complex problems with data structures and algorithms, actively participating on competitive programming platforms.
                </p>
                
                {/* LeetCode Stats - Premium Design */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 border border-slate-700 overflow-hidden">
                  {/* Background Pattern */}
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-yellow-500/5"></div>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-orange-400/10 to-transparent rounded-full blur-2xl"></div>
                  
                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="relative">
                          <div className="bg-gradient-to-r from-orange-500 to-yellow-500 p-3 rounded-xl">
                            <span className="text-white text-lg font-bold">LC</span>
                          </div>
                          <div className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-slate-800"></div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white">LeetCode Profile</h4>
                          <p className="text-sm text-slate-400">Competitive Programming</p>
                        </div>
                      </div>
                      {leetcodeStats.loading && (
                        <div className="flex items-center gap-2 bg-blue-500/20 px-3 py-1 rounded-full">
                          <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                          <span className="text-xs text-blue-400">Live</span>
                        </div>
                      )}
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {/* Rating Card */}
                      <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-green-400 mb-1">
                          {leetcodeStats.rating}
                        </div>
                        <div className="text-sm text-green-300 font-medium">Contest Rating</div>
                        <div className="mt-2">
                          <span className="inline-flex items-center gap-1 bg-yellow-500/20 text-yellow-400 text-xs font-semibold px-2 py-1 rounded-full border border-yellow-500/30">
                            <span>👑</span> {leetcodeStats.ranking}
                          </span>
                        </div>
                      </div>

                      {/* Problems Card */}
                      <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-xl p-4 text-center">
                        <div className="text-3xl font-bold text-blue-400 mb-1">
                          {leetcodeStats.totalSolved}+
                        </div>
                        <div className="text-sm text-blue-300 font-medium">Problems Solved</div>
                        <div className="mt-2">
                          <span className="inline-flex items-center gap-1 bg-blue-500/20 text-blue-400 text-xs font-semibold px-2 py-1 rounded-full border border-blue-500/30">
                            <span>🎯</span> Active
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Achievement Bar */}
                    <div className="mt-4 p-3 bg-slate-700/50 rounded-lg border border-slate-600/50">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-slate-300 flex items-center gap-2">
                          <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                          Global Ranking
                        </span>
                        <span className="text-orange-400 font-semibold">Top 15%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Full Stack Developer Card */}
            <motion.div
              className="relative overflow-hidden bg-richblack-800 bg-opacity-50 border border-richblack-600 rounded-lg p-5 transition-all duration-300 hover:shadow-lg hover:border-green-400 hover:shadow-green-500/30 group"
              variants={fadeInUp}
            >
              <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-green-300 to-green-400 rotate-45 transform -translate-x-1/2 -translate-y-1/2 opacity-80"></div>
              <div className="relative z-10 text-richblack-100">
                <div className="flex flex-wrap items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-richblack-50">Full Stack Developer</h3>
                  <div className="flex flex-wrap gap-2">
                    {["MERN Stack", "React.js", "Node.js", "MongoDB", "TailwindCSS", "Express.js"].map((tag, idx) => (
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
                  I specialize in creating end-to-end web applications with modern technologies, from responsive frontends to scalable backend systems with efficient database management.
                </p>
              </div>
            </motion.div>
            
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};