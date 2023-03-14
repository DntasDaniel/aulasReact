import { EstadoGlobal } from "../../projeto-tarefas/src/components/Card/global/ContextGlobal"
import { BrowserRouter } from "react-router-dom"
import Routing from "../src/components/Card/global/Routing"



function App() {


  return (
    <BrowserRouter>
      <EstadoGlobal> 
        <Routing />
      </EstadoGlobal>
    </BrowserRouter>
  )
}

export default App
