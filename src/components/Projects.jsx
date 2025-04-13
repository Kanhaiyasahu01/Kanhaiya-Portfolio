import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Import your project images
import p1 from "../assets/project/aiContentCrafter.png";
import p2 from "../assets/project/assetmate.png";
import p3 from "../assets/project/vaayu.png";
import p4 from "../assets/project/studyNotionResize.png";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Project data
  const projects = [
    {
      title: "AI Content Crafter",
      description: "Developed an AI-powered platform to generate tailored content from user prompts using Next.js.",
      image: p1,
      technologies: ["Next.js", "PostgreSQL", "TypeScript", "ShadCN", "TailwindCSS"],
      features: [
        "Integrated Google Gemini AI API for intelligent, context-aware content generation.",
        "Implemented Clerk for secure authentication, authorization, and user management.",
        "Offers 50+ templates for content creation",
      ],
      gradient: "purple", // pink
      github: "https://github.com/Kanhaiyasahu01/AI-Content-Crafter",
      liveUrl: "https://ai-content-crafter-kanhaiya.vercel.app/"
    },
    {
      title: "Asset Mate",
      description: "A Comprehensive Dashboard for Inventory & Asset Management.",
      image: p2,
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "TailwindCSS",],
      features: [
        "Streamlines orders, stock tracking, vendor coordination, and warehouse operations.",
        "Enhances efficiency, reduces manual work, and improves data accuracy by 30%.",
        "Provides secure authentication and role-based access for Admin, Sales, and other users."
      ],
      gradient: "zinc", // green
      github: "https://github.com/Kanhaiyasahu01/AssetMate-TLE_Smashers-",
      liveUrl: "https://assetmate-kanhaiya01.netlify.app/"
    },
    {
      "title": "Vaayu",
      "description": "A Real-Time Air Pollution Monitoring System.",
      "image": p3,
      "technologies": ["React.js", "Redux", "TailwindCSS","OpenWeather API"],
      "features": [
        "Provides real-time air quality insights with automatic 10-minute updates.",
        "Integrates Geolocation API for precise, location-based AQI data retrieval.",
        "Displays interactive charts, graphs, and heatmaps for enhanced data visualization."
      ],
      "gradient": "blue", // blue
      "github": "https://github.com/Kanhaiyasahu01/Vaayu-TLE_smashers",
      "liveUrl": "https://vaayu-tle-smashers01.netlify.app/"
    },
    {
      "title": "Study Notion",
      "description": "Ed-Tech Platform for Course Management and Learning.",
      "image": p4,
      "technologies": ["React.js", "TailwindCSS", "Node.js", "Express.js", "MongoDB"],
      "features": [
        "Developed an interactive learning platform with dynamic front-end using ReactJS and Tailwind CSS.",
        "Implemented secure authentication, payment integration, and cloud storage for seamless user experience.",
        "Built a robust course management system with instructor insights and analytics."
      ],
      "gradient": "pink", // blue
      "github": "https://github.com/Kanhaiyasahu01/Study-Notion-Kanhaiya01",
      "liveUrl": "https://study-notion-frontend-kanhaiya01.vercel.app/"
    }
  ];

  // Function to get gradient classes based on project gradient value
  const getGradientClasses = (gradientColor) => {
    switch (gradientColor) {
      case 'pink':
        return "from-richblack-900 to-pink-300";
      case 'green':
        return "from-richblack-900 to-green-300";
      case 'red':
        return "from-richblack-900 to-red-300";
      case 'purple':
        return "from-richblack-900 to-purple-900";
      case 'zinc':
        return "from-richblack-900 to-zinc-400";
      case 'blue':
        return "from-richblack-900 to-blue-300";
      default:
        return "from-richblack-900 to-pink-300";
    }
  };

  const getAccentColor = (gradientColor) => {
    switch (gradientColor) {
      case 'pink':
        return "bg-pink-600";
      case 'green':
        return "bg-green-600";
      case 'red':
        return "bg-red-600";
      case 'purple':
        return "bg-purple-600";
      case 'zinc':
        return "bg-zinc-400";
      case 'blue':
        return "bg-blue-600";
      default:
        return "bg-pink-600";
    }
  };

  const getHoverClass = (gradientColor) => {
    switch (gradientColor) {
      case 'pink':
        return "hover:bg-pink-600";
      case 'green':
        return "hover:bg-green-600";
      case 'red':
        return "hover:bg-red-600";
      case 'purple':
        return "hover:bg-purple-600";
      case 'zinc':
        return "hover:bg-zinc-600";
      case 'blue':
        return "hover:bg-blue-600";
      default:
        return "hover:bg-pink-600";
    }
  };

  const getTextColor = (gradientColor) => {
    switch (gradientColor) {
      case 'pink':
        return "text-pink-500";
      case 'green':
        return "text-green-500";
      case 'red':
        return "text-red-500";
      case 'purple':
        return "text-purple-700";
      case 'zinc':
        return "text-zinc-400";
      case 'blue':
        return "text-richblue-100";
      default:
        return "text-pink-500";
    }
  };

  // New function to get icon color based on project gradient
  const getIconColor = (gradientColor) => {
    switch (gradientColor) {
      case 'pink':
        return "text-pink-400";
      case 'green':
        return "text-green-400";
      case 'red':
        return "text-red-400";
      case 'purple':
        return "text-purple-500";
      case 'zinc':
        return "text-zinc-300";
      case 'blue':
        return "text-blue-400";
      default:
        return "text-pink-400";
    }
  };

  const getBgOpacityColor = (gradientColor) => {
    switch (gradientColor) {
      case 'pink':
        return "bg-pink-600/70";
      case 'green':
        return "bg-green-600/70";
      case 'red':
        return "bg-red-600/70";
      case 'purple':
        return "bg-purple-900/70";
      case 'zinc':
        return "bg-zinc-700/70";
      case 'blue':
        return "bg-blue-600/70";
      default:
        return "bg-pink-600/70";
    }
  };

  const getBorderColor = (gradientColor) => {
    switch (gradientColor) {
      case 'pink':
        return "bg-pink-600";
      case 'green':
        return "bg-green-600";
      case 'red':
        return "bg-red-600";
      case 'purple':
        return "bg-purple-800";
      case 'zinc':
        return "bg-zinc-700";
      case 'blue':
        return "bg-blue-600";
      default:
        return "bg-pink-600";
    }
  };

  // Navigation functions
  const goToNextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const goToPrevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, staggerChildren: 0.1 } }
  };

  const featureVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  const techBadgeVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  };

  // Get current project gradient
  const currentGradient = getGradientClasses(projects[activeProject].gradient);
  const currentAccentColor = getAccentColor(projects[activeProject].gradient);
  const currentHoverClass = getHoverClass(projects[activeProject].gradient);
  const currentTextColor = getTextColor(projects[activeProject].gradient);
  const currentIconColor = getIconColor(projects[activeProject].gradient);
  const currentBgOpacity = getBgOpacityColor(projects[activeProject].gradient);
  const currentBorderColor = getBorderColor(projects[activeProject].gradient);

  return (
    <div className="text-white py-2 mb-8">
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Large blue gradient circle/blob */}
        <div className="absolute top-16 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/30 to-blue-700/20 blur-3xl"></div>
        
        {/* Smaller purple-blue gradient blob */}
        <div className="absolute bottom-10 -left-20 w-80 h-80 rounded-full bg-gradient-to-tr from-richblue-600/20 to-blue-400/10 blur-3xl"></div>
        
        {/* Medium size blue gradient in center-right */}
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-blue-300/20 to-indigo-500/10 blur-3xl"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full h-full flex flex-col">
      
        {/* Header with title and nav buttons */}
        <div className="flex flex-col w-1/2 sm:flex-row sm:items-center justify-between gap-2 z-10 mt-3">
          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-bold mb-2">My Projects</h2>
            <div className={`h-1 w-24 ${currentAccentColor}`}></div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-start sm:justify-center gap-4 text-richblack-50">
            <motion.button
              onClick={goToPrevProject}
              className={`bg-richblack-900 border border-richblack-100 border-opacity-50 ${currentHoverClass} text-white p-3 rounded-full shadow-lg transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous project"
            >
              <ChevronLeft size={20} className={currentIconColor} />
            </motion.button>
            
            <motion.button
              onClick={goToNextProject}
              className={`bg-richblack-900 border border-richblack-100 border-opacity-50 ${currentHoverClass} text-white p-3 rounded-full shadow-lg transition-colors`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next project"
            >
              <ChevronRight size={20} className={currentIconColor} />
            </motion.button>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center flex-grow mt-4 z-10">
        
          {/* Left side - Laptop Frame with Project Image */}
          <div className="w-full lg:w-3/5 relative border border-richblack-100 border-opacity-50 rounded-2xl">
            {/* Outer laptop frame - dark border with rounded corners */}
            <div className="relative rounded-2xl overflow-hidden bg-black border-8 border-richblack-800 shadow-xl h-[200px] md:h-[400px] lg:h-[450px]">
              {/* Laptop inner frame with dynamic gradient background */}
              <div className={`relative rounded-lg overflow-hidden bg-gradient-to-b ${currentGradient} h-full`}>
                {/* Dynamic content header bar */}
                <div className='flex justify-center items-center pt-3 pb-1 text-xl px-5 text-richblack-50'>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={featureVariants}
                      className="text-center"
                    >
                      <p className="font-semibold text-lg md:text-2xl lg:text-3xl">{projects[activeProject].title}</p>
                      <p className="text-xs md:text-lg opacity-80 ">Built with {projects[activeProject].technologies.slice(0, 3).join(", ")}</p>
                    </motion.div>
                  </AnimatePresence>
                </div>
                
                {/* Container for the project image - adjusted height */}
                <div className="absolute inset-0 top-16 md:top-20 lg:top-24 px-5 flex items-center justify-center">
                  {/* Actual screen content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={imageVariants}
                      className="w-full h-full relative bg-black overflow-hidden rounded-md"
                      whileHover={{ 
                        scale: 1.05, 
                        rotate: -2,
                        transition: { duration: 0.3 }
                      }}
                    >
                      <div className='border border-richblack-100 border-opacity-50 h-full'>
                        <div className="w-full h-full relative">
                          <img 
                            src={projects[activeProject].image} 
                            alt={projects[activeProject].title} 
                            loading='lazy'
                            className="w-full h-[130px] md:h-[290px] lg:h-[330px] object-cover border-4 border-richblack-800"
                          />
                          
                          {/* Button overlay positioned at bottom */}
                          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 md:p-4">
                            <div className="flex items-center justify-center">
                              <motion.a 
                                href={projects[activeProject].liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${currentBgOpacity} backdrop-blur-sm rounded-full px-3 py-1 md:px-6 md:py-3 text-white text-xs md:text-base font-medium flex items-center gap-2`}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                              >
                                See Website <ArrowRight size={16} className="font-bold" />
                              </motion.a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Project Details */}
          <div className="w-full lg:w-2/5">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProject}
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={contentVariants}
                className="space-y-4 md:space-y-6"
              >
                <div className="flex items-center gap-2">
                  <div className={`h-px flex-1 ${currentAccentColor}/30`}></div>
                  <motion.span 
                    className={`text-sm font-medium ${currentTextColor}`}
                    variants={featureVariants}
                  >
                    Featured Project
                  </motion.span>
                </div>
                
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-richblack-50"
                  variants={featureVariants}
                >
                  {projects[activeProject].title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm md:text-base text-richblack-50"
                  variants={featureVariants}
                >
                  {projects[activeProject].description}
                </motion.p>
                
                <motion.div 
                  className="space-y-2 md:space-y-4"
                  variants={featureVariants}
                >
                  {projects[activeProject].features.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-start gap-2 md:gap-3 text-richblack-50"
                      variants={featureVariants}
                    >
                      <div className={currentTextColor}>
                        <span className="text-lg font-bold">+</span>
                      </div>
                      <p className="text-gray-300 text-sm md:text-base">{feature}</p>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={contentVariants}
                >
                  {projects[activeProject].technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="bg-gray-800 text-gray-200 px-2 py-1 md:px-3 rounded-full text-xs md:text-sm text-richblack-50"
                      variants={techBadgeVariants}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div 
                  className="flex gap-4"
                  variants={contentVariants}
                >
                  <motion.a
                    href={projects[activeProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${currentIconColor} hover:text-white transition-colors border border-current rounded-full p-1 opacity-80`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={24} strokeWidth={2.5} />
                  </motion.a>
                  <motion.a
                    href={projects[activeProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${currentIconColor} hover:text-white transition-colors border border-current rounded-full p-1 opacity-80`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={24} strokeWidth={2.5} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Project Navigation Dots */}
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {projects.map((project, index) => {
                const dotColor = getBorderColor(project.gradient);
                return (
                  <button
                    key={index}
                    onClick={() => setActiveProject(index)}
                    className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${
                      activeProject === index ? `${dotColor} w-6 md:w-8` : "bg-gray-600"
                    }`}
                    aria-label={`View project ${index + 1}`}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;