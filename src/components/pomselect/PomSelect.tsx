import { useState, useEffect, useRef, useCallback } from 'react';
import PomIcon from '../PomIcon';
import { PomSelectOption } from './select.models';


function PomSelect({ value, options, placeholder = '', disabled = false, onChange, className }: 
    { value?: any | undefined, options: PomSelectOption[],placeholder?: string,disabled?: boolean, onChange?: (value: any) => void, className?: string}) {
    const [isOpen, setIsOpen] = useState(false);
    const [label, setLabel] = useState<string | null>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const optionLabel = getLabelFromOptions(value);
        if(optionLabel) setLabel(optionLabel);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }

    },[value]);

    const handleClickOutside = useCallback((e: any) => {
        if(!containerRef.current?.contains(e.target)) {
            close();
        }
    },[]);
    

    function handleMenuState(): void {
        if(disabled) return;

        if(!isOpen) { 
            open();
        }
        else close();
    }

    function setSelectValue(option: PomSelectOption): void {
        close();
        if(value === option.value) return;
        if(onChange) onChange(option);

    }

    function getLabelFromOptions(value: any): string | undefined {
        return options.find(o => o.value === value)?.label;
    }

    function open(): void {
        document.addEventListener('mousedown', handleClickOutside);
        setIsOpen(true);
    }


    function close(): void {
        document.removeEventListener('mousedown', handleClickOutside);
        setIsOpen(false);
    }

    return <>
        <div ref={containerRef} className={`relative min-w-32 ${className ? className : ''} `}>
         <div onClick={handleMenuState} className="flex justify-between items-center cursor-pointer 
            w-full h-8 pl-3 pr-1 rounded border border-gruvbox-gray-600
            text-gruvbox-wheat-200 bg-gruvbox-gray-500 hover:bg-gruvbox-gray-400">
            {label ? <span>{label}</span>
                : <span>{placeholder}</span>}
            <PomIcon icon="arrow_down" className="h-5 w-5 ml-4"/>
         </div>
            {isOpen ? 
                <div className="absolute top-9 w-full rounded border z-50
                    border-gruvbox-gray-600 bg-gruvbox-gray-500">
                    <ul className="list-none py-1">
                    {options.map((option,i) => 
                        <li key={i.toString()} onClick={() => setSelectValue(option)} className="my-1 pl-2 cursor-pointer hover:bg-gruvbox-gray-400">
                           {option.value === value ? 
                                <div className="inline-block align-middle w-[3px] h-4 mr-[-2px] ml-[-1px] rounded bg-gruvbox-orange-300"></div> : null}
                           <span className="align-middle ml-2">{option.label}</span> 
                        </li>
                    )}
                    </ul>
                </div>
                : null}
        </div>
    </>
}

export default PomSelect;

