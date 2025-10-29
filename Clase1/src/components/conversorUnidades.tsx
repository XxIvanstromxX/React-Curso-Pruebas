import React, { useState } from "react";

const ConversorUnidades = () => {
    const [metros, setMetros] = useState("");
    const [pies, setPies] = useState("")
    const factorDeConversion = 3.28084;

    const manejarCambioMetros = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const n = Number(value);

        if(!isNaN(n) || value === ''){
            setMetros(value)
            const calculoMetrosAPies = n * factorDeConversion;
            setPies(String(calculoMetrosAPies))
        }
    }

    const manejarCambiosPies = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const n = Number(value);

        if(!isNaN(n) || value === ""){
            setPies(value)
            const calculoPiesAMetros = n / factorDeConversion;
            setMetros(String(calculoPiesAMetros))
        }
    }

    return (
        <div>
            <h3>Introduce el valor a convertir</h3>
            <p>Metros a Pies</p>
            <input 
                type="text" 
                value={metros} 
                placeholder="Escribe Metros" 
                onChange={e => manejarCambioMetros(e)} 
            />
            <input 
                type="text"
                value={pies}
                placeholder="Escribe Pies"
                onChange={e => manejarCambiosPies(e)}
            />
        </div>
    )
}

export default ConversorUnidades