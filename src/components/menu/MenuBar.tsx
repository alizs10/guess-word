import { House, Info, RotateCcw, Undo2 } from "lucide-react";
import PlayButton from "../game/PlayButton";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import GuessButton from "../game/GuessButton";

export default function MenuBar() {

    const { gameState, setGameState } = useContext(GameContext)

    function handleBack() {
        setGameState("still")
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

            <button className="container bg-container"><Info size={25} /></button>
        </div>
    )
}
