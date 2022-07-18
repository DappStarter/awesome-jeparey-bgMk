require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture robot fresh tell stone note praise puppy gesture nasty furnace giant'; 
let testAccounts = [
"0x2a8c3dc82b925e2c3e679a5ef4f5244935a122dc237cacefb38ca4a6e399d0d7",
"0xb5dec6d7e6992c5ffeb13fa09173de0d48fdd25453ead65c19ec64a3f9dbff0f",
"0x818d7edfeb63b53f0028121f757e1796b24214c409b5d04d3b2a70489506167d",
"0x4216979612426d7b1dc1bde11a4557dc8a3dc61a8b558f929b3bb0885efdc069",
"0xf068839bddb309a0d4d55c4086aafb22892ed73564bd60b891e07c384ec37ca2",
"0x48a77077a4d3dbad132acd35672e0248e60b844bfaec1f5b060ef04903efdbdc",
"0x64bc180435f39526021cc5fdbae6e83f9667875851e69fe3b4ff1934737c5700",
"0x10bf93403e47e973fdaaa3e93bbf7b546c114a4ee444ec229943c5e9485926ee",
"0x5e515b6f54259e650250160d273c718e56cb4a0b05ce8b655b88f0461a1bea39",
"0x7c9255ebc1ae543ec51a835f2469029d96ae2731de79993cb9e5a8e21891c3c0"
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

