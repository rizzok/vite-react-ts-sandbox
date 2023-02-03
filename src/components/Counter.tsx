import styled from '@emotion/styled'
import React, { useState } from 'react'
import Button from './Button'

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  border-radius: 8px;
  padding: 1rem;
`

const Counter: React.FC = () => {
  const [count, setCount] = useState<number>(0)

  const decrement = () => {
    setCount((count) => count - 1)
  }

  const increment = () => {
    setCount((count) => count + 1)
  }

  const StyledCountText = styled.p`
    font-size: 1.2rem;
    transition: color 1s;
    color: ${count > 0 ? 'green' : count === 0 ? 'white' : 'red'};
  `

  return (
    <StyledDiv>
      <StyledCountText>Count = {count}</StyledCountText>
      <div>
        <Button handleClick={decrement}>-1</Button>
        <Button handleClick={increment}>+1</Button>
      </div>
    </StyledDiv>
  )
}

export default Counter
