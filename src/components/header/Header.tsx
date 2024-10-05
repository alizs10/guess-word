import ThemeToggle from "../theme/ThemeToggle";

export default function Header() {
    return (
        <header className="flex-between">
            <h1 className="font-mono text-2xl font-bold">Guess Word</h1>
            <ThemeToggle />
        </header>
    )
}
