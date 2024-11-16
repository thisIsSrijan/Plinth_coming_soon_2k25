import { PlinthLogo } from "../../assets/svg";
import PropTypes from "prop-types";
const Navbar = ({ showContent }) => {
  return (
    <div className={`fixed w-full left-0 sm:top-[0rem] md:top-[0rem] xl:top-[0rem] lg:top-[0rem] min-w-full text-white flex items-center justify-between lg:h-[5rem] sm:h-[5rem] px-4 sm:px-8 md:px-16 lg:px-20 z-50 bg-transparent transition-opacity duration-500 ease-in-out ${
        showContent ? "opacity-100" : "opacity-0" }`}>
      <div className="flex  sm:h-[5rem] lg:h-[5rem] items-center">
        <img
          src={PlinthLogo}
          alt="Plinth Logo"
          className="h-full w-full"
        />
      </div>
      <div className="px-[1rem] flex flex-nowrap">
      <a className="px-[2rem] text-lg font-semibold whitespace-nowrap" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfi3vFurGQJFpAWGWFjvGR9tG2omPmWwB0M2XV1oHFicRAv6A/viewform?usp=sf_link">Sponsor Us</a>

      <a className="font-semibold text-lg" href="https://unstop.com/college-fests/plinth-2025-plinth-organising-committee-284543" target="_blank" >Register </a>
      </div>
      
    </div>
  );
};

Navbar.propTypes = {
  showContent: PropTypes.bool.isRequired,
};

export default Navbar;
