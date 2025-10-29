/*
    Componente DataFetch en React con TypeScript
    Este componente realiza una solicitud a una API para obtener una lista de usuarios y mostrarlos en pantalla.
*/

import { useEffect, useState } from "react";

// Definición de la interfaz para los datos esperados
interface datosEsperados {
    name: string
}

const DataFetchComponent = () => {
    const [usuarios, setUsuarios] = useState<string[]>([]); // Estado para almacenar los nombres de los usuarios
    const [cargando, setCargando] = useState(true) // Estado para indicar si los datos están siendo cargados

    // useEffect para realizar la solicitud a la API cuando el componente se monta
    useEffect(() => {
        const fetchData = async () => {
            try{
                // Realizar la solicitud a la API de prueba
                const response = await fetch("https://jsonplaceholder.typicode.com/users")
                const data = await response.json();
                const nombre = data.map((d: datosEsperados) => { return d.name})
                console.log(nombre)

                // Actualizar el estado con los nombres de los usuarios y cambiar el estado de cargando
                setUsuarios(nombre)
                setCargando(false) // Datos cargados
            }
            catch(e){
                console.error(e);
                setCargando(false)
            }
        }  
        fetchData();
    }, []);

    // Renderizado condicional basado en el estado de cargando y la lista de usuarios
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