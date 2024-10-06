import { useContext } from "react"
import { GameContext } from "../../context/GameContext";

export default function CharInputs() {

    const { word, playerGuess } = useContext(GameContext);

    return (
        <div className="grid items-center justify-center w-full grid-cols-5 gap-2 rounded-2xl md:grid-cols-7 xl:grid-cols-9">

            {word.split("").map((char, index) => (
                <div key={index} className={`game-char-input ${(playerGuess.length > 0 && playerGuess.find(guess => guess.place === index)?.isCorrect) ? 'game-char-input-correct' : 'game-char-input-default'}`}>
                    {(playerGuess.length > 0 && playerGuess.find(guess => guess.place === index)) ? playerGuess.find(guess => guess.place === index)?.char : '?'}
                </div>
            ))}

        </div>
    )
}
