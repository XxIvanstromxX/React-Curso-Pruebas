import { useState } from "react";

const Contador = () => {
    const [count, setCount] = useState(0);

    return (
        <>
            <button onClick={() => setCount(count + 1)}>Incrementar</button>
            <p>Contador: {count}</p>
        </>
    )
}

export default Contador;