import styled from '@emotion/styled'
import { isRouteErrorResponse, useRouteError } from 'react-router-dom'

const ErrorContainer = styled.div`
  text-align: center;
`

const ErrorPage = () => {
  const error = useRouteError()
  console.error(error)

  return (
    <>
      <ErrorContainer>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
        <br />
        <p>
          {isRouteErrorResponse(error) ? (
            <i>
              {error.status} {error.statusText}
            </i>
          ) : (
            <i>Unknown Error</i>
          )}
        </p>
        <br />
        <a href="/">Back to home</a>
      </ErrorContainer>
    </>
  )
}

export default ErrorPage
