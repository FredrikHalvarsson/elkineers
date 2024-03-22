import React from 'react';
import './ReportTime.css';
import {
  Typography,
  Stack,
  InputLabel,
  MenuItem as OptionItem,
  Select,
  Input,
  Button,
  Box,
} from '@mui/material';
import { Textarea } from '@mui/joy';
import GetUserProjectsOnly from '../../../services/notion/getFromNotion/projects/GetUserProjectsOnly';



export default function ReportTime() {
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
      }}>
      <Stack
        sx={{
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
         
        }}
        spacing="0px"
        direction="row">
        <Typography
          variant="h4"
          sx={{
            fontFamily: 'Inter,system-ui,sans-serif',
            color: 'rgb(0, 0, 0)',
          }}>
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
          }}>
          Select Project
        </InputLabel>
        <GetUserProjectsOnly />
        <InputLabel
          sx={{
            fontFamily: 'Inter,system-ui,sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            color: 'inherit',
          }}>
          START TIME
        </InputLabel>
        <Input
          sx={{
            '& .MuiInput-input': { padding: '0' },
            borderRadius: '8px',
            fontFamily: 'Inter,system-ui,sans-serif',
            backgroundColor: 'rgb(255,255,255)',
            border: '1px soild rgb(115, 96, 123)',
            color: 'rgb(0, 0, 0)',
            padding: '10px',
            width: '100%',
            fontSize: '1rem',
            outline: 'none',
          }}
          type="time"
          placeholder="Enter text"
          disableUnderline></Input>
          <InputLabel
          sx={{
            fontFamily: 'Inter,system-ui,sans-serif',
            fontSize: '14px',
            fontWeight: '600',
            color: 'inherit',
          }}>
          END TIME
        </InputLabel>
        <Input
          sx={{
            '& .MuiInput-input': { padding: '0' },
            borderRadius: '8px',
            fontFamily: 'Inter,system-ui,sans-serif',
            backgroundColor: 'rgb(255,255,255)',
            border: '1px soild rgb(115, 96, 123)',
            color: 'rgb(0, 0, 0)',
            padding: '10px',
            width: '100%',
            fontSize: '1rem',
            outline: 'none',
          }}
          type="time"
          placeholder="Enter text"
          disableUnderline></Input>
        <InputLabel
          sx={{
            fontFamily: 'Inter,system-ui,sans-serif',
            color: 'rgb(65, 42, 76)',
            fontSize: '14px',
            fontWeight: '600',
          }}>
          ADD COMMENT
        </InputLabel>
        <Textarea maxRows={6}
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
          placeholder="Enter some text..."></Textarea>
        <Button
          disableElevation
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
          }}>
          Submit
        </Button>
      </Stack>
    </Box>
    </div>
  );
}