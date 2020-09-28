import * as React from 'react'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
import Head from 'next/head'

import LayoutProps from 'interfaces/components/Layout/LayoutProps'

import LayoutStyled from 'styles/components/Layout/LayoutStyled'

import Loading from 'assets/images/poro_shocked.png'

const Layout: React.FunctionComponent<LayoutProps> = ({
  children,
  title,
  description,
  tags,
  image,
}) => {
  return (
    <LayoutStyled>
      <Head>
        <title>{title ? 'Hextech Docs' : `${title} - Hextech Docs`}</title>
        <meta charSet="utf-8" />
        <link rel="icon" href={Loading} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="title" content={`${title ? 'Hextech Docs' : `${title} - Hextech Docs`}`} />
        <meta name="description" content={description} />
        <meta name="keywords" content={tags} />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        !--Open Graph / Facebook --
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hextechdocs.dev/" />
        <meta
          property="og:title"
          content={`${title ? 'Hextech Docs' : `${title} - Hextech Docs`}`}
        />
        <meta property="og:site_name" content="Hextech Docs" />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        !--Twitter--
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.hextechdocs.dev/" />
        <meta
          property="twitter:title"
          content={`${title ? 'Hextech Docs' : `${title} - Hextech Docs`}`}
        />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <meta name="theme-color" content="#4285f4" />
      </Head>
      <header>
        <nav>
          <Navbar />
        </nav>
      </header>
      <div className="content">
        <Sidebar />
        <main>{children}</main>
      </div>
    </LayoutStyled>
  )
}
export default Layout
