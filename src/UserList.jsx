import React, { useEffect, useState } from "react";
import { Link } from "react-router";
const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    GetUsersData();
  }, []);
  const URL = "http://localhost:3000/Users";

  const GetUsersData = async () => {
    setLoading(true);
    let response = await fetch(URL);
    response = await response.json();
    setUsers(response);
    setLoading(false);
  };

  const DeleteData = async (id) => {
    let response = await fetch(URL + "/" + id, { method: "delete" });
    response = await response.json();
    if (response) {
      alert("record deleted");
      GetUsersData();
    }
  };

  

  return (
    <div>
      <ul className="Head">
        <li>Name</li>
        <li>Email</li>
        <li>Age</li>
        <li>Actions</li>
      </ul>

      {!loading ? (
        users.map((user, index) => (
          <ul key={index}>
            <li>{user.name}</li>
            <li>{user.email}</li>
            <li>{user.age}</li>
            <li>
              <button onClick={() => DeleteData(user.id)}>Delete</button>
              <Link to={"/edituser/"+user.id}><button>Edit</button></Link>
            </li>
          </ul>
        ))
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default UserList;
