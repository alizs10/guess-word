import { useContext } from "react"
import { GameContext } from "../../context/GameContext"

export default function GuessButton() {

    const { guess } = useContext(GameContext)

    function handleClick() {
        guess()
    }

    return (
        <button onClick={handleClick} className="container text-lg text-white bg-emerald-600 dark:bg-emerald-400 dark:text-black w-fit">
            <span className="px-2">
                Guess
            </span>
        </button>
    )
}
