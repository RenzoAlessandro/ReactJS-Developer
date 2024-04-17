import { useState } from "react"
import { arrayFrutas } from "../constants/clasesComponent"
// rafce    


const ListaFrutas = () => {
  // const [frutas, setFrutas] = useState(['Manzana', 'Pera', 'Naranja'])
  const [frutas, setFrutas] = useState(arrayFrutas)
  console.log(frutas) // Estado
  console.log(setFrutas) // Función que modifica el estado
  const [nuevaFruta, setNuevaFruta] = useState('')

  const handleAgregar = () => {
    if( nuevaFruta.trim() !== '' ) {
        // frutas.push(nuevaFruta) // !NO PUEDO MODIFICAR DIRECTAMENTE EL ESTADO
        // console.log(frutas)
        const nuevoArrayFrutas = [...frutas, nuevaFruta]
        setFrutas(nuevoArrayFrutas)
        setNuevaFruta('')
    }
  }

  const handleOnChange = (e) => {
    setNuevaFruta(e.target.value)
  }

  return (
    <>
        <div className="mb-4">
            <label htmlFor="lbl-fruta" className="form-label">Ingrese una fruta</label>
            <input 
                type="text" 
                className="form-control" 
                id="lbl-fruta" 
                placeholder="Ej: Manzana"
                value={nuevaFruta}
                onChange={handleOnChange}
            />
        </div>

        <button type="button" className="btn btn-success" onClick={handleAgregar}>Agregar fruta</button>

        {/* <label htmlFor="lbl-cargarArchivo" className="display-2 text-danger">Presione para cargar un archivo</label>
        <input type="file" name="" id="lbl-cargarArchivo" style={{display: 'none'}}/> */}
        
        <h3 className="display-4" onClick={handleAgregar}>Loop Rendering</h3>

        <ul className="list-group">

            {/* {
                frutas.map((fruta, index) => {
                    return (
                        <li key={fruta+index} className="list-group-item">{fruta}</li>                
                    )
                })
            } */}

           {/*  {
                frutas.map((fruta, index) => <li key={fruta+index} className="list-group-item">{fruta}</li>)
            } */}

            {
                frutas.map((fruta, index) => (
                    <li key={fruta+index} className="list-group-item">{fruta}</li>
                ))
            }

            
        </ul>
    </>
  )
}




export default ListaFrutas