import React from 'react'

const Card = ({animal, eleccion}) => {
  return (
    <>
        <h3>Tu animal preferido es: {animal}</h3>
        <h3>Tu preferencia es: {eleccion}</h3>
    </>
    
  )
}

export default Card