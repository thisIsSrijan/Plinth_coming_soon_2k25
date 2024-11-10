import React from "react";
import { useState, useEffect, Suspense } from "react";
import CustomCursor from "./components/CustomCursor";
import ParticlesComponent from "./components/Particle";
import Page from "./components/Page";
import Navbar from "./components/Navbar";
import AnimatedPreloader from "./components/AnimatedPreloader";
import "./app.css";
import Aboutlnmiit from "./components/Aboutlnmiit";
import AboutPlinth from "./components/AboutPlinth";
import CampusAmbassador from "./components/CampusAmbassador";
import Events from "./components/Events";

// const Page2 = React.lazy(() => import('./components/Page2'));
// const Footer = React.lazy(() => import('./components/Footer'));

const App = () => {
  const [isPreloading, setIsPreloading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const preloaderTimer = setTimeout(() => {
      setIsPreloading(false);
      setTimeout(() => setShowContent(true), 100);
    }, 5500);

    return () => clearTimeout(preloaderTimer);
  }, []);

  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <CustomCursor />
      <ParticlesComponent id="particles" />

      {/* Preloader */}
      <div
        className="fixed inset-0 z-50 bg-transparent transition-transform duration-1000 ease-in-out"
        style={{
          transform: isPreloading ? "translateY(0)" : "translateY(-100%)",
        }}
      >
        <AnimatedPreloader />
      </div>

      {/* Main Content */}
      <div
        className={`flex flex-col min-h-screen transition-opacity duration-500 ease-in-out ${
          showContent ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Navbar - fixed at top */}
        <div className="fixed top-0 w-full z-40">
          <Navbar />
        </div>

        {/* Content Container */}
        <main className="flex-grow mt-[24px]">
          <Page />
          <AboutPlinth />
          <Aboutlnmiit />
          <CampusAmbassador />
          <Events />

          <Suspense fallback={<div>Loading Page2...</div>}></Suspense>

          <Suspense fallback={<div>Loading Footer...</div>}></Suspense>
        </main>
      </div>
    </div>
  );
};

export default App;