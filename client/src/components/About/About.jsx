import { motion } from "framer-motion";
import PropTypes from 'prop-types';
import Example from "../utils/Example";
const About = ({
  title = "",
  subtitle = "",
  description = "",
  targetText = "",
  buttonLink = "#",
  showGlow = true,
  showArrows = true,
  className = "",
  glow,
  arrow1,
  arrow2
}) => {
  const containerClasses = `w-full min-h-screen relative ${className}`;
  
  return (
    <div className={containerClasses}>
      <div className="max-w-[1110px] mx-auto py-4 md:py-8 relative flex flex-col items-center h-full">
        {showGlow && (
          <div className="overflow-hidden absolute top-[95%] w-[30rem] h-[30rem] sm:w-[40rem] lg:w-[60rem] lg:h-[60rem] z-[-1] hidden md:block md:mt-[-61rem] lg:mt-[-77rem]">
            <img src={glow} alt="Background Glow" className="w-full h-full object-cover" />
          </div>
        )}

        <div className="relative z-10 w-full flex flex-col items-center">
        <div className="overflow-hidden absolute top-[95%] w-[30rem] h-[30rem] sm:w-[40rem] lg:w-[60rem] lg:h-[60rem] z-[-1] hidden md:block md:mt-[-61rem] lg:mt-[-77rem]">
            <img src={glow} alt="Background Glow" className="w-full h-full object-cover" />
          </div>
          <div className="w-[80rem] gradient-text mt-2 text-[2rem] sm:text-[3rem] md:text-[5rem] lg:text-[6rem] xl:text-[8rem] 2xl:text-[10rem] customBreakpoint:text-[3rem] text-center xsm:tracking-[0.1rem]">
            {title}
          </div>

          <div className="lg:text-[6rem] md:text-[4rem] sm:text-[2.5rem] customBreakpoint:text-[1.5rem] text-center font-extrabold xxv-gradient">
            {subtitle}
          </div>

          {/* Text Content */}
          <div className="xsm:max-h-[84vh] sm:max-h-[45vh] md:max-h-none overflow-y-auto w-full">
            <div className="text-[1rem] sm:text-[1.2rem] md:text-[1.5rem] lg:text-[1.8rem] customBreakpoint:text-[0.8rem] text-justify font-medium mt-4 px-4">
              {description}
            </div>
          </div>

          {/* Button */}
          {targetText && (
            <div className="mt-6 md:mb-[6rem] customBreakpoint:mb-[6rem] ">
              <a
                href={buttonLink || "https://lnmiit.ac.in/campus-map/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="w-[10rem] h-[1rem] sm:w-[12rem] sm:h-[3.5rem] md:w-[14rem] md:h-[4rem] rounded-[0.5rem] mt-[1rem] text-[1.2rem] sm:text-[1.5rem] font-bold hover:text-white transition-colors duration-300 flex justify-center items-center">
                  {<Example targetText={targetText} />}
                </button>
              </a>
            </div>
          )}

          {/* Animated Arrows */}
          {showArrows && (
            <div className="flex flex-col items-center gap-2 lg:mt-[0rem] xsm:mt-[0rem] sm:mt-[1rem] md:mt-[0rem]">
              <motion.img
                className="w-[2rem] pt-[0rem]"
                src={arrow1}
                alt="Arrow 1"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />


              <motion.img
                className="w-[2rem]"
                src={arrow2}
                alt="Arrow 2"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  glow: PropTypes.string.isRequired,
  arrow1: PropTypes.string.isRequired,
  arrow2: PropTypes.string.isRequired,

  
  targetText: PropTypes.string,
  buttonLink: PropTypes.string,
  showGlow: PropTypes.bool,
  showArrows: PropTypes.bool,
  className: PropTypes.string,
};

About.defaultProps = {
  title: "",
  subtitle: "",
  description: "",
  targetText: "",
  buttonLink: "#",
  showGlow: true,
  showArrows: true,
  className: "",
};


export default About;