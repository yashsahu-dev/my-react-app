import React from "react";
import { useState } from "react";


const Skills = () => {
  const [skills, setSkills] = useState([]);

  function handleSkills(e) {
    console.log(e.target.value, e.target.checked);

    if (e.target.checked) {
      setSkills([...skills, e.target.value]);
    } else {
      setSkills([...skills.filter((item)=>item!==e.target.value)])
  }
}
  return (
    <div>
      <input onChange={handleSkills} type="checkbox" id="PHP" value="PHP" />
      <label htmlFor="PHP">PHP</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="JS" value="JS" />
      <label htmlFor="JS">JS</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="Node" value="Node" />
      <label htmlFor="Node">Node</label>
      <br />
      <br />
      <input onChange={handleSkills} type="checkbox" id="Java" value="Java" />
      <label htmlFor="Java">Java</label>
      <h1>{skills}</h1>
    </div>
  );
};

export default Skills;
