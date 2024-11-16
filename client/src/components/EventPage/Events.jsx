import { useState, useEffect } from "react";
import "./Events.css";
import Card from "./Card";
import {
  img1,
  img2,
  img3,
  img4,
  img5,
  img6,
  img7,
  img8,
  img9,
  img10,
  img11,
  img12,
  img13,
  img14,
  img15,
  img16,
  img17,
  img18,
  img19,
  img20,
  img21,
  img22,
  img23,
  img24,
  img25,
  img26,
  img27,
  img28,
  img29,
  img30,
  img31,
  img32,
  img33,
  img34,
} from "../../assets/Events_Images/image";

const Events = () => {
  const [scrollPosition1, setScrollPosition1] = useState(0);
  const [scrollPosition2, setScrollPosition2] = useState(0);
  const [isHoveredRow1, setIsHoveredRow1] = useState(false);
  const [isHoveredRow2, setIsHoveredRow2] = useState(false);

  const events = [
    { name: "THE LNMIIT MUN 25'", image: img14 },
    { name: "Change My Mind", image: img15 },
    { name: "Robowars", image: img21 },
    { name: "ROBOCUP", image: img22 },
    { name: "ROBORACE", image: img23 },
    { name: "MOTOBOAT", image: img24 },
    { name: "LNM TECH EXPO", image: img25 },
    { name: "ROBO TRANSPORTER", image: img26 },
    { name: "Maze Solver", image: img27 },
    { name: "RC PLANE", image: img28 },
    { name: "DRONE RACING", image: img29 },
    { name: "MICRO MOUSE", image: img30 },
    { name: "CASECRAFT: HACK & HUSTLE", image: img2 },
    { name: "LNMHacks 7.0", image: img1 },
    { name: "SUSTAIN-A-THON", image: img3 },
    { name: "CodeCraft", image: img16 },
    { name: "Talk Series", image: img17 },
    { name: "BeatLab", image: img18 },
    { name: "CreatiFrenzy", image: img19 },
    { name: "Pixelated Wars", image: img20 },
    { name: "IUPC", image: img9 },
    { name: "Enigma", image: img10 },
    { name: "CP Duels", image: img11 },
    { name: "Coding Cascade", image: img12 },
    { name: "Alice, Bob, Go!", image: img13 },
    { name: "Brahmaand: The Space Ideathon", image: img5 },
    { name: "Starpix", image: img6 },
    { name: "Astromemia", image: img7 },
    { name: "Dhoomketu", image: img8 },
    { name: "CRYPTEX", image: img31 },
    { name: "IPL Auction", image: img32 },
    { name: "BRANDWAGON", image: img33 },
    { name: "BIZMINDS", image: img34 },
    { name: "PITCH ON THE ROCKS", image: img4 },
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
              {events.slice(0, 10).map((event, index) => (
                <Card
                  key={`row1-${index}`}
                  image={event.image}
                  text={event.name}
                />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div
              className="absolute flex items-center gap-[125px]"
              style={{ transform: `translateX(${scrollPosition1 + 103}%)` }}
            >
              {events.slice(0, 10).map((event, index) => (
                <Card
                  key={`row1-dup-${index}`}
                  image={event.image}
                  text={event.name}
                />
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
              {events.slice(10, 20).map((event, index) => (
                <Card
                  key={`row2-${index}`}
                  image={event.image}
                  text={event.name}
                />
              ))}
            </div>
            {/* Duplicate set for seamless loop */}
            <div
              className="absolute flex items-center gap-[125px]"
              style={{ transform: `translateX(${scrollPosition2 - 103}%)` }}
            >
              {events.slice(10, 20).map((event, index) => (
                <Card
                  key={`row2-dup-${index}`}
                  image={event.image}
                  text={event.name}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Events;
