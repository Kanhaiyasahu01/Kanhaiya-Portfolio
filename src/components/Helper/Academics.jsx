import React from 'react';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const Academics = () => {
  const educationData = [
    {
      id: 1,
      title: "10th Grade",
      school: "Apex International School Kargi Road Kota",
      year: "2019-2020",
      percentage: "96.8%",
      achievements: "Class Captain",
      icon: <BookOpen size={48} className="text-blue-400" />
    },
    {
      id: 2,
      title: "12th Grade",
      school: "Swami Atmanand School Kargi Road Kota",
      year: "2021-2022",
      percentage: "84%",
      achievements: "Mathematics Excellence Award, School Vice Captain",
      icon: <Award size={48} className="text-green-400" />
    },
    {
      id: 3,
      title: "B.Tech IT",
      school: "Government Engineering College Bilaspur",
      year: "2022-2026",
      percentage: "8.6 CGPA",
      achievements: "Dean's List, Project Excellence Award, Technical Club Lead",
      icon: <GraduationCap size={48} className="text-purple-400" />
    }
  ];

  return (
    <section className="bg-richblack-900 py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-12">
          Academic <span className="text-blue-400">Journey</span>
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {educationData.map((item) => (
            <div 
              key={item.id} 
              className="bg-zinc-900 bg-opacity-50 border border-zinc-700 border-opacity-50 hover:border-blue-700  hover:bod group  p-6 rounded-lg border-l-4 border-l-blue-400  hover:transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 bg-richblack-700 rounded-full">
                  {item.icon}
                </div>
           
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
              <h4 className="text-xl text-gray-300 mb-4">{item.school}</h4>
              
              <div className="mb-4">
                <div className="flex justify-between mb-1">
                  <span className="text-gray-400">Performance</span>
                  <span className="text-blue-400 font-medium">{item.percentage}</span>
                </div>
                <div className="w-full bg-richblack-700 rounded-full h-2">
                  <div 
                    className="bg-blue-400 h-2 rounded-full" 
                    style={{ 
                      width: item.percentage.includes('%') 
                        ? item.percentage 
                        : '85%' // Default for CGPA
                    }}
                  ></div>
                </div>
              </div>
              
              <div className="mt-4">
                <h5 className="text-gray-400 mb-2">Year</h5>
                <p className="text-gray-300">{item.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academics;