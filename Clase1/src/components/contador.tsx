/*
    Componente Contador en React con TypeScript
    Este componente implementa un contador simple que permite incrementar su valor al hacer clic en un botón.
*/

import { useState } from "react";

const Contador = () => {
    // Estado para el contador
    const [count, setCount] = useState(0);

    // Renderizado del componente
    return (
        <>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <p>Contador: {count}</p>
        </>
    )
}

export default Contador;