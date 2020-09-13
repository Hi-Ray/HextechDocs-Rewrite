import React, { useEffect, useState } from 'react'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import { ThemeProvider } from 'styled-components'

import 'css-reset-and-normalize/css/reset-and-normalize.min.css'
import 'css-reset-and-normalize/css/button-reset.min.css'
import 'css-reset-and-normalize/css/link-reset.min.css'
import 'github-markdown-css'
import 'material-design-icons'

import DarkTheme from 'styles/themes/DarkTheme'
import LightTheme from 'styles/themes/LightTheme'

const client = new ApolloClient({
  uri: 'https://hextechdocs-api.celerity.gg/graphql?origin=communitydragon',
  cache: new InMemoryCache(),
})

export default function MyApp({ Component, pageProps }): JSX.Element {
  const [theme, setTheme] = useState(DarkTheme)

  useEffect(() => {
    const currentlySetTheme = localStorage.getItem('currentTheme')

    if (!currentlySetTheme) {
      if (window.matchMedia) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          localStorage.setItem('currentTheme', 'dark')
          setTheme(DarkTheme)
        }
        localStorage.setItem('currentTheme', 'light')
        setTheme(LightTheme)
      }
      setTheme(DarkTheme)
    }
  }, [])

  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  )
}
