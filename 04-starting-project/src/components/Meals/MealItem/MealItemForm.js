import React from "react";
import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input/Input";

const MealItemForm = (props) => {
  const onAddHandler = (event) => {
    event.preventDefault();
  };

  return (
    <React.Fragment>
      <form onSubmit={onAddHandler} className={classes.form}>
        <React.Fragment>
          <h3>
            <Input />
          </h3>
        </React.Fragment>
        <button>{props.label}</button>
      </form>
    </React.Fragment>
  );
};

export default MealItemForm;
