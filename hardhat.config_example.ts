import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@openzeppelin/hardhat-upgrades";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  networks: {
    monadTestnet: {
      url: "https://monad-testnet.g.alchemy.com/v2/dkEUofCC_DkGE0hb1qfcLosQeneQWmLc",
      accounts: ["YOUR_PRIVATE_KEY"],
      chainId: Number("10143"),
    },    
  },
  sourcify: {
    enabled: true,
    apiUrl: "https://sourcify-api-monad.blockvision.org",
    browserUrl: "https://testnet.monadexplorer.com"
  },
  etherscan: {
    enabled: false
  }
};

export default config;
