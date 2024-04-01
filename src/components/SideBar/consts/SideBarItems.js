import AssignmentIcon from '@mui/icons-material/Assignment';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import HouseIcon from '@mui/icons-material/House';
import PendingActionsOutlinedIcon from '@mui/icons-material/PendingActionsOutlined';


export const SidebarItems = [
    {
        id: 0,
        icon: <HouseIcon />,
        label: 'Home',
        route: '/',
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
        label: 'People',
        route: 'people',
    },
];
