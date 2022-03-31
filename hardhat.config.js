require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-etherscan");

const key = require('./key.js')

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
 module.exports = {
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  networks: {
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${key.INFURA_ID}`,
      accounts: [key.ACCOUNT_KEY]
    }
  },
  etherscan: {
    apiKey: {
      mainnet: key.ETHERSCAN_API_KEY,
      ropsten: key.ETHERSCAN_API_KEY,
      rinkeby: key.ETHERSCAN_API_KEY,
      goerli: key.ETHERSCAN_API_KEY,
      kovan: key.ETHERSCAN_API_KEY,
      // binance smart chain
      bsc: "YOUR_BSCSCAN_API_KEY",
      bscTestnet: "YOUR_BSCSCAN_API_KEY",
      // huobi eco chain
      heco: "YOUR_HECOINFO_API_KEY",
      hecoTestnet: "YOUR_HECOINFO_API_KEY",
      // fantom mainnet
      opera: "YOUR_FTMSCAN_API_KEY",
      ftmTestnet: "YOUR_FTMSCAN_API_KEY",
      // optimism
      optimisticEthereum: "YOUR_OPTIMISTIC_ETHERSCAN_API_KEY",
      optimisticKovan: "YOUR_OPTIMISTIC_ETHERSCAN_API_KEY",
      // polygon
      polygon: "YOUR_POLYGONSCAN_API_KEY",
      polygonMumbai: "YOUR_POLYGONSCAN_API_KEY",
      // arbitrum
      arbitrumOne: "YOUR_ARBISCAN_API_KEY",
      arbitrumTestnet: "YOUR_ARBISCAN_API_KEY",
      // avalanche
      avalanche: "YOUR_SNOWTRACE_API_KEY",
      avalancheFujiTestnet: "YOUR_SNOWTRACE_API_KEY",
      // moonbeam
      moonbeam: "YOUR_MOONBEAM_MOONSCAN_API_KEY",
      moonriver: "YOUR_MOONRIVER_MOONSCAN_API_KEY",
      moonbaseAlpha: "YOUR_MOONBEAM_MOONSCAN_API_KEY",
      // harmony
      harmony: "YOUR_HARMONY_API_KEY",
      harmonyTest: "YOUR_HARMONY_API_KEY",
      // xdai and sokol don't need an API key, but you still need
      // to specify one; any string placeholder will work
      xdai: "api-key",
      sokol: "api-key",
      aurora: "api-key",
      auroraTestnet: "api-key",
    }
  }
}
