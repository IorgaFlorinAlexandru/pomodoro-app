import { configureStore } from '@reduxjs/toolkit';
import pomodoroReducer from './pomodoro/pomodoroSlice';

const store = configureStore({
    reducer: {
        pomodoro: pomodoroReducer,
    },
});

export default store;
export type IRootState = ReturnType<typeof store.getState>;
