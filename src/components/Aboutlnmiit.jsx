import { Glow } from "../assets/svg";
import { arrow1 } from "../assets/svg";
import { arrow2 } from "../assets/svg";

const Aboutlnmiit = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-y-4 relative p-4 mt-32">
      <div className="  max-w-[1110px] w-full flex flex-col justify-between items-center gap-y-4 relative">
        <div className=" w-[80rem] gradient-text mt-2 text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] customBreakpoint:text-[1.5rem] text-center customBreakpoint:tracking-[0.1rem]">
          ABOUT
        </div>

        <div className="lg:text-[6rem] md:text-[4rem] sm:text-[2.5rem] customBreakpoint:text-[1.5rem] text-center font-extrabold xxv-gradient">
          LNMIIT
        </div>

        <div className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] customBreakpoint:text-[0.8rem] text-justify font-medium mt-4 px-4">
        The LNM Institute of Information Technology, Jaipur, is a prestigious institution founded in 2002 as a joint venture between the Government of Rajasthan and the Lakshmi and Usha Mittal Foundation. LNMIIT is at the forefront of academic and intellectual excellence, committed to fostering innovation through pioneering research and a technologically-driven teaching pedagogy across science, technology, engineering, arts, and management. Known for its diverse and inclusive community, the institute provides a platform for students to learn, research, and grow. 
        Plinth, the annual techno-management fest, embodies this spirit of innovation, creating an inspiring environment for students, professionals, and thought leaders to come together and celebrate technology, creativity, and collaboration.
        </div>

        <div className="mt-6 md:mb-44 customBreakpoint:mb-24">
          <button className="w-[10rem] h-[3rem] sm:w-[12rem] sm:h-[3.5rem] md:w-[14rem] md:h-[4rem] rounded-[0.5rem] border-2 border-[#75B700] text-[1.2rem] sm:text-[1.5rem] font-bold ">
            MAP LINK
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
  );
};

export default Aboutlnmiit;