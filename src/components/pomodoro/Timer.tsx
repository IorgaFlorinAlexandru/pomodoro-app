import { useState, useRef, useEffect } from 'react';
import PomIcon from '../PomIcon';

function Timer() {

    const [start, setStart] = useState(false);
    const [isPaused, setIsPaused] = useState(false);
    const [isBreakTime, setIsBreakTime] = useState(false);

    const SECONDS = 10;
    const time = useRef(SECONDS);
    const [displayedTime, setDisplayedTime] = useState(getDisplayedTime(time.current));
    const intervalId = useRef<ReturnType<typeof setInterval> | null>(null);


    useEffect(() => {
        return () => {
            removeInterval();
        };
    },[]);

    function startFocus(): void {
        setStart(true);
        startInterval();
    }

    function pause(): void {
        setIsPaused(true);
        removeInterval();
    }

    function reset(): void {
        setStart(false);
        setIsPaused(false);
        setIsBreakTime(false);

        removeInterval();
        time.current = SECONDS;
        setDisplayedTime(getDisplayedTime(time.current));
    }

    function resume(): void {
        setIsPaused(false);
        startInterval();
    }

    function startBreak(): void {
    }

    function getDisplayedTime(seconds: number): string {
        const m = ~~(seconds / 60);
        let mStr = m.toString();
        if(m < 10) 
            mStr = mStr.padStart(2,'0');

        const s = seconds % 60;
        let sStr = s.toString();
        if(s < 10)
            sStr = sStr.padStart(2,'0');

        return `${mStr}:${sStr}`;
    }

    function startInterval(): void {
        intervalId.current = setInterval(() => {
            time.current--;

            if(time.current === 0) {
                time.current = 300;
                setIsBreakTime(true);
                removeInterval();
            }
            
            setDisplayedTime(getDisplayedTime(time.current));
        },1000);
    }

    function removeInterval(): void {
        if(!intervalId.current) return;
        clearInterval(intervalId.current);
        intervalId.current = null;
    }

    let buttons = <>
       {!isPaused ? ( 
         <button onClick={pause} className="flex justify-center 
            items-center w-24 py-1 pr-1 rounded btn-warning">
            <PomIcon icon="pause" className="w-6 h-6 mr-1"/>
            Pause 
         </button>
        ) :
        (
         <button onClick={resume} className="flex justify-center 
            items-center w-28 py-1 pr-1 rounded btn-tertiary">
            <PomIcon icon="resume" className="w-6 h-6 mr-1"/>
            Resume 
         </button>
        )}
        <button onClick={reset} className="flex justify-center 
            items-center w-24 py-1 pr-1 rounded btn-danger">
            <PomIcon icon="reset" className="w-6 h-6 mr-1"/>
            Reset 
        </button>
    </>

    if(!start) {
        buttons = <>
            <button onClick={startFocus} className="flex justify-center 
                items-center w-48 py-1 pr-1 rounded btn-primary">
                <PomIcon icon="play_arrow" className="w-6 h-6 mr-1"/>
                Start to focus
            </button>
        </>
    }

    if(isBreakTime) {
        buttons = <>
            <button onClick={startBreak} className="flex justify-center 
                items-center w-48 py-1 pr-1 rounded btn-secondary">
                <PomIcon icon="coffee" className="w-6 h-6 mr-1"/>
                Take a break
            </button>
        </>
    }
    

    return (
        <>
            <div className="flex flex-col justify-center items-center h-full">
                <h1 className="text-8xl font-bold">{displayedTime}</h1>
                <div className="flex justify-center items-center h-5
                    mt-3 p-2 rounded-lg text-sm font-semibold cursor-pointer
                    bg-gruvbox-gray-500">
                    <div className="w-2.5 h-2.5 mr-1 rounded-full 
                        bg-gruvbox-purple-400"></div>
                    <span>Study</span>
                </div>
                <div className="flex flex-wrap justify-center gap-4 mt-7
                    font-medium text-lg">
                    {buttons}
                </div>
            </div>
        </>
    );
}

export default Timer;
