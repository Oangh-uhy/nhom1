// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import "./FoodDetails.css";
import { StoreContext } from "../../context/StoreContext";

const FoodDetails = () => {
  const { id } = useParams(); // Lấy ID từ URL
  const { food_list, addToCart, url } = useContext(StoreContext);

  // Tìm món ăn theo ID
  const foodItem = food_list.find((item) => item._id === id);

  if (!foodItem) {
    return <p>Food item not found!</p>; // Xử lý khi không tìm thấy món ăn
  }

  return (
    <div className="food-details">
      <img src={url + "/images/" + foodItem.image} alt={foodItem.name} />
      <h2>{foodItem.name}</h2>
      <p>{foodItem.description}</p>
      <p>Price: ${foodItem.price}</p>
      <button onClick={() => addToCart(foodItem._id)}>Add to Cart</button>
    </div>
  );
};

export default FoodDetails;