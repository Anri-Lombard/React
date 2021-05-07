import useInput from "../hooks/use-input";
import Input from "./UI/Input";

const SimpleInput = () => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    // Prevents restart of app
    event.preventDefault();

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    resetNameInput();
    resetEmailInput();
  };

  const nameInputClasses = `form-control ${nameInputHasError && " invalid"}`;
  const emailInputClasses = `form-control ${emailInputHasError && " invalid"}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <Input
        label="Your Name"
        className={nameInputClasses}
        htmlFor="name"
        type="text"
        onChange={nameChangeHandler}
        onBlur={nameBlurHandler}
        value={enteredName}
      />
      {nameInputHasError ? (
        <p className="error-text">Please enter a non-empty name.</p>
      ) : (
        ""
      )}
      <Input
        label="Your Input"
        className={emailInputClasses}
        htmlFor="email"
        type="email"
        onChange={emailChangeHandler}
        value={enteredEmail}
        onBlur={emailBlurHandler}
      />
      {emailInputHasError ? (
        <p className="error-text">Please enter a valid email.</p>
      ) : (
        ""
      )}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
