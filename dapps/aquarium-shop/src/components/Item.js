import Radium from 'radium'
import React from 'react'
import https from 'https'

import Button from './Button'
import db from '../database/store'

class Item extends React.Component {
  constructor() {
    super()
    this.state = { price: null }
  }

  componentWillMount() {
    this.getPrice().then(ratio => {
      var currentPrice = 1 / ratio  *  db[this.props.databaseID].price  *
        db[this.props.databaseID].quantity
      currentPrice = currentPrice.toFixed(9)
      this.setState({ price: currentPrice })
    })
  }

  getPrice() {
    return new Promise((resolve, reject) => {
      https.request({
        hostname: 'api.gdax.com',
        path: '/products/ETH-USD/stats',
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'User-Agent': 'Aquarium Shop Test Client'
        }
      }, response => {
        var message = ''
        response.on('data', data => { message += data })
        response.on('end', () => {
          message = JSON.parse(message)
          var ratio = (parseInt(message.high) + parseInt(message.low)) / 2
          resolve(ratio)
        })
      })
      .on('error', err => { console.error(err); reject() })
      .end()
    })
  }

  render() {
    return(
      <div style={styles.container}>
        <div style={styles.imageContainer}>
          <img style={styles.image} src={db[this.props.databaseID].image}></img>
        </div>
        <div style={styles.name}>
          <span>{db[this.props.databaseID].name} </span>
          <span style={styles.qty}>
            (qty. {db[this.props.databaseID].quantity})
          </span>
        </div>
        <div style={styles.currency}>
          <span>{this.state.price} Ξ</span>
        </div>
        <Button name={db[this.props.databaseID].option} 
          price={this.state.price} />
      </div>
    )
  }
}

export default Radium(Item)

var styles = {
  container: {
    display: "inline-block",
    position: "relative",
    top: "25%",
    transform: "translateY(-25%)",
    backgroundColor: "#FCFCFC",
    height: "auto",
    width:  "300px",
    margin: "30px 45px",
    boxShadow: "1px 2px 8px #C6C6C6",
    borderRadius: "3px"
  },

  imageContainer: {
    height: "250px",
    width: "260px",
    margin: "20px"
  },

  image: {
    height: "inherit",
    width: "inherit",
    borderRadius: "3px"
  },

  name: {
    display: "block",
    fontFamily: "Helvetica Neue",
    fontWeight: "bold",
    fontSize: "20px",
    letterSpacing: "3px",
    color: "#444",
    margin: "10px"
  },

  qty: {
    fontSize: "14px",
    letterSpacing: "1px"
  },

  currency: {
    display: "block",
    fontFamily: "Arial",
    fontSize: "16px",
    letterSpacing: "1px",
    color: "#444",
    margin: "10px"
  }
}
