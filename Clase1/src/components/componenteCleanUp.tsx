import { useEffect } from "react";

const ComponenteConCleanUp = () => {
    useEffect(() => {
        const timerID = setInterval(() => {
            console.log("Hola, estoy activo");
        }, 1000);

        return () => {
            clearInterval(timerID);
            console.log("Componente desmontado, timer limpiado");
        };
    }, []);

    return <div>Componente con timer (mira la consola)</div>;
};

export default ComponenteConCleanUp;