import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlodalStyled = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.color.font};
    line-height: 1.2;
    
    min-width: 360px;
  }

  section {
    padding: 100px 0;
    
    @media ${theme.media.mobile} {
      padding: 80px 0;
    }
  }

  section:nth-child(even) {
    background-color: ${theme.color.primaryBg};
  }

  section:nth-child(odd) {
    background-color: ${theme.color.secondary};
  }

  a {
    text-decoration: none;
    color: ${theme.color.font}
  }

  p {
    line-height: 1.4;
    font-size: 14px;
    font-weight: 400;
  }

  h3 {
    font-family: Josefin Sans, sans-serif;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1px;
  }


  ul {
    list-style: none;
  }

  button {
    background-color: unset;
    border: unset;
    color: ${theme.color.font};
    font-size: 14px;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    cursor: pointer;
  }
`