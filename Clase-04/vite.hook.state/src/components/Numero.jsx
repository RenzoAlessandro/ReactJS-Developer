// rafce

const Numero = (props) => { // ---> obj de js -> props = { valorInicial, colorFondo}
  console.log(props)

  // const { valorInicial, colorFondo, alineacion } = props // desestruturing objects (Destrucción de objetos)
  const { valorInicial:inicial, colorFondo:fondoNuevo, alineacion = 'text-center' } = props // desestruturing objects (Destrucción de objetos) con alias

  const objStyle = { 
    backgroundColor: fondoNuevo, 
    color: fondoNuevo === 'yellow' ? 'black' : 'white'
  }

  const stringClass = `bg-opacity-75 rounded-3 my-3 p-4 ${alineacion}`
  
  return (
    <div className={stringClass} style={objStyle}>
        <h2>{inicial}</h2>
    </div>
  )
}

export default Numero