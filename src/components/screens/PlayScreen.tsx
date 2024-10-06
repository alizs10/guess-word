import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import CharInputs from "../game/CharInputs"
import GuessCounter from "../game/GuessCounter"
import Difficulty from "../game/Difficulty"
import Keyboard from "../game/Keyboard"
import Timer from "../game/Timer"

export default function PlayScreen() {

    const { gameState } = useContext(GameContext)

    if (gameState !== "playing") return

    return (
        <div className="mt-2">
            <CharInputs />
            <div className="fixed flex flex-col gap-y-2 left-3 right-3 bottom-20">
                <div className="flex-between">
                    <Timer />
                    <div className="flex gap-x-1">
                        <GuessCounter />
                        <Difficulty />
                    </div>
                </div>
                <Keyboard />
            </div>
        </div>
    )
}
