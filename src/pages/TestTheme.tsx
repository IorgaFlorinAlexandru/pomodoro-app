import settIcon from '../assets/icons/test-settings.svg';
import tuneIcon from '../assets/icons/tune.svg';

function TestTheme() {
    const gruvboxColors = [ 
        '#a89984',
        '#bdae93',
        '#d5c4a1',
        '#ebdbb2',
        '#cc241d',
        '#fb4934',
        '#98971a',
        '#b8bb26',
        '#d79921',
        '#fabd2f',
        '#458588',
        '#83a598',
        '#d65d0e',
        '#fe8019',
    ];
    const items = gruvboxColors.map(c => 
            <li key={c} className="list-none">
                <h1 className={"text-4xl font-bold"}
                    style={{color: c}}>
                    Hello World
                </h1>
                <div className={"w-40 h-8 mt-2 mb-5 rounded"}
                    style={{backgroundColor: c}}></div>
            </li>
    );

    return <>
     <div className='flex flex-wrap gap-5 p-4'>
        <button className="h-min py-1 px-4 border-2 border-gruvbox-wheat-200 rounded-md 
            text-gruvbox-wheat-200 bg-gruvbox-gray-900 hover:bg-gruvbox-gray-600 
            active:bg-gruvbox-gray-500"> 
            Settings
        </button>
        <button className="h-min p-1 border-2 border-gruvbox-wheat-200 rounded-md 
            text-gruvbox-wheat-200 bg-gruvbox-gray-900 hover:bg-gruvbox-gray-600 
            active:bg-gruvbox-gray-500"> 
            <img src={settIcon} />
        </button>
        <button className="h-min p-1 border-2 border-gruvbox-wheat-200 rounded-md 
            text-gruvbox-wheat-200 bg-gruvbox-gray-900 hover:bg-gruvbox-gray-600 
            active:bg-gruvbox-gray-500"> 
            <img src={tuneIcon} />
        </button>
        <button className="h-min p-1 rounded-md 
            text-gruvbox-wheat-200 bg-gruvbox-gray-500 hover:bg-gruvbox-gray-400 
            active:bg-gruvbox-gray-600"> 
            <img src={tuneIcon} />
        </button>
     </div>
    </>
}

export default TestTheme;
