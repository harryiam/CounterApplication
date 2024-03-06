import React from "react";
import { useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0)
    return(
        
        <div>
        <h1>Counter App</h1>
        <h3>Count:{count}</h3>
        <button onClick={()=>{setCount(count-1)}}>Decrement</button>
        <button onClick={()=>{setCount(count+1)}}>Increment</button>
        </div>
        
    )
}