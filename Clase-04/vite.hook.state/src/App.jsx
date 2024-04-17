import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './App.css'


import Inicio from './pages/Inicio'
import Estado from './pages/Estado'
import Contacto from './pages/Contacto'
import Navbar from './components/Navbar'

function App() {
 
  return (
    <>
       <header>
          <Navbar />
       </header>

      <main className='container'>

        <BrowserRouter>
         
          <Routes>
            <Route path="/" element={ <Inicio /> } />
            <Route path="/estado" element={ <Estado /> } />
            <Route path="/contacto" element={ <Contacto /> } />
            
          </Routes>
        
        </BrowserRouter>

      </main>
    </>
  )
}

export default App
