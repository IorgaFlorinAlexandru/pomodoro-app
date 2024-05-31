export class TimerService {
    constructor() {};

    private focusTime: number = 1500;
    private breakTime: number = 300;

    private currentTime: number = this.focusTime;
    private intervalId: ReturnType<typeof setInterval> | null = null;

    public callback: ((seconds: number) => void) | null = null;
    //MOVE TO STATE
    public hasStarted = false;
    public isPaused = false;
    public isBreak = false;

    public setFocusTime(seconds: number): void {
        this.focusTime = seconds;
    }

    public setBreakTime(seconds: number): void {
        this.focusTime = seconds;
    }

    public getCurrentTime(): number {
        return this.currentTime;
    }

    public startFocusSession(): void {
        this.hasStarted = true;
        this.startInterval(this.focusTime);
    }
    
    public startBreak(): void {
        this.hasStarted = true;
        this.isBreak = true;
        this.startInterval(this.breakTime);
    }

    public pause(): void {
        this.isPaused = true;
        this.closeInterval();
    }

    public resume(): void {
        this.isPaused = false;
        this.startInterval(this.currentTime);
    }

    public reset(): void {
        this.closeInterval();
        this.currentTime = this.focusTime;
        this.hasStarted = false;
        this.isPaused = false;
        this.isBreak = false;
    }

    private startInterval(seconds: number): void {
        this.currentTime = seconds;
        this.intervalId = setInterval(() => {
            this.currentTime--;
            console.log(this.currentTime);
            if(this.callback) this.callback(this.currentTime);

            if(this.currentTime === 0) this.closeInterval();
        },1000);
    }

    private closeInterval(): void {
        if(!this.intervalId) return;
        clearInterval(this.intervalId);
    }
}
