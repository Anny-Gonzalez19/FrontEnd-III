import { useState } from 'react'

const FuncComponent = () => {
  const[list, setList] = useState([])

  const addElement = () => {
    const newElement = `El elemento ${list.length + 1} ha sido añadido`
    setList([...list, newElement])
  }

  return (
    <>
      <h1>Actualización del estado de una lista en React</h1>
      <button onClick={addElement}>Añadir elemento</button>
      <ul>
        {list.map((elemento, index) => (
          <li key={index}>{elemento}</li>
        ))}
      </ul>
    </>
  )
}

export default FuncComponent