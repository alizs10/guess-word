import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import GuessCounter from "../game/GuessCounter"
import Difficulty from "../game/Difficulty"
import Timer from "../game/Timer"

export default function WonScreen() {

    const { gameState, gameData } = useContext(GameContext)

    if (gameState !== "won") return

    return (
        <div className="flex-col gap-4 p-5 mt-20 rounded-2xl flex-center">

            <h1 className="font-bold uppercase text-7xl text-emerald-600 dark:text-emerald-400">{gameData.word}</h1>

            <div className="flex gap-2">
                <Timer />
                <GuessCounter />
                <Difficulty />
            </div>

            <h2 className="text-3xl font-bold text-black dark:text-white">Congratulations!</h2>
        </div>
    )
}
