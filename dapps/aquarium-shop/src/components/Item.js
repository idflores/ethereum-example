import Radium from 'radium'
import React from 'react'
import https from 'https'

import db from '../database/store'

export default class Item extends React.Component {
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
        <div><span>{db[this.props.databaseID].name}</span></div>
        <div>
          <span>{this.state.price} </span>
          <span style={styles.currency}>Ξ</span>
        </div>
      </div>
    )
  }
}

Item = Radium(Item)

var styles = {
  container: {
    display: "inline-block",
    backgroundColor: "#F2F2F2",
    height: "350px",
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

  currency: {
    fontFamily: "arial"
  }
}
