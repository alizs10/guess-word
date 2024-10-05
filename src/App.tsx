import GameContainer from "./components/game/GameContainer"
import Header from "./components/header/Header"
import { GameContextProvider } from "./context/GameContext"

function App() {

  return (
    <main className="p-3">
      <Header />

      <GameContextProvider>
        <GameContainer />
      </GameContextProvider>
    </main>
  )
}

export default App
