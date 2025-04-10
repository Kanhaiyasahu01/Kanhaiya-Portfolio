import React from "react";
import { ContactMe } from "./components/ContactMe";

import Achievements from "./components/Achievements";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import { AboutMain } from "./components/AboutMain";
import { SkillMain } from "./components/SkillMain";
function App() {

    return (
      <div>
        <div className="w-full min-h-screen text-white">
          {/* Gradient Background Section */}
          <div className=" h-ful bg-richblack-900 ">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMain />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/skills" element={<SkillMain />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactMe />} />
            </Routes>
            <Footer />
          </div>
          {/* Content Section with solid background */}
        </div>
      </div>
    );
  };

export default App;
