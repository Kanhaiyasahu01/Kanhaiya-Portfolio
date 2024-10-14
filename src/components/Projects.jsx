import React from 'react';
import p1 from "../assets/project/studyNotion1.png";
import p2 from "../assets/project/studyNotion2.png";
import p3 from "../assets/project/studyNotion3.png";

export const Projects = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 md:p-6 lg:p-8 xl:p-10 mt-10">
      <h2 className="text-3xl font-bold text-richblack-900 mb-4">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={p1} alt="Project 1" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-lg font-bold text-richblack-900 mb-2">Project 1</h3>
          <p className="text-richblack-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">View Project</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={p2} alt="Project 2" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-lg font-bold text-richblack-900 mb-2">Project 2</h3>
          <p className="text-richblack-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">View Project</button>
        </div>
        <div className="bg-white rounded-lg shadow-md p-4">
          <img src={p3} alt="Project 3" className="w-full h-64 object-cover mb-4" />
          <h3 className="text-lg font-bold text-richblack-900 mb-2">Project 3</h3>
          <p className="text-richblack-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">View Project</button>
        </div>
      </div>
    </div>
  );
};
