import ToggleSwitch from '../components/ToggleSwitch';
import { useState } from 'react';

function TestTheme() {

    const [toggleValue, setToggleValue] = useState(false);

    function toggle(value: boolean): void {
        console.log(value);
        setToggleValue(value);
    }

    return <>
     <div className='flex flex-wrap gap-5 p-4'>
        <ToggleSwitch onChange={toggle} value={toggleValue} />
     </div>
    </>
}

export default TestTheme;
