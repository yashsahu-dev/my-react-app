import React from "react";
import Student from "./Student";

const College = ({ college }) => {
  return (
    <div  style={{background:"#ccc",border:"2px solid #444",margin:"10px",padding:"10px"}}>
      <h2>Name:{college.name}</h2>
      <ul>
        <li><h3>City: <span style={{fontWeight:"200"}}>{college.city}</span></h3></li>
        <li><h3>Website: <span style={{fontWeight:"200"}}>{college.website}</span></h3></li>
        <li><h3>Students:
            <ul>
                {college.students.map((student,index)=>(
                    <Student students={student} key={index}/>
                ))}                
            </ul>  
        </h3></li>
      </ul>
    </div>
  );
};

export default College;
