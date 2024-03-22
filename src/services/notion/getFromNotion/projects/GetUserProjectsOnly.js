import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { styled } from '@mui/material/styles';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
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

     const GetUserProjectsOnly = () =>{
     const userId = GetId();
     const data = GetData('projects');
     const user = GetUser();

     if(!data || !Array.isArray(data?.results)) {
      return <p>Laddar data eller innngeijangen data att visa...</p>
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
        <div>
    <Select
      defaultValue=""
      sx={{
        width: '360px', // Adjust as needed
        height: '50px', // Adjust as needed
        // Add your other styles here
      }}
    >
      {filter.map((page, index) => (
        <MenuItem key={index} value={page.properties.Projectname.title[0]?.plain_text ?? ' - '}>
          {page.properties.Projectname.title[0]?.plain_text ?? ' - '}
        </MenuItem>
      ))}
    </Select>
  </div>
     );
};

export default GetUserProjectsOnly;
