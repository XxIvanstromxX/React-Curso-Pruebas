interface Propiedades {
    nombre: string
}

const Saludo: React.FC<Propiedades> = (props) => {
    return <h1>¡Hola, {props.nombre}!</h1>;
}

export default Saludo;