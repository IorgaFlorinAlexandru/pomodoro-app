import { useState, useEffect } from 'react';
import PomIcon from '../PomIcon';
import { useTimerContext } from '../../context/TimerContext';

function Timer() {
    const timerService = useTimerContext();

    const [start, setStart] = useState(timerService.hasStarted);
    const [isPaused, setIsPaused] = useState(timerService.isPaused);
    const [isBreakTime, setIsBreakTime] = useState(timerService.isBreak);

    const [displayedTime, setDisplayedTime] = useState(getDisplayedTime(timerService.getCurrentTime()));

    useEffect(() => {
        timerService.callback = setTime;
        return () => {
            timerService.callback = null;
        }
    },[]);

    function startFocus(): void {
        timerService.startFocusSession();
        setStart(true);
    }

    function pause(): void {
        timerService.pause();
        setIsPaused(true);
    }

    function reset(): void {
        timerService.reset();
        setStart(false);
        setIsPaused(false);
        setIsBreakTime(false);

        setDisplayedTime(getDisplayedTime(1500));
    }

    function resume(): void {
        setIsPaused(false);
        timerService.resume();
    }

    function startBreak(): void {
        timerService.startBreak();
    }

    function setTime(seconds: number): void {
        setDisplayedTime(getDisplayedTime(seconds));
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
