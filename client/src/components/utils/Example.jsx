import { useRef, useState } from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
const Example = ({targetText}) => {
  return (
    <div className="grid place-content-center sm:w-[15rem] text-center border-2 border-[#75B700] rounded-[0.5rem] customBreakpoint:w-[8rem] customBreakpoint:text-[1rem]">
      <EncryptButton targetText={targetText}  />
    </div>
  );
};

const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;
const CHARS = "!@#$%^&*():{};|,.<>/?";

const EncryptButton = ({ targetText }) => {
  const intervalRef = useRef(null);
  const [text, setText] = useState(targetText);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = targetText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }
          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];
          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= targetText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);
    setText(targetText);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className="group relative overflow-hidden rounded-lg max-w-[17rem] text-center px-0 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-[#c6f770] "
    >
      <div className="relative z-10 flex items-center  gap-2 ">
        {/* <FiLock /> */}
        <span className="text-center sm:text-[2rem] customBreakpoint:text-[1.5rem]">
          {text}
        </span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-[#75B700]/0 from-40% via-[#75B700] to-[#A6D785]/0 to-60% opacity-0 transition-opacity group-hover:opacity-100 w-[16rem]"
      />
    </motion.button>
  );
};

Example.propTypes = {
  targetText: PropTypes.string.isRequired,
};

EncryptButton.propTypes = {
  targetText: PropTypes.string.isRequired,
};

export default Example;
