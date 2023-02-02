import styled from '@emotion/styled'

const StyledHeader = styled.header`
  width: 100%;
  padding: 2rem 4rem;
  display: grid;
  grid-template-columns: auto max-content;
`

const NavLink = styled.a`
  stroke: rgb(233, 235, 238);
  opacity: 0.6;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 1;
  }
`

const Header = () => {
  return (
    <StyledHeader>
      <p>Logo</p>
      <nav>
        <NavLink
          href="https://twitter.com/rizzokdev"
          target="_blank"
          title="Twitter"
        >
          <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
            <path
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M23 3a10.9 10.9 0 0 1-3.14 1.53a4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"
            ></path>
          </svg>
        </NavLink>
      </nav>
    </StyledHeader>
  )
}

export default Header
