import { Glow } from "../../assets/svg";
import { arrow1 } from "../../assets/svg";
import { arrow2 } from "../../assets/svg";
import Example from "../utils/Example";

const CampusAmbassador = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center gap-y-4 relative lg:p-4 lg:mt-32 sm:mt-10 customBreakpoint:mt-5 customBreakpoint:p-0">
      <div className="  max-w-[1110px] w-full flex flex-col justify-between items-center gap-y-4 relative">
        <div className=" w-[80rem] gradient-text mt-2 text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] customBreakpoint:text-[1.5rem] text-center customBreakpoint:tracking-[0.1rem]">
          CAMPUS
        </div>

        <div className="lg:text-[6rem] md:text-[4rem] sm:text-[2.5rem] customBreakpoint:text-[1.5rem] text-center font-extrabold xxv-gradient">
          AMBASSADOR
        </div>

        <div className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] customBreakpoint:text-[0.8rem] text-justify font-medium mt-4 px-4">
        Plinth offers an exciting part-time opportunity for students to engage in multiple fields like programming, gaming, Model United Nations (MUN), and more. As a Campus Ambassador, you’ll represent one of India’s most prestigious techno-management fests at your college, playing a key role in spreading awareness about Plinth’s events, schedules, and opportunities. Your mission will be to encourage participation, create a buzz, and engage your peers in the fest’s diverse activities, while networking with professionals and tech enthusiasts from universities across the country.

In return, you’ll enjoy a range of exclusive perks, including exciting prizes, certificates, free entry and registration, event goodies, Pronite passes, and Letters of Recommendation (LoR) for your efforts. This is your chance to make lasting connections and be part of a dynamic community that celebrates innovation, creativity, and collaboration.

Join the Plinth family today and help us make this year’s fest an unforgettable experience for all!
        </div>

        <div className="mt-6 md:mb-44 customBreakpoint:mb-24">
          <a href="https://forms.gle/ncm3TJddD2Whmzcx6" target="_blank" rel="noopener noreferrer">
            <Example targetText="JOIN US" />
          </a>
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

export default CampusAmbassador