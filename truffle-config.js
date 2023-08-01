/**
 * Use this file to configure your truffle project. It's seeded with some
 * common settings for different networks and features like migrations,
 * compilation and testing. Uncomment the ones you need or modify
 * them to suit your project as necessary.
 *
 * More information about configuration can be found at:
 *
 * https://trufflesuite.com/docs/truffle/reference/configuration
 *
 * To deploy via Infura you'll need a wallet provider (like @truffle/hdwallet-provider)
 * to sign your transactions before they're sent to a remote public node. Infura accounts
 * are available for free at: infura.io/register.
 *
 * You'll also need a mnemonic - the twelve word phrase the wallet uses to generate
 * public/private key pairs. If you're publishing your code to GitHub make sure you load this
 * phrase from a file you've .gitignored so it doesn't accidentally become public.
 *
 */

// require('dotenv').config();
// const mnemonic = process.env["MNEMONIC"];
// const infuraProjectId = process.env["INFURA_PROJECT_ID"];

const HDWalletProvider = require('@truffle/hdwallet-provider');
const { snowtraceApiKey, mnemonic } = require("./.env.json");


module.exports = {
    // verify: {
    //     proxy: {
    //         host: '127.0.0.1',
    //         port: '7890',
    //     },
    // },
  /**
   * Networks define how you connect to your ethereum client and let you set the
   * defaults web3 uses to send transactions. If you don't specify one truffle
   * will spin up a development blockchain for you on port 9545 when you
   * run `develop` or `test`. You can ask a truffle command to use a specific
   * network from the command line, e.g
   *
   * $ truffle test --network <network-name>
   */

  plugins: ['truffle-plugin-verify'],
  // api_keys: {
  //   snowtraceApiKey: "https://open-platform-tmp.bk.nodereal.cc/70ec5708005b4943828c8cfc0148e945/op-bnb-testnet/contract/"
  //   // etherscan: {
  //   //   apiKey: {
  //   //     // opbnb: "WAMTXC2GI6B5U99SED99R8MGUACPVF52ZS"
  //   //     opbnb: "70ec5708005b4943828c8cfc0148e945"
  //   //   },
  //   //   customChains: [
  //   //     {
  //   //       network: "opbnb",
  //   //       chainId: 5611, // Replace with the correct chainId for the "opbnb" network
  //   //       urls: {
  //   //         apiURL: "https://open-platform-tmp.bk.nodereal.cc/70ec5708005b4943828c8cfc0148e945/op-bnb-testnet/contract/",
  //   //         browserURL: "https://opbnbscan.com/",
  //   //       },
  //   //     },
  //   //   ],
  //   // }
  // },
  networks: {
    // network_with_custom_platform: {
    //   verify: {
    //     apiUrl: 'https://open-platform-tmp.bk.nodereal.cc/70ec5708005b4943828c8cfc0148e945/op-bnb-testnet/contract/',
    //     apiKey: '70ec5708005b4943828c8cfc0148e945',
    //     explorerUrl: 'https://opbnbscan.com/',
    //   },

    // Useful for testing. The `development` name is special - truffle uses it by default
    // if it's defined here and no other network is specified at the command line.
    // You should run a client (like ganache, geth, or parity) in a separate terminal
    // tab if you use this network and you must also set the `host`, `port` and `network_id`
    // options below to some value.
    //
    // development: {
    //  host: "127.0.0.1",     // Localhost (default: none)
    //  port: 8545,            // Standard Ethereum port (default: none)
    //  network_id: "5611",       // Any network (default: none)
    // },
    //
    // goerli: {
    //   provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraProjectId}`),
    //   network_id: 5,       // Goerli's id
    //   chain_id: 5
    // }
    opbnb: {
      verify: {
        apiUrl: 'https://open-platform-tmp.bk.nodereal.cc/70ec5708005b4943828c8cfc0148e945/op-bnb-testnet/contract/',
        // apiUrl: 'https://open-platform-tmp.bk.nodereal.cc',
        apiKey: '70ec5708005b4943828c8cfc0148e945',
        explorerUrl: 'https://opbnbscan.com/',
      },
      provider: () => new HDWalletProvider(mnemonic, snowtraceApiKey),
      url: "https://opbnb-testnet-rpc.bnbchain.org/",
      network_id: 5611,
      from: '0x5438C058B7D053daF4b896285844c3c7D305E6C5', // need to change
      // mnemonic: "",
      // accounts: [""], // Add private keys or mnemonics of accounts to use for deployment
      gasPrice: 20000000000,
    }
  },

  // Set default mocha options here, use special reporters etc.
  mocha: {
    // timeout: 100000
  },

  // Configure your compilers
  compilers: {
    solc: {
      version: "0.7.0",    // Fetch exact version from solc-bin (default: truffle's version)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
        optimizer: {
          enabled: true,
          runs: 200
        },
      }
    }
  }
};
