import './App.css'
import Contador from './components/Contador'
import Mensaje from './components/Mensaje'
import Numero from './components/Numero'

function App() {
 
  return (
    <main className='container'>
      <h1 className='text-danger display-2'>Hola mundo!</h1>
      <hr />
      <Mensaje 
        titulo="Este es el componente Mensaje 1" 
        color="blue"
        fecha="11-04-2024" 
      />
      <Mensaje 
        titulo="Este es el componente Mensaje 2"
        color="pink"
        fecha="12-04-2024" 
      ></Mensaje>

      <hr />

      

      <div className="row">
        <div className="col">
          <Numero valorInicial={1} colorFondo="blue" alineacion="text-start"  />
        </div>
        <div className="col">
          <Numero valorInicial={2} colorFondo="red"  />
        </div>
        <div className="col">
          <Numero valorInicial={3} colorFondo="green" alineacion="text-start" />
        </div>
        <div className="col">
          <Numero valorInicial={4} colorFondo="yellow" alineacion="text-center"  />
        </div>
      </div>

      <hr />

      <Contador valorInicial={22} />

      <Contador valorInicial={55} />

    </main>
  )
}

export default App
