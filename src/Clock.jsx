import React, { useState, useEffect } from "react";

const Clock = ({color}) => {
  const [Time, setTime] = useState(0);

  useEffect(()=>{
    setInterval(() => {
        setTime(new Date().toLocaleTimeString())
    }, 1000);
  },[])
  return(
    <div>
        <h2 style={{"color":color,"background":"black","width":"fit-content","padding":"8px","borderRadius":"7px"}}>
            {Time}
        </h2>
    </div>
  )
};

export default Clock;