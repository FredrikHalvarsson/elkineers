import React, {useState, useEffect} from 'react';
import axios from 'axios';
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
import GetUser from '../../../clerk/GetUser/GetUser';

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

    
    const GetAllProjects = () =>{ 
 
     const [data, setData] = useState(null); 

     const fetchDataFromNotion = ()=>{
         const payload = {
         };
         axios.post('http://localhost:3001/notion/api/get/projects', payload)
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
          
          const filter = data.results.filter(item => item.properties.Status.select?.name.includes('Active'))
          
    return(
        <div className='container'>
            <h1> </h1>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Project</StyledTableCell>
                    <StyledTableCell >Status</StyledTableCell>
                    <StyledTableCell >#Hours</StyledTableCell>
                    <StyledTableCell >Worked hours</StyledTableCell> 
                    <StyledTableCell >Hours left</StyledTableCell>
                    <StyledTableCell >Timespan</StyledTableCell>  
                  </TableRow>
                </TableHead>
                <TableBody>
                {filter.map((page, index)=>{
                  return (
                    <StyledTableRow key={index}>
                                  <StyledTableCell>{page.properties.Projectname.title[0]?.plain_text ?? ' - '}</StyledTableCell>
                                  <StyledTableCell>{page.properties.Status.select?.name ?? ' - '}</StyledTableCell>
                                  <StyledTableCell>{page.properties.Hours.number ?? ' - '}</StyledTableCell>
                                  <StyledTableCell>{page.properties["Worked hours"].rollup?.number ?? ' - '}</StyledTableCell>  
                                   <StyledTableCell>{page.properties["Hours left"].formula?.number ?? ' - '}</StyledTableCell> 
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
