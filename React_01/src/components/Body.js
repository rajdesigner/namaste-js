import { restaurantlist } from "../../Constants/config";
import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import HeaderComponent from "./Header";
import Shimmmer from "./Shimmer";
import { API_URL } from "../../Constants/config";
const Body = () => {
  const [allRestaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  async function getRestaurants() {
    debugger;
    const data = await fetch(API_URL);
    const json = await data.json();
    setRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
  }

  const handleClick = () => {
    setFilteredRestaurants(allRestaurants);
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  if (!allRestaurants) return (
    <>
      <h1>Sorry, no restaurants are there.</h1>
    </>
  )

  return (
    <>
      <HeaderComponent
        restaurants={allRestaurants}
        setRestaurants={setRestaurants}
        filteredRestaurants={filteredRestaurants}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      <div className="restaurant-list">
        {allRestaurants?.length == 0 ? (
          <Shimmmer />
        ) : (
          <>
            {
              filteredRestaurants?.length == 0 ? (<h1 className="no_res_text">No Restaurant Matches your Criteria</h1>) : (
                
                <>
                  {filteredRestaurants.map((restaurant) => {
                    return (
                      <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
                    );
                  })}
                </>
              )
            }

          </>
        )}
      </div>
    </>
  );
};

export default Body;
