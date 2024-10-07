import { useContext } from "react"
import { GameContext } from "../../context/GameContext"

export default function Difficulty() {

    const { difficulty } = useContext(GameContext).gameData

    return (
        <div className="container flex h-fit w-fit gap-x-1 bg-container">
            <span className="font-sans text-xl">{difficulty === 0 ? 'Easy' : difficulty === 1 ? 'Medium' : 'Hard'}</span>
        </div>
    )
}
