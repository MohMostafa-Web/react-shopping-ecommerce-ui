import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  body {
    font-family: 'Urbanist', sans-serif;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
    transition: all 0.3 ease;
  }
`;

export default GlobalStyles;
