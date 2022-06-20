import { Fragment, useEffect, useState } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import RestaurantView from "./components/pages/restaurantView";
import TopBar from "./components/organisms/TopBar/topBar"
import Dashboard from "./components/pages/Seller/dashboard";
import { Box } from "@mui/material";

const App: FC = () => {
  const [loginData, setLoginData] = useState({
    userType: null
  })

  const navigate = useNavigate()
  useEffect(() => {
    const login = localStorage.getItem('loginInfo')
    if (!login) {
      console.log('no data')
      return navigate('login')
    }
    setLoginData(JSON.parse(login))
  }, [])

  useEffect(() => {
    if (!loginData) {
      return navigate('login')
    }
  }, [loginData])

  return (
    <Fragment>
        <TopBar/>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div>
            {
              loginData.userType === 'restaurant' && <RestaurantView />
            }
          </div>
          <div>
            {
              loginData.userType === 'seller' && <Dashboard />
            }
          </div>

        </Box>
    </Fragment>
  )
}

export default App
