import { useState } from "react";

const useInputBasic = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const valueIsValid = validateValue(enteredValue);
  const hasError = !valueIsValid && isTouched;

  // Input
  const valueChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  // Blur
  const blurChangeHandler = () => {
    setIsTouched(true);
  };

  const reset = () => {
    setIsTouched(false);
    setEnteredValue("");
  };

  return {
    hasError,
    value: enteredValue,
    isValid: valueIsValid,
    valueChangeHandler,
    blurChangeHandler,
    reset,
  };
};

export default useInputBasic;
