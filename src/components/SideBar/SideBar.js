import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SidebarItems } from './consts/SideBarItems';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';
import { useState } from 'react';

function Sidebar () {

    const [activePage, setActivePage] = useState('');
    const activePageColor = 'rgb(255,221,60)';
    const navigate = useNavigate();
    const drawerWidth = 220;
    const theme = createTheme({
      typography: {
        fontSize: 18,
        fontFamily: 'Segoe UI',
      },
    });

    const handleItemClick = (route) => {
      setActivePage(route);
      navigate(route);
  };

    return (
        <ThemeProvider theme={theme}>
        <Drawer
            sx={{
                width: drawerWidth,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 235,
                    boxSizing: 'border-box',
                    backgroundColor: 'rgba(127, 157, 157)',
                    color: '#fff',
                },
            }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider style={{borderTop: '1px solid rgba(255, 255, 255, 0.5)'}}/>
          <List sx={{ '& .MuiListItem-root': { borderBottom: '1px solid rgba(255, 255, 255, 0.5)',
                      padding: '11px' }  }}>
      {SidebarItems.map((item) => (
        <ListItem key={item.id} disablePadding>
          <ListItemButton 
          onClick={() => handleItemClick(item.route)} style={{
            transition: 'background-color 0.5s',
              '&:hover': {
                backgroundColor: 'gray',
              },
          }}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText
                  primary={item.label}
                  style={{ 
                    color: item.route === activePage ? activePageColor : 'inherit',
                  }}
                />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
        </Drawer>
        </ThemeProvider>
    )
}
export default Sidebar;