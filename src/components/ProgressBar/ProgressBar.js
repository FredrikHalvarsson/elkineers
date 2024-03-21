import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

function ProgressBar({hours, workedHours}) {

  const progress = Math.round((workedHours/hours)*100);

    return (
        <Box sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap',
            color: 'rgba(127, 157, 157)',
        }}>
             <CircularProgress size="lg" value={progress} /> {progress}%
        </Box>
    );
}

export default ProgressBar;