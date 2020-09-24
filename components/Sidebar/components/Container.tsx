import React, { forwardRef } from 'react'

import Link from 'next/link'
import { useRouter } from 'next/router'

import SidebarContainerStyled from 'styles/components/Sidebar/SidebarContainerStyled'

import { useGetSidebarCategoriesQuery } from 'gql'
// import RenderMD from 'components/Sidebar/components/RenderMD'
// import useAxios from 'axios-hooks'

const Container: React.FunctionComponent = () => {
  const { loading, error, data } = useGetSidebarCategoriesQuery()

  const { pathname, query, asPath } = useRouter()
  const subcategory = asPath.split('/')[1]

  const items = data ? data.getMenuItems : []

  if (loading || error) return <div>kek</div>

  const Menu = forwardRef(() => (
    <>
      {subcategory && (
        <SidebarContainerStyled>
          {items && (
            <Link href="../" key="BackButton">
              <a href="../">
                <span className="material-icons" style={{ fontSize: '1rem' }}>
                  arrow_back
                </span>
                &nbsp;
              </a>
            </Link>
          )}
          {items.flatMap(({ slug, subcategories }) =>
            slug === subcategory
              ? subcategories.map((sub) => (
                  <Link key={sub.id} href={`/${subcategory}/${sub.slug}`}>
                    <a href={`/${subcategory}/${sub.slug}`}>{sub.name}</a>
                  </Link>
                ))
              : [],
          )}
        </SidebarContainerStyled>
      )}
    </>
  ))

  return <Menu />
}

export default Container
