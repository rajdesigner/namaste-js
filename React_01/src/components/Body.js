import { restaurantlist } from "../../Constants/config";
import RestaurantCard from './RestaurantCard';

const Body = () =>{
    return (
        <div className="restaurant-list">
            {
                restaurantlist.map((restaurant)=>{
                    return <RestaurantCard {...restaurant.data} key = {restaurant.data.id} />
                })
            }
        </div>
    )
}

export default Body;