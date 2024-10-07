import { History } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";
import { useContext } from "react";
import { GameContext } from "../../context/GameContext";
import { AppContext } from "../../context/AppContext";

export default function Header() {

    const { gameState } = useContext(GameContext);
    const { setHistoryVis } = useContext(AppContext);

    function handleHistoryClick() {
        setHistoryVis(true);
    }

    return (
        <header className="flex-between">
            <h1 className="text-2xl font-bold">Guess Word <span className="text-xs">1.0.0</span></h1>
            <div className="flex items-center gap-x-1">

                {gameState !== 'playing' && (
                    <button onClick={handleHistoryClick} className="p-3">
                        <History size={25} />
                    </button>
                )}

                <ThemeToggle />
            </div>
        </header>
    )
}
