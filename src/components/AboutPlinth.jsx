import { Glow } from "../assets/svg";
import { arrow1 } from "../assets/svg";
import { arrow2 } from "../assets/svg";
const AboutPlinth = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-y-4 relative p-4 mt-32">
      <div className="  max-w-[1110px] w-full flex flex-col justify-between items-center gap-y-4 relative">
        <div className=" w-[80rem] gradient-text mt-2 text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] customBreakpoint:text-[1.5rem] text-center customBreakpoint:tracking-[0.1rem]">
          ABOUT
        </div>

        <div className="lg:text-[6rem] md:text-[4rem] sm:text-[2.5rem] customBreakpoint:text-[1.5rem] text-center font-extrabold xxv-gradient">
          PLINTH'25
        </div>

        <div className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] customBreakpoint:text-[0.8rem] text-justify font-medium mt-4 px-4">
        Plinth, the annual techno-management fest of LNMIIT Jaipur, is a three-day celebration of innovation, competition, and intellectual engagement, drawing students and tech enthusiasts from across India. Recognized as one of the nation’s leading college tech fests, Plinth combines emerging technologies with immersive experiences, creating an inspiring environment for all attendees.

This year’s edition of Plinth offers a dynamic lineup that extends beyond Web3, embracing advanced fields like robotics, artificial intelligence, and cybersecurity. From intense hackathons to an exhilarating Robotics nexus and the esteemed Model United Nations, every event is designed to challenge, inspire, and foster innovation. Additionally, the renowned Talk Series will feature distinguished personalities from the tech world, sharing invaluable insights and sparking meaningful conversations on the future of technology—all as part of this exciting, multifaceted experience.

Plinth is all set to welcome you to this extraordinary three-day fusion of science, technology, and celebration from January XYZ to ABC, 2025.

Code. Create. Celebrate: Plinth!
        </div>

        <div className="mt-6 md:mb-44 customBreakpoint:mb-24">
          <button className="w-[10rem] h-[3rem] sm:w-[12rem] sm:h-[3.5rem] md:w-[14rem] md:h-[4rem] rounded-[0.5rem] border-2 border-[#75B700] text-[1.2rem] sm:text-[1.5rem] font-bold ">
            Register
          </button>
        </div>

        <div className="overflow-hidden absolute top-[80%] w-[30rem] h-[30rem] sm:w-[40rem]   lg:w-[60rem] lg:h-[60rem] z-10 hidden md:block md:mt-[-61rem] lg:mt-[-77rem] xl:mt-[]">
          <img src={Glow} alt="Plinth Glow" className="w-full h-full object-cover" />
        </div>

        <img
          className="absolute top-[89%] left-1/2 transform -translate-x-1/2 w-[1rem] h-[0.5rem] sm:w-[2rem] sm:h-[1rem] md:w-[2.5rem] md:h-[1.5rem]"
           src={arrow1}
          alt="Arrow 1"
        />
        <img
          className="absolute top-[90%] left-1/2 transform -translate-x-1/2 w-[1rem] h-[1rem] sm:w-[2rem] sm:h-[2rem] md:w-[2.5rem] md:h-[2.5rem] mb-5"
           src={arrow2}
          alt="Arrow 2"
        />
      </div>
    </div>
  )
}

export default AboutPlinth