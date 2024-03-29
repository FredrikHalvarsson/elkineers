import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import GetData from '../projects/GetData';
import Loading from '../../../../components/Loading/Loading';
import {blueGrey} from '@mui/material/colors';
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

  if(!data || !Array.isArray(data?.results)) {
    return <p><Loading /></p>
  }

  // Filter and sort data
  const filteredData = data.results.filter(page => {
    if (!startDateFormatted || !endDateFormatted) return true; // Return true if no date range is selected
    const pageDate = new Date(page.properties.Date.date.start);
    return pageDate >= new Date(startDateFormatted) && pageDate <= new Date(endDateFormatted);
  });

  // Summarize data by project
  const projectSummaries = filteredData.reduce((summary, page) => {
    const projectName = page.properties.RollupProject.rollup.array[0].title[0].plain_text ?? 'No Project';
    const hours = page.properties.Hours.number ?? 0;
    if (summary[projectName]) {
      summary[projectName] += hours;
    } else {
      summary[projectName] = hours;
    }
    return summary;
  }, {});

  return (
    <div className='container' style={{display: 'flex', flexDirection: 'column', marginTop: '20px', marginBottom: '100px', marginLeft: '10%'}}>
      <WeekPicker onChange={handleDateChange} onClearFilter={handleClearFilter} />
      <div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Project</StyledTableCell>
                <StyledTableCell>#Hours</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Object.entries(projectSummaries).map(([projectName, hours], index) => (
                <StyledTableRow hover key={index}>
                  <StyledTableCell>{projectName}</StyledTableCell>
                  <StyledTableCell>{hours}</StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}