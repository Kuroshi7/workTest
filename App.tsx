import Navbar from "./components/Navbar"
import { NavBarProvider } from "./components/provider/navItemsProvider"
import { Provider } from "./components/ui/provider"




function App() {

  console.log("rodando")
  return (
    <Provider>
      <NavBarProvider>
        <Navbar />
      </NavBarProvider>
    </Provider>
  )
}

export default App