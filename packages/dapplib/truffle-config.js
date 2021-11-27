require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey ensure success shadow shock note snow property install logic olympic gate'; 
let testAccounts = [
"0x750f2e3e6851976e2d92d541c4585bbb7503060635a2142169f700e653de6776",
"0xe93f8c32b8aeee0b80c4d95c08db42aba94a9cb389e68fde8b6e4dbbbd99c6e4",
"0xc6498feebf0ae13ece338f994b96adffa091b303411db46faf8e3a175e2f28dc",
"0xbe281faefd4d78051c01c468d1b6e478ae01cb72361b0473ff88b4c9c2fba0da",
"0x51ed6f640c2b26f1a504594089753187e947e2f6d1d995e343cabcb95495942e",
"0x46848a822507bf241902f015a4b56c11782cae815a916767dca3c4400cf09f3d",
"0x5dffc7dc335de53d2559485a92629b4c09eda9a0e8d8856828c0d0abaa4a9a7f",
"0xb479ddd9b60c7900cfa530738b332b2d2bdde5d4f1832553880cdf0155a2a34d",
"0xf3b0bd9b2e8d51a5d0796db0e29d0a100cf72ba6b523f5e66f5174418e8af759",
"0x631f21a348a41f0cca6b370f9598a1484a7b0d11d7d1a175664b3b4465dfd0e6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

