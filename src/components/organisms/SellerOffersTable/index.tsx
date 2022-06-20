import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import apiREST from '../../../provider/index'

export default function SellerOffersTable() {

  const [rows, setRows] = useState([])

  useEffect(() => {
    (async () => {
      const loginInfo: any = JSON.parse(localStorage.getItem('loginInfo'))
      const response = await apiREST.post('/offer/get-filtered', {
        perPage: 5,
        categories: [],
        currentPage: 0
      }, {
        headers: {
          Authorization: `Bearer ${loginInfo.accessToken}`
        }
      })
      console.log(response)
      setRows(response.data)
    })()

  }, [])

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Offers</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Production Date</TableCell>
            <TableCell align="right">description</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              onClick={() => alert('hello')}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell align="right">{row.productionDate}</TableCell>
              <TableCell align="right">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
