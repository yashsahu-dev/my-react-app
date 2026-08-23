import React from "react";
import User from "./User";

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
    {
      ID: 5,
      Name: "manas",
      Email: "manas@gmail.com",
      Age: 45,
    },
  ];
  return (
    <div>
      <h1>Loop in JSX with map</h1>

      {UserData.map((user) => (
        <User data={user} />
      ))}
    </div>
  );
};

export default App;
