import React, { useEffect, useState } from "react";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetUsersData();
  }, []);

  const GetUsersData = async () => {
    setLoading(true);
    const URL = "http://localhost:3000/Users";
    let response = await fetch(URL);
    response = await response.json();
    setUsers(response);
    setLoading(false);
  };

  return (
    <div>
      <ul className="Head">
        <li>Name</li>
        <li>Email</li>
        <li>Age</li>
      </ul>

      {!loading?users.map((user, index) => (
        <ul key={index}>
          <li>{user.name}</li>
          <li>{user.email}</li>
          <li>{user.age}</li>
        </ul>
      )):<h1>Loading...</h1>}
    </div>
  );
};

export default UserList;
