import {ChainId} from '@layerzerolabs/lz-sdk';
import {Token} from '@layerzerolabs/x-trader-joe-bridge';

const tokens = [
  new Token(ChainId.BSC, '0xed1fa3155ebB4cE35DA3e2f8B122717B823BDFa1', 18, 'ONFTE'),
  new Token(ChainId.ARBITRUM, '0x59d5cA4D8f4428C5AAc66f7D91D115F408b847ce', 18, 'ONFTE'),
  new Token(ChainId.AVALANCHE, '0x2B041419A471b9aDB996687B3D27Fbbbf6340A4f', 18, 'ONFTE'),
  new Token(ChainId.OPTIMISM, '0x3134F3ff6C0DAf74B32fc683B4098F9de0086589', 18, 'ONFTE'),
  new Token(ChainId.POLYGON, '0xc6a9d92d5D39D7091a262F964285FB75aaBB2a48', 18, 'ONFTE'),
];

export const mainnet = {tokens};
