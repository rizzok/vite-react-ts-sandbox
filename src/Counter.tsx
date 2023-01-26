import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      Count = {count}
      <div>
        <button onClick={() => setCount((count) => count + 1)}>+1</button>
      </div>
    </div>
  )
}

export default Counter
