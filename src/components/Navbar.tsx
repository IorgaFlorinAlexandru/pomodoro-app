import { NavLink } from 'react-router-dom';
import { NavigationRoutes } from '../utils/nav.constants';
import PomIcon from './PomIcon';

function Navbar() {

    const navLinks = NavigationRoutes.map(navLink => 
        <li key={navLink.route} className="mb-2 hover:text-gruvbox-wheat-200">
            <NavLink to={navLink.route} className={({ isActive }) => isActive ? 
                `flex items-center w-full p-1 pl-2 rounded text-gruvbox-wheat-200 ease-in duration-100 bg-gruvbox-gray-800
                before:block before:content-[" "] before:w-1 before:rounded before:h-6 before:mr-2 before:bg-gruvbox-orange-300` 
                : "flex items-center w-full p-1 pl-2 rounded text-inherit ease-in duration-100 hover:bg-gruvbox-gray-800 before:block before:mr-3"}>
                    <PomIcon icon={navLink.icon} className="w-6 h-6" />
                    <span className="ml-1.5">{navLink.name}</span>
            </NavLink>
        </li>
    );

    return (
     <>
        <div className="w-72 h-full py-6 px-4 border-r-2 font-bold text-xl 
            text-gruvbox-wheat-400 bg-gruvbox-gray-900 
            border-gruvbox-gray-700">
            <nav>
                <ul className="w-full">
                    {navLinks}
                </ul>
            </nav>
        </div>
     </>
    )
}

export default Navbar;
