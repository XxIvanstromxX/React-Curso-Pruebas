import { NavBar } from "./components/NavBar"
import { Hero } from "./components/Hero"

function App() {

  return (
    <div className="bg-amber-50 dark:bg-gray-800 h-full min-h-screen transition-colors duration-500">
      <NavBar />
      <Hero/>
    </div>
  )
}

export default App
