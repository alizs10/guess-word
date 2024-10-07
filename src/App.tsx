import About from "./components/about/About"
import GameContainer from "./components/game/GameContainer"
import Header from "./components/header/Header"
import { AppContextProvider } from "./context/AppContext"
import { GameContextProvider } from "./context/GameContext"

function App() {

  return (
    <AppContextProvider>
      <main className="h-screen p-3 max-w-[600px] mx-auto">
        <Header />

        <GameContextProvider>
          <GameContainer />
        </GameContextProvider>

        <About />

      </main>
    </AppContextProvider>
  )
}

export default App
