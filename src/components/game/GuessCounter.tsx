import { useContext } from "react"
import { GameContext } from "../../context/GameContext"

export default function GuessCounter() {

    const { guessCounter } = useContext(GameContext)

    return (
        <div className="container flex h-fit w-fit bg-container">
            <span className="text-xs"><span className="text-xl font-bold">{guessCounter}</span> guess</span>
        </div>
    )
}
