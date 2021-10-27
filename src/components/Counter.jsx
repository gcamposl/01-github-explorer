import { useState } from "react"

// Sempre que uma function começar com 'use', ela eh chamada de -> hook

export function Counter() {
  // let - let it change
  // const - constant
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    if (counter !== 0)
      setCounter(counter - 1)
  }

  return (
    <div>
      <h2>{counter}</h2>
      <button type="submit" onClick={increment}>Increment</button>
      <br />
      <button type="submit" onClick={decrement}>Decrement</button>

    </div>
  )
}