import GaleriaApp from "./components/GaleryApp"
import "./App.css"
// import Boton from "./components/Boton"

// const palabras = ["Hola", "Mundo", "Desde", "React", "CCOL"];

function App() {
  return (
    <>
      <h1 className="titulo">
        Galería de Imágenes
      </h1>
      <GaleriaApp/>
      {/* <Boton palabras={palabras}/> */}
    </>
  )
}

export default App
