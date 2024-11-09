import React from "react";
import { ReactSVG } from "react-svg";
import "./Events.css";
// Import SVGs directly
import { Card1, Card2, Card3 } from "../assets/EventsCard/svg";
import { Glow } from "../assets/svg";

const Events = () => {
  const svgPaths = [Card1, Card2, Card3];
  const cards = Array.from({ length: 10 }, (_, index) =>
    svgPaths.map((path, cardIndex) => (
      <li
        key={`${Math.random()}-${cardIndex}`}
        className="m-2 w-[250px] h-[350px] flip-card" // Adjust height for better visibility
      >
        <div className="flip-card-inner">
          {/* Front Side */}
          <div className="flip-card-front">
            <ReactSVG
              src={path}
              beforeInjection={(svg) => {
                svg.setAttribute("width", "100%");
                svg.setAttribute("height", "100%");
              }}
              wrapper="span"
              loading={() => (
                <span className="w-full h-full flex items-center justify-center">
                  Loading...
                </span>
              )}
            />
          </div>
          {/* Back Side */}
          <div className="flip-card-back">
            <div className="flex flex-col items-center justify-center gap-3 text-white">
              <h3>EVENT </h3>
              <button className="bg-green-500 text-white p-2 rounded-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      </li>
    ))
  ).flat();

  return (
    <div className="h-screen overflow-hidden flex gap-[6vh] flex-col justify-center bg-black">
      {/* Title Section */}
      <div className="h-[35%] w-full flex items-center justify-center">
        <div className="gradient-text inter-bold mt-2 tracking-widest font text-[1rem] sm:text-[2rem] md:text-[6rem] lg:text-[10em] xl:text-[12rem] 2xl:text-[14rem]">
          EVENTS
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container h-[50%] w-full inline-flex">
        <ul className="flex items-center justify-center gap-[10vw] md:justify-start animate-infinite-scroll">
          {cards}
        </ul>
      </div>
    </div>
  );
};

export default Events;
