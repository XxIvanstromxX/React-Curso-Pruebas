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
