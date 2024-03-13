import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './timereports.css';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
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

    const [data, setData] = useState(null); 

    const fetchDataFromNotion = ()=>{
        const payload = {
        };
        axios.post('http://localhost:3001/notion/api/get/timereports', payload)
            .then(response => {
                setData(response.data); 
                console.log('Data hämtad från Notion:', response.data);
            })
            .catch(error => {  
                console.error('Fel vid hämtning från Notion:', error);
            });
    };            
    
    useEffect(() => {
    fetchDataFromNotion();
    }, []);
    
    if(!data || !Array.isArray(data?.results)) {
        return <p>Laddar data eller ingen data att visa...</p>
    }

    return (
            
               <div className='container'>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Person</StyledTableCell>
                    <StyledTableCell >Project</StyledTableCell>
                    <StyledTableCell >#Hours</StyledTableCell>
                    <StyledTableCell >Date</StyledTableCell>   
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data.results.map((page, index) => {
                  return (
                    <StyledTableRow key={index}>
                      <StyledTableCell>{page.properties.RollupName.rollup.array[0].title[0].plain_text ?? 'Ingen titel'}</StyledTableCell>
                      <StyledTableCell>{page.properties.RollupProject.rollup.array[0].title[0].plain_text ?? 'No Project'}</StyledTableCell>
                      <StyledTableCell>{page.properties.Hours.number ?? 'No hours'}</StyledTableCell>
                      <StyledTableCell>{page.properties.Date.date.start ?? 'No date'}</StyledTableCell>
                    </StyledTableRow>
                    );
                    })}
                </TableBody>
              </Table>
            </TableContainer>          
        </div>
    );
}