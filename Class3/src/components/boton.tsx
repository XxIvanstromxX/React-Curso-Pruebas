const boton = () => {
    const manejarClick = () =>{
        alert("Botón clickeado");
    } 

    return (
        <button onClick={manejarClick}>Haz click aquí</button>
    )
}

export default boton;