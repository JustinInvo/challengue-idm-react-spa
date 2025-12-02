import { Navigation } from "./routes/routes"
import { ThemeProvider } from "styled-components"
import { theme } from "./styles/theme"
import { GlobalStyles } from "./styles/GlobalStyles"

function App() {

  return (
    <>
      
      <ThemeProvider theme={theme}> 
        {/* Aplica los estilos globales (reset y fuentes) */}
        <GlobalStyles />
        {/* Carga el Router que contiene el Layout y la Navbar */}
        <Navigation/>
      </ThemeProvider>
    </>
  )
}

export default App
