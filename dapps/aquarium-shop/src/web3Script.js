// Because of automatic caching with require()/import, the web3 implementation
// is put in its own file to be instantiated at the first import and referenced
// during subsequent component instantiations.

var Web3 = require('web3')

module.exports = (function () {
  if (typeof Web3 !== 'undefined') {
    var web3 = new Web3(Web3.currentProvider)
  }
  else {
    var web3 =
      new Web3(new Web3.providers.HttpProvider("http://localhost:7545"))
  }

  return web3
})()
