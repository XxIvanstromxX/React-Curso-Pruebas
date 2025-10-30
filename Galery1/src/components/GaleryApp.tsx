import {useState, useEffect} from 'react';

interface Image {
    id: number,
    name: string,
    image: string
}

const GaleriaApp = () => {
    const [fotos, setFotos] = useState<Image[]>([]);
    const [cargando, setCargando] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try{
                // Realizar la solicitud a la API de prueba
                const response = await fetch("https://dragonball-api.com/api/characters?limit=10")
                const data = await response.json();
                const imagen = data.items.map((d: Image) => {
                    const img = {
                        id: d.id,
                        name: d.name,
                        image: d.image
                    }
                    return img
                })
                console.log(imagen)

                // Actualizar el estado con los nombres de los usuarios y cambiar el estado de cargando
                setFotos(imagen)
                setCargando(false) // Datos cargados
            }
            catch(e){
                console.error(e);
                setCargando(false)
            }
        }  
        fetchData();
    }, []);

    if(cargando){
        return <p>Cargando...</p>
    }
    if(fotos.length === 0){
        return <p>Datos no encontrados...</p>
    }

    return (
        <div>
            <h2>Cargando imagenes {fotos.length}</h2>
            <ul>
                {
                    fotos.map((foto)=>(
                        <li key={foto.id}>
                            <h4>{foto.name}</h4>
                            <img src={foto.image} alt={foto.name} width="100px" height="auto"/>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default GaleriaApp;