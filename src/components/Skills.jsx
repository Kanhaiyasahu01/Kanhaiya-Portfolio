import React from 'react';

export const Skills = () => {
  // Data for the skills section
  const skillsData = {
    "Programming Languages": [
      "C/C++", "JavaScript", "Kotlin", "Java (Familiar)", "Python", "TypeScript"
    ],
    "IT Constructs": [
      "DSA", "OOPS", "Operating System", "DBMS", "Computer Networks"
    ],
    "Frameworks/Technologies": [
      "HTML", "CSS", "React", "TailwindCSS", "Bootstrap", "Django", "Express.js", "Node.js"
    ],
    "Databases": ["MySQL", "MongoDB"],
    "Tools": ["Git", "Visual Studio Code", "Android Studio", "IntelliJ IDEA"]
  };

  return (
    <div className="bg-blue-900 text-white py-16 px-8 sm:px-16 lg:px-32">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-yellow-500 mb-10 text-center">
          My Skills
        </h2>

        <div className="relative">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <div key={category} className="mb-12 flex items-center justify-between relative border ">
              {/* Circle for timeline */}
              <div className="w-1/2 flex justify-center  relative border">
                {/* Circle */}
                <div className="w-6 h-6 bg-yellow-500 rounded-full border-4 border-gray-300 relative z-10 "></div>
                {/* Line connecting the dots */}
                {index !== Object.entries(skillsData).length - 1 && (
                  <div className="absolute left-1/2 top-6 h-full w-1 bg-blue-500 transform -translate-x-1/2"></div>
                )}
              </div>

              {/* Skill box on the right */}
              <div className={`w-1/2 pl-12 ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'}`}>
                <div className="p-6 border border-gray-300 rounded-lg shadow-lg bg-blue-800 hover:bg-blue-700 transition-transform transform hover:-translate-y-2 duration-300">
                  <h3 className="text-2xl font-semibold mb-4 hover:text-yellow-400 transition-colors duration-300">
                    {category}
                  </h3>
                  <ul className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skills.map((skill) => (
                      <li
                        key={skill}
                        className="text-lg mb-2 hover:text-yellow-400 transition-colors duration-300"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
