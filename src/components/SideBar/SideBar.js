import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { SidebarItems } from './consts/SideBarItems';
import { useNavigate } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Divider } from '@mui/material';
import { useState } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as React from 'react';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {
  const isSmallScreen = useMediaQuery('(max-width: 800px)');
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
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen) => () => {setOpen(newOpen)
    };

  const handleItemClick = (route) => {
      setActivePage(route);
      navigate(route);
  };

  return (
    <ThemeProvider theme={theme}>
            <div style={{backgroundColor: 'rgba(127, 157, 157)'}}>
                <IconButton onClick={toggleDrawer(true)}>
                {theme.direction === 'ltr' ? <MenuIcon/> : <MenuIcon/>}
                </IconButton>
                <Drawer
                    open={open}
                    onClose={toggleDrawer(false)}
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
                    variant="temporary"
                    anchor="left"
                >
                    <Toolbar />
                    <Divider style={{ borderTop: '1px solid rgba(255, 255, 255, 0.5)' }} />
                    <List sx={{ '& .MuiListItem-root': { borderBottom: '1px solid rgba(255, 255, 255, 0.5)', padding: '11px' } }}>
                        {SidebarItems.map((item) => (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton
                                    onClick={() => handleItemClick(item.route)}
                                    style={{
                                        transition: 'background-color 0.5s',
                                        '&:hover': {
                                            backgroundColor: 'gray',
                                        },
                                    }}
                                >
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
            </div>
        </ThemeProvider>
    );
};
  export default Sidebar;

              
                  {/* {isSmallScreen && (
              <IconButton onClick={toggleDrawer(!open)}>
                {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
              </IconButton>
          )}
            
          )} */}

