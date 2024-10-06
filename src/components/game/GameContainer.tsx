import { useContext } from "react";
import CharInputs from "./CharInputs";
import GuessButton from "./GuessButton";
import Keyboard from "./Keyboard";
import PlayButton from "./PlayButton";
import { GameContext } from "../../context/GameContext";
import Difficulties from "./Difficulties";
import MenuBar from "../menu/MenuBar";
import GuessCounter from "./GuessCounter";
import Difficulty from "./Difficulty";
import StillScreen from "../screens/StillScreen";
import PlayScreen from "../screens/PlayScreen";
import WonScreen from "../screens/WonScreen";

export default function GameContainer() {

    return (
        <section className="flex flex-col gap-y-4">

            <StillScreen />
            <PlayScreen />
            <WonScreen />

            <MenuBar />

        </section>
    )
}
