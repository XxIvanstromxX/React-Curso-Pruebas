import { useEffect, useState } from "react";

interface datosEsperados {
    name: string
}

const DataFetchComponent = () => {
    const [usuarios, setUsuarios] = useState<string[]>([]);
    const [cargando, setCargando] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json();
                const nombre = data.map((d: datosEsperados) => { return d.name})
                console.log(nombre)

                setUsuarios(nombre)
                setCargando(false)
            }
            catch(e){
                console.error(e);
                setCargando(false)
            }
        }  
        fetchData();
    }, []);

    if(cargando){
        return <h2>Cargando...</h2>
    }
    if(usuarios.length === 0){
        return <h2>No hay usuarios encontrados</h2>
    }

    return (
        <div>
            <h2>Cargando lista de usuarios ({usuarios.length})</h2>
            <ul>
                {usuarios.map((nombre, index) => (
                    <li key={index}> {nombre} </li>
                ))}
            </ul>
        </div>
    )
}

export default DataFetchComponent