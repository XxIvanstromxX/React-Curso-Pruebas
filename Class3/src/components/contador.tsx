import {useState} from 'react'

const Contador = () => {
    const [contador, setContador] = useState(0)
    // contador = valor actual "0"
    // setContador = función para actualizar el valor del contador
    
    const incrementar = () => {
        setContador(contador + 1)
    }

    return (
        <div>
            <h2>Contador: {contador}</h2>
            <button onClick={incrementar}>Incrementar</button>
        </div>
    )
}

export default Contador;