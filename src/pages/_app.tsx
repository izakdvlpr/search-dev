import React from "react";

import GlobalStyles from "../styles/GlobalStyles";

function App({ Component, pageProps }) {
  return (
    <>    
      <GlobalStyles /> 
      <Component {...pageProps} />
    </>
  )
}

export default App;
