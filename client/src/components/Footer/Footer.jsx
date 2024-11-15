import insta from '../../assets/insta.png';
import linkd from '../../assets/linkedin.png';
import plinthtext2 from '../../assets/plinthtext2.png';
import Gdg from '../../assets/gdg.svg';
import Web from '../../assets/Web.png';
import Phone from '../../assets/Phone.png'; // Make sure this is the phone image
import bg from '../../assets/bgm.png'; // Background image import
import React from 'react';

const Footer = () => {
  return (
    <div className='w-full relative flex-col flex-wrap'>
      <div className='flex flex-wrap w-full justify-around items-center p-10 bg-black z-10 mb-10'>
        <div className='flex-col flex gap-5'>
          <h2 className="text-center font-poppins font-normal tracking-[0.16em] text-2xl md:text-4xl sm:text-lg">
            Get In Touch
          </h2>
          <div className='flex justify-evenly'>
            {/* Instagram and LinkedIn links */}
            <a href="https://www.instagram.com/plinth.lnmiit/?hl=en" target="_blank" rel="noopener noreferrer">
              <img src={insta} alt="Instagram" className="w-6 h-6 sm:w-5 sm:h-5" />
            </a>
            <a href="https://www.linkedin.com/company/plinthlnmiit/" target="_blank" rel="noopener noreferrer">
              <img src={linkd} alt="LinkedIn" className="w-6 h-6 sm:w-5 sm:h-5" />
            </a>
            <a href=""><img src={Web} alt="Web" className="w-6 h-6 sm:w-5 sm:h-5" /></a>
          </div>

          <div>
            <p className="text-center font-poppins text-[10px] sm:text-[16px] md:text-[20px]">
              ALL RIGHTS RESERVED
            </p>
            <p className="text-center font-poppins text-[10px] sm:text-[16px] md:text-[20px]">
              PLINTH LNMIIT
            </p>
          </div>
        </div>

        <img src={plinthtext2} alt="Plinth Text" className="w-[200px] h-[80px] md:w-[286px] md:h-[89px] sm:w-[180px] sm:h-[156px]" />

        <div className='flex flex-col gap-5'>
          <h2 className="text-center font-poppins font-normal tracking-[0.16em] text-2xl md:text-4xl sm:text-lg">
            Contact Us:
          </h2>
          <div className='flex-col justify-around'>
            <ul className="list-none">
              <li className="flex items-center font-poppins font-normal leading-6 tracking-[0.16em] text-center text-[10px] sm:text-[14px] md:text-lg">
                <img src={Phone} alt="phone icon" className="w-5 h-5 mr-2" /> YUG AGARWAL : 8299099721
              </li>
              <li className="flex items-center font-poppins font-normal leading-6 tracking-[0.16em] text-center text-[10px] sm:text-[14px] md:text-lg">
                <img src={Phone} alt="phone icon" className="w-5 h-5 mr-2" /> RAJAT SHARMA : 8972192855
              </li>
            </ul>
          </div>
          <div>
            <p className="text-center font-poppins text-[10px] sm:text-[14px] md:text-[20px]">
              <a href="#">About Us</a>
            </p>
            <p className="text-center font-poppins text-[10px] sm:text-[14px] md:text-[20px]">
              <a href="#">Privacy Policy</a>
            </p>
          </div>
        </div>

      </div>
      
      <div className='z-10 text-black absolute bottom-0 w-full flex justify-center items-center ' style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <p className="font-poppins text-[12px] sm:text-[16px] md:text-2xl font-normal tracking-[0.16em] text-center">
          <img src={Gdg} alt="GDG logo" className="inline-block w-8 h-8 mr-3" />
          Designed and developed by GDG on Campus, LNMIIT
        </p>
      </div>
    </div>
  );
}

export default Footer;
