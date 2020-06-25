import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  
  html, body #root {
    height: 100%;
    background-color: var(--black);
    color: var(--white);
  }
  
  *, button, input {
    border: 0;
    outline: 0;
    
    font-family: 'Roboto', sans-serif;
  }
  
  :root {
    --primary: #a60000;
    --secondary: #babbb8;
    
    --input: #30302e;
    
    --black: #000;
    --white: #fff;
  }
`;