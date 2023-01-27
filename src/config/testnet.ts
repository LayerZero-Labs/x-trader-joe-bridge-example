import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from '@layerzerolabs/x-trader-joe-bridge';

const tokens = [
  new Token(ChainId.FUJI, '0xcc14EcF814aAC6015bb38bc87296F28f8470eE13', 18, 'JOE'),
  new Token(ChainId.BSC_TESTNET, '0x845C442d3B6B5cCC32Fd0192b196b8e155Db508B', 18, 'JOE'),
  new Token(ChainId.ARBITRUM_GOERLI, '0x0cCd82C5E94F93913b3227B8069F598E2708d442', 18, 'JOE'),
];

const proxy = [
  {
    chainId: ChainId.FUJI,
    address: '0x4Fb062cA2F036576C78e5D91B94Cb60FbAaFEe80',
  },
];

export const testnet = {tokens, proxy};
