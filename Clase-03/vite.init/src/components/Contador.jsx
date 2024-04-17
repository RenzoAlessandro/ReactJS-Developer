import { useState } from "react"
import { cardBase } from "../constants/clasesComponent"
// rafce

/* stateless -> componente funcionales -> hooks (gancho) -> 16.8 de REACT */
const Contador = ({ valorInicial:inicial }) => { // props = { valorInicial }
  /* HOOK de estado (Hook state) -> useState() -> hooks buildin */
  //console.log(useState(2)) // Una array con 2 elementos
  // console.log(useState(2)[0]) // el estado - NO PUEDO MODIFICAR EL ESTADO 
  // console.log(useState(2)[1]) // la función que modifica el estado
  const [contador, setContador] = useState(inicial) // ! Creo un estado a través de una prop
  // console.log(contador)
  // console.log(setContador)

  return (
    <div className={`bg-info ${cardBase}`}>
        <h2>Contador Componente: 
            <span className="display-2 text-danger">{contador}</span>
        </h2>
        <hr />
        <p>Lorem ipsum dolor sit.</p>
        <button className="btn btn-primary me-2">Incrementar</button>
        <button className="btn btn-warning me-2">Decrementar</button>
        <button className="btn btn-danger">Resetear</button>
    </div>
  )
}

export default Contador