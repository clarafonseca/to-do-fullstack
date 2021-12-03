import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  :root {
    --white: #FEFEFE;
    --black: #333333;
  }
  body {
    color: var(--black);
    background-color: #F2F2F6;;
  }
  body,
  input,
  textarea,
  select,
  button {
    font: 400 1rem "Inter", sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
  button {
    cursor: pointer;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;