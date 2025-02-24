import Navbar from "./components/Navbar"
import { NavBarProvider } from "./provider/navItemsProvider"


function App() {

  console.log("rodando")
  return (
    <NavBarProvider>
      <div>
        <Navbar />
      </div>
    </NavBarProvider>


  )
}

export default App
