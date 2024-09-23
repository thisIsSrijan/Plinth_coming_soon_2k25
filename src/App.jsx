import './App.css';
import ProgressBar from './components/ProgressBar';
import Logo from '../public/PlinthLogo.svg';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function App() {
  useGSAP(() => {
    const tl = gsap.timeline();
    const t2 = gsap.timeline({ paused: true });

    // Adjusting the y values for smaller screens
    const isSmallScreen = window.innerWidth < 840; // You can adjust this threshold if needed

    tl.from('#text-1', {
      y: isSmallScreen ? 90 : 90, // Reduced for smaller screens
      duration: 1,
      ease: 'power2.in',
    });

    tl.to('#text-1', {
      y: isSmallScreen ? -80 : -100, // Reduced for smaller screens
      duration: 2,
      ease: 'power4.out',
      delay: 0.75,
    }).call(() => t2.play());

    gsap.to('#text-2', {
      y: isSmallScreen ? -60 : -120, // Reduced for smaller screens
      duration: 2,
      ease: 'power2.in',
      delay: 1.3,
    });

    t2.to('#text-2', {
      y: isSmallScreen ? -160 : -220, // Reduced for smaller screens
      duration: 1.5,
      ease: 'power2.out',
    });

    tl.to('#text-3', {
      y: isSmallScreen ? -150 : -240, // Reduced for smaller screens
      duration: 1.75,
      ease: 'power2.out',
    });

    gsap.to('#logo', {
      rotate: 360,
      duration: 2.5,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <div className="flex w-screen h-screen bg-black items-center">
      <div className="flex mx-auto flex-col sm:flex-row items-center sm:items-start">
        <div>
          <img src={Logo} className="size-28 w-[100px] sm:w-[150px]" id="logo" alt="Logo" />
        </div>
        <ProgressBar />
        <div className="h-auto customBreakpoint:h-[6rem] flex flex-col overflow-hidden ">
          <h3 className="font-Helvetica text-white text-[3.5rem] sm:text-[5.25rem] font-[300] ml-10 sm:ml-10 -mt-2" id="text-1">
            PLINTH
          </h3>
          <h3 className="font-Helvetica text-neon text-[3.5rem] sm:text-[5.25rem] font-[300] ml-4 sm:ml-10 -mt-1.2 " id="text-2">
            COMING
          </h3>
          <h3 className="font-Helvetica text-white text-[3.5rem] sm:text-[5.25rem] font-[300] ml-10 sm:ml-10 -mt-2" id="text-3">
            SOON
          </h3>
        </div>
      </div>
    </div>
  );
}

export default App;
