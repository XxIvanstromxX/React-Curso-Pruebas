import NavBar from "./components/NavBar"
import LandingPage from "./pages/LandingPage"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="bg-radial-[at_50%_1000%] from-amber-600 via-amber-600 to-amber-50 to-95% dark:bg-radial-[at_50%_1000%] dark:from-gray-400 dark:via-gray-600 dark:to-gray-900 min-h-screen transition-colors duration-500">
      <NavBar />
      <LandingPage />
      <Footer />
    </div>
  )
}

export default App
