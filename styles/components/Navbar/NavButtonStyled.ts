import styled from 'styled-components'

const NavButtonStyled = styled.div`
  & {
    width: auto;
    height: 100%;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    transition-duration: 450ms;
    padding: 0 0;
    border-top: 1px transparent solid;
    transition: 350ms ease-in-out;

    .active {
      background: rgba(255, 255, 255, 0.1) !important;
      border-top: #cf1b1b 1px solid !important;
      animation: none !important;
      &:hover {
        background-color: transparent;
        border-top: transparent 1px solid;
      }
    }

    .active-link {
      &:hover {
        background-color: rgba(255, 255, 255, 0.05);
        border-top: red 1px solid;
      }
    }

    .logo {
      border-right: 1px solid rgba(255, 255, 255, 0.28);
      padding: 10% !important;
    }

    .hover-disable {
      background-color: transparent;
      border-top: 1px transparent solid;

      &:hover {
        background-color: transparent !important;
        border-top: 1px transparent solid !important;
      }
    }

    .nav__button_image-position {
      height: 100%;
      width: auto;
      margin: 0 0 0 0;
      display: flex;
      justify-content: center;
      align-items: center;
      align-content: center;
      padding: 20%;
      border-top: 1px transparent solid;
      transition: 350ms ease-in-out;

      .nav__button_image {
        display: flex;
        justify-content: center;
        align-items: center;
        align-content: center;
        width: auto;
        height: 100%;
      }
    }
  }
`

export default NavButtonStyled
