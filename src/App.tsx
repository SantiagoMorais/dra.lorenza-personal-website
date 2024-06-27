import { NavBarProvider } from "@contexts/navBarContext"
import { AppRoutes } from "@pages/appRoutes"

function App() {
  return (
    <NavBarProvider>
      <AppRoutes />
    </NavBarProvider>
  )
}

export default App
