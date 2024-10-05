import { useContext } from "react";
import CharInputs from "./CharInputs";
import GuessButton from "./GuessButton";
import Keyboard from "./Keyboard";
import PlayButton from "./PlayButton";
import { GameContext } from "../../context/GameContext";

export default function GameContainer() {

    const { gameState } = useContext(GameContext);

    return (
        <section className="flex flex-col gap-y-4">

            {gameState === "still" && <PlayButton />}

            {gameState === "playing" && <>
                <CharInputs />
                <Keyboard />
                <GuessButton />
            </>}
        </section>
    )
}
