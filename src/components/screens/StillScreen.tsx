import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import Difficulties from "../game/Difficulties"

export default function StillScreen() {

    const { gameState } = useContext(GameContext)

    if (!['still', 'hold'].includes(gameState)) return

    return (
        <Difficulties />
    )
}
