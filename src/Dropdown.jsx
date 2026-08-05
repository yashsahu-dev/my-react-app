import React from 'react'
import  { useState } from 'react';

const Dropdown = () => {
  const [city, setCity] = useState();
  return (
    <div>
      <h1>Select City</h1>
      <select onChange={(e)=>{if(e.target.value !== 'select city') {setCity(e.target.value)} else{setCity("Not")} }} defaultValue={"select city"}>
        <option value="select city">Select City</option>
        <option value="angul">Angul</option>
        <option value="bhadrak">Bhadrak</option>
        <option value="bhubaneswar">Bhubaneswar</option>
        <option value="talcher">Talcher</option>
      </select>
      <h1>Selected city:{city}</h1>
    </div>
  )
}

export default Dropdown
