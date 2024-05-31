import { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';
import PomIcon from '../components/PomIcon';
import PomSelect from '../components/pomselect/PomSelect';
import { PomSelectOption } from '../components/pomselect/select.models';

function Settings() {

    const [sessionAlarm, setSessionAlarm] = useState(false);
    const [breakAlarm, setBreakAlarm] = useState(false);
    const [sendNotifications, setSendNotifications] = useState(false);

    const [focusTime, setFocusTime] = useState(1500);
    const [breakTime, setBreakTime] = useState(300);
    const [appTheme, setAppTheme] = useState(0);

    function toggleSessionAlarm(value: boolean): void {
        setSessionAlarm(value);
    }

    function toggleBreakAlarm(value: boolean): void {
        setBreakAlarm(value);
    }

    function toggleNotifications(value: boolean): void {
        setSendNotifications(value);
    }

    const timerOptions: PomSelectOption[] = [
     { value: 1500, label: '25 minutes' },
     { value: 1800, label: '30 minutes' },
     { value: 3600, label: '1 hour' },
     { value: 5400, label: '1 h 30 min' },
     { value: 7200, label: '2 hours' },
    ];

    const breakOptions: PomSelectOption[] = [
     { value: 300, label: '5 minutes' },
     { value: 600, label: '10 minutes' },
     { value: 1800, label: '30 minutes' },
     { value: 3600, label: '1 hour' },
    ];

    const themeOptions: PomSelectOption[] = [
     { value: 0, label: 'Gruvbox' },
     { value: 1, label: 'Solarized Light' },
     { value: 2, label: 'Solarized Dark' },
    ];

    function changeFocusTime(o: PomSelectOption): void {
        setFocusTime(o.value);
    }

    function changeBreakTime(o: PomSelectOption): void {
        setBreakTime(o.value);
    }

    function changeAppTheme(o: PomSelectOption): void {
        setAppTheme(o.value);
    }

    return (
     <>
      <div className="flex flex-col p-8">
       <h2 className="text-4xl">Settings</h2>
       <div className="mt-8">
        <h2 className="text-xl mb-2">Focus Sessions</h2>
        <div className="flex items-center w-full my-1 p-2 px-4 
            rounded bg-gruvbox-gray-600">
         <PomIcon icon="schedule" className="h-6 w-6 mr-4"/>
         <div className="flex-1">
            <h4>Focus Time</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
                Adjust the lengths of your focus time
            </p>
         </div>
         <PomSelect className="w-36" value={focusTime} options={timerOptions} onChange={changeFocusTime}/> 
        </div>
        <div className="flex items-center 
            w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <PomIcon icon="schedule" className="h-6 w-6 mr-4"/>
         <div className="flex-1">
            <h4>Break Time</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
                Adjust the lengths of your break time
            </p>
         </div>
         <PomSelect className="w-36" value={breakTime} options={breakOptions} onChange={changeBreakTime}/> 
        </div>
        <div className="flex items-center w-full my-1 p-2 px-4 
            rounded bg-gruvbox-gray-600">
         <PomIcon icon="music_note" className="h-6 w-6 mr-4"/>
         <div className="flex-1">
            <h4>End of session sound</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
               Play an alarm when focus periods ends 
            </p>
         </div>
         <div className="flex items-center">
          <span className="mr-4">{sessionAlarm ? 'On' : 'Off'}</span>
          <ToggleSwitch value={sessionAlarm} onChange={toggleSessionAlarm}/>
         </div>
        </div>
        <div className="flex items-center 
             w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <PomIcon icon="music_note" className="h-6 w-6 mr-4"/>
         <div className="flex-1">
            <h4>End of break sound</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
               Play an alarm when breaks ends 
            </p>
         </div>
         <div className="flex items-center">
          <span className="mr-4">{breakAlarm ? 'On' : 'Off'}</span>
          <ToggleSwitch value={breakAlarm} onChange={toggleBreakAlarm}/>
         </div>
        </div>
       </div>
       <div className="mt-8">
        <h2 className="text-xl mb-2">General</h2>
        <div className="flex items-center
            w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <PomIcon icon="palette" className="h-6 w-6 mr-4"/>
         <div className="flex-1">
            <h4>App Theme</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
               Change the app theme
            </p>
         </div>
         <PomSelect className="w-44" value={appTheme} options={themeOptions} onChange={changeAppTheme}/> 
        </div>
        <div className="flex items-center
            w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <PomIcon icon="notifications" className="h-6 w-6 mr-4"/>
         <div className="flex-1">
            <h4>Notifications</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
               Send a notification when the focus or break period ends 
            </p>
         </div>
         <div className="flex items-center">
          <span className="mr-4">{sendNotifications ? 'On' : 'Off'}</span>
          <ToggleSwitch value={sendNotifications} onChange={toggleNotifications}/>
         </div>
        </div>
       </div>
      </div>
        
     </>
    )
}

export default Settings;
