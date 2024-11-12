import React, { useMemo } from "react";
import { ReactSVG } from "react-svg";
import "./Events.css";
import { Card1, Card2, Card3 } from "../../assets/EventsCard/svg";

const Card = React.memo(({ eventName, svgPath }) => (
  <li className="m-2 w-[250px] h-[350px] flip-card">
    <div className="flip-card-inner">
      {/* Front Side */}
      <div className="flip-card-front flex items-center justify-center">
        <ReactSVG
          src={svgPath}
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
      <div className="flip-card-back text-white font-semibold flex items-center justify-center border-2 border-[#96e30f] rounded-lg bg-black">
        <div className="flex flex-col items-center justify-center gap-3">
          <h3>{eventName}</h3>
          <a
            href="https://unstop.com/college-fests/plinth-2025-plinth-organising-committee-284543"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="bg-custom-gradient p-2 rounded-lg">
              Read More
            </button>
          </a>
        </div>
      </div>
    </div>
  </li>
));

const Events = () => {
  const eventNames = [
    "THE LNMIIT MUN 25’",
    "Change My Mind",
    "Robowars",
    "ROBOCUP",
    "ROBORACE",
    "MOTOBOAT",
    "LNM TECH EXPO",
    "ROBO TRANSPORTER",
    "Maze Solver",
    "RC PLANE",
    "DRONE RACING",
    "MICRO MOUSE",
    "CASECRAFT: HACK & HUSTLE",
    "LNMHacks 7.0",
    "SUSTAIN-A-THON",
    "Idea Hackathon",
    "CodeCraft",
    "Talk Series",
    "BeatLab",
    "CreatiFrenzy",
    "Pixelated Wars",
    "IUPC",
    "Enigma",
    "CP Duels",
    "Coding Cascade",
    "Alice, Bob, Go!",
    "Brahmaand: The Space Ideathon",
    "Starpix",
    "Astromemia",
    "Dhoomketu",
    "CRYPTEX",
    "IPL Auction",
    "BRANDWAGON",
    "BIZMINDS",
    "PITCH ON THE ROCKS",
  ];

  const svgPaths = [Card1, Card2, Card3];

  const cards = useMemo(
    () =>
      eventNames.map((eventName, index) => (
        <Card
          key={index}
          eventName={eventName}
          svgPath={svgPaths[index % svgPaths.length]}
        />
      )),
    [eventNames, svgPaths]
  );

  return (
    <div className="h-screen overflow-hidden flex gap-[6vh] flex-col justify-center bg-black">
      {/* Title Section */}
      <div className="h-[35%] w-full flex items-center justify-center">
        <div className="gradient-text inter-bold mt-2 tracking-widest font text-[1rem] sm:text-[2rem] md:text-[6rem] lg:text-[10em] xl:text-[12rem] 2xl:text-[14rem]">
          EVENTS
        </div>
      </div>

      {/* Carousel Section */}
      <div className="container h-[50%] w-full inline-flex ">
        <ul className="flex items-center justify-center gap-[10vw] md:justify-start animate-infinite-scroll">
          {cards}
        </ul>
      </div>
    </div>
  );
};

export default Events;
