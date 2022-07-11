import React, { useState } from 'react'

const Clicker = () => {
  const [count, setCount] = useState(31);

  function incrementCount() {
    setCount(count + 1) // neden 2 kere çağırınca yine 1 artıyor.. TAMAM DECREASE'DE  HALLETTİM İBRET OLSUN DİYE KALSIN.
    setCount(count + 1)
  }
  function decreaseCount() {
    setCount(count => count - 1 )
    setCount(count => count - 1 )

  }

  return (
    <>
      <button onClick={incrementCount}>
        <h1>Increase by 1 </h1>
      </button>

      <button onClick={decreaseCount}>
        <h1>Decrease by 2</h1>
      </button>
      <br></br>
      <span> <h1>{count}</h1></span>

    </>

  )
}

export default Clicker
