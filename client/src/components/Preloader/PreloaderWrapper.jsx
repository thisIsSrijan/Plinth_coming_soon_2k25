import AnimatedPreloader from "./AnimatedPreloader";
import PropTypes from "prop-types";
const PreloaderWrapper = ({ isPreloading }) => {
  return (
    <div
      className="fixed inset-0 z-50 bg-transparent transition-transform duration-1000 ease-in-out"
      style={{
        transform: isPreloading ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <AnimatedPreloader />
    </div>
  );
};


PreloaderWrapper.propTypes = {
    isPreloading: PropTypes.bool.isRequired,
  };

export default PreloaderWrapper;
