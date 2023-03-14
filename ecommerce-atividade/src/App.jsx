import React, { useState } from "react";

import { BrowserRouter } from "react-router-dom";

import { GlobalStyle } from "./styles/globalStyles";
import { Normalize } from "styled-normalize";

import EstadoGlobal from "./context/EstadoGlobal";

import  Rotas  from "./routes";

function App() {
  const [cart, setCart] = useState([])


  return (
    <EstadoGlobal>
      <BrowserRouter>
      <GlobalStyle />
        <Rotas />
      <Normalize />
    </BrowserRouter>
    </EstadoGlobal>
    
  );
}

export default App;
