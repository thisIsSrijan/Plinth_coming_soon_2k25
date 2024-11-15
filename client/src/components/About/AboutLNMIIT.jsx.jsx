import { Glow } from "../../assets/svg";
import { arrow1 } from "../../assets/svg";
import { arrow2 } from "../../assets/svg";
import About from './About';

const AboutLNMIIT = () => {
  const aboutProps = {
    title: "ABOUT",
    subtitle: "LNMIIT",
    description: "The LNM Institute of Information Technology, Jaipur, is a prestigious institution founded in 2002 as a joint venture between the Government of Rajasthan and the Lakshmi and Usha Mittal Foundation. LNMIIT is at the forefront of academic and intellectual excellence, committed to fostering innovation through pioneering research and a technologically-driven teaching pedagogy across science, technology, engineering, arts, and management. Known for its diverse and inclusive community, the institute provides a platform for students to learn, research, and grow. Plinth, the annual techno-management fest, embodies this spirit of innovation, creating an inspiring environment for students, professionals, and thought leaders to come together and celebrate technology, creativity, and collaboration.",
    targetText: "MAP LINK",
    buttonLink: "https://lnmiit.ac.in/campus-map/",
    showGlow: true,
    showArrows: true,
    className: "",
    glow: Glow,
    arrow1: arrow1,
    arrow2: arrow2
  };

  return <About {...aboutProps} />;
};

export default AboutLNMIIT;