import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameIsEnteredInvalid = !enteredNameIsValid && enteredNameTouched;

  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };

  const formSubmissionHandler = (event) => {
    // Prevents restart of app
    event.preventDefault();
    setEnteredNameTouched(true);

    if (!enteredNameIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setEnteredNameTouched(false);
  };

  let content = "";
  if (nameIsEnteredInvalid) {
    content = (
      <p className="error-text">
        Invalid name enterred. Please enter a non-empty name.
      </p>
    );
  }

  const nameInputClasses = `form-control ${nameIsEnteredInvalid && " invalid"}`;

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameInputHandler}
          value={enteredName}
          onBlur={nameInputBlurHandler}
        />
      </div>
      {content}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
