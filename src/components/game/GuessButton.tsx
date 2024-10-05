import { useContext } from "react"
import { GameContext } from "../../context/GameContext"

export default function GuessButton() {

    const { guess } = useContext(GameContext)

    function handleClick() {
        guess()
    }

    return (
        <button onClick={handleClick} className="px-5 py-3 mx-auto mt-10 text-2xl text-white bg-emerald-600 dark:bg-emerald-400 dark:text-black rounded-3xl w-fit">Guess</button>
    )
}
