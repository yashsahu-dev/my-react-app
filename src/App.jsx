import React, {  useState } from 'react'
import Counter from './Counter';

const App = () => {

  const [Count, setCount] = useState(0);
  const [Data, setData] = useState(0);

  

  

  return (
    <div>
      <Counter count={Count} data={Data} />
      <button onClick={()=>setCount(Count+1)}>Counter</button>
      <button onClick={()=>setData(Data+1)}>Data</button>
    </div>
  )
}

export default App
