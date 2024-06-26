import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import {blueGrey} from '@mui/material/colors';
import Loading from '../../../../components/Loading/Loading';
import './timereports.css'
import {
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableRow,
    Paper
  } from '@mui/material';
import GetData from '../projects/GetData';
import GetId from '../../../clerk/GetUser/GetId';

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


const GetUserTimeReports = () =>{
  const userId = GetId();
  const data = GetData('timereports');
  console.log('data: '+data)
  console.log('userID: ' +userId)

  if(!data || !Array.isArray(data?.results)) {
    return <p><Loading/></p>
  }
    
  const filtered = data.results.filter(item => {
    const foundUser = item.properties.Person.relation.find(item => item.id.includes(userId));
    console.log('Found User:', foundUser);
    
    return foundUser;
  });
  console.log('filtered: '+filtered)

  const sorted = filtered.sort((a, b) => {
    const dateA = new Date(a.properties.Date.date.start);
    const dateB = new Date(b.properties.Date.date.start);
    return dateB - dateA;
  });
  console.log('sorted: '+sorted)

  return(
    <div className='container' style={{marginTop: '20px', marginBottom: '100px'}}>
      <TableContainer component={Paper}>
        <Table aria-label="customized table">
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
  );
};     
export default GetUserTimeReports;