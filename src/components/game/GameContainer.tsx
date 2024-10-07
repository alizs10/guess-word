import MenuBar from "../menu/MenuBar";
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
