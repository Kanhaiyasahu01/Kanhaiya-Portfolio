import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Achievements() {
  const [activeSlide, setActiveSlide] = useState(0);

  const achievements = [
    {
      id: 1,
      icon: "💻",
      title: "Active Developer",
      description: "Dedicated to enhancing technical skills and creativity by contributing to real world projects.",
      stat: "200+",
      suffix: "Commits",
      linkto: "https://github.com/Kanhaiyasahu01",
      color: "from-blue-800 to-richblack-900"
    },
    {
      id: 2,
      icon: "🚀",
      title: "LeetCode (Problem Solver)",
      description: "Solved 500+ DSA problems on Leetcode and 1000+ problems on platforms like LC, GFG, Codeforces, Codechef etc.",
      stat: "500+",
      linkto: "https://leetcode.com/u/kanhaiyasahu01/",
      color: "from-blue-800 to-richblack-900"
    },
    {
      id: 3,
      icon: "🏆",
      title: "Ideathon Champion",
      description: "Achieved top honors with a 1st Rank in the Ideathon at LCIT College, Bilaspur.",
      stat: "1st",
      suffix: "Place",
      linkto: "https://drive.google.com/file/d/10S6BMR1Qu0Xrtz1RazOsSx-G8-x6p876/view",
      color: "from-blue-800 to-richblack-900"
    },
    {
      id: 4,
      icon: "🥈",
      title: "Hackathon Runner-up",
      description: "Claimed 2nd position in the 'IEEE ICECCT WAIT NOW' project competition by CSVTU Bhilai.",
      stat: "2nd",
      suffix: "Place",
      linkto: "https://drive.google.com/file/d/1-diITWjQBVJvE_Y92jFtpco5gVKzN7ZV/view",
      color: "from-blue-800 to-richblack-900"
    },
    {
      id: 5,
      icon: "🌟",
      title: "App Development Lead",
      description: "Selected for the position of App Development Lead by the Google Developer Student Club, Bilaspur.",
      stat: "Lead",
      suffix: "",
      color: "from-blue-800 to-richblack-900"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    beforeChange: (current, next) => setActiveSlide(next),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ],
    customPaging: (i) => (
      <div className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${i === activeSlide ? 'bg-white scale-125' : 'bg-gray-400'}`} />
    ),
    dotsClass: "slick-dots custom-dots flex justify-center items-center mt-8"
  };

  return (
    <div className="w-full bg-richblack-900 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-richblack-50 to-richblack-50 font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">Milestones & Achievements</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto mb-6"></div>
          <p className="text-richblack-300 max-w-4xl mx-auto text-base sm:text-lg">
            A showcase of my technical journey and accomplishments that highlight my growth and expertise in the world of software development.
          </p>
        </div>

        {/* Carousel */}
        <Slider {...settings} className="achievements-slider">
          {achievements.map((achievement, index) => (
            <div key={achievement.id} className="px-4 py-2 h-full">
              <div 
                className={`relative overflow-hidden bg-gradient-to-r ${achievement.color} rounded-xl shadow-xl p-6 h-72 transition-all duration-300 transform hover:scale-105  hover:border hover:border-richblack-100 border-opacity-50 ${achievement.linkto ? 'cursor-pointer' : ''}`}
                onClick={() => achievement.linkto && window.open(achievement.linkto, '_blank')}
              >
                {/* Link Icon */}
                {achievement.linkto && (
                  <div className="absolute top-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}

                {/* Background pattern */}
                <div className="absolute top-0 right-0 opacity-20 w-40 h-40 transform translate-x-8 -translate-y-8">
                  <div className="w-full h-full rounded-full bg-white"></div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute w-3 h-3 rounded-full bg-white opacity-30 top-1/4 left-1/4 animate-pulse"></div>
                <div className="absolute w-2 h-2 rounded-full bg-white opacity-20 bottom-1/3 right-1/3 animate-ping"></div>
                
                {/* Content */}
                <div className="relative flex flex-col justify-between h-full z-10">
                  <div>
                    <div className="flex items-center mb-4 flex-col sm:flex-row">
                      <span className="text-4xl sm:text-5xl mr-0 sm:mr-4 mb-2 sm:mb-0 transform group-hover:scale-110 transition-transform duration-300">{achievement.icon}</span>
                      <h3 className="text-xl sm:text-2xl font-bold text-richblack-50 text-center sm:text-left">{achievement.title}</h3>
                    </div>
                    <p className="text-richblack-100 font-light text-sm sm:text-base">{achievement.description}</p>
                  </div>
                  
                  <div className="flex items-baseline mt-4">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white drop-shadow-md">{achievement.stat}</span>
                    {achievement.suffix && (
                      <span className="ml-2 text-lg sm:text-xl text-richblack-100">{achievement.suffix}</span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Additional Content */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-300">
          <div className="bg-zinc-900 backdrop-blur-sm p-6 rounded-lg border border-gray-700 border-opacity-60 transition-all duration-300 hover:shadow-lg hover:border-richblue-400 hover:shadow-richblue-500/30 group">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-richblack-100">Why These Achievements Matter</h3>
            <p className="text-richblack-300 text-sm sm:text-base">These milestones represent my commitment to continuous learning and excellence in software development. Each achievement has contributed to building a well-rounded skill set that combines algorithmic thinking, practical implementation, and creative problem-solving.</p>
          </div>
          <div className="bg-zinc-900 backdrop-blur-sm p-6 rounded-lg border border-gray-700 border-opacity-60 transition-all duration-300 hover:shadow-lg hover:border-richblue-400 hover:shadow-richblue-500/30 group">
            <h3 className="text-lg sm:text-xl font-bold mb-4 text-richblack-100">What's Next</h3>
            <p className="text-richblack-300 text-sm sm:text-base">I'm constantly pushing my boundaries and seeking new challenges. My next goals include mastering problem solving, contributing to major open-source projects, and building innovative solutions that make a real difference in how people interact with technology committing to continuous learning to stay ahead in the ever-evolving tech landscape.</p>
          </div>
        </div>
      </div>

      {/* Custom CSS */}
      <style jsx>{`
        .achievements-slider .slick-track {
          display: flex !important;
        }
        
        .achievements-slider .slick-slide {
          height: inherit !important;
          display: flex !important;
        }
        
        .achievements-slider .slick-slide > div {
          display: flex;
          height: 100%;
          width: 100%;
        }
        
        /* Override slick arrow styles */
        .achievements-slider .slick-prev:before, 
        .achievements-slider .slick-next:before {
          color: white;
          font-size: 24px;
        }
        
        .achievements-slider .slick-prev, 
        .achievements-slider .slick-next {
          z-index: 10;
        }
        
        .achievements-slider .slick-prev {
          left: -10px;
        }
        
        .achievements-slider .slick-next {
          right: -10px;
        }
        
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}