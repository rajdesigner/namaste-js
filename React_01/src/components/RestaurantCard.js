import { IMG_CDN_URL } from "../../Constants/config";

const RestaurantCard = ({
  name,
  area,
  cuisines,
  address,
  avgRating,
  cloudinaryImageId,
}) => {
  return (
    <a href="javadcript:void()">
      <div className="card">
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <p className="avgRating">
          {" "}
          <span className="fa fa-star checked"></span> {avgRating}
        </p>
      </div>
    </a>
  );
};

export default RestaurantCard;
