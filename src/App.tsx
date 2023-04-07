import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { darkThemePreferred } from "./constants/styling";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { Home } from "./pages/Home";
import { useRecoilState } from "recoil";
import { themeState } from "./state/theme";
import {
    lightTheme,
    midnightTheme,
    RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chains } from ".";

function App() {
    const [theme] = useLocalStorage(
        "theme",
        darkThemePreferred ? "dark" : "light"
    );
    const [recoilTheme, setRecoilTheme] = useRecoilState(themeState);

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");

            const el = document.getElementById("theme-color-meta");
            if (el) {
                document.removeChild(el);
            }

            const themeColorMeta = document.createElement("meta");
            themeColorMeta.setAttribute("name", "theme-color");
            themeColorMeta.setAttribute("content", "#000");
            themeColorMeta.id = "theme-color-meta";
            document.head.appendChild(themeColorMeta);
            setRecoilTheme("dark");
        } else {
            document.documentElement.classList.remove("dark");

            const el = document.getElementById("theme-color-meta");
            if (el) {
                document.removeChild(el);
            }

            const themeColorMeta = document.createElement("meta");
            themeColorMeta.setAttribute("name", "theme-color");
            themeColorMeta.setAttribute("content", "#FFF");
            themeColorMeta.id = "theme-color-meta";
            document.head.appendChild(themeColorMeta);
            setRecoilTheme("light");
        }
    }, [theme]);

    return (
        <RainbowKitProvider
            chains={chains}
            theme={
                recoilTheme === "light"
                    ? lightTheme({
                          accentColor: "#FFF",
                          accentColorForeground: "#000",
                      })
                    : midnightTheme({
                          accentColor: "#000",
                          fontStack: "system",
                      })
            }
        >
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
        </RainbowKitProvider>
    );
}

export default App;
