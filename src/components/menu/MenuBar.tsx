import { House, Info, RotateCcw } from "lucide-react";
import PlayButton from "../game/PlayButton";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import GuessButton from "../game/GuessButton";
import { AppContext } from "../../context/AppContext";

export default function MenuBar() {

    const { gameState, setGameState } = useContext(GameContext)
    const { setAboutVis } = useContext(AppContext)

    function handleBack() {
        setGameState("still")
    }

    function handleAboutClick() {
        setAboutVis(true)
    }

    return (
        <div className="game-menu-bar">

            {gameState !== 'still' && (
                <button onClick={handleBack} className="container h-full flex-center bg-container"><House size={25} /></button>
            )}

            {gameState === "playing" && <GuessButton />}

            <PlayButton>
                {gameState === 'still' ? "Start New Game" : gameState === 'playing' ? (<RotateCcw size={25} />) : gameState === 'won' ? "Restart" : ""}
            </PlayButton>

            <button onClick={handleAboutClick} className="container h-full bg-container">
                <Info size={25} />
            </button>
        </div>
    )
}
