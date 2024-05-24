import timerIcon from '../assets/icons/timer.svg';
import leaderboardIcon from '../assets/icons/leaderboard.svg';
import paletteIcon from '../assets/icons/palette.svg';
import settingsIcon from '../assets/icons/settings.svg';
import { NavRoute } from '../models/NavRoute';

export const NavigationRoutes: NavRoute[] = [
    {
        route: '/',
        icon: timerIcon,
        name: 'Pomodoro'
    },
    {
        route: '/statistics',
        icon: leaderboardIcon,
        name: 'Statistics'
    },
    {
        route: '/settings',
        icon: settingsIcon,
        name: 'Settings'
    },
    {
        route: '/test/theme',
        icon: paletteIcon,
        name: 'Theme'
    },
]
