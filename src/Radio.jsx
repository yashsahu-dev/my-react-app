import React from 'react'
import { useState } from 'react'
const Radio = () => {
    const [gender, setGender] = useState("male");
  return (
    <div>
      <h1>Select Gender</h1>
      <input type="radio" onChange={(e)=>setGender(e.target.value)} name='gender' checked={gender == "male"} value="male" id="male" />
      <label htmlFor="male">Male</label>
      <input type="radio" onChange={(e)=>setGender(e.target.value)} name='gender' checked={gender == "female"} value="female" id="female" />
      <label htmlFor="female">Female</label>
      <h1>Selected:{gender}</h1>
    </div>
  )
}

export default Radio
