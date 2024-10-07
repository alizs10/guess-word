import { useContext } from "react";
import MenuBar from "../menu/MenuBar";
import StillScreen from "../screens/StillScreen";
import PlayScreen from "../screens/PlayScreen";
import WonScreen from "../screens/WonScreen";
import { GameContext } from "../../context/GameContext";

export default function GameContainer() {

    const { gameState } = useContext(GameContext)

    console.log(gameState)

    return (
        <section className="flex flex-col gap-y-4">

            <StillScreen />
            <PlayScreen />
            <WonScreen />

            <MenuBar />

        </section>
    )
}
