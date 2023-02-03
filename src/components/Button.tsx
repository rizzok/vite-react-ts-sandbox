import styled from '@emotion/styled'

const StyledButton = styled.button`
  font-size: 1rem;
  padding: 0.25rem 0.6rem;
  margin: 0.75rem;

  &:hover {
    cursor: pointer;
  }
`

interface Props {
  handleClick: React.MouseEventHandler<HTMLButtonElement>
  children: string
}

const Button: React.FC<Props> = ({ handleClick, children }) => {
  return <StyledButton onClick={handleClick}>{children}</StyledButton>
}

export default Button
