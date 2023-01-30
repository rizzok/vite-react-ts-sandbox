import React, { useState } from 'react'
import Button from '../Button/Button'

const Counter = () => {
  const [count, setCount] = useState<number>(0)

  const decrement = () => {
    setCount((count) => count - 1)
  }

  const increment = () => {
    setCount((count) => count + 1)
  }

  return (
    <div>
      Count = {count}
      <div>
        <Button handleClick={decrement}>-1</Button>
        <Button handleClick={increment}>+1</Button>
      </div>
    </div>
  )
}

export default Counter
