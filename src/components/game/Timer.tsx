import { useContext } from "react"
import { GameContext } from "../../context/GameContext"

export default function Timer() {

    const { timer } = useContext(GameContext).gameData

    return (
        <div className="container flex h-fit w-fit bg-container">
            <span className="text-xs"><span className="text-xl font-bold">{timer}</span> sec</span>
        </div>
    )
}
