import { useContext } from "react"
import { GameContext } from "../../context/GameContext";

export default function CharInputs() {

    const { word, playerGuess } = useContext(GameContext);

    return (
        <div className="grid grid-cols-3 gap-4 mx-auto mt-20 mb-10">

            {word.split("").map((char, index) => (
                <div key={index} className={`game-char-input ${(playerGuess.length > 0 && playerGuess.find(guess => guess.place === index)?.isCorrect) ? 'game-char-input-correct' : 'game-char-input-default'}`}>
                    {(playerGuess.length > 0 && playerGuess.find(guess => guess.place === index)) ? playerGuess.find(guess => guess.place === index)?.char : '?'}
                </div>
            ))}

        </div>
    )
}
