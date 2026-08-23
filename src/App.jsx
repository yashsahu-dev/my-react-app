import React from "react";

const App = () => {
  const UserData = [
    {
      ID: 1,
      Name: "yash",
      Email: "sahuyash359@gmail.com",
      Age: 23,
    },
    {
      ID: 2,
      Name: "rahul",
      Email: "rahul@gmail.com",
      Age: 19,
    },
    {
      ID: 3,
      Name: "amit",
      Email: "amit@gmail.com",
      Age: 67,
    },
    {
      ID: 4,
      Name: "alok",
      Email: "alok@gmail.com",
      Age: 85,
    },
  ];
  return (
    <div>
      <h1>Loop in JSX with map</h1>
      <table border="1">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
        </tr>
        {UserData.map((user)=>(
          <tr key={user.ID}>
            <td>{user.ID}</td>
            <td>{user.Name}</td>
            <td>{user.Email}</td>
            <td>{user.Age}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default App;
