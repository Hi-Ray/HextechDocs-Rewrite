import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
// @ts-ignore
import readme from 'public/static/readme.html'

import Logo from 'assets/images/poro_shocked.png'

import Layout from 'components/Layout'

const About: React.FunctionComponent = () => {
  return (
    <Layout title="Hextech Docs" description="" image={Logo} tags="">
      <div className="markdown-body">{ReactHtmlParser(readme)}</div>
    </Layout>
  )
}

export default About
