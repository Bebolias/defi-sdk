require('@babel/register');
require('core-js');
require('regenerator-runtime/runtime');
require('dotenv').config();
import { HardhatUserConfig } from 'hardhat/config';
import '@nomiclabs/hardhat-waffle';
import '@nomiclabs/hardhat-etherscan';
import 'hardhat-tracer';
import 'hardhat-docgen';
import 'solidity-coverage';

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.12',
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
    },
  },
  networks: {
    hardhat: {
      forking: {
        url: `https://mainnet.infura.io/v3/${process.env.INFURA_API_KEY}`,
      },
      blockGasLimit: 10000000,
      gas: 10000000,
      allowUnlimitedContractSize: true,
      accounts: [
        {
          privateKey: '0xbe5d6e330de6c44c137f8fb45fa44dada079fb8bc29d290cadd8f882035dd189',
          balance: '10000000000000000000000',
        },
        {
          privateKey: '0x473acc210edb35998de9dc65495bafbf0a3804950482cd2b48af7bba7046d7de',
          balance: '10000000000000000000000',
        },
      ]
    },
    'truffle-dashboard': {
      url: 'http://localhost:24012/rpc',
      timeout: 400000,
    },
    mainnet: {
      url: 'https://cloudflare-eth.com',
    },
    xdai: {
      url: 'https://rpc.gnosischain.com',
    },
    bsc: {
      url: 'https://bsc-dataseed.binance.org',
    },
    avalanche: {
      url: 'https://api.avax.network/ext/bc/C/rpc',
    },
    optimisticEthereum: {
      url: 'https://mainnet.optimism.io',
    },
    arbitrumOne: {
      url: 'https://arb1.arbitrum.io/rpc',
    },
    polygon: {
      url: 'https://polygon-rpc.com',
    },
    aurora: {
      url: 'https://mainnet.aurora.dev',
    },
    fantom: {
      url: 'https://rpc.ftm.tools',
    },
  },
  etherscan: {
    apiKey: {
      'mainnet': process.env.ETHEREUM_API_KEY ? process.env.ETHEREUM_API_KEY.toString() : '',
      'polygon': process.env.POLYGON_API_KEY ? process.env.POLYGON_API_KEY.toString() : '',
      'optimisticEthereum': process.env.OPTIMISM_API_KEY ? process.env.OPTIMISM_API_KEY.toString() : '',
      'arbitrumOne': process.env.ARBITRUM_API_KEY ? process.env.ARBITRUM_API_KEY.toString() : '',
      'bsc': process.env.BSC_API_KEY ? process.env.BSC_API_KEY.toString() : '',
      'aurora': 'no',
      'gnosis': process.env.GNOSIS_API_KEY ? process.env.GNOSIS_API_KEY.toString() : '',
      'avalanche': process.env.AVALANCHE_API_KEY ? process.env.AVALANCHE_API_KEY.toString() : '',
      'opera': process.env.FANTOM_API_KEY ? process.env.FANTOM_API_KEY.toString() : '',
    },
  },
  docgen: {
    path: './docs',
    clear: false,
    runOnCompile: false,
  },
  mocha: {
    timeout: '200000',
  },
};

export default config;
