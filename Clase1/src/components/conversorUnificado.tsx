import React, { useState } from "react";

type Unidad = "metros" | "pies";

const ConversorUnificado = () => {
    const [unidad, setUnidad] = useState<Unidad>("metros");
    const [valor, setValor] = useState("");
    const factorDeConversion = 3.28084; // 1 metro = 3.28084 pies

    const manejarCambio = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setUnidad(e.target.value as Unidad);
    }
    
    const manejarValor = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const n = Number(value);
        
        // Validar que la entrada sea un número o esté vacía
        if(!isNaN(n) || value === ''){
            setValor(value)
        }
    }

    const numeroAConvertir = Number(valor);
    let resultado: number;
    let unidadOpuesta: Unidad;
    
    if(unidad === "metros") {
        resultado = numeroAConvertir * factorDeConversion;
        unidadOpuesta = "pies";
    } else {
        resultado = numeroAConvertir / factorDeConversion;
        unidadOpuesta = "metros";
    }


    return (
        <div>
            <h2>Conversor Unificado</h2>
            <select value={unidad} onChange={e => manejarCambio(e)}>
                <option value="metros">Metros</option>
                <option value="pies">Pies</option>
            </select>
            
            <input type="text" value={valor} onChange={e => manejarValor(e)}/>
            
            <h2>El valor de la conversion:</h2>
            <p>
                {valor || 0} {unidad} equivale a:
            </p>
            <p>
                {resultado.toFixed(4)} {unidadOpuesta}
            </p>
        </div>
    )
}

export default ConversorUnificado;