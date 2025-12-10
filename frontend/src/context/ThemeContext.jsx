import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const preference = window.matchMedia("(prefers-color-scheme: dark)");

        setTheme(preference.matches ? "dark" : "light");

        const listener = (e) => {
            setTheme(e.matches ? "dark" : "light");
        };

        preference.addEventListener("change", listener);

        return () => preference.removeEventListener("change", listener);
    }, []);

    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    );
}