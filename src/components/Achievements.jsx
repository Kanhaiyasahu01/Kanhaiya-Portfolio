import React from 'react';
import { motion } from 'framer-motion';

export const Achievements = () => {
  const achievements = [
    "1st Position in Hackovation 2024 (Inter-college hackathon)",
    "Secured 2nd Position in IEEE ICECCT 'Wait Now' 2024 project competition",
    "2nd position in Inter-College Coding Contest (Clash of Code)",
    "LeetCode Rating: 1820 (Ranked in the top 8% of users)",
    "Global Rank 792 in LeetCode Weekly 399 Contest",
    "Global Rank 689 at CodeChef Starters 133 among 40,000+ participants",
    "2 Star coder and 1500+ rated on Codechef",
    "5 Star rated in C++ at Hackerrank"
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="bg-white text-richblack-900 py-16 px-8 sm:px-16 lg:px-32">
      <h2 className="text-4xl font-bold text-yellow-500 mb-10 text-center">
        Achievements
      </h2>

      <motion.div 
        initial="hidden" 
        animate="visible" 
        className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8"
      >
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={animationVariants}
            className="p-6 border border-gray-300 rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300"
          >
            <p className="text-lg text-gray-700">
              {achievement}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Links */}
      <div className="mt-12 text-center">
        <a
          href="https://leetcode.com/profile" // LeetCode Profile link
          className="text-blue-500 hover:text-blue-700 mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          LeetCode Profile
        </a>
        <a
          href="https://codechef.com/profile" // CodeChef Profile link
          className="text-blue-500 hover:text-blue-700 mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          CodeChef Profile
        </a>
        <a
          href="https://hackerrank.com/profile" // Hackerrank Profile link
          className="text-blue-500 hover:text-blue-700 mx-2"
          target="_blank"
          rel="noopener noreferrer"
        >
          Hackerrank Profile
        </a>
      </div>
    </div>
  );
};
