import React, {  useState } from 'react'
import Counter from './Counter';

const App = () => {

  const [Count, setCount] = useState(0);
  const [Data, setData] = useState(0);
  const [display,setDislay] = useState(true);
  

  

  return (
    <div>
      {
        display?<Counter count={Count} data={Data} />:null
      }
      <button onClick={()=>setCount(Count+1)}>Counter</button>
      <button onClick={()=>setData(Data+1)}>Data</button>
      <button onClick={()=>setDislay(!display)}>Toggle</button>
    </div>
  )
}

export default App
