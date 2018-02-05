import Radium from 'radium'
import React from 'react'

var AquariumShopContract = require('../web3Script').AquariumShop
var web3 = require('../web3Script').web3

class Button extends React.Component {

  executeContract() {
    var contract
    if (this.props.name == "Purchase") {
      AquariumShopContract.deployed().then((instance) => {
        contract = instance
        contract.buy({
          from: "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef",
          gas: "30000",
          value: web3.utils.toWei(this.props.price, 'ether')
        })
        .then(function(result) {
          console.log(result.tx)
          alert("Transaction Successful!\nTX: " + result.tx)
        })
      })
      .catch(function(err) { alert(err.stack) })
    }
    else if (this.props.name == "Layaway") {
      AquariumShopContract.deployed().then((instance) => {
        contract = instance
        contract.layaway(web3.utils.toWei(this.props.price, 'ether'), {
          from: "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef",
          gas: "300000",
          value: "100"
        })
      })
      .then(function() {
        var index
        contract.layawayLength.call(
          {from: "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef"})
        .then(function(length) { index = length - 1 })
        .then(function() {
          contract.layawayContracts.call(index,
            {from: "0xC5fdf4076b8F3A5357c5E395ab970B5B54098Fef"})
          .then(function(address) {
            alert("Layaway Successful!\nMake payments to: " + address)
          })
        })
      })
      .catch(function(err) { console.log(err.stack) })
    }
  }

  render() {
    return(
      <div style={styles.button} onClick={this.executeContract.bind(this)}>
        <span>{this.props.name}</span>
      </div>
    )
  }
}

export default Radium(Button)

var styles = {
  button: {
    display: "block",
    padding: "7px 0px",
    margin: "10px auto",
    width: "35%",
    border: "2px solid #444",
    borderRadius: "6px",
    color: "#444",
    fontFamily: "Helvetica Neue",
    fontSize: "13px",
    fontWeight: "bold",
    letterSpacing: "1px",

    ':hover': {
      color: "#F7F7F7",
      backgroundColor: "#444",
      cursor: "pointer"
    },

    ':active': {
      color: "#F7F7F7",
      border: "2px solid #333",
      backgroundColor: "#333",
      cursor: "pointer"
    }
  }
}
