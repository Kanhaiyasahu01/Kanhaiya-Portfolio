import React from 'react';
import bashImg from "../assets/stack/Bash.svg";
import bootstrap from "../assets/stack/Bootstrap.svg";
import cssPng from "../assets/stack/CSS.png";
import ExpressPng from "../assets/stack/Express.png";
import gitSvg from "../assets/stack/Git.svg";
import GithubSvg from "../assets/stack/Github.svg";
import Graphql from "../assets/stack/Graphql.svg";
import HTML from "../assets/stack/HTML.png";
import Javascript from "../assets/stack/Javascript.svg";
import MongoDB from "../assets/stack/MongoDB.svg";
import Next from "../assets/stack/Next.svg";
import NodeJs from "../assets/stack/NodeJs.svg";
import ReactPng from "../assets/stack/React.png";
import Redux from "../assets/stack/Redux.svg";
import Tailwind from "../assets/stack/Tailwind.png";
import Typescript from "../assets/stack/Typescript.svg";
import Vercel from "../assets/stack/Vercel.svg";

export const About = () => {
  return (
    <div className="text-white py-16 px-8 sm:px-16 lg:px-32 bg-richblack-900 h-[100vh] flex justify-center items-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-center">
        {/* Left: Tech Stack Images */}
        <div className="w-full lg:w-1/2 grid grid-cols-3 sm:grid-cols-4 gap-4 justify-center items-center">
          <img src={HTML} alt="HTML" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={cssPng} alt="CSS" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={Javascript} alt="JavaScript" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={ReactPng} alt="React" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={Redux} alt="Redux" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={NodeJs} alt="Node.js" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={ExpressPng} alt="Express.js" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={MongoDB} alt="MongoDB" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={bootstrap} alt="Bootstrap" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={gitSvg} alt="Git" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={GithubSvg} alt="GitHub" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={Graphql} alt="GraphQL" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={Next} alt="Next.js" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={Tailwind} alt="Tailwind CSS" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={Typescript} alt="TypeScript" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
          <img src={Vercel} alt="Vercel" className="w-12 h-12 sm:w-16 sm:h-16 mx-auto" />
        </div>

        {/* Right: Heading and Description */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center items-center text-center">
          <h2 className="text-4xl font-bold text-blue-300 mb-6">
            Me and <br /> My Tech Stack
          </h2>
          <p className="text-lg text-gray-600 mb-4">
            As a full-stack developer, I have expertise in a variety of modern technologies. From backend systems built using Node.js and Express to frontend interfaces powered by React and Tailwind CSS, I continuously strive to expand my knowledge and skill set.
          </p>
          <p className="text-lg text-gray-600">
            My toolkit includes languages, frameworks, and tools such as JavaScript, TypeScript, MongoDB, Git, and more. I enjoy building scalable, efficient solutions and am always eager to learn new technologies to push the boundaries of what I can create.
          </p>
        </div>
      </div>
    </div>
  );
};
