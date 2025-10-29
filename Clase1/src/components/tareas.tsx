import { useState, useEffect } from "react";
import styles from "./Tareas.module.css";

interface Tarea {
  nombre: string;
}

const Tareas = (props: Tarea) => {
    const [completada, setCompletada] = useState(false);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCargando(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (cargando) {
        return <div>Cargando tarea...</div>;
    }

    const manejarClick = () => {
        setCompletada(!completada);
    };

    return (
        <div>
            <h2 className={completada ? styles["tarea-completada"] : styles["tarea-incompleta"]}>
                Tarea: {props.nombre}
            </h2>
            <p>Presiona el boton para completar la tarea</p>
            <button onClick={(manejarClick)}>{completada ? "Completada" : "Incompleta"}</button>
        </div>
    )
}



export default Tareas;