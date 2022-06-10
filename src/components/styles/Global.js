import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
  }

  body {
    background: ${({ theme }) => theme.colors.body};
    font-family: 'Poppins', sans-serif;
    font-size: 1.15em;
    margin: 0;
  }
  
  a {
    text-decoration: none;
  }

  img {
    max-width: 100%;
  }

`;

export default GlobalStyles;
