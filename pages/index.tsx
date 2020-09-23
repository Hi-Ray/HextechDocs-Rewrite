import React from 'react'
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser'
import readme from 'public/static/readme.html'

import Logo from 'assets/images/poro_shocked.png'

import Layout from 'components/Layout'

const About: React.FunctionComponent = () => {
  return (
    <Layout title="Hextech Docs" description="" image={Logo} tags="">
      {/* <div className="markdown-body">{ReactHtmlParser(readme)}</div> */}
      <div className="home-container">
        <div className="home-section">
          <img src="https://dib.com.ar/wp-content/uploads/2020/08/video-juego.jpg" alt="" />
        </div>
        <div className="home-section">
          <img
            src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/bltfe81204b8ec63e0e/5e6184a918d3347ceffbbd6d/TFT.S3_GALAXIES.ARTICLE-2.jpg"
            alt=""
          />
          <div className="desc">Team Fight Tactics</div>
        </div>
        <div className="home-section">
          <img
            src="https://www.pcgamewallpapers.net/1920x1080/legends-of-runeterra-03.jpg"
            alt=""
          />
        </div>
        <div className="home-section">
          <img src="https://cdn.mos.cms.futurecdn.net/3H8Ur89ptqGLvNcCShW6Dh.jpg" alt="" />
        </div>
        <div className="home-section">
          <img
            src="https://technology.riotgames.com/sites/default/files/articles/98/apitransformsheader.png"
            alt=""
          />
        </div>
      </div>
    </Layout>
  )
}
export default About
