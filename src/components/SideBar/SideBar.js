import React from 'react';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SidebarItems } from './consts/SideBarItems';
import { useParams, useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';

const Sidebar = () => {

    const navigate = useNavigate();
    const drawerWidth = 220;
    const theme = createTheme({
      typography: {
        fontSize: 18,
        fontFamily: 'Segoe UI',
      },
    });

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
          <ListItemButton onClick={() => navigate(item.route)} style={{
            transition: 'background-color 0.3s',
            '&:hover': {
              backgroundColor: 'gray',
            }
          }}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.label} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
        </Drawer>
        </ThemeProvider>
    )

}
export default Sidebar;