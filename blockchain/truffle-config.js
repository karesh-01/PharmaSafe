module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 6000000,
      from: '0x945587b7B22D4Ef4D52E92e2b010dF135b23cFa0',
    },
  },
  contracts_directory: './testing/',
  contracts_build_directory: './src/build/',
  compilers: {
    solc: {
      version: "0.6.6",
      settings: {
        optimizer: {
          enabled: true,
          runs: 100
        }
      }
    }
  }
}