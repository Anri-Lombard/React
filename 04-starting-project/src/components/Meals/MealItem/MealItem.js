import React from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const price = `$${props.mealPrice.toFixed(2)}`;

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.mealName}</h3>
        <p className={classes.description}>{props.mealDescription}</p>
        <p className={classes.price}>{price}</p>
      </div>
      <div>
        <MealItemForm label="Add" />
      </div>
    </li>
  );
};

export default MealItem;
