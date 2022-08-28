import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  const foodsToDisplay = foods.filter((food) => {
    if(filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    setFoods([...foods, newFood])
    // console.log(newFood);
  }

  function handleClick (id) {
    //This portion of the function can be used to increment a spicy foods Heat Level
    const updatedFoodArray = foods.map((food) => {
      if (food.id === id) {
        return {
          ...food,
          heatLevel: food.heatLevel + 1
        }
      } else {
          return food;
      }
    });
    setFoods(updatedFoodArray)    

    //This portion of the function can be used to remove a spicy food on click
    // const newFoodArr = [...foods].filter(food => food.id !== id)
    // setFoods(newFoodArr)
  }

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      <select name="filter" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="American">American</option>
        <option value="Sichuan">Sichuan</option>
        <option value="Thai">Thai</option>
        <option value="Mexican">Mexican</option>
      </select>
    </div>
  );
}

export default SpicyFoodList;
