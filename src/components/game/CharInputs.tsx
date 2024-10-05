import { useContext } from "react"
import { GameContext } from "../../context/GameContext";

export default function CharInputs() {

    const { word, playerGuess } = useContext(GameContext);

    return (
        <div className="flex mx-auto mt-20 mb-10 gap-x-2">

            {word.split("").map((char, index) => (
                <div key={index} className="game-char-input">
                    {playerGuess[index]?.char || "?"}
                </div>
            ))}

        </div>
    )
}
