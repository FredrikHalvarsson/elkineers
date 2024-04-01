import React from 'react';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import GetData from '../projects/GetData';
import {blueGrey} from '@mui/material/colors';
import Loading from '../../../../components/Loading/Loading';
import '../projects/projects.css';
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

    
const GetPeople = () =>{ 
const data = GetData('people');

if(!data || !Array.isArray(data?.results)) {
    return <p><Loading/></p>
}
return(
    <div className='container' style={{ marginTop: '20px', marginBottom: '100px'}}>
        <TableContainer component={Paper}>
          <Table aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell >Name</StyledTableCell>
                <StyledTableCell >Worked hours</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.results.map((page, index) => {
              return (
                <StyledTableRow hover key={index}>
                  <StyledTableCell>{page.properties.Name.title[0]?.plain_text ?? ' - '}</StyledTableCell>
                  <StyledTableCell>{page.properties["Total hours"].rollup.number ?? ' - '}</StyledTableCell>
                </StyledTableRow>
                );
                })}
            </TableBody>
          </Table>
        </TableContainer>            
    </div>
  );
};

export default GetPeople;
