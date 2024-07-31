import { createSlice } from '@reduxjs/toolkit';

export const pomodoroSlice = createSlice({ 
    name: 'pomodoro',
    initialState: {
        hasStarted: false,
        isPaused: false,
        isOnBreak: false,
        currentTime: 0
    },
    reducers: {
        startTimer: (state,action) => {
            state.hasStarted = true;
            state.currentTime = action.payload;
        },
        pauseTimer: (state) => {
            state.isPaused = true;
        },
        startBreak: (state) => {
            state.isOnBreak = true;
        },
        reset: (state) => {
            state.hasStarted = false;
            state.isPaused = false;
            state.isOnBreak = false;
            state.currentTime = 0;
        }
    }
});

export const { startTimer, pauseTimer, startBreak, reset } = pomodoroSlice.actions;

export default pomodoroSlice.reducer;
