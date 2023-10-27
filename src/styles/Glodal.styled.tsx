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
    font-family:  'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.color.font};
  }
  
  section:nth-child(even) {
    background-color: ${theme.color.primaryBg};
  }

  section:nth-child(odd) {
    background-color: ${theme.color.secondary};
  }

  a {
    text-decoration: none;
  }
  
  ul{
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: unset;
  }
`