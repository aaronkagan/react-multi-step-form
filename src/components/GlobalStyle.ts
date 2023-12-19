import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }


  html {
    font-size: 62.5%;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    background-color: #EFF5FF;

    @media all and (min-width: 1440px){
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  }
`;

export default GlobalStyle;
