import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { border, color, width } from '@mui/system';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 18,
    color:"black",
    
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



export default function CustomizedTables({list,colNames}) {

  
        console.log(list[0]);

  
 
  return (
    <TableContainer component={Paper}>
        {list.length> 0 && (
      <Table  sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>{colNames[0].toUpperCase()}</StyledTableCell>
            
              { 
            colNames.slice(1).map((headerItem,index)=>(
            
                
          <StyledTableCell align="right" key={index}>{headerItem.toUpperCase()}</StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
        {Object.values(list).map((obj,index)=>(
              <StyledTableRow key={index}>
          
        
            
                
                { Object.values(obj).slice(1).map((value,index2)=>(
              <StyledTableCell align="right" key={index2}>{value}</StyledTableCell>
           
                ))}    
       </StyledTableRow>
 ))}
        </TableBody>
      </Table>
        )}
    </TableContainer>
  );
}
