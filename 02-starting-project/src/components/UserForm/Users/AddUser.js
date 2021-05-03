import { useState } from "react";
import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";

const AddUser = (props) => {
  // UseState returns 2 elements
  const [username, setUsername] = useState("");
  const [userAge, setUserAge] = useState("");

  const usernameInputHandler = (event) => {
    setUsername(event.target.value);
  };

  const userAgeInputHandler = (event) => {
    setUserAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (
      // The plus forces a convert to a string.
      +userAge < 1 ||
      username.trim().length === 0 ||
      userAge.trim().length === 0
    ) {
      console.log("Not gonna work buddy");
      return;
    }
    console.log(username, userAge);
    props.onAddUser(username, userAge);
    setUserAge("");
    setUsername("");
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameInputHandler}
          value={username}
        />
        <label htmlFor="age" type="number">
          Age (Years)
        </label>
        <input onChange={userAgeInputHandler} value={userAge} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
