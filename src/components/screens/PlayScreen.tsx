import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import CharInputs from "../game/CharInputs"
import GuessCounter from "../game/GuessCounter"
import Difficulty from "../game/Difficulty"
import Keyboard from "../game/Keyboard"
import Timer from "../game/Timer"
import RestartConfirm from "../confirm/RestartConfirm"
import BackConfirm from "../confirm/BackConfirm"

export default function PlayScreen() {

    const { gameState } = useContext(GameContext)

    if (gameState !== "playing") return

    return (
        <div className="mt-2">
            <CharInputs />
            <div className="fixed max-w-[600px] flex flex-col gap-y-2 left-1/2 -translate-x-1/2 w-full px-3 bottom-20">
                <div className="flex-between">
                    <Timer />
                    <div className="flex gap-x-1">
                        <GuessCounter />
                        <Difficulty />
                    </div>
                </div>
                <Keyboard />
            </div>

            <RestartConfirm />
            <BackConfirm />
        </div>
    )
}
