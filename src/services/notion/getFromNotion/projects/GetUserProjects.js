import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import ProgressBar from '../../../../components/ProgressBar/ProgressBar';
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
import GetUser from '../../../clerk/GetUser/GetUser';
import GetData from './GetData';
import GetId from '../../../clerk/GetUser/GetId';
import './projects.css';

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

const GetUserProjects = () =>{
  //get user id from cookie
  const userId = GetId();
  //get data from 'projects'database
  const data = GetData('projects');

  if(!data || !Array.isArray(data?.results)) {
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
  return(
    <div className='container' style={{marginTop: '20px', marginBottom: '100px'}}>
        <h1></h1>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>Project</StyledTableCell>
                <StyledTableCell >#Hours</StyledTableCell>
                <StyledTableCell >Worked hours</StyledTableCell> 
                <StyledTableCell >Hours left</StyledTableCell>
                <StyledTableCell>Progress bar</StyledTableCell>
                <StyledTableCell >Timespan</StyledTableCell>  
              </TableRow>
            </TableHead>
            <TableBody>
            {filter.map((page, index)=>{
              return (
                <StyledTableRow hover key={index}>
                            <StyledTableCell>{page.properties.Projectname.title[0]?.plain_text ?? ' - '}</StyledTableCell>
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

export default GetUserProjects;
