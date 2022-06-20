import SellerOffersTable from "../../organisms/SellerOffersTable";

import React, { Fragment } from 'react'
import { FC } from "react";
import SellerRestaurantTable from "../../organisms/SellerRestaurantsTable";
import { Box } from "@mui/system";

const Dashboard: FC = () => {
  return (
    <Box sx={{
      padding: '5px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around',
      minHeight: '95vh'
    }}>
      <SellerOffersTable></SellerOffersTable>      
      <SellerRestaurantTable></SellerRestaurantTable>
    </Box>
  )
}

export default Dashboard
