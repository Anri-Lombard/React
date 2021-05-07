import { useReducer } from "react";

const initialInputState = () => {
  return {
    value: "",
    isTouched: false,
  };
};

const inputStateReducer = (state, action) => {
  // State is existing, action is new
  if (action.type === "INPUT") {
    return { value: action.value, isTouched: state.isTouched };
  }
  if (action.type === "BLUR") {
    return { value: state.value, isTouched: action.isTouched };
  }
  if (action.type === "RESET") {
    return { value: "", isTouched: false };
  }

  // Default state snapshot
  return inputStateReducer;
};

// validateValue needs to be a funtion
const useInput = (validateValue) => {
  const [inputState, dispatch] = useReducer(
    inputStateReducer,
    initialInputState
  );

  const valueIsValid = validateValue(inputState.value);
  const hasError = !valueIsValid && inputState.isTouched;

  // Input handlers
  const valueChangeHandler = (event) => {
    dispatch({ type: "INPUT", value: event.target.value });
  };

  // Blur handlers
  const inputBlurHandler = () => {
    dispatch({ type: "BLUR" });
  };

  // Reset form
  const reset = () => {
    dispatch({ type: "RESET" });
  };

  // hasError will become hasError: hasError
  return {
    value: inputState.value,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
