import Timer from '../components/pomodoro/Timer';
import tuneIcon from '../assets/icons/tune.svg';

function Pomodoro() {
    return (
        <>
         <div className="flex flex-col justify-center w-full h-full pt-8 pb-16">
          <div className="flex justify-end items-center px-6">
            <button className="h-min p-1 rounded-md 
                text-gruvbox-wheat-200 bg-gruvbox-gray-800 
                hover:bg-gruvbox-gray-500 active:bg-gruvbox-gray-600"> 
                <img src={tuneIcon} />
            </button>
          </div>
         <Timer/>
         </div>
        </>
    )
}

export default Pomodoro;
