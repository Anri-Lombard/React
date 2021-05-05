import React from "react";
import classes from "./Input.module.css";

const Input = () => (
  <div className={classes.input}>
    <label>Amount</label>
    <input type="number" />
  </div>
);

export default Input;
