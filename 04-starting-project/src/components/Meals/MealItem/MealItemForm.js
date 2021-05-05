import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

const MealItemForm = (props) => {
  const onAddHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onAddHandler} className={classes.form}>
      <h3>
        <Input
          label="Amount"
          input={{
            id: "amount_" + props.id,
            type: "1",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
      </h3>
      <button>{props.label}</button>
    </form>
  );
};

export default MealItemForm;
