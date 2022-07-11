import React, {useState} from 'react'

const Clicker = () => {
  const [count,setCount] = useState(0);
  return (
  <button onClick = { ()=> setCount((count)=>(count+1))} >
    <h1>You clicked {count} times, satisfied?</h1>
  </button>
    )
}

export default Clicker
  