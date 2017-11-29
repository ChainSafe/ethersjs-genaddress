const fs = require("fs");
var ethers = require('ethers');
var Wallet = ethers.Wallet;

  var wallet = Wallet.createRandom();
  var address = wallet.address;
  var privatekey = wallet.privateKey;
  var mnemonic = wallet.mnemonic;

  fs.writeFile(address, [privatekey, mnemonic], (err) => {
    if (err) throw err;
    console.log('This file has been saved!');
  });

  // console.log("Address: " + wallet.address + " privateKey: " + wallet.privateKey + " mnemonic: " + wallet.mnemonic);
