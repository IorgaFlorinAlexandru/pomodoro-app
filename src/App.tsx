import TestTheme from './pages/TestTheme';
import Pomodoro from './pages/Pomodoro';
import Navbar from './components/Navbar';
import Statistics from './pages/Statistics';
import Settings from './pages/Settings';
import { Routes, Route, } from 'react-router-dom';
import { TimerProvider } from './context/TimerContext';
  
function App() {

  return (
   <TimerProvider>
    <div className='flex w-full h-screen 
        bg-gruvbox-gray-800 text-gruvbox-wheat-300'>
        <Navbar/>
        <div className='h-full w-full'>
            <Routes>
                <Route path="/" element={<Pomodoro />}/>
                <Route path="/statistics" element={<Statistics />}/>
                <Route path="/settings" element={<Settings />}/>
                <Route path="/test/theme" element={<TestTheme />}/>
            </Routes>
        </div>
    </div>
   </TimerProvider>
  )
}

export default App;
