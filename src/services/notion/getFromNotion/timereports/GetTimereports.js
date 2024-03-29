import React, { useState } from 'react';
import './timereports.css';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import GetData from '../projects/GetData';
import {blueGrey} from '@mui/material/colors';
import Loading from '../../../../components/Loading/Loading';
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from '@mui/material';
  import WeekPicker from '../../../../components/Modals/WeekPickerMD/WeekPicker';

  const oddrow = blueGrey[50];
  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: oddrow,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function GetTimereports () {
  const [startDateFormatted, setStartDateFormatted] = useState('');
  const [endDateFormatted, setEndDateFormatted] = useState('');

  const handleDateChange = (startDate, endDate) => {
    setStartDateFormatted(startDate);
    setEndDateFormatted(endDate);
  };

  const handleClearFilter = () => {
    // Clear the filter by resetting the date range states
    setStartDateFormatted('');
    setEndDateFormatted('');
  };

  // Get data from timereports database
  const data = GetData('timereports');
  console.log('data:', data);

  if(!data || !Array.isArray(data?.results)) {
    return <p><Loading /></p>
  }

  // Filter data based on selected date range
  const filteredData = data.results.filter(page => {
    if (!startDateFormatted || !endDateFormatted) return true; // Return true if no date range is selected
    const pageDate = new Date(page.properties.Date.date.start);
    return pageDate >= new Date(startDateFormatted) && pageDate <= new Date(endDateFormatted);
  });

  // Sort filtered data by date
  const sortedData = filteredData.sort((a, b) => {
    const dateA = new Date(a.properties.Date.date.start);
    const dateB = new Date(b.properties.Date.date.start);
    return dateB - dateA;
  });
  return (
        
    <div className='container' style={{display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '100px', marginLeft: '10%'}}>
      <WeekPicker onChange={handleDateChange} onClearFilter={handleClearFilter} />
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Person</StyledTableCell>
                <StyledTableCell >Project</StyledTableCell>
                <StyledTableCell >#Hours</StyledTableCell>
                <StyledTableCell >Date</StyledTableCell> 
                <StyledTableCell >Note</StyledTableCell> 
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedData.map((page, index) => {
              return (
                <StyledTableRow hover key={index}>
                  <StyledTableCell>{page.properties.RollupName.rollup.array[0].title[0].plain_text ?? 'No Title'}</StyledTableCell>
                  <StyledTableCell>{page.properties.RollupProject.rollup.array[0].title[0].plain_text ?? 'No Project'}</StyledTableCell>
                  <StyledTableCell>{page.properties.Hours.number ?? 'No hours'}</StyledTableCell>
                  <StyledTableCell>{page.properties.Date.date.start ?? 'No date'}</StyledTableCell>
                  <StyledTableCell>{page.properties.Note.title[0].plain_text ?? 'No Note'}</StyledTableCell>
                </StyledTableRow>
                );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
);
}