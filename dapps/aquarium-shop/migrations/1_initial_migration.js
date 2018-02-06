/*
Copyright 2018 Israel Flores. All rights reserved.
Use of this source code is governed by a BSD-style
license that can be found in the LICENSE file.

Author:     Israel Flores (https://github.com/idflores)
File:       src/migrations/1_initial_migration.js
Purpose:    auto-generatated logic by Truffle to deploy the Migration contract
            to the blockchain
*/

var Migrations = artifacts.require("./Migrations.sol");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
