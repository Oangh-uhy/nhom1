// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div>
      <div className="food-item">
        <div className="food-item-img-container">
          <img
            className="food-item-image"
            src={url + "/images/" + image}
            alt=""
            onClick={() => navigate(`/food/${id}`)} // Điều hướng đến trang chi tiết món ăn
          />
          {!cartItems[id] ? (
            <img
              className="add"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className="food-item-counter">
              <img
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItems[id]}</p>
              <img
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
        <div className="food-item-info">
          <div className="food-item-name-rating">
            <p onClick={() => navigate(`/food/${id}`)}>{name}</p> {/* Điều hướng */}
            <img src={assets.rating_starts} alt="" />
          </div>
          <p className="food-item-desc">{description}</p>
          <p className="food-item-price">${price}</p>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;