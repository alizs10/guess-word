import { House, Info, RotateCcw, StepForward } from "lucide-react";
import PlayButton from "../game/PlayButton";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import GuessButton from "../game/GuessButton";
import { AppContext } from "../../context/AppContext";

export default function MenuBar() {

    const { gameState, confirmBack, continueGame, setGameState } = useContext(GameContext)
    const { setAboutVis } = useContext(AppContext)

    function handleBack() {
        if (gameState === 'playing') {
            confirmBack()
            return
        }

        setGameState('still')
    }

    function handleAboutClick() {
        setAboutVis(true)
    }

    return (
        <div className="game-menu-bar">

            {gameState === 'hold' && (
                <button onClick={continueGame} className="container h-full text-white bg-blue-800 flex-center dark:bg-blue-600">
                    <StepForward size={25} />
                </button>
            )}

            {!['still', 'hold'].includes(gameState) && (
                <button onClick={handleBack} className="container h-full flex-center bg-container"><House size={25} /></button>
            )}

            {gameState === "playing" && <GuessButton />}

            <PlayButton>
                {['still', 'hold'].includes(gameState) ? "Start New Game" : gameState === 'playing' ? (<RotateCcw size={25} />) : gameState === 'won' ? "Restart" : ""}
            </PlayButton>

            <button onClick={handleAboutClick} className="container h-full bg-container">
                <Info size={25} />
            </button>
        </div>
    )
}
