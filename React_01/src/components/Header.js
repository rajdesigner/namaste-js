import { useState } from "react";
import { restaurantlist } from "../../Constants/config";

const HeaderComponent = ({
  restaurants,
  setRestaurants,
  filteredRestaurants,
  setFilteredRestaurants,
}) => {
  const [searchText, setSearchText] = useState("");

  const handleInput = (e) => {
    setSearchText(e);
  };

  const handleSearch = (searchText, restaurants) => {
    const filteredRestaurants = restaurants.filter((restaurant) => {
      return restaurant.data.name
        .toLowerCase()
        .includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredRestaurants);
  };

  return (
    <>
      <div className="top_wrapper">
        <div className="search_logo_wrapper">
          <div className="logo">
            <h1>PICAZU</h1>
          </div>

          <div className="searchbar">
            <input
              type="text"
              onChange={(e) => {
                handleInput(e.target.value);
              }}
              value={searchText}
            />{" "}
            <button
              onClick={() => {
                handleSearch(searchText, restaurants);
              }}
            >
              GO
            </button>
          </div>
        </div>

        <div className="profile">
          <a href="#">Log in</a>
        </div>
      </div>
    </>
  );
};

export default HeaderComponent;
