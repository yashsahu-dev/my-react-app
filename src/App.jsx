import React, { useState } from "react";
import College from "./College";
import { SubjectContext } from "./Context";

const App = () => {
  const [subject,setSubject] = useState("")
  return (
    <div style={{ backgroundColor: "yellow", padding: 10 }}>
      <SubjectContext.Provider value={subject}>
        <select  onChange={(e)=>setSubject(e.target.value)}>
          <option value="">Select Subject</option>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Physics">Physics</option>
        </select>
        <h2>Context API</h2>
        <College />
      </SubjectContext.Provider>
    </div>
  );
};

export default App;
