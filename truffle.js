// module.exports = {
//   networks : {
//     ganache : {
//       host : 'localhost',
//       port : 7545,    // By default Ganache runs on this port.
//       network_id : "*" // network_id for ganache is 5777. However, by keeping * as value you can run this node on  any network
//     }
//   }
// };
var HDWalletProvider = require("truffle-hdwallet-provider");

var infura_apikey = "<infura_apikey>";
var mnemonic = "12 mnemonics";
var address = "address"

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    }
  },
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      provider: function () {
        return new HDWalletProvider(mnemonic, "https://ropsten.infura.io/" + infura_apikey)
      },
      network_id: 3,
      // from: address,
      gas: 4700388
    }
  }
};