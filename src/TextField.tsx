import React, { useState } from 'react'

interface Person {
  firstName: string
  lastName: string
}

interface Props {
  text: string
  ok?: boolean
  i?: number
  fn?: (bob: string) => string
  person: Person
}

const TextField: React.FC<Props> = () => {
  const [count, setCount] = useState(5)

  return (
    <div>
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="name" />
    </div>
  )
}

export default TextField
