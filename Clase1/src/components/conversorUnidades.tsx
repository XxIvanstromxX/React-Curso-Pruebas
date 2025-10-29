import { useState } from "react";

const ConversorUnidades = () => {
    const [metros, setMetros] = useState("");
    const factorDeConversion = 3.28084;
    const pies = Number(metros) * factorDeConversion;

    const manejoDeCambio = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const n = Number(value);

        if(!isNaN(n) || value === ''){
            setMetros(value)
        }
    }

    return (
        <div>
            <h3>Introduce el valor a convertir</h3>
            <p>Metros a Pies</p>
            <input 
                type="text" 
                value={metros} 
                placeholder="Type Something..." 
                onChange={e => manejoDeCambio(e)} 
            />
            <h4>
                Metros: {metros}
            </h4>
            <p>Conversión</p>
            <h4>
                Pies: {pies !== 0 ? pies.toFixed(3) : 0}
            </h4>
        </div>
    )
}

export default ConversorUnidades