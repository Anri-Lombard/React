import { useState } from "react";
import useInputBasic from "../hooks/use-input-basic";

const BasicForm = () => {
  // First Name
  const {
    hasError: firstNameHasError,
    value: firstNameValue,
    isValid: firstNameIsValid,
    valueChangeHandler: firstNameChangeHandler,
    blurChangeHandler: firstNameBlurHandler,
    reset: resetFirstName,
  } = useInputBasic((value) => value.trim() !== "");

  // Last Name
  const {
    hasError: lastNameHasError,
    value: lastNameValue,
    isValid: lastNameIsValid,
    valueChangeHandler: lastNameChangeHandler,
    blurChangeHandler: lastNameBlurHandler,
    reset: resetLastName,
  } = useInputBasic((value) => value.trim() !== "");

  // Email
  const {
    hasError: emailHasError,
    value: emailValue,
    isValid: emailIsValid,
    valueChangeHandler: emailChangeHandler,
    blurChangeHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInputBasic((value) => value.includes("@"));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const onSubmitHandler = (event) => {
    event.preventDefault();

    if (!firstNameIsValid || !lastNameIsValid || !emailIsValid) {
      return;
    }

    resetFirstName();
    resetLastName();
    resetEmail();
  };

  return (
    <form>
      <div className="control-group">
        <div className={`form-control ${firstNameHasError && " invalid"}`}>
          <label htmlFor="name">First Name</label>
          <input
            onChange={firstNameChangeHandler}
            onBlur={firstNameBlurHandler}
            value={firstNameValue}
            type="text"
            id="firstName"
          />
        </div>
        <div className={`form-control ${lastNameHasError && " invalid"}`}>
          <label htmlFor="name">Last Name</label>
          <input
            onChange={lastNameChangeHandler}
            onBlur={lastNameBlurHandler}
            value={lastNameValue}
            type="text"
            id="lastName"
          />
        </div>
      </div>
      <div className={`form-control ${emailHasError && " invalid"}`}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          onChange={emailChangeHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
          type="email"
          id="email"
        />
      </div>
      {firstNameHasError && (
        <p className="error-text">Please Enter A Valid First Name.</p>
      )}
      {lastNameHasError && (
        <p className="error-text">Please Enter A Valid Last Name.</p>
      )}
      {emailHasError && (
        <p className="error-text">Please Enter A Valid Email.</p>
      )}
      <div className="form-actions">
        <button disabled={!formIsValid} onSubmit={onSubmitHandler}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default BasicForm;
