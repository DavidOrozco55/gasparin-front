import { useEffect } from "react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

import RestaurantView from "./components/pages/restaurantView";
import TopBar from "./components/organisms/TopBar/topBar"

const App: FC = () => {
  const navigate = useNavigate()
  useEffect(() => {
    const loginData = localStorage.getItem('loginInfo')
    console.log(loginData)
    if (!loginData) {
      console.log('no data')
      navigate('login')
    }
  }, [])
  return (
    <div>
      Inicio
    </div>
  )
}

export default App
