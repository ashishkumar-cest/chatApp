import React, { useState } from 'react'

export default function Counter(props) {
const [input,setInput]=useState(0);
const total = props.count+input;
console.log(total);
  return (
    <div>
    <h1>Counter</h1>
    <h2>{props.count}</h2>
    <button onClick={props.minus}>-</button>
    <input type="text" value={input?input+props.count:props.count} onChange={(e)=>setInput(e.target.value)}/>
    <button onClick={props.plus}>+</button>
    </div>
  )
}
