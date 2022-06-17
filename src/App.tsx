import { FC } from "react";
import { Outlet } from "react-router-dom";
import RestaurantView from "./components/pages/restaurantView";

const App: FC = () => {
  return (
    <div>
      <Outlet></Outlet>
      <RestaurantView></RestaurantView>
    </div>
  )
}
export default App
