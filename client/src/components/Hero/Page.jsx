import { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { Glow } from "../../assets/svg";
import { arrow1 } from "../../assets/svg";
import { arrow2 } from "../../assets/svg";
import "./page.css"
import CountdownTimer from "../utils/CountdownTimer";
function throttle(func, delay) {
  let lastCall = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return func(...args);
  };
}

const Page = () => {
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [showXXV, setShowXXV] = useState(false);
  const [showComingSoon, setShowComingSoon] = useState(false);

  const onMouseMove = useCallback(
    throttle((e) => {
      const card = e.currentTarget;
      const box = card.getBoundingClientRect();
      const x = e.clientX - box.left;
      const y = e.clientY - box.top;
      const centerX = box.width / 2;
      const centerY = box.height / 2;
      const rotateX = (y - centerY) / 35;
      const rotateY = (centerX - x) / 35;

      setRotate({ x: rotateX, y: rotateY });
    }, 100),
    []
  );

  const onMouseLeave = () => {
    setRotate({ x: 0, y: 0 });
  };

  useEffect(() => {
    const xxvTimeout = setTimeout(() => {
      setShowXXV(true);
    }, 5700);

    const comingSoonTimeout = setTimeout(() => {
      setShowComingSoon(true);
    }, 6200);

    return () => {
      clearTimeout(xxvTimeout);
      clearTimeout(comingSoonTimeout);
    };
  }, []);

  return (
    
    <section className="w-full mt-[2rem] overflow-y-hidden min-h-screen flex items-center justify-center">
      <div className="relative overflow-y-hidden w-full flex flex-col items-center">
        
        <div className="relative w-full flex flex-col overflow-x-hidden overflow-y-hidden items-center">
        
          <div className="relative">
          <div className="absolute xsm:w-[20rem] xsm:top-[40rem] md:w-[40rem] md:top-[33rem] lg:top-[33rem] lg:w-[60rem] top-[26rem] w-[60rem] h-[65rem] -z-10 overflow-hidden glow1 overflow-y-hidden">
              <img 
                src={Glow} 
                alt="Plinth Glow" 
                className="w-full h-auto"
              />
            </div> 

            <div
              onMouseMove={onMouseMove}
              onMouseLeave={onMouseLeave}
              style={{
                transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
                transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
              }}
              className="text-transparent bg-Green-gradient bg-clip-text text-[3rem] sm:text-[4rem] md:text-[6rem] lg:text-[10em] xl:text-[12rem] 2xl:text-[14rem]  font-extrabold font-akira leading-none tracking-[0.5rem] sm:tracking-[1.2rem] md:tracking-[1.7rem] overflow-y-hidden relative"
            >
              PLINTH
            </div>
          </div>

          <div
            onMouseMove={onMouseMove}
            onMouseLeave={onMouseLeave}
            style={{
              transform: `perspective(1000px) rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) scale3d(1, 1, 1)`,
              transition: "all 400ms cubic-bezier(0.03, 0.98, 0.52, 0.99) 0s",
            }}
            className="xxv-container mt-4"
          >
            <h1 className="xxv-text text-[4rem] sm:text-[3rem] md:text-[5.5rem] lg:text-[10em] xl:text-[12rem] 2xl:text-[14rem]">
              {["X", "X", "V"].map((letter, index) => (
                <motion.span
                  key={index}
                  className={`xxv-letter font-extrabold font-akira leading-none xxv-gradient`}
                  initial={{ opacity: 0, y: 100 }}
                  animate={showXXV ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 2.5,
                    delay: showXXV ? index * 0.2 : 0,
                    type: "spring",
                    stiffness: 100,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </h1>
          </div>
          <CountdownTimer />

          {/* Arrows */}
          <div className="flex flex-col items-center gap-2 mt-[2rem]">
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

        </div>
      </div>
    </section>
  );
};  

export default Page;