// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

/* eslint-disable react/prop-types */

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // State để lưu từ khóa tìm kiếm
  const [searchKeyword, setSearchKeyword] = useState("");

  // Hàm lọc danh sách dựa trên từ khóa tìm kiếm và danh mục
  const filteredFoodList = food_list.filter((item) => {
    const matchesCategory = category === "All" || category === item.category;
    const matchesSearch = item.name.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>

      {/* Thanh tìm kiếm */}
      <input
        type="text"
        placeholder="Search for dishes..."
        className="search-bar"
        value={searchKeyword}
        onChange={(e) => setSearchKeyword(e.target.value)}
      />

      {/* Danh sách món ăn được lọc */}
      <div className="food-display-list">
        {filteredFoodList.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
