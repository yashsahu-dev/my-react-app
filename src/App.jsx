import React from "react";
import College from "./College";

const App = () => {
  const collegeData = [
    {
      name: "IET",
      city: "Angul",
      website: "www.iet.com",
      students: [
        {
          name: "Yash",
          age: "21",
          email: "yash@test.com",
        },
        {
          name: "Rahul",
          age: "24",
          email: "rahul@test.com",
        },
        {
          name: "Alok",
          age: "67",
          email: "alok@test.com",
        },
      ],
    },
    {
      name: "NIT",
      city: "Banarpal",
      website: "www.nit.com",
      students: [
        {
          name: "Yash",
          age: "21",
          email: "yash@test.com",
        },
        {
          name: "Rahul",
          age: "24",
          email: "rahul@test.com",
        },
        {
          name: "Alok",
          age: "67",
          email: "alok@test.com",
        },
      ],
    },
    {
      name: "IITM",
      city: "Kandasar",
      website: "www.iitm.com",
      students: [
        {
          name: "Yash",
          age: "21",
          email: "yash@test.com",
        },
        {
          name: "Rahul",
          age: "24",
          email: "rahul@test.com",
        },
        {
          name: "Alok",
          age: "67",
          email: "alok@test.com",
        },
      ],
    },
  ];
  return (
    <div>
      {collegeData.map((college, index) => (
        <College college={college} key={index} />
      ))}
    </div>
  );
};

export default App;
