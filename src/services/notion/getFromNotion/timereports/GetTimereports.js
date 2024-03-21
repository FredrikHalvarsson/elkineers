import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './timereports.css';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import GetData from '../projects/GetData';
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from '@mui/material';


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
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

export default function GetTimereports () {
  //get data from timereports database
  const data = GetData('timereports');
  console.log('data: '+data)

  if(!data || !Array.isArray(data?.results)) {
    return <p>Laddar data eller ingen data att visa...</p>
  }
  const sorted = data.results.sort((a, b) => {
      const dateA = new Date(a.properties.Date.date.start);
      const dateB = new Date(b.properties.Date.date.start);
      return dateB - dateA;
    })
  return (
        
    <div className='container' style={{marginTop: '20px', marginBottom: '100px', marginLeft: '10%'}}>
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
            {sorted.map((page, index) => {
            return (
              <StyledTableRow key={index}>
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
);
}