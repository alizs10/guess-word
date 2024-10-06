import { Moon, SunMedium } from "lucide-react";
import useTheme from "../../hooks/useTheme";



export default function ThemeToggle() {


    const [theme, setTheme] = useTheme();

    function toggleTheme() {
        setTheme(prevState => prevState === "dark" ? "light" : "dark");
    }

    return (
        <button onClick={toggleTheme} className="p-3 rounded-xl flex-center">
            {theme === "dark" ? <Moon size={25} /> : <SunMedium size={25} />}
        </button>
    )
}
