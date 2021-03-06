/*
Copyright 2018 Israel Flores. All rights reserved.
Use of this source code is governed by a BSD-style
license that can be found in the LICENSE file.

Author:     Israel Flores (https://github.com/idflores)
File:       src/web3Script.js
Purpose:    instantiates and configures Ethereum's web3 blockchain API with
            Truffle's `truffle-contract` wrapper
*/

// Because of automatic caching with require()/import, the web3 implementation
// is put in its own file to be instantiated at the first import and referenced
// during subsequent component instantiations.

var Web3 = require('web3')
var TruffleContract = require('truffle-contract')

module.exports = (function () {
  if (typeof web3 !== 'undefined') {
    var web3 = new Web3(web3.currentProvider)
  }
  else {
    var web3 =
      new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
  }

  var AquariumShop = TruffleContract(require('../build/contracts/AquariumShop'))
  AquariumShop.setProvider(web3.currentProvider)

  // dirty hack for web3@1.0.0 support for localhost testrpc, see
  // https://github.com/trufflesuite/truffle-contract/issues/56#issuecomment-331084530
  // and https://github.com/trufflesuite/truffle-contract/issues/57#issuecomment-331300494
  if (typeof AquariumShop.currentProvider.sendAsync !== "function") {
    AquariumShop.currentProvider.sendAsync = function() {
      return AquariumShop.currentProvider.send.apply(
        AquariumShop.currentProvider, arguments
    )}
  }

  return { web3: web3, AquariumShop: AquariumShop }
})()
