import Contador from '../components/Contador'
import ListaFrutas from '../components/ListaFrutas'

const Estado = () => {
  return (
    <section>

        <h1 className='text-danger display-2'>Hook de Estado (useState)</h1>

        <Contador valorInicial={22} />

        <Contador valorInicial={55} />

        <hr />

        <ListaFrutas />

    </section>
  )
}

export default Estado