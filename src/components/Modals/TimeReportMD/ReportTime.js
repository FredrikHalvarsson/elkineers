import React, { useState } from 'react';
import './ReportTime.css';
import {
  Typography,
  Stack,
  InputLabel,
  Select,
  Button,
  Box,
  MenuItem 
} from '@mui/material';
import { Textarea } from '@mui/joy';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import GetData from '../../../services/notion/getFromNotion/projects/GetData';
import GetId from '../../../services/clerk/GetUser/GetId';
import saveToNotion from '../../../services/notion/saveToNotion/saveToNotion';
import Loading from '../../Loading/Loading';

const { format } = require('date-fns');

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const generateHours = () => {
  const hours = [];
  for (let i = 1; i <= 24; i++) {
    hours.push(i);
  }
   
  return hours;
};

const ReportTime = () => {

  const userId = GetId();
  const data = GetData('projects');
  const [open, setOpen] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [selectedProject, setSelectedProject] = useState('');
  const [enteredText, setEnteredText] = useState('');
  const [selectedItemId, setSelectedItemId] = useState(null);
  
  let date = format(new Date(), 'yyy.MM.dd');
  date = new Date().toISOString(date).split('T', 1)[0];

  const handleStartTimeChange = (event) => {
    setStartTime(event.target.value); 
  };

  const handleEndTimeChange = (event) => {
    setEndTime(event.target.value); 
  };

  const handleProjectChange = (event) => {
    setSelectedProject(event.target.value); // Update selected project when user changes selection
  };
  const handleTextChange = (event) => {
    setEnteredText(event.target.value); // Update entered text when user types in the textarea
  };
  const handleButtonClick = () => {
    const startDateTime = new Date();
    startDateTime.setHours(startTime);
    startDateTime.setMinutes(0);
  
    const endDateTime = new Date();
    endDateTime.setHours(endTime);
    endDateTime.setMinutes(0);
    const timeDifferenceInMs = endDateTime - startDateTime;
    const timeDifferenceInHours = timeDifferenceInMs / (1000 * 60 * 60);

    console.log('Selected Project:', selectedProject);
    console.log('Time difference:', timeDifferenceInHours, 'hours');
    console.log('Entered Text:', enteredText);
    console.log("posting timereports")

    const data = {
      properties: {
          Hours: {
              number: timeDifferenceInHours
          },
          Date: {
              date: {
                  start: date
              }
          },
          Project: {
              relation: [{
                  id: selectedItemId //select project
              }]
          },
          Person: {
              relation: [{
                  id: userId
              }]
          },
          Note: {
              title: [{
                  text: {
                      content: enteredText
                  },
                  plain_text: enteredText
              }]
          }
      }
  };
  console.log('Data:', data);
  saveToNotion(data, 'timereports');
  setOpen (true);
  }; 

  const handleClose = () => {
    setOpen(false);
  };

  if (!data || !Array.isArray(data?.results)) {
    return <p><Loading/></p>
  }

  const filter = data.results.filter(item => {
    const isActive = item.properties.Status.select?.name.includes('Active');
    if (!isActive) {
      console.log('Skipped due to status');
      return false;
    }
    const foundUser = item.properties.People.relation.find(item2 => item2.id.includes(userId));
    console.log('Found User:', foundUser);
   
    return foundUser;
  });


  return (
    <div className='reportTimeContainer'>
      <Box
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.08) 0px 1px 3px 0px',
          borderRadius: '8px',
          fontFamily: 'Inter,system-ui,sans-serif',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: 'rgb(255,255,255)',
          padding: '20px',
          maxWidth: '360px',
          width: '100%',
          rowGap: '20px',
        }}
      >
        <Stack
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
          }}
          spacing="0px"
          direction="row"
        >
          <Typography
            variant="h4"
            sx={{
              fontFamily: 'Inter,system-ui,sans-serif',
              color: 'rgb(0, 0, 0)',
            }}
          >
            Create new TimeReport
          </Typography>
        </Stack>
        <Stack sx={{ alignItems: 'flex-start', width: '100%' }} spacing="10px">
          <InputLabel
            sx={{
              fontFamily: 'Inter,system-ui,sans-serif',
              fontSize: '15px',
              color: 'inherit',
              fontWeight: '600',
            }}
          >
            Select Project
          </InputLabel >  
          <Select
            value={selectedProject}
            sx={{
              width: '360px', // Adjust as needed
              height: '50px', // Adjust as needed
            }}
            onChange={(event) => {
              const newSelectedItemId = event.target.value;
              console.log('Selected Item ID:', newSelectedItemId);
              setSelectedItemId(newSelectedItemId); 
              setSelectedProject(newSelectedItemId);
              // Update the state variable
              const selectedItem = document.getElementById(newSelectedItemId);
              if (selectedItem) {
                // ...
              }
            }}
          >
            {filter.map((page, index) => (
              <MenuItem key={index} value={page.id} id={`menuItem-${page.id}`}>
                {page.properties.Projectname.title[0]?.plain_text ?? ' - '}
              </MenuItem>
            ))}
          </Select>
          <InputLabel
            sx={{
              fontFamily: 'Inter,system-ui,sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: 'inherit',
            }}
          >
            START TIME
          </InputLabel>
          <Select
            value={startTime}
            onChange={handleStartTimeChange}
            sx={{ width: '100%' }}
          >
            {generateHours().map((hour) => (
              <MenuItem key={hour} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </Select>
          <InputLabel
            sx={{
              fontFamily: 'Inter,system-ui,sans-serif',
              fontSize: '14px',
              fontWeight: '600',
              color: 'inherit',
            }}
          >
            END TIME
          </InputLabel>
          <Select
            value={endTime}
            onChange={handleEndTimeChange}
            sx={{ width: '100%' }}
          >
            {generateHours().map((hour) => (
              <MenuItem key={hour} value={hour}>
                {hour}
              </MenuItem>
            ))}
          </Select>
          <Textarea 
            onChange={handleTextChange}
            maxRows={6}
            minRows={6}
            sx={{
              borderRadius: '0.375rem',
              fontFamily:
                'ui-sans-serif, system-ui, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji',
              border: '2px solid rgb(163,163,163)',
              width: '100%',
              fontSize: '15px',
              fontWeight: '500',
              color: 'rgb(0,0,0)',
              resize: 'vertical',
            }}
            placeholder="Enter some text..."
          ></Textarea>
          <Button
            onClick={handleButtonClick}
            variant="contained"
            sx={{
              '&:hover': { backgroundColor: 'rgb(27, 92, 82)' },
              color: 'rgb(255,255,255)',
              textTransform: 'none',
              fontFamily: 'Inter,system-ui,sans-serif',
              backgroundColor: 'rgb(85, 161, 149)',
              fontSize: '20px',
              padding: '8px',
              width: '100%',
              justifyContent: 'center',
            }}
          >
            Submit
          </Button>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>{"Success"}</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
              Your timereport has successfully been sent to Notion. 
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </Stack>
      </Box>
    </div>
  );
}
export default ReportTime;