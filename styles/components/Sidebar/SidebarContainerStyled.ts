import styled from 'styled-components'

const SidebarContainerStyled = styled.div`
  & {
    height: 100%;
    width: 25%;
    background: ${({ theme }) => theme.sidebarColor};
    border-right: 1px solid ${({ theme }) => theme.sidebarBorderColor};
    max-width: 300px;

    display: flex;
    flex-direction: column;

    a {
      padding: 4% 5%;
      font-weight: 500;
      border-top: 1px solid ${({ theme }) => theme.sidebarBorderColor};
      &:first-child {
        border-top: 1px solid transparent;
      }
    }
  }
`

export default SidebarContainerStyled
