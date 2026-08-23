import React from "react";

const Student = ({ students }) => {
  return (
    <li style={{ fontWeight: "200" }} >
      {students.name}
    </li>
  );
};

export default Student;
