import { useContext } from "react";
import CharInputs from "./CharInputs";
import GuessButton from "./GuessButton";
import Keyboard from "./Keyboard";
import PlayButton from "./PlayButton";
import { GameContext } from "../../context/GameContext";
import Difficulties from "./Difficulties";

export default function GameContainer() {

    const { gameState, guessCounter, difficulty } = useContext(GameContext);

    return (
        <section className="flex flex-col gap-y-4">

            {gameState === "still" &&
                <div className="flex flex-col items-center justify-center gap-y-4">
                    <Difficulties />
                    <PlayButton text="Play" />

                </div>
            }

            {gameState === "playing" && <>
                <CharInputs />
                <div className="flex-between">
                    <span>Guesses: {guessCounter}</span>
                    <span>Difficulty: {difficulty === 0 ? 'Easy' : difficulty === 1 ? 'Medium' : 'Hard'}</span>
                </div>
                <Keyboard />
                <GuessButton />
            </>}

            {gameState === "won" && <PlayButton text="Restart" />}
        </section>
    )
}
