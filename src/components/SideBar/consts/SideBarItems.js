// import HomeIcon from '@mui/icons-material/Home';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import ArticleIcon from '@mui/icons-material/Article';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HouseIcon from '@mui/icons-material/House';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';


export const SidebarItems = [
    {
        id: 0,
        icon: <HouseIcon />,
        label: 'Home',
        route: 'home',
    },
    {
        id: 1,
        icon: <AssignmentIcon />,
        label: 'Projects',
        route: 'projects',
    },
    {
        id: 2,
        icon: <PendingActionsOutlinedIcon />,
        label: 'Time reports',
        route: 'time-reports',
    },
    {
        id: 3,
        icon: <AssignmentIndIcon/>,
        label: 'All active projects',
        route: 'active-projects',
    },
    {
        id: 4,
        icon: <CalendarMonthIcon />,
        label: 'My projects dashboard',
        route: 'user-projects',
    },
    {
        id: 4,
        icon: <ArticleIcon />,
        label: 'send-demo',
        route: 'page5copy',
    },
    
];
