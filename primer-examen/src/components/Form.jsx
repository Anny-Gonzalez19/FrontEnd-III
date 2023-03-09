import React, { useState } from 'react'
import Card from './Card'

const Form = () => {
    const [animal, setAnimal] = useState('')
    const [eleccion, setEleccion] = useState('')
    const [error, setError] = useState(null)
    const [show, setShow] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()

        if (animal.length < 3 || /^\s/.test(animal)) {
        setError('Por favor chequea que la información sea correcta')
        setShow(false)
        return
        }

        if (eleccion.length < 6) {
        setError('Por favor chequea que la información sea correcta');
        setShow(false)
        return
        }

        setError(null)
        setShow(true)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>Animal preferido: </label>
                <input type="text" onChange={(e) => setAnimal(e.target.value)}/>
                <br/>
                <label>Prefieres adoptar o comprar? </label>
                <input type="text" onChange={(e) => setEleccion(e.target.value)}/>
                <br/>
                <button>Enviar</button>
            </form>

            {show ? <Card animal={animal} eleccion={eleccion}/> : error}
        </>
    )
    }


    export default Form