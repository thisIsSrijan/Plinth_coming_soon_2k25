import { useState, useEffect } from "react";
import "./Events.css";
import Card from "./Card";
import img from "../../assets/Events_Images/images5.png";

const Events = () => {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [isHoveredRow1, setIsHoveredRow1] = useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = useState(false);

  const eventNames = [
    "THE LNMIIT MUN 25'",
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

  useEffect(() => {
    let animationFrame;

    const animate = () => {
      if (!isHoveredRow1) {
        setScrollPosition1((prev) => (prev <= -100 ? 0 : prev - 0.07));
      }
      if (!isHoveredRow2) {
        setScrollPosition2((prev) => (prev >= 100 ? 0 : prev + 0.07));
      }
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [isHoveredRow1, isHoveredRow2]);

  return (
    <div className="h-max-screen flex gap-[13vh] sm:gap-[6vh] lg:gap-[4vh] flex-col justify-center bg-black ">
      {/* Title Section */}
      <div className="h-[6vh] sm:h-[7vh] md:h-[10vh] lg:h-[15vh] w-full flex items-center justify-center">
        <div className="gradient-text inter-bold mt-2 tracking-widest font xsm:text-[3rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] ">
          EVENTS
        </div>
      </div>

      {/* Carousel Section */}
      <div className="flex flex-col gap-8 md:mt-16 ">
        {/* First Row */}
        <div
          className=" xsm:h-[280px] sm:h-[240px] md:h-[290px] lg:h-[300px] xl:h-[330px] 2xl:h-[350px] w-full overflow-hidden"
          onMouseEnter={() => setIsHoveredRow1(true)}
          onMouseLeave={() => setIsHoveredRow1(false)}
        >
          <div className="relative h-full">
            {/* First set of cards */}
            <div
              className="absolute flex items-center gap-[125px]"
              style={{ transform: `translateX(${scrollPosition1}%)` }}
            >
              {eventNames.slice(0, 10).map((event, index) => (
                <Card key={`row1-${index}`} image={img} text={event} />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div
              className="absolute flex items-center gap-[125px]"
              style={{ transform: `translateX(${scrollPosition1 + 103}%)` }}
            >
              {eventNames.slice(0, 10).map((event, index) => (
                <Card key={`row1-dup-${index}`} image={img} text={event} />
              ))}
            </div>
          </div>
        </div>

        {/* Second Row */}
        <div
          className=" xsm:h-[280px] sm:h-[240px] md:h-[290px] lg:h-[300px] xl:h-[330px] 2xl:h-[350px] w-full overflow-hidden"
          onMouseEnter={() => setIsHoveredRow2(true)}
          onMouseLeave={() => setIsHoveredRow2(false)}
        >
          <div className="relative h-full">
            {/* First set of cards */}
            <div
              className="absolute flex items-center gap-[125px]"
              style={{ transform: `translateX(${scrollPosition2}%)` }}
            >
              {eventNames.slice(10, 20).map((event, index) => (
                <Card key={`row2-${index}`} image={img} text={event} />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div
              className="absolute flex items-center gap-[125px]"
              style={{ transform: `translateX(${scrollPosition2 - 103}%)` }}
            >
              {eventNames.slice(10, 20).map((event, index) => (
                <Card key={`row2-dup-${index}`} image={img} text={event} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
