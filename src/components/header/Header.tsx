import { History } from "lucide-react";
import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
    return (
        <header className="flex-between">
            <h1 className="text-2xl font-bold">Guess Word <span className="text-xs">1.0.0</span></h1>
            <div className="flex items-center gap-x-1">
                <button className="p-3">
                    <History size={25} />
                </button>

                <ThemeToggle />
            </div>
        </header>
    )
}
