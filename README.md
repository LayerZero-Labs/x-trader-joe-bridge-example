# Trader Joe Bridge Example

This is an example implementation of the Trader Joe Bridge using the @layerzerolabs/x-trader-joe-bridge package.

## Required Configuration

Your app must call the `bootstrap` function from @layerzerolabs/x-trader-joe-bridge with token and wallet configurations.

### Token Config

The token configuration dictates which tokens will be available for transfer. See [mainnet](https://github.com/LayerZero-Labs/x-trader-joe-bridge-example/blob/master/src/config/mainnet.ts) for an example config. Use `Token` from @layerzerolabs/x-trader-joe-bridge with chain id, token address, decimals, and token symbol. Also include proxy contracts with chain id, and contract address.

### Wallet Config

The app is set up to use rainbowkit as the wallet connector, see their [docs](https://www.rainbowkit.com/docs/introduction) for visual customization. The example app is using the default wallets list, see docs also to customize. Which networks using which rpc providers is also configurable using the [wagmi chain configuration](https://github.com/LayerZero-Labs/x-trader-joe-bridge-example/blob/master/src/config/wagmi.ts#L9).

## Rendering the Bridge

To render the `Bridge`, create a wallet adapter using the `createWagmiProvider` utility function and wrap `Bridge` with it and the `ThemeProvider` with the desired theme. If using a theme switcher this prop will need to be dynamic.

```
    <EthereumAdapterProvider>
        <ThemeProvider theme={themeDark}>
            <Bridge />
        </ThemeProvider>
    </EthereumAdapterProvider>
```

## External Styles

Import styles from `rainbowkit` and `react-tostify` and include and import any custom fonts.

## Running the Example App (built with Create React App)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
