const fs = require("fs");
var ethers = require('ethers');
var Wallet = ethers.Wallet;
const argv = require('minimist')(process.argv.slice(2))

var wallet, address, privateKey, mnemonic;

if(argv.mnemonic){
  mnemonic = argv.mnemonic;
  wallet = Wallet.fromMnemonic(mnemonic);
  privateKey = wallet.privateKey;
  address = wallet.address;
}
else {
  wallet = Wallet.createRandom();
  address = wallet.address;
  privatekey = wallet.privateKey;
  mnemonic = wallet.mnemonic;
}

fs.writeFile(address, [privateKey, mnemonic], (err) => {
  if (err) throw err;
  console.log('This file has been saved!');
});

// Option to comment out fs and console log the pub address, private key and mnemonic
// console.log("Address: " + wallet.address + " privateKey: " + wallet.privateKey + " mnemonic: " + wallet.mnemonic);
