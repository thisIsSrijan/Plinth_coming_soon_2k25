import { useEffect, useState } from 'react'

const CountdownTimer = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [mins, setMinutes] = useState(0);
    const [secs, setSeconds] = useState(0);

    const deadline = "January, 24, 2025";

    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / (1000 * 60)) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    };

    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className=' container mx-auto mb-[0.5rem] flex items-center justify-center p-0'>
            <div className="flex text-white text-center gap-x-10 md:gap-x-20 lg:gap-x-[10vw] md:mt-2">
                <div className='font-kodchasan w-[10vw]'>
                    <h1 className='text-2xl sm:text-4xl lg:text-6xl font-semibold'>
                        {days < 10 ? "0" + days : days}
                    </h1>
                    <span className='text-sm sm:text-lg lg:text-2xl font-bold'>Days</span>
                </div>
                <div className='font-kodchasan w-[10vw]'>
                    <h1 className='text-2xl sm:text-4xl lg:text-6xl font-semibold'>
                        {hours < 10 ? "0" + hours : hours}
                    </h1>
                    <span className='text-sm sm:text-lg lg:text-2xl font-bold'>Hours</span>
                </div>
                <div className='font-kodchasan w-[10vw]'>
                    <h1 className='text-2xl sm:text-4xl lg:text-6xl font-semibold'>
                        {mins < 10 ? "0" + mins : mins}
                    </h1>
                    <span className='text-sm sm:text-lg lg:text-2xl font-bold'>Mins</span>
                </div>
                <div className='font-kodchasan w-[10vw]'>
                    <h1 className='text-2xl sm:text-4xl lg:text-6xl font-semibold'>
                        {secs < 10 ? "0" + secs : secs}
                    </h1>
                    <span className='text-sm sm:text-lg lg:text-2xl font-bold'>Secs</span>
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;