import About from "./components/about/About"
import ClearHistoryConfirm from "./components/confirm/ClearHistoryConfirm"
import GameHistory from "./components/game-history/GameHistory"
import GameContainer from "./components/game/GameContainer"
import Header from "./components/header/Header"
import { AppContextProvider } from "./context/AppContext"
import { GameContextProvider } from "./context/GameContext"

function App() {

  return (
    <AppContextProvider>
      <GameContextProvider>
        <main className="h-screen p-3 max-w-[600px] mx-auto">

          <Header />
          <GameContainer />
          <About />

          <GameHistory />
          <ClearHistoryConfirm />

        </main>
      </GameContextProvider>
    </AppContextProvider>
  )
}

export default App
