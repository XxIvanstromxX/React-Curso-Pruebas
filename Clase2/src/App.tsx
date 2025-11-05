import Saludo from "./components/componente1"
import Card from "./components/propsChild"

function App() {

  return (
    <>
      <Card>
        <h1>Este componente recibe más componentes</h1>
        <Saludo nombre="Ivan"></Saludo>
      </Card>
    </>
  )
}

export default App