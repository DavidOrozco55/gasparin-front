import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

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
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  function createData(
    productName: string,
    price: number,
    sellerName: string,
    foodtype: string,
    productDescription: string,
    productImg: string,

  ) {
    return { productName, price, sellerName, foodtype, productDescription};
  }
  
  const rows = [
    createData('Frozen yoghurt', 159, "David Farms", "Milk Derivates", "This is yogurt", ""),
    createData("Apple", 56, "Bruno Farms", "Fruits", "Big fresh apples"),
    createData("Onion", 55, "Carlos Farms", "Vegetables", "This will make you cry")
  ];

function RestaurantOfferView() {
  return (
    <div>
       <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Product Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Seller</StyledTableCell>
            <StyledTableCell align="right">Category</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.productName}>
              <StyledTableCell component="th" scope="row">
                {row.productName}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
              <StyledTableCell align="right">{row.sellerName}</StyledTableCell>
              <StyledTableCell align="right">{row.foodtype}</StyledTableCell>
              <StyledTableCell align="right">{row.productDescription}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
    </div>
  )
}

export default RestaurantOfferView