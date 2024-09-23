import React, { useEffect, useState } from 'react';
import gsap from 'gsap';

const ProgressBar = () => {
    const [progressBarWidth, setProgressBarWidth] = useState('20rem'); // Default width

    useEffect(() => {
        const updateWidth = () => {
            const screenWidth = window.innerWidth;
    
            if (screenWidth < 425) {
                setProgressBarWidth('12rem'); 
            } else if (screenWidth >= 425 && screenWidth < 768) {
                setProgressBarWidth('15rem'); 
            } else if (screenWidth >= 768 && screenWidth < 1024) {
                setProgressBarWidth('22rem');
            } else if (screenWidth >= 1024 && screenWidth < 1440) {
                setProgressBarWidth('32rem');
            } else {
                setProgressBarWidth('40rem');
            }
        };

        // Set the initial width
        updateWidth();

        // Update width on window resize
        window.addEventListener('resize', updateWidth);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    useEffect(() => {
        const tl = gsap.timeline();

        tl.to('#progress', {
            width: '33%',
            duration: 2,
        });

        tl.to('#progress', {
            width: '66%',
            duration: 2,
        });

        tl.to('#progress', {
            width: '100%',
            duration: 1.5,
        });
    }, []);

    return (
        <div
            className="bg-white h-[0.1rem] sm:h-[0.15rem] mt-12 ml-8"
            style={{ width: progressBarWidth }} // Use state to dynamically control width
        >
            <div
                className="bg-neon h-[0.1rem] sm:h-[0.15rem] -mt-[0.12rem] "
                style={{ width: '0%' }}
                id='progress'
            />
        </div>
    );
};

export default ProgressBar;
