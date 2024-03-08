// import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HouseIcon from '@mui/icons-material/House';

export const SidebarItems = [
    {
        id: 0,
        icon: <HouseIcon />,
        label: 'Projects',
        route: 'projects',
    },
    {
        id: 1,
        icon: <ArticleIcon />,
        label: 'Time reports',
        route: 'time-reports',
    },
    {
        id: 2,
        icon: <AssignmentIcon />,
        label: 'Page3',
        route: 'page3',
    },
    {
        id: 3,
        icon: <AssignmentIndIcon/>,
        label: 'Page4',
        route: 'page4',
    },
    {
        id: 4,
        icon: <CalendarMonthIcon />,
        label: 'Page5',
        route: 'page5',
    },
    
];
