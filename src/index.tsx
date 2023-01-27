import React from "react";
import ReactDOM from "react-dom/client";
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
import { ConnectButton, RainbowKitProvider } from "@rainbow-me/rainbowkit";

import "./styles/reset.css";
import "./styles/fonts.css";
import "@rainbow-me/rainbowkit/styles.css";
import "react-toastify/dist/ReactToastify.css";
import { WagmiConfig } from "wagmi";

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
        <ThemeProvider theme={themeLight}>
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

// don't use strict mode with rainbowkit
// see: https://github.com/rainbow-me/rainbowkit/issues/836
root.render(
  <>
    {/* use your own rainbow kit provider */}
    <WagmiConfig client={wagmi.wagmiClient as any}>
      <RainbowKitProvider chains={wagmi.wagmiChains}>
        {/* you use connect button from rainbowkit */}
        <ConnectButton />

        {/* bridge will use existing integration */}
        <App />
      </RainbowKitProvider>
    </WagmiConfig>
  </>
);
