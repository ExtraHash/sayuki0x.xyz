import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "@rainbow-me/rainbowkit/styles.css";
import {
    getDefaultWallets,
    RainbowKitProvider,
    midnightTheme,
} from "@rainbow-me/rainbowkit";
import {
    Chain,
    configureChains,
    createClient,
    mainnet,
    WagmiConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import { RecoilRoot } from "recoil";

window.Buffer = window.Buffer || require("buffer").Buffer;

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

export const { chains, provider } = configureChains(
    [mainnet],
    [publicProvider()]
);

const { connectors } = getDefaultWallets({
    appName: "FrenlyFaces",
    chains,
});

const wagmiClient = createClient({
    autoConnect: false,
    connectors,
    provider,
});

root.render(
    <BrowserRouter>
        <RecoilRoot>
            <WagmiConfig client={wagmiClient}>
                <App />
            </WagmiConfig>
        </RecoilRoot>
    </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
