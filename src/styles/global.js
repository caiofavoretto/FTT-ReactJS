import { createGlobalStyle } from 'styled-components';

import background from '../assets/background.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background: #FFF;
    -webkit-font-smoothing: antialiased !important;
    background-image: url(${background});
    background-attachment:fixed;
    background-position:center;
    background-size: cover;
    background-repeat: no-repeat;
  }

  body, input, button, textarea {
    color: #fff;
    font-size: 14px;

    font-family: Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-style: normal;
  }

  button {
    cursor: pointer;
  }

  hr {
    border: none;
  }
`;
