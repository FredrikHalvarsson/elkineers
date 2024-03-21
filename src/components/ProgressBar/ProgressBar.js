import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CircularProgress from '@mui/joy/CircularProgress';
import Box from '@mui/material/Box';

function ProgressBar({hours, workedHours}) {

    
    const progress = Math.round((workedHours/hours)*100);
    let progressColor = 'primary';
    
    if (progress === 100) {
        progressColor = 'success';
    }
    
    return (
        <Box sx={{
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            flexWrap: 'wrap'
        }}>
             <CircularProgress color={progressColor} size="lg" determinate value={progress}> {progress}% </CircularProgress>
        </Box>
    );
}

export default ProgressBar;