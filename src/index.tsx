import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import {
  Bridge,
  bootstrap,
  themeDark,
  themeLight,
  ThemeProvider,
  createWagmiProvider,
} from "@layerzerolabs/x-trader-joe-bridge";

import { wagmi } from "./config/wagmi";
import { testnet } from "./config/testnet";

import "./styles/reset.css";
import "./styles/fonts.css";
import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";

// boostrap the bridge
bootstrap(testnet, {
  evm: wagmi.wagmiAdapter,
});

const EthereumAdapterProvider = createWagmiProvider(
  wagmi
) as React.FC<React.PropsWithChildren>;

const App = () => {
  return (
    <Layout>
      <EthereumAdapterProvider>
        <ThemeProvider theme={themeDark}>
          <Bridge />
        </ThemeProvider>
      </EthereumAdapterProvider>
    </Layout>
  );
};

const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        minWidth: "100vw",
        justifyContent: "center",
        background: "#F0F0FF",
      }}
    >
      {children}
    </div>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
