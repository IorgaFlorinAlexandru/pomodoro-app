function ToggleSwitch({value, onChange}: {value: boolean, onChange: (value: boolean) => void}) {
    return <>
     <div onClick={() => onChange(!value)} 
        className={`flex items-center relative w-10 h-5 border 
        ease-in duration-150 rounded-[1rem] cursor-pointer border-gruvbox-wheat-300 
        ${value ? 'bg-gruvbox-orange-400' : 'bg-gruvbox-gray-700'}`}>
        <div className="w-3 h-3 rounded-full ease-in duration-150 absolute 
        bg-gruvbox-wheat-300"
        style={{right: `${value ? '3px' : '23px'}`}}></div>
     </div>
    </>
}

export default ToggleSwitch;
