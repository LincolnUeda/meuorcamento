
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Orcamentos from './pages/Orcamentos'
import Contato from './pages/Contato'
import Menu from './components/menu'
import Orcamento from './pages/Orcamento'
function App() {
  

  return (
    <>
     
      <BrowserRouter>
        < Menu />
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="orcamentos" element={<Orcamentos />}/>
          <Route path="contato" element={<Contato />}/>
          <Route path="novoorcamento" element={<Orcamento />}/>
          <Route path="orcamento/:cod" element={<Orcamento />}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
