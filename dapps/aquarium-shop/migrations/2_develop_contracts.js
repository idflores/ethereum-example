var AquariumShop = artifacts.require("AquariumShop")
var Layaway = artifacts.require("Layaway")

module.exports = function(deployer) {
  deployer.deploy(AquariumShop)
}
