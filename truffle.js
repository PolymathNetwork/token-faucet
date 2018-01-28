module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: 'localhost',
      from: '0x00F13d5bCA2E8A4E58fD8018a7b1e8D286dD135A',
      port: 8545,
      network_id: '3', // Match any network id
      gas: 4500000,
      gasPrice: 130000000000
    },
  }
};
