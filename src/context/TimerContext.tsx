import { createContext,useContext, ReactNode } from 'react';
import { TimerService } from '../services/timer.service';

const TimerContext = createContext<TimerService | null>(null);

export function TimerProvider({ children }:{ children?: ReactNode}) {
    const timerService = new TimerService();

    return (
        <TimerContext.Provider value={timerService}>
            {children}
        </TimerContext.Provider>
        )

}

export const useTimerContext = () => useContext(TimerContext)!;
