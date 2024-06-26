import { NavLink } from 'react-router-dom';
import { NavigationRoutes } from '../utils/nav.constants';
import PomIcon from './PomIcon';

function Navbar() {

    const navLinks = NavigationRoutes.map(navLink => 
        <li key={navLink.route} className="mb-2 hover:text-gruvbox-wheat-200">
            <NavLink to={navLink.route} className={({ isActive }) => isActive ? 
                "flex items-center w-full p-1 pl-2 rounded bg-gruvbox-gray-600 text-gruvbox-wheat-200" 
                : "flex items-center w-full p-1 pl-2 rounded text-inherit"}>
                    <PomIcon icon={navLink.icon} className="w-6 h-6" />
                    <span className="ml-2">{navLink.name}</span>
            </NavLink>
        </li>
    );

    return (
     <>
        <div className="w-72 h-full py-6 px-4 border-r-2 font-bold text-xl 
            text-gruvbox-wheat-500 bg-gruvbox-gray-900 
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
