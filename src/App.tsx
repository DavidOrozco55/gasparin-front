import { FC } from "react";
import { Outlet } from "react-router-dom";
import RestaurantView from "./components/pages/restaurantView";
import TopBar from "./components/organisms/TopBar/topBar"
const App: FC = () => {
  return (
    <div>
      <Outlet></Outlet>
      <TopBar></TopBar>
      <RestaurantView></RestaurantView>
    </div>
  )
}
export default App
