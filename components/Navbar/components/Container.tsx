import React, { forwardRef } from 'react'
import { useQuery } from '@apollo/client'

import Link from 'next/link'

import NavbarStyledContainer from 'styles/components/Navbar/NavbarContainerStyled'

import { GetNavMenuItemsDocument } from 'gql'

import Logo from 'assets/images/logo.png'

import NavbarButton from './NavButton'

const Container: React.FunctionComponent = () => {
  const { loading, error, data } = useQuery(GetNavMenuItemsDocument)

  if (loading || error) return <NavbarStyledContainer />

  const Menu = forwardRef(() => (
    <NavbarStyledContainer>
      <Link href="/">
        <a href="">
          <NavbarButton imageUrl={Logo} altText="Home" slug="/" hideHover hideActive />
        </a>
      </Link>
      {data.getMenuItems.map(({ name, slug, id, iconUrl }) => (
        <Link href={slug} key={id}>
          <a href="">
            <NavbarButton imageUrl={iconUrl} altText={name} slug={slug} key={id} />
          </a>
        </Link>
      ))}
    </NavbarStyledContainer>
  ))

  return <Menu />
}

export default Container
