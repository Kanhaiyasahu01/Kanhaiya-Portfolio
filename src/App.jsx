import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use loadSlim, install the "@tsparticles/slim" package too.
import { About } from "./components/About";
import { Achievements } from "./components/Achievements";
import { ContactMe } from "./components/ContactMe";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Route, Routes } from "react-router-dom";

import "./App.css";
import Footer from "./components/Footer";
import { AboutMain } from "./components/AboutMain";
function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          // value: "#0d47a1",
        },
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          color: "#ffffff",
          distance: 150,
          enable: true,
          opacity: 0.3,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 4,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.4,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 4 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (init) {
    return (
      <div>
        {/* <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          className="-z-10"
        /> */}

        <div className="w-full min-h-screen text-white">
          {/* Gradient Background Section */}
          <div className="h-screen bg-gradient-to-b from-blue-800 to-richblack-900">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutMain />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<ContactMe />} />
            </Routes>
            <Footer />
          </div>
          {/* Content Section with solid background */}
        </div>
      </div>
    );
  }

  return <></>;
}

export default App;
