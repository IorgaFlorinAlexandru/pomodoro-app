function Settings() {
    return (
     <>
      <div className="flex flex-col p-8">
       <h2 className="text-4xl">Settings</h2>
       <div className="mt-8">
        <h2 className="text-xl mb-2">Focus Sessions</h2>
        <div className="w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
            <h4>Focus Time</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
                Adjust the lengths of your focus time
            </p>
         </div>
        </div>
        <div className="w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
            <h4>Break Time</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
                Adjust the lengths of your break time
            </p>
         </div>
        </div>
        <div className="w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
            <h4>End of session sound</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
               Play an alarm when focus periods ends 
            </p>
         </div>
        </div>
        <div className="w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
            <h4>End of break sound</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
               Play an alarm when breaks ends 
            </p>
         </div>
        </div>
       </div>
       <div className="mt-8">
        <h2 className="text-xl mb-2">General</h2>
        <div className="w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
            <h4>App Theme</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
               Change the app theme
            </p>
         </div>
        </div>
        <div className="w-full my-1 p-2 px-4 rounded bg-gruvbox-gray-600">
         <div>
            <h4>Notifications</h4>
            <p className="text-[0.8rem] text-gruvbox-wheat-500">
               Send a notification when the focus or break period ends 
            </p>
         </div>
        </div>
       </div>
      </div>
        
     </>
    )
}

export default Settings;
