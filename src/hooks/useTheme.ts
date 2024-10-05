import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function useTheme() {
    const [theme, setTheme] = useState<Theme>(() => {
        const storedTheme = localStorage.getItem("theme");
        return (storedTheme === "light" || storedTheme === "dark") ? storedTheme : "dark";
    });

    useEffect(() => {

        if (theme === "dark") {
            document.documentElement.classList.add('dark')
            localStorage.setItem("theme", "dark")
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem("theme", "light")
        }

    }, [theme]);

    return [
        theme,
        setTheme
    ] as const;
}
