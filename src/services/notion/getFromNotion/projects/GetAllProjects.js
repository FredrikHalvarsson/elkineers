import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
import GetData from './GetData';
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

    
const GetAllProjects = () =>{ 
const data = GetData('projects');

if(!data || !Array.isArray(data?.results)) {
    return <p><Loading/></p>
}
return(
    <div className='container' style={{marginLeft: '145px', marginTop: '20px', marginBottom: '100px'}}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 400 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Project</StyledTableCell>
                <StyledTableCell >Status</StyledTableCell>
                <StyledTableCell >#Hours</StyledTableCell>
                <StyledTableCell >Worked hours</StyledTableCell> 
                <StyledTableCell >Hours left</StyledTableCell>
                <StyledTableCell>Progress bar</StyledTableCell>
                <StyledTableCell >Timespan</StyledTableCell>  
              </TableRow>
            </TableHead>
            <TableBody>
              {data.results.map((page, index) => {
              return (
                <StyledTableRow hover key={index}>
                  <StyledTableCell>{page.properties.Projectname.title[0]?.plain_text ?? ' - '}</StyledTableCell>
                  <StyledTableCell>{page.properties.Status.select?.name ?? ' - '}</StyledTableCell>
                  <StyledTableCell>{page.properties.Hours.number ?? ' - '}</StyledTableCell>
                  <StyledTableCell>{page.properties["Worked hours"].rollup?.number ?? ' - '}</StyledTableCell>  
                    <StyledTableCell>{page.properties["Hours left"].formula?.number ?? ' - '}</StyledTableCell> 
                    <StyledTableCell><ProgressBar hours={page.properties.Hours.number} workedHours={page.properties["Worked hours"].rollup?.number}/></StyledTableCell>
                  <StyledTableCell>{page.properties.Timespan.date?.start ?? ' - '} - {page.properties.Timespan.date?.end ?? ' - '}</StyledTableCell> 
                </StyledTableRow>
                );
                })}
            </TableBody>
          </Table>
        </TableContainer>            
    </div>
  );
};

export default GetAllProjects;
