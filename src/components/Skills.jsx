import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import techstackImg from "../assets/techstack (2).png"

import C from "../assets/stack/c.png"
import Cpp from "../assets/stack/cpp.png"
import DSA from "../assets/stack/DSA.png"
import cssPng from "../assets/stack/CSS.png";
import ExpressPng from "../assets/stack/Express.png";
import gitSvg from "../assets/stack/Git.svg";
import GithubSvg from "../assets/stack/Github.svg";
import HTML from "../assets/stack/HTML.png";
import Javascript from "../assets/stack/Javascript.svg";
import MongoDB from "../assets/stack/MongoDB.svg";
import Next from "../assets/stack/Next.svg";
import NodeJs from "../assets/stack/NodeJs.svg"
import ReactPng from "../assets/stack/React.png";
import Redux from "../assets/stack/Redux.svg";
import Tailwind from "../assets/stack/Tailwind.png";
import Typescript from "../assets/stack/Typescript.svg";
import python from "../assets/stack/python.jpg";
import django from "../assets/stack/django.png";
import Bootstrap from "../assets/stack/Bootstrap.svg";


const Skills = () => {
  const skills = [
    { name: "C", icon: C },
    { name: "C++", icon: Cpp },
    { name: "Java", icon: Javascript },
    { name: "Python", icon: python },
    { name: "DSA", icon: DSA },
    { name: "HTML", icon: HTML },
    { name: "CSS", icon: cssPng },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "JavaScript", icon: Javascript },
    { name: "TypeScript", icon: Typescript },
    { name: "ReactJS", icon: ReactPng },
    { name: "NextJS", icon: Next },
    { name: "Framer Motion", icon: ReactPng },
    { name: "Shadcn", icon: Javascript },
    { name: "NodeJS", icon: NodeJs },
    { name: "ExpressJS", icon: ExpressPng },
    { name: "MongoDB", icon: MongoDB },
    { name: "ReduxToolkit", icon: Redux },
    { name: "Django", icon: django },
    { name: "Bootstrap", icon: Bootstrap },
    { name: "Git", icon: gitSvg },
    { name: "GitHub", icon: GithubSvg },
    { name: "Postman", icon: Javascript },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360]);

  return (
    <div ref={ref} className=" text-white flex flex-col items-center py-8 mb-10 h-full ">
        <div className="absolute inset-0 overflow-hidden z-0">
        {/* Large blue gradient circle/blob */}
        <div className="absolute top-16 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/20 blur-3xl"></div>
        
        {/* Smaller purple-blue gradient blob */}
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-richblue-600/20 to-blue-400/10 blur-3xl"></div>
        
        {/* Medium size blue gradient in center-right */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-blue-300/20 to-indigo-500/10 blur-3xl"></div>
      </div>
      <div className="w-full max-w-5xl px-4 z-10">
        <div className="flex flex-col items-center mb-4 relative">
          <motion.div
            className="relative w-72 h-72 mb-[-6rem] z-1" // Increased size and negative margin to overlap
            style={{ rotate }} // Only the image rotates
          >
            <div className="absolute inset-0 bg-gradient-radial from-purple-500 to-transparent rounded-full blur-md opacity-50"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="rounded-full flex items-center justify-center">
                <img src={techstackImg} alt="Tech Stack" loading="lazy" className="w-full h-full object-contain opacity-50 " />
              </div>
            </div>
          </motion.div>
          
          {/* Text container - no rotation applied */}
          <div className="text-center  z-10"> {/* Added margin-top to push text down */}
            <motion.p
              className="text-richblack-100 uppercase tracking-widest text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I CONSTANTLY TRY TO IMPROVE
            </motion.p>
            
            <motion.h2
              className="text-5xl font-bold mt-2 mb-8 text-richblack-50 bg-clip-text"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.5 }}
            >
              My Tech Stack
            </motion.h2>
          </div>
        </div>

        <motion.div 
          className="flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-zinc-800 border border-richblack-200 hover:shadow-lg hover:border-blue-400 hover:shadow-blue-500/30 group  border-opacity-50 rounded-full px-4 py-2 flex items-center space-x-2 shadow-lg"
              whileHover={{ scale: 1.10, rotate: [0, -3, 1, -3, 0] }}
              whileTap={{ scale: 0.95 }}
              variants={itemVariants}
            >
              <span className="w-6 h-6">
                <img src={skill.icon} alt={skill.name} className="w-full h-full object-contain" />
              </span>
              <span className="text-white">{skill.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;