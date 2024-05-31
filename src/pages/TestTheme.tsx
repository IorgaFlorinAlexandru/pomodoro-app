import ToggleSwitch from '../components/ToggleSwitch';
import PomIcon from '../components/PomIcon';
import PomSelect from '../components/pomselect/PomSelect';
import { PomSelectOption } from '../components/pomselect/select.models';
import { useState } from 'react';

function TestTheme() {

    const [toggleValue, setToggleValue] = useState(false);
    const [selectValue, setSelectValue] = useState(null);

    const options: PomSelectOption[] = [
     { value: 0, label: 'Option 1' },
     { value: 1, label: 'Option 2' },
     { value: 2, label: 'Option 3' },
     { value: 3, label: 'Option 4' },
    ];

    function toggle(value: boolean): void {
        setToggleValue(value);
    }

    function selectValueChange(o: PomSelectOption): void {
        setSelectValue(o.value);
    }

    return <>
     <div className='flex flex-col flex-wrap gap-5 p-4'>
        <ToggleSwitch onChange={toggle} value={toggleValue} />

        <div className="flex flex-wrap gap-1 mt-2">
            <PomIcon icon="reset" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="resume" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="pause" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="play_arrow" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
            <PomIcon icon="palette" className="bg-gruvbox-gray-900 w-9 h-9 text-gruvbox-wheat-300" />
        </div>

        <div className="flex p-4 mt-2">
            <PomSelect value={selectValue} options={options} onChange={selectValueChange} placeholder="Select an option" />
        </div>
     </div>
    </>
}

export default TestTheme;
