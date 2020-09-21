import styled from 'styled-components'

// eslint-disable
const LayoutStyled = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Cairo&display=swap');
  @font-face {
    font-family: 'JetBrainsMono';
    src: url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff2/JetBrainsMono-Regular.woff2')
        format('woff2'),
      url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/web/woff/JetBrainsMono-Regular.woff')
        format('woff'),
      url('https://cdn.jsdelivr.net/gh/JetBrains/JetBrainsMono/ttf/JetBrainsMono-Regular.ttf')
        format('truetype');
    font-weight: 400;
    font-style: normal;
  }

  * > main {
    display: inline-flex;
  }

  *::-webkit-scrollbar {
    width: 1vh;
    height: 1vw;
  }
  *::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }
  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.scrollbarColor};
    border-radius: 100vw;
    border: 3px solid rgba(255, 255, 255, 0);
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.scrollbarColor} rgba(255, 255, 255, 0);
  }

  html,
  body {
    width: 100vw;
    height: 100vh;
    scroll-behavior: smooth;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
      'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: calc(1em + 1vw);
    button {
      font-size: inherit;
    }
    input {
      font-size: inherit;
    }
  }

  & {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme.defaultColor};
    background-color: ${({ theme }) => theme.defaultBGColor};
  }

  nav,
  header {
    width: 100%;
    height: 5vh;
    background: ${({ theme }) => theme.navbarBGolor};
    display: flex;
    flex-direction: column;
    min-height: 50px;
  }

  .content {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;

    div {
      min-width: 250px;
    }

    main {
      padding: 2rem;
      font-size: 1rem;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      max-width: 1500px;
    }
  }

  code,
  pre {
    font-family: JetBrainsMono, source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }

  .markdown-body {
    max-width: 1000px;
    background-color: ${({ theme }) => theme.contentBG} !important;
    color: ${({ theme }) => theme.contentTextColor} !important;
    scroll-behavior: smooth;
    font-variant-ligatures: none;
    font-size: 0.85rem;
    .table-of-contents {
      margin-bottom: 2vh;
      border-bottom: 1px solid ${({ theme }) => theme.markdownSeparator};
      a {
        color: ${({ theme }) => theme.tocColor};
        transition-duration: 275ms;
        &:hover {
          text-decoration: none;
          filter: invert(50%);
        }
      }
      ol {
        padding-left: 1em;
        counter-increment: ol-index;
        counter-reset: li-index;
        list-style: none;
        &:before {
          content: ' ';
        }
        li {
          counter-increment: li-index;
          &:before {
            content: counter(li-index) '. ';
          }
        }
        li > ol {
          counter-increment: ol-index;
          padding-left: 1.5em;
          counter-reset: li-index;
          li {
            &:before {
              content: counter(li-index, lower-alpha) '. ';
            }
          }
        }
      }
    }
    ul {
      list-style: disc outside;
    }
    ol {
      list-style: lower-latin outside;
    }
    table {
      background-color: ${({ theme }) => theme.contentBG};
    }
    th {
      background-color: ${({ theme }) => theme.markdownTableHead};
      border-color: ${({ theme }) => theme.markdownTableBorder};
    }
    td {
      background-color: ${({ theme }) => theme.markdownTableData};
      border-color: ${({ theme }) => theme.markdownTableBorder};
    }
  }

  .Content {
    width: 100%;
    height: 100%;
    padding: 1vh 2vw;
    outline: ${({ theme }) => theme.contentOutline} 1px solid;
    background-color: ${({ theme }) => theme.contentBG};
    color: ${({ theme }) => theme.contentTextColor};
    overflow-y: auto;
    overflow-x: hidden;
    scroll-behavior: smooth;
    a {
      color: ${({ theme }) => theme.linkColor};
    }
  }

  h1,
  h2,
  h3,
  h4 {
    border-bottom: 1px solid ${({ theme }) => theme.markdownSeparator};
    margin: 1vh 0;
  }
  hr {
    background-color: ${({ theme }) => theme.markdownHr};
  }

  h1 {
    font-size: 2rem;
    font-weight: bold;
  }

  h2 {
    font-size: 1rem;
    font-weight: bold;
  }
`

export default LayoutStyled
