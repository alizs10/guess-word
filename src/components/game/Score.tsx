import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { Star } from "lucide-react"

export default function Score() {

    const { score } = useContext(GameContext).gameData

    return (
        <div className="container flex h-fit w-fit bg-container">
            <div className="flex items-center text-yellow-600 dark:text-yellow-400 gap-x-2">
                <span className="text-xl font-bold">{score.toFixed(1)}</span>
                <Star size={20} />
            </div>
        </div>
    )
}
