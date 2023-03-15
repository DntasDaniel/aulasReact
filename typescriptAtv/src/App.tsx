import { BrowserRouter } from "react-router-dom";
import { GlobalStyle } from "./styles/globalStyles";
import Rotas from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Rotas />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
