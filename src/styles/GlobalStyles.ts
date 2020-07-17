import { createGlobalStyle } from "styled-components";

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
  
  body::-webkit-scrollbar {
    width: 8px;
  }

  body::-webkit-scrollbar-track {
    background: var(--input);
  }

  body::-webkit-scrollbar-thumb {
    background: var(--primary);
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
    --primary: #b20000;
    --secondary: #bbbaba;
    --tertiary: #3d3d3b;
    
    --input: #30302e;
    
    --black: #000;
    --white: #fff;
  }
`;
