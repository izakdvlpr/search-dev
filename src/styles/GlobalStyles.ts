import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
  }
  
  html, body #root {
    height: 100%;
    background-color: #0b0a0a;
    color: var(--white);
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    
    font-family: 'Roboto', sans-serif;
  }
  
  a {
    text-decoration: none;
    color: var(--white);
  }
  
  :root {
    --primary: #00c2ff;
    --secondary: #bbbaba;
    --tertiary: #3d3d3b;
    
    --input: #30302e;
    
    --black: #000;
    --white: #fff;
  }
`;