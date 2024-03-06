// import React from "react";
// import { useState } from "react";

// export default function Counter(){
//     const [count,setCount]=useState(0)
//     return(
        
//         <div>
//         <h1>Counter App</h1>
//         <h3>Count:{count}</h3>
//         <button onClick={()=>{setCount(count-1)}}>Decrement</button>
//         <button onClick={()=>{setCount(count+1)}}>Increment</button>
//         </div>
        
//     )
// }
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div>
      <h3>Counter App</h3>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
