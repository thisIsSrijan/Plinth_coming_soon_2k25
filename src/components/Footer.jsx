import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import logo from '../assets/logo.png';
import insta from '../assets/insta.png';
import linkd from '../assets/linkedin.png';
import plinthtext2 from '../assets/plinthtext2.png';
import Home from '../assets/Home.png';
import Sponsor from '../assets/SPONSOR.png';
import Register from '../assets/REGISTER.png';
import Gdg from '../assets/gdg.svg';

const Footer = () => {
  useEffect(() => {
    const splide = new Splide('.splide', {
      type: 'loop',
      drag: true,
      autoWidth: false,
      gap: 1,
      pagination: false,
      arrows: false,
      autoScroll: {
        speed: 10, // Increased speed
        pauseOnHover: true,
      },
    });

    splide.mount({ AutoScroll });

    return () => splide.destroy();
  }, []);

  return (
    <div className="flex flex-col bg-black items-center justify-center text-white p-10 font-akira ">
      {/* Navigation Links */}
      <div className="flex items-center justify-around  w-full px-20">
        <a href="#"><img src={Register} alt="Register" className="w-[540px] h-[68px]" /></a>
        <a href="#"><img src={Home} alt="Home" className="w-[540px] h-[78px]" /></a>
        <a href="#"><img src={Sponsor} alt="Sponsor" className="w-[540px] h-[68px]" /></a>
      </div>

      {/* Carousel Section */}
      <div className="splide w-full mb-4">
        <div className="splide__track">
          <ul className="splide__list">
            <li className="splide__slide">
            <div className='flex gap-5 items-center justify-center'>
  {/* Logo */}
  <img className='mr-5' src={logo} alt="Logo" />

  {/* PLINTH with gradient */}
  <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-white via-[#999999] to-white text-[250px] font-extrabold  ">
    PLINTH'' 
  </h2>

  {/* 25 with custom gradient */}
  <h2
  className="text-transparent bg-clip-text text-[250px] font-extrabold  bg-[linear-gradient(90deg,#75B700_0%,#456B02_6.4%,#97E50E_12.4%,#75B700_16.4%,#E1FEAD_24.9%,#82B22D_28.4%,#95E110_48%,#365400_55.9%,#96E30F_60.98%,#8BD30C_66.4%,#C2FD5B_72.39%,#97E50E_83.4%,#97E50E_91.4%,#235300_100%)]"
>
  25
</h2>

</div>

            </li>
           
          </ul>
        </div>
      </div>

      {/* Footer Content */}
      <div className="flex h-1 w-full bg-white mb-4"></div>
      <div className="flex items-center justify-around  w-full px-20">
      <div className="text-center text-5xl">
  <h2 className="font-akira text-[50px] font-extrabold text-left">YUG AGGRAWAL</h2>
  <p className="font-poppins text-[30px] font-extrabold leading-[45px] text-center text-5xl">+91 82990 99721</p>
</div>

        
        {/* Social Media and Text Logo Section */}
        <div>
        <a href="https://www.instagram.com/plinth.lnmiit/?hl=en" target="_blank" rel="noopener noreferrer">
            <img src={insta} alt="Instagram"  />
          </a>
          
        </div>

        <div>
        
            <img src={plinthtext2} alt="Plinth Text Logo"  />
          
        </div>

        <div>
        <a href="https://www.linkedin.com/company/plinthlnmiit" target="_blank" rel="noopener noreferrer">
            <img src={linkd} alt="LinkedIn"  />
          </a>
        </div>

        <div className="text-center text-5xl">
  <h2 className="font-akira text-[50px] font-extrabold text-left">RAJAT SHARMA</h2>
  <p className="font-poppins text-[30px] font-extrabold leading-[45px] text-center text-5xl">+91 89721 92855</p>
</div>

      </div>

      <div className="flex h-1 w-full bg-white my-4"></div>
      
      {/* Developed By Section */}
      <div className="flex items-center justify-center gap-5  w-full">
        <h2 className='text-5xl'>DESIGNED AND DEVELOPED BY:</h2>
        <img src={Gdg} alt="GDG Logo" />
        <p className='text-5xl'>Google Developer Groups On Campus</p>
      </div>
    </div>
  );
};

export default Footer;
