require("@nomiclabs/hardhat-waffle");

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/MBsns3_WHMVxRD-YO-SAOjFbtgwsIPdS",
      accounts: [
        "fd2672f27dd091446a7220c8743e89aa00d1d6662def5df044106a792d9e818b",
      ],
    },
  },
};
