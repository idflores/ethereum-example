import Radium from 'radium'
import React from 'react'

import Web3 from '../web3Script'

class Button extends React.Component {

  executeEthereum() {
    if (this.props.name == "Purchase") {
      alert(Web3.deployed().then(function(instance) {
  console.log(instance);
}))
    }
    else if (this.props.name == "Layaway") {
      alert("Layaway")
    }
  }

  render() {
    return(
      <div style={styles.button} onClick={this.executeEthereum.bind(this)}>
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
