import { useRef, useState } from "react";
// import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

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
      className="group relative overflow-hidden rounded-lg w-[14rem] text-center px-12 py-2 font-mono font-medium uppercase text-neutral-300 transition-colors hover:text-indigo-300 "
    >
      <div className="relative z-10 flex items-center  gap-2 w-[14rem]">
        {/* <FiLock /> */}
        <span className="text-center sm:text-[2rem] sm:ml-0 sm:mr-2 customBreakpoint:text-[1.5rem] customBreakpoint:ml-3">{text}</span>
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
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-[#75B700]/0 from-40% via-[#75B700] to-[#A6D785]/0 to-60% opacity-0 transition-opacity group-hover:opacity-100  w-[14rem]"
      />
    </motion.button>
  );
};

export default Example;
