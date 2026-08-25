import React, { useEffect } from 'react'

const Counter = ({count,data}) => {

    function counter(){
        console.log("Hello")
    }

    

    useEffect(()=>{
        counter();
    },[data])
  return (
    <div>
      <h2>{count}</h2>
      <h2>{data}</h2>
    </div>
  )
}

export default Counter
