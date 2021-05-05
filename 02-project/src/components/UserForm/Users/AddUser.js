import { useState, useRef } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // // UseState returns 2 elements
  // const [username, setUsername] = useState("");
  // const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  // const usernameInputHandler = (event) => {
  //   setUsername(event.target.value);
  // };

  // const userAgeInputHandler = (event) => {
  //   setUserAge(event.target.value);
  // };

  const addUserHandler = (event) => {
    const username = nameInputRef.current.value;
    const userAge = ageInputRef.current.value;

    event.preventDefault();
    if (username.trim().length === 0 || userAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (
      // The plus forces a convert to a string.
      +userAge < 1
    ) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    console.log(username, userAge);
    props.onAddUser(username, userAge);

    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
  };

  const errorResetHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          onResetError={errorResetHandler}
          title={error.title}
          message={error.message}
        />
      )}
      <Card className={styles.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            // onChange={usernameInputHandler}
            // value={username}
            ref={nameInputRef}
          />
          <label htmlFor="age" type="number">
            Age (Years)
          </label>
          <input
            id="age"
            type="number"
            // onChange={userAgeInputHandler}
            // value={userAge}
            ref={ageInputRef}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </>
  );
};

export default AddUser;
