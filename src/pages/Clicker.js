import React, {useState} from 'react'

const Clicker = () => {
  const [count,setCount] = useState(31);

  return (
  <><><button onClick={() => setCount(count + 1)}>
      <h1>Increase</h1>
    </button><button onClick={() => setCount(count - 1)}>
        <h1>Decrease  </h1>
      </button>
      <br></br>
      </><span> <h1>{count}</h1></span></>
  
    )
}

export default Clicker
  