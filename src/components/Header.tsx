import styled from '@emotion/styled'
import Twitter from '../assets/images/icons/Twitter'

const StyledHeader = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  display: grid;
  grid-template-columns: auto max-content;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
`

const StyledNav = styled.nav`
  display: flex;
  align-items: baseline;
  a {
    margin: 0.5rem 0 0.5rem 1.5rem;
  }
`

const NavLinkIcon = styled.a`
  fill: rgb(233, 235, 238);
  stroke: rgb(233, 235, 238);
`

const Header = () => {
  return (
    <StyledHeader>
      <a href="/">
        <p>Logo</p>
      </a>
      <StyledNav>
        <a href="/contacts/1">Your name</a>
        <NavLinkIcon
          href="https://twitter.com/rizzokdev"
          target="_blank"
          title="Twitter"
        >
          <Twitter />
        </NavLinkIcon>
      </StyledNav>
    </StyledHeader>
  )
}

export default Header
