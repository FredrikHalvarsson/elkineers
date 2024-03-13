import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';

const Footer = () => {
  return (
    <footer>
      <Box>
        <BottomNavigation sx={{
        width: '100%',
        backgroundColor: 'teal',
        color: 'white'}}>
          <p>&copy; 2024 Elkineers. All rights reserved.</p>
        </BottomNavigation>
      </Box>
    </footer>
  );
};

export default Footer;