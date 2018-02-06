/*
Copyright 2018 Israel Flores. All rights reserved.
Use of this source code is governed by a BSD-style
license that can be found in the LICENSE file.

Author:     Israel Flores (https://github.com/idflores)
File:       src/migrations/2_develop_contracts.js
Purpose:    adds logic for Truffle on how to deploy the AquariumShop contract
            to the blockchain
*/

var AquariumShop = artifacts.require("AquariumShop")
var Layaway = artifacts.require("Layaway")

module.exports = function(deployer) {
  deployer.deploy(AquariumShop)
}
