import React from 'react'
import { useRouter } from 'next/router'

import Img from 'lib/FallbackImage'

import NavButton from 'interfaces/components/Navbar/NavbarButton'

import NavButtonStyled from 'styles/components/Navbar/NavButtonStyled'

import Loading from 'assets/images/Loading.gif'
import Error from 'assets/images/poro_shocked.png'

const Container: React.FunctionComponent<NavButton> = ({ imageUrl, altText, slug, hideActive }) => {
  const router = useRouter()
  const isActive = router.asPath.split('/')[1] === slug && !hideActive ? 'active' : ''
  const isActiveLink = !hideActive ? 'active-link' : ''
  const isLogo = slug === '/'
  return (
    <NavButtonStyled>
      <div
        className={`nav__button_image-position ${isLogo ? 'logo' : ''} ${isActive} ${isActiveLink}`}
      >
        <Img
          src={imageUrl}
          fallbackImage={Error}
          initialImage={Loading}
          alt={altText}
          className={`nav__button_image ${isLogo ? 'logo-img' : ''}`}
        />
      </div>
    </NavButtonStyled>
  )
}

export default Container
