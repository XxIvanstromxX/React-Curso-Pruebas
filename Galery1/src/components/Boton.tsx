interface BotonProps {
    palabras: string[];
}

const Boton = ({palabras}: BotonProps) => {
    return (
        <div>
           {palabras.map(palabra => (
            <button>{palabra}</button>
           ))} 
        </div>
    );
}

export default Boton;


useEffect(() => {
  // código del efecto
    console.log("El componente se ha montado o las dependencias han cambiado");
  // Limpieza del efecto (opcional)
    return () => {
        console.log("El componente se va a desmontar o las dependencias han cambiado");
    };
}, [Dependencias]);
