import { useState } from "react";

const InputDinamico = () => {
    const [texto, setTexto] = useState("");

    return (
        <>
            <input type="text" 
                placeholder="Type something..." 
                value={texto} 
                onChange={(e)=>{setTexto(e.target.value)}}
            />
        </>
    )
}

export default InputDinamico;