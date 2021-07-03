import classes from "./Counter.module.css";
// useStore also works, but useSelector gives you access to only a part
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  // Return part of state you want
  const counter = useSelector((state) => state.counter);
  // Gives back a function we can call to execute against redux store.
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };

  // Value is an extra payload
  const increaseHandler = () => {
    dispatch({ type: "increase", value: 5 });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
