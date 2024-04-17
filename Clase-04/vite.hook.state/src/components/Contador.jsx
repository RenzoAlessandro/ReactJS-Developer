import { useState } from "react"
import { cardBase } from "../constants/clasesComponent"
// rafce

/* stateless | componente funcionales -> hooks (gancho) -> 16.8 de REACT */
const Contador = ({ valorInicial:inicial }) => { // props = { valorInicial }
  /* HOOK de estado (Hook state) -> useState() -> hooks buildin */
  //console.log(useState(2)) // Una array con 2 elementos -> [a, b]
  // console.log(useState(2)[0]) // el estado - NO PUEDO MODIFICAR DIRECTAMENTE EL ESTADO 
  // useState(2)[0] = 10 | <= NO SE PUEDE
  // console.log(useState(2)[1]) // la función que modifica el estado
  //        0           1
  const [contador, setContador] = useState(inicial) // ! Creo un estado a través de una prop
  // contador = 10 | <= NO SE PUEDE
  // console.log(contador)
  // console.log(setContador)

  const handleIncrementar = () => {
    // contador = contador + 1 // !NO SE DEBE MODIFICAR EL ESTADO DIRECTAMENTE
    // console.log(contador)
    setContador(contador + 1)

    /* Si quiero tener presición para sincronizar el estado, tengo que utilizar un callback */
    /* setContador(datoAnterior => datoAnterior + 1) // Scheduler
    setContador(prev => prev + 1) */
  }

  const handleDecrementar = (num) => {
    setContador(contador - num)
  }

  const handleResetear = () => {
    setContador(inicial)
  }

  return (
    <div className={`bg-dark ${cardBase}`}>
        <h3>Contador Componente: 
            <span className="display-2 text-danger">{contador}</span>
        </h3>
        <hr />
        <p>Lorem ipsum dolor sit.</p>
        <button className="btn btn-primary me-2" onClick={handleIncrementar}>Incrementar</button>
        <button className="btn btn-warning me-2" onClick={() => handleDecrementar(5)}>Decrementar</button>
        <button className="btn btn-danger" onClick={handleResetear}>Resetear</button>
    </div>
  )
}

export default Contador