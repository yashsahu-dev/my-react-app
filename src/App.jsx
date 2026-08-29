import React, {  useEffect, useState } from "react";
import './App.css'
const App = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    GetUsersData();
  }, []);

  const GetUsersData = async () => {
    const URL = "https://dummyjson.com/users";
    let response = await fetch(URL);
    response = await response.json();
    setUsers(response.users);
  };

  return (
    <div>
      <ul className="Head">
        <li>First Name</li>
        <li>Last Name</li>
        <li>Age</li>
      </ul>
      {users.map((user, index) => (
        <ul key={index}>
          <li>{user.firstName}</li>
          <li>{user.lastName}</li>
          <li>{user.age}</li>
        </ul>
      ))}
    </div>
  );
};

export default App;
