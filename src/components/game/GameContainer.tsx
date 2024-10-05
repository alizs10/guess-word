import { useContext } from "react";
import CharInputs from "./CharInputs";
import GuessButton from "./GuessButton";
import Keyboard from "./Keyboard";
import PlayButton from "./PlayButton";
import { GameContext } from "../../context/GameContext";

export default function GameContainer() {

    const { gameState, guessCounter } = useContext(GameContext);

    return (
        <section className="flex flex-col gap-y-4">

            {gameState === "still" && <PlayButton text="Play" />}

            {gameState === "playing" && <>
                <CharInputs />
                <span>Guesses: {guessCounter}</span>
                <Keyboard />
                <GuessButton />
            </>}

            {gameState === "won" && <PlayButton text="Restart" />}
        </section>
    )
}
