import { useState } from 'react';
import ToggleSwitch from '../components/ToggleSwitch';

function Settings() {

    const [sessionAlarm, setSessionAlarm] = useState(false);
    const [breakAlarm, setBreakAlarm] = useState(false);
    const [sendNotifications, setSendNotifications] = useState(false);

    function toggleSessionAlarm(value: boolean): void {
        setSessionAlarm(value);
    }

    function toggleBreakAlarm(value: boolean): void {
        setBreakAlarm(value);
    }

    function toggleNotifications(value: boolean): void {
        setSendNotifications(value);
    }

    return (
     <>
      <div className="flex flex-col p-8">
       <h2 className="text-4xl">Settings</h2>
       <div className="mt-8">
        <h2 className="text-xl mb-2">Focus Sessions</h2>
        <div className="flex justify-between items-center w-full my-1 p-2 px-4 
            rounded bg-gruvbox-gray-600">
         <div>
            <h4>Focus Time</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
                Adjust the lengths of your focus time
            </p>
         </div>
         <select className="w-32 h-8 pl-2 rounded text-gruvbox-wheat-200
            bg-gruvbox-gray-500 hover:bg-gruvbox-gray-400" defaultValue="1500" >
            <option value="1500">25 minutes</option>
            <option value="2000">35 minutes</option>
            <option value="3000">1 hour</option>
            <option value="6000">1 h 30 min</option>
            <option value="6000">2 hours</option>
         </select>
        </div>
        <div className="flex justify-between items-center 
            w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
            <h4>Break Time</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
                Adjust the lengths of your break time
            </p>
         </div>
         <select className="w-32 h-8 pl-2 rounded text-gruvbox-wheat-200
            bg-gruvbox-gray-500 hover:bg-gruvbox-gray-400" defaultValue="1500" >
            <option value="1500">5 minutes</option>
            <option value="2000">10 minutes</option>
            <option value="3000">30 minutes</option>
            <option value="6000">1 hour</option>
         </select>
        </div>
        <div className="flex justify-between items-center w-full my-1 p-2 px-4 
            rounded bg-gruvbox-gray-600">
         <div>
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
        <div className="flex justify-between items-center 
             w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
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
        <div className="flex justify-between items-center
            w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
            <h4>App Theme</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
               Change the app theme
            </p>
         </div>
         <select className="w-44 h-8 pl-2 rounded text-gruvbox-wheat-200
            bg-gruvbox-gray-500 hover:bg-gruvbox-gray-400" defaultValue="0" >
            <option value="0">Gruvbox</option>
            <option value="1">Solarized White</option>
            <option value="2">Solarized Dark</option>
         </select>
        </div>
        <div className="flex justify-between items-center
            w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
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
