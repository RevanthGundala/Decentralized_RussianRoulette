require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

/** @type import('hardhat/config').HardhatUserConfig */
PRIVATE_KEY = process.env.PRIVATE_KEY;
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/uCEYmy2DTEaZ7K-uSji3CWGnFjNwQg3K",
      accounts: [PRIVATE_KEY],
      chainId: 5,
    },
  },
};
