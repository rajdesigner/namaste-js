import { restaurantlist } from "../../Constants/config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import HeaderComponent from "./Header";
import Shimmmer from "./Shimmer";
const Body = () => {
  const [allRestaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  async function getRestaurants() {
    debugger;
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  return (
    <>
      <HeaderComponent
        restaurants={allRestaurants}
        setRestaurants={setRestaurants}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="restaurant-list">
        {allRestaurants.length == 0 ? (
          <Shimmmer />
        ) : (
          <>
            {filteredRestaurants.map((restaurant) => {
              return (
                <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default Body;
