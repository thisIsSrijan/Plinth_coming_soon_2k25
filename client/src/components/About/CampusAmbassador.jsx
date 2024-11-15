import { Glow } from "../../assets/svg";
import { arrow1 } from "../../assets/svg";
import { arrow2 } from "../../assets/svg";
import About from './About';

const CampusAmbassador = () => {
  const aboutProps = {
    title: "CAMPUS",
    subtitle: "AMBASSADOR",
    description: "Plinth offers an exciting part-time opportunity for students to engage in multiple fields like programming, gaming, Model United Nations (MUN), and more. As a Campus Ambassador, you'll represent one of India's most prestigious techno-management fests at your college, playing a key role in spreading awareness about Plinth's events, schedules, and opportunities. Your mission will be to encourage participation, create a buzz, and engage your peers in the fest's diverse activities, while networking with professionals and tech enthusiasts from universities across the country.\n\nIn return, you'll enjoy a range of exclusive perks, including exciting prizes, certificates, free entry and registration, event goodies, Pronite passes, and Letters of Recommendation (LoR) for your efforts. This is your chance to make lasting connections and be part of a dynamic community that celebrates innovation, creativity, and collaboration.\n\nJoin the Plinth family today and help us make this year's fest an unforgettable experience for all!",
    targetText: "JOIN US",
    buttonLink: "https://forms.gle/ncm3TJddD2Whmzcx6",
    showGlow: true,
    showArrows: true,
    className: "",
    glow: Glow,
    arrow1: arrow1,
    arrow2: arrow2
  };

  return (
    <About 
      {...aboutProps}
    />
  );
};

export default CampusAmbassador;