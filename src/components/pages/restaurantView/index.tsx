import { FC, Fragment } from "react";
import RestaurantTables from "../../organisms/RestaurantOffersTable/restaurantOffersTable";

const RestaurantView: FC = () => {
  return (
    <Fragment>
      <RestaurantTables></RestaurantTables>
    </Fragment>
  )
}

export default RestaurantView