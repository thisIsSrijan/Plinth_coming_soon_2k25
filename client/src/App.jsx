import React, { Suspense } from "react";
import CustomCursor from "./components/utils/CustomCursor";
import ParticlesComponent from "./components/utils/Particle";
import Page from "./components/Hero/Page";
import Navbar from "./components/Navbar/Navbar";
import "./app.css";
import PreloaderWrapper from "./components/Preloader/PreloaderWrapper";
import UsePreloader from "./hooks/UsePreloader";
const AboutLNMIIT = React.lazy(() => import("./components/About/AboutLNMIIT.jsx"));
const AboutPlinth = React.lazy(() => import("./components/About/AboutPlinth.jsx"))
const CampusAmbassador = React.lazy(() => import("./components/About/CampusAmbassador"));
const Events = React.lazy(() => import("./components/EventPage/Events.jsx"));
const App = () => {
  const { isPreloading, showContent } = UsePreloader();
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <CustomCursor />
      <ParticlesComponent id="particles" />
      <PreloaderWrapper isPreloading={isPreloading} />
      <Navbar showContent={showContent} />
        <main className="flex-grow mt-[24px]">
          <Page />
          <Suspense fallback={<div>Loading Events...</div>}><AboutLNMIIT /></Suspense>
          <Suspense fallback={<div>Loading Events...</div>}><AboutPlinth /></Suspense>         
          <Suspense fallback={<div>Loading Events...</div>}><CampusAmbassador /></Suspense>
          <Suspense fallback={<div>Loading Events...</div>}><Events /></Suspense>
        </main>
    </div>
  );
};

export default App;
