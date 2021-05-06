import React, { useState } from "react";

const SimpleInput = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
  const [enteredEmail, setEnteredEmail] = useState("");
  const [enteredEmailTouched, setEnteredEmailTouched] = useState(false);

  const enteredNameIsValid = enteredName.trim() !== "";
  const nameIsEnteredInvalid = !enteredNameIsValid && enteredNameTouched;
  const enteredEmailIsValid = enteredEmail.includes("@");
  const emailIsEnteredInvalid = !enteredEmailIsValid && enteredEmailTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // Input handlers
  const nameInputHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const emailInputHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  // Blur handlers
  const nameInputBlurHandler = (event) => {
    setEnteredNameTouched(true);
  };
  const emailInputBlurHandler = (event) => {
    setEnteredEmailTouched(true);
  };

  const formSubmissionHandler = (event) => {
    // Prevents restart of app
    event.preventDefault();
    setEnteredNameTouched(true);
    setEnteredEmailTouched(true);

    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return;
    }

    console.log(enteredName);
    setEnteredName("");
    setEnteredEmail("");
    setEnteredNameTouched(false);
    setEnteredEmailTouched(false);
  };

  let nameContent = "";
  let emailContent = "";
  if (nameIsEnteredInvalid) {
    nameContent = <p className="error-text">Please enter a non-empty name.</p>;
  }
  if (emailIsEnteredInvalid) {
    emailContent = <p className="error-text">Please enter a valid email.</p>;
  }

  const nameInputClasses = `form-control ${nameIsEnteredInvalid && " invalid"}`;
  const emailInputClasses = `form-control ${
    emailIsEnteredInvalid && " invalid"
  }`;

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
      {nameContent}
      <div className={emailInputClasses}>
        <label htmlFor="name">Your Email</label>
        <input
          type="email"
          id="email"
          onChange={emailInputHandler}
          value={enteredEmail}
          onBlur={emailInputBlurHandler}
        />
      </div>
      {emailContent}
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
