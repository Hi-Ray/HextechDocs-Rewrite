import React from 'react'
import { useRouter } from 'next/router'

import Layout from 'components/Layout'

import Logo from 'assets/images/logo.png'

const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter()
  const { Game } = router.query

  return (
    <Layout
      title="Hextech Docs"
      description="Unofficial api documentation/guides for games made by Riot Games"
      image={Logo}
      tags="riot api,documentation,docs,unofficial,hexdocs,hextechdocs,hextech docs,hextech"
    >
      <h1>Game: {Game} sub Cat</h1>
    </Layout>
  )
}

export default index
