import { restaurantlist } from "../../Constants/config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import HeaderComponent from "./Header";
import { useState, useEffect } from "react";

const Body = (props) => {
  const [filterData, setRestaurants] = useState(restaurantlist);
    useEffect({
      
        
        
    },[])
  return (
    <>
      <HeaderComponent
        restaurants={restaurantlist}
        setRestaurants={setRestaurants}
        filteredRestaurants={restaurantlist}
        setFilteredRestaurants={setRestaurants}
      />
      <div className="restaurant-list">
        {filterData.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
