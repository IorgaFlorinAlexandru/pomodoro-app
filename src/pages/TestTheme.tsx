import ToggleSwitch from '../components/ToggleSwitch';
import PomIcon from '../components/PomIcon';
import { useState } from 'react';

function TestTheme() {

    const [toggleValue, setToggleValue] = useState(false);
    const [selectValue, setSelectValue] = useState(null);

    function toggle(value: boolean): void {
        setToggleValue(value);
    }

    return <>
     <div className='flex flex-col flex-wrap gap-5 p-4'>
        <ToggleSwitch onChange={toggle} value={toggleValue} />

        <div className="flex flex-wrap gap-1 mt-2">
            <PomIcon icon="tune" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="reset" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="resume" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="settings" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="timer" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="pause" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="play_arrow" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="leaderboard" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="coffee" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="palette" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
        </div>
     </div>
    </>
}

export default TestTheme;
