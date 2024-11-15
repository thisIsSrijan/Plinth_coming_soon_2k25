import { Glow } from "../../assets/svg";
import { arrow1 } from "../../assets/svg";
import { arrow2 } from "../../assets/svg";
import About from './About';

const AboutPlinth = () => {
  const aboutProps = {
    title: "ABOUT",
    subtitle: "PLINTH'25",
    description: "Plinth, the annual techno-management fest of LNMIIT Jaipur, is a three-day celebration of innovation, competition, and intellectual engagement, drawing students and tech enthusiasts from across India. Recognized as one of the nation's leading college tech fests, Plinth combines emerging technologies with immersive experiences, creating an inspiring environment for all attendees. This year's edition of Plinth offers a dynamic lineup that extends beyond Web3, embracing advanced fields like robotics, artificial intelligence, and cybersecurity. From intense hackathons to an exhilarating Robotics nexus and the esteemed Model United Nations, every event is designed to challenge, inspire, and foster innovation. Additionally, the renowned Talk Series will feature distinguished personalities from the tech world, sharing invaluable insights and sparking meaningful conversations on the future of technology—all as part of this exciting, multifaceted experience. Plinth is all set to welcome you to this extraordinary three-day fusion of science, technology, and celebration from January 24th to January 26th, 2025. Code. Create. Celebrate: Plinth!",
    targetText: "Register",
    buttonLink: "https://unstop.com/college-fests/plinth-2025-plinth-organising-committee-284543",
    showGlow: true,
    showArrows: true,
    className: "",
    glow: Glow,
    arrow1: arrow1,
    arrow2: arrow2
  };

  return <About {...aboutProps} />;
};

export default AboutPlinth;