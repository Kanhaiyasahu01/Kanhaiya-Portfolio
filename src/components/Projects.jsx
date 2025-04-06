import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

// Import your project images
import p1 from "../assets/project/studyNotion1.png";
import p2 from "../assets/project/studyNotion2.png";
import p3 from "../assets/project/studyNotion3.png";

export const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);

  // Project data
  const projects = [
    {
      title: "Next Ventures",
      description: "Developed a platform for virtual pitch competitions using Next.js 15, enabling smooth idea sharing and exploration with optimal performance.",
      image: p1,
      technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Framer Motion", "Auth.js", "Sanity CMS"],
      features: [
        "Leveraged Partial Prerendering and After for faster loading",
        "Simplified idea submission with a clean, intuitive design",
        "Enhanced browsing with seamless performance optimization"
      ],
      gradient:"pink",
      github: "https://github.com/yourusername/next-ventures",
      liveUrl: "https://next-venture.vercel.app"
    },
    {
      title: "Code Colony",
      description: "A collaborative coding platform for developers to share and work on projects together in real-time.",
      image: p2,
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Express", "GROQ", "Sentry"],
      features: [
        "Real-time code collaboration with multiple users",
        "Project version control and history tracking",
        "Custom code editor with syntax highlighting"
      ],
      gradient:"green",
      github: "https://github.com/yourusername/codecolony",
      liveUrl: "https://codecolony-demo.vercel.app"
    },
    {
      title: "Finance Dashboard",
      description: "An intuitive financial analytics dashboard for tracking investments and monitoring market trends.",
      image: p3,
      technologies: ["Next.js", "D3.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Markdown", "TypeScript"],
      features: [
        "Interactive data visualization with real-time updates",
        "Portfolio performance tracking and analysis",
        "Customizable dashboard widgets and alerts"
      ],
      gradient:"red",
      github: "https://github.com/yourusername/finance-dashboard",
      liveUrl: "https://finance-dashboard-demo.vercel.app"
    }
  ];

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

  return (
    <div className="min-h-screen text-white py-2">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full h-full flex flex-col">
        {/* Header with title and nav buttons */}
        <div className="flex flex-col w-1/2 sm:flex-row sm:items-center justify-between  ">
          <div className="relative">
            <h2 className="text-5xl md:text-4xl font-bold mb-2">My Projects</h2>
            <div className="h-1 w-24 bg-pink-600"></div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-start sm:justify-center gap-4 text-richblack-50">
            <motion.button
              onClick={goToPrevProject}
              className="bg-richblack-900 border border-richblack-100 border-opacity-50 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Previous project"
            >
              <ChevronLeft size={20} />
            </motion.button>
            
            <motion.button
              onClick={goToNextProject}
              className="bg-richblack-900 border border-richblack-100 border-opacity-50 hover:bg-pink-600 text-white p-3 rounded-full shadow-lg transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Next project"
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        </div>
        
        {/* Main content area */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center flex-grow mt-4">
          {/* Left side - Laptop Frame with Project Image */}
          <div className="w-full lg:w-3/5 relative border border-richblack-100 border-opacity-50 rounded-2xl ">
            {/* Outer laptop frame - dark border with rounded corners */}
            <div className="relative rounded-2xl overflow-hidden bg-black border-8 border-richblack-800 shadow-xl h-[400px] md:h-[450px]"> {/* Increased height */}
              {/* Laptop inner frame with burgundy gradient background */}
              <div className="relative rounded-lg overflow-hidden bg-gradient-to-b from-richblack-900 to-pink-300  h-full">
                {/* Inner screen frame with darker border */}

                <div className='flex justify-center items-center mt-3 text-2xl p-5 text-richblack-50'>
                  <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, seamless?</p>
                </div>
                <div className="absolute  overflow-hidden rounded-lg shadow-inner h-full flex items-end -bottom-5 px-5 hover:p-1 hover:-rotate-2 transition-all duration-300"> {/* Adjusted to full height and flex items-end */}
                  {/* Actual screen content */}
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeProject}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      variants={imageVariants}
                      className="w-full relative bg-black overflow-hidden rounded-md "
                    >
                      <div className='border border-richblack-100 border-opacity-50 '>
                      <img 
                        src={projects[activeProject].image} 
                        alt={projects[activeProject].title} 
                        className="relative w-full h-auto object-cover border-4 border-richblack-800"
                      />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                        <div className="flex items-center justify-center">
                          <motion.a 
                            href={projects[activeProject].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-pink-600/70 backdrop-blur-sm rounded-full px-4 py-2 md:px-6 md:py-3 text-white text-sm md:text-base font-medium flex items-center gap-2"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                          >
                            See Website <ArrowRight size={16} />
                          </motion.a>
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
                  <div className="h-px flex-1 bg-pink-600/30"></div>
                  <motion.span 
                    className="text-sm font-medium text-pink-500"
                    variants={featureVariants}
                  >
                    Featured Project
                  </motion.span>
                </div>
                
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold"
                  variants={featureVariants}
                >
                  {projects[activeProject].title}
                </motion.h3>
                
                <motion.p 
                  className="text-gray-300 text-sm md:text-base"
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
                      className="flex items-start gap-2 md:gap-3"
                      variants={featureVariants}
                    >
                      <div className="text-pink-500 mt-1">
                        <span className="text-lg">+</span>
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
                      className="bg-gray-800 text-gray-200 px-2 py-1 md:px-3 rounded-full text-xs md:text-sm"
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
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={projects[activeProject].liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </motion.div>
              </motion.div>
            </AnimatePresence>
            
            {/* Project Navigation Dots */}
            <div className="flex justify-center gap-2 md:gap-3 mt-6 md:mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-2 md:w-3 h-2 md:h-3 rounded-full transition-all ${
                    activeProject === index ? "bg-pink-600 w-6 md:w-8" : "bg-gray-600"
                  }`}
                  aria-label={`View project ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;