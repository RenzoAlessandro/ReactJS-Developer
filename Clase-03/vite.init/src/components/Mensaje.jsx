// rafce
const Mensaje = (props) => { // <---- es un objeto ---> props  = { titulo: '...', color: '' }
  //const mensaje = 'Esto es el componente Mensaje'
  console.log(props)

  return (
    <div className="bg-danger bg-opacity-75 rounded-3 mb-5 mt-3 p-5">
        {/* <h2>{ mensaje }</h2> */}
        <h2>{ props.titulo }</h2>
        <hr />
        {/*  { 2 + 3 } */}
        {/*  {mensaje} */}
        {/* { new Date().toLocaleString() } */}
        <p className="fw-bold fs-6">Fecha: <span className="text-white">{ props.fecha }</span></p>
        {/* p*2>lorem10 */} {/* <- Expresión de react <- motor de plantilla de react */}
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti, nulla!</p>
        <p>Tempora non suscipit, iste ad sit ex repellat voluptatum ut.</p>
    </div>
  )
}

export default Mensaje