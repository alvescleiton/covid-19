import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
  }

  ul {
    list-style: none;
  }

  ul li {
    line-height: 22px;
  }

  * {
    box-sizing: border-box;
  }
`

export default GlobalStyle