import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <h1>TypeScript Sandbox</h1>
      <Outlet />
    </>
  )
}

export default Root
