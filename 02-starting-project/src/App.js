import React, { useState } from "react";
import AddUser from "./components/UserForm/Users/AddUser.js";
import UserList from "./components/UserForm/Users/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsers((prevUsers) => {
      return [
        ...prevUsers,
        {
          name: uName,
          age: uAge,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} />
      {users.length > 0 ? <UserList users={users} /> : ""}
    </div>
  );
}

export default App;
