import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ExternalLink, Calendar, Users, TrendingUp, Code, Target, CheckCircle } from "lucide-react";

export const Experience = () => {
  const [activeExperience, setActiveExperience] = useState(0);

  // Experience data from your resume
  const experiences = [
    {
      id: 1,
      title: "Software Developer Intern",
      company: "Inscripts (I) Pvt. Ltd.",
      duration: "July 2025 – October 2025",
      location: "Remote",
      type: "Internship",
      description: "Built fast, scalable web applications with React.js, TypeScript, and React Query for efficient data fetching.",
      achievements: [
        "Optimized table rendering performance by 75% on the Gob.ai web platform by implementing virtualization for over 100K records using React.js and TanStack React Virtual.",
        "Engineered WebSocket integration for real-time spreadsheet updates, reducing front-end refresh time by 30%.",
        "Implemented Generative AI with OpenAI to automate row and column creation, cutting manual data entry by 40%."
      ],
      technologies: ["React.js", "TypeScript", "React Query", "ChatGPT API", "Backend APIs"],
      gradient: "blue",
      companyUrl: "https://www.inscripts.com/",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Full Stack Developer Intern (MERN) — Lead, BEF Developers Committee",
      company: "Bharat Economic Forum",
      duration: "May 2025 – August 2025",
      location: "Remote",
      type: "Leadership Role",
      description: "Led the development of BEF's official web application and 12+ MERN stack sub-applications, architecting scalable architecture, REST APIs, and integrated frontend-backend workflows.",
      achievements: [
        "Led the development of BEF's official web application and 12+ MERN stack sub-applications, architecting scalable architecture, REST APIs, and integrated frontend-backend workflows.",
        "Automated bulk delivery of 1,000+ personalized emails using OpenAI & SendGrid, cutting manual outreach by 60%.",
        "Directed GitHub organization, overseeing branching & version control, optimizing collaboration across 30+ developers."
      ],
      technologies: ["MERN Stack", "GitHub", "Team Management", "Project Leadership"],
      gradient: "green",
      companyUrl: "https://bharateconomicforum.org/",
      icon: <Users className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Coding Problem Setter Intern",
      company: "Vcriate",
      duration: "June 2024 – July 2024",
      location: "Remote",
      type: "Internship",
      description: "Applied DSA skills to create and refine 50+ medium-to-hard level coding problems, covering diverse data structures and algorithms such as DP, Trees and Graphs.",
      achievements: [
        "Applied DSA skills to create and refine 50+ medium-to-hard level coding problems, covering diverse data structures and algorithms such as DP, Trees and Graphs.",
        "Collaborated with a team of 3 to ensure problem accuracy, quality, and algorithmic correctness.",
        "Created well structured test cases and documentation for all 50+ DSA problems, maintaining CP standard."
      ],
      technologies: ["DSA", "Problem Setting", "Documentation", "Competitive Programming"],
      gradient: "purple",
      companyUrl: "https://vericite.com/",
      icon: <Target className="w-6 h-6" />
    }
  ];

  // Function to get gradient classes based on experience gradient value
  const getGradientClasses = (gradientColor) => {
    switch (gradientColor) {
      case 'blue':
        return "from-richblack-900 to-blue-300";
      case 'green':
        return "from-richblack-900 to-green-300";
      case 'purple':
        return "from-richblack-900 to-purple-300";
      default:
        return "from-richblack-900 to-blue-300";
    }
  };

  const getAccentColor = (gradientColor) => {
    switch (gradientColor) {
      case 'blue':
        return "bg-blue-600";
      case 'green':
        return "bg-green-600";
      case 'purple':
        return "bg-purple-600";
      default:
        return "bg-blue-600";
    }
  };

  const getTextColor = (gradientColor) => {
    switch (gradientColor) {
      case 'blue':
        return "text-blue-400";
      case 'green':
        return "text-green-400";
      case 'purple':
        return "text-purple-400";
      default:
        return "text-blue-400";
    }
  };

  const getBorderColor = (gradientColor) => {
    switch (gradientColor) {
      case 'blue':
        return "border-blue-500";
      case 'green':
        return "border-green-500";
      case 'purple':
        return "border-purple-500";
      default:
        return "border-blue-500";
    }
  };

  const getDetailsBorderColor = (gradientColor) => {
    switch (gradientColor) {
      case 'blue':
        return "border-blue-500/30";
      case 'green':
        return "border-green-500/30";
      case 'purple':
        return "border-purple-500/30";
      default:
        return "border-blue-500/30";
    }
  };

  const getDetailsHoverGlow = (gradientColor) => {
    switch (gradientColor) {
      case 'blue':
        return "hover:shadow-lg hover:border-blue-400 hover:shadow-blue-500/30";
      case 'green':
        return "hover:shadow-lg hover:border-green-400 hover:shadow-green-500/30";
      case 'purple':
        return "hover:shadow-lg hover:border-purple-400 hover:shadow-purple-500/30";
      default:
        return "hover:shadow-lg hover:border-blue-400 hover:shadow-blue-500/30";
    }
  };

  const getHoverBg = (gradientColor) => {
    switch (gradientColor) {
      case 'blue':
        return "hover:bg-blue-900/20";
      case 'green':
        return "hover:bg-green-900/20";
      case 'purple':
        return "hover:bg-purple-900/20";
      default:
        return "hover:bg-blue-900/20";
    }
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    }
  };

  // Get current experience styles
  const currentGradient = getGradientClasses(experiences[activeExperience].gradient);
  const currentAccentColor = getAccentColor(experiences[activeExperience].gradient);
  const currentTextColor = getTextColor(experiences[activeExperience].gradient);
  const currentBorderColor = getBorderColor(experiences[activeExperience].gradient);
  const currentDetailsBorderColor = getDetailsBorderColor(experiences[activeExperience].gradient);
  const currentDetailsHoverGlow = getDetailsHoverGlow(experiences[activeExperience].gradient);

  return (
    <div className="text-white py-8 mb-8 min-h-screen">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-700/10 blur-3xl"></div>
        <div className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-gradient-to-tr from-green-600/15 to-green-400/5 blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-gradient-to-bl from-purple-300/15 to-indigo-500/5 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 w-full relative z-10">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-12"
        >
          <motion.div variants={itemVariants} className="relative">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-richblack-50 to-richblack-100 bg-clip-text text-transparent">
              Work Experience
            </h1>
            <div className={`h-1 w-32 mx-auto ${currentAccentColor} rounded-full`}></div>
          </motion.div>
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-richblack-100 mt-6 max-w-2xl mx-auto"
          >
            My professional journey in software development and leadership roles
          </motion.p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Timeline Navigation */}
          <div className="lg:w-1/3">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  variants={cardVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: index * 0.1 }}
                  className={`p-4 rounded-xl border cursor-pointer transition-all duration-300 ${
                    activeExperience === index
                      ? `${getBorderColor(exp.gradient)} bg-richblack-800/50 ${getHoverBg(exp.gradient)} border-2`
                      : 'border-richblack-700 bg-richblack-800/30 hover:bg-richblack-800/50 hover:border-richblack-600'
                  }`}
                  onClick={() => setActiveExperience(index)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className={`p-2 rounded-lg ${getAccentColor(exp.gradient)}/20`}>
                      <div className={getTextColor(exp.gradient)}>
                        {exp.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-richblack-50 text-sm md:text-base line-clamp-2">
                        {exp.title}
                      </h3>
                      <p className="text-richblack-100 text-xs md:text-sm">{exp.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-richblack-200">
                    <Calendar className="w-3 h-3" />
                    <span>{exp.duration}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeExperience}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className={`border ${currentDetailsBorderColor} rounded-2xl bg-richblack-800/30 backdrop-blur-sm overflow-hidden transition-all duration-300 group ${currentDetailsHoverGlow}`}
              >
                {/* Header Card */}
                <div className={`bg-gradient-to-r ${currentGradient} p-6`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold text-richblack-50 mb-2">
                        {experiences[activeExperience].title}
                      </h2>
                      <div className="flex items-center gap-2 mb-2">
                        <motion.a
                          href={experiences[activeExperience].companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xl font-semibold text-richblack-50/90 hover:text-richblack-50 transition-colors flex items-center gap-2"
                          whileHover={{ scale: 1.05 }}
                        >
                          {experiences[activeExperience].company}
                          <ExternalLink className="w-4 h-4" />
                        </motion.a>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="bg-richblack-800/80 backdrop-blur-sm rounded-lg px-3 py-1 mb-2 border border-richblack-600">
                        <span className="text-richblack-50 text-sm font-semibold">
                          {experiences[activeExperience].type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 text-richblack-50/80">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{experiences[activeExperience].duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{experiences[activeExperience].location}</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-richblack-100 text-lg mb-6">
                    {experiences[activeExperience].description}
                  </p>

                  {/* Key Achievements */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-richblack-50 mb-4 flex items-center gap-2">
                      <TrendingUp className={`w-5 h-5 ${currentTextColor}`} />
                      Key Achievements
                    </h3>
                    <div className="space-y-3">
                      {experiences[activeExperience].achievements.map((achievement, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle className={`w-5 h-5 ${currentTextColor} mt-0.5 flex-shrink-0`} />
                          <p className="text-richblack-100 text-sm md:text-base">{achievement}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-semibold text-richblack-50 mb-4 flex items-center gap-2">
                      <Code className={`w-5 h-5 ${currentTextColor}`} />
                      Technologies & Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {experiences[activeExperience].technologies.map((tech, index) => (
                        <motion.span
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className={`px-3 py-1 rounded-full text-sm font-medium border ${currentBorderColor} bg-richblack-700/50 text-richblack-100`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <motion.div 
            variants={itemVariants}
            className="text-center p-6 rounded-xl bg-richblack-800/30 border border-richblack-700"
          >
            <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
            <div className="text-richblack-100">Professional Roles</div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="text-center p-6 rounded-xl bg-richblack-800/30 border border-richblack-700"
          >
            <div className="text-3xl font-bold text-green-400 mb-2">30+</div>
            <div className="text-richblack-100">Developers Managed</div>
          </motion.div>
          <motion.div 
            variants={itemVariants}
            className="text-center p-6 rounded-xl bg-richblack-800/30 border border-richblack-700"
          >
            <div className="text-3xl font-bold text-purple-400 mb-2">70+</div>
            <div className="text-richblack-100">Problems Created</div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
