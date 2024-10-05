import { Moon, SunDim } from "lucide-react";
import useTheme from "../../hooks/useTheme";



export default function ThemeToggle() {


    const [theme, setTheme] = useTheme();

    function toggleTheme() {
        setTheme(prevState => prevState === "dark" ? "light" : "dark");
    }

    return (
        <button onClick={toggleTheme} className="bg-gray-200 size-10 rounded-xl flex-center dark:bg-gray-800">
            {theme === "dark" ? <Moon size={20} /> : <SunDim size={20} />}
        </button>
    )
}
