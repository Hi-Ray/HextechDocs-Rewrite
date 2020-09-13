import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import readme from 'public/static/readme.html'

import Logo from 'assets/images/logo.png'

import Layout from 'components/Layout'

const About: React.FunctionComponent = () => {
  return (
    <Layout title="Hextech Docs" description="" image={Logo} tags="">
      {ReactHtmlParser(readme)}
    </Layout>
  )
}
export default About
