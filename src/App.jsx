import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Cadastro from './pages/Cadastro'
import Login from './pages/Login'
import ListaUsuario from './pages/Lista'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Cadastro />} />
        <Route path='/login' element={<Login />} />
        <Route path='/listaUsuario' element={<ListaUsuario />} />
      </Routes>
    </BrowserRouter>
  )
}
