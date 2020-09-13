import styled from 'styled-components'

const NavbarStyled = styled.div`
  & {
    width: 100%;
    height: 100%;
    min-height: 50px;
    display: flex;
    flex-direction: row;
    background-color: ${({ theme }) => theme.navbarBgColor};
    a {
      width: auto;
      height: 100%;
      padding: 0;
      margin: 0;
    }
  }
`

export default NavbarStyled
