import { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import apiREST from '../../../provider/index'
import MakeOfferDialog from '../../molecules/MakeOfferDialog';

export default function SellerRestaurantTable() {

  const [rows, setRows] = useState([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    (async () => {
      const loginInfo: any = JSON.parse(localStorage.getItem('loginInfo'))
      const response = await apiREST.get('/user', {
        headers: {
          Authorization: `Bearer ${loginInfo.accessToken}`
        }
      })
      console.log(response)
      setRows(response.data.filter(user => user.userType === 'restaurant'))
    })()
  }, [])
  const handleClose = () => {
    setModalVisible(false)
  }

  const [clickedRestaurant, setClickedRestaurant] = useState([])
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Restaurants</TableCell>
            <TableCell align="right">phone</TableCell>
            <TableCell align="right">email</TableCell>
            <TableCell align="right">foodType</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              onClick={() => setModalVisible(true)}
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.phone}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
              <TableCell align="right">{row.foodType}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        <MakeOfferDialog visible={modalVisible} handleClose={handleClose}></MakeOfferDialog>
    </TableContainer>
  );
}
