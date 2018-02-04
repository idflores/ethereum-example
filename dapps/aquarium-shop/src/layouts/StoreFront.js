import Radium from 'radium'
import React from 'react'

import Item from '../components/Item'

export default class StoreFront extends React.Component {
  render() {
    return(
      <div>
        <div style={styles.header}>
          <span style={styles.title}>Aquarium Shop</span>
        </div>
        <div style={styles.body}>
          <Item />
          <Item />
          <Item />
        </div>
        <div style={styles.footer}>

        </div>
      </div>
    )
  }
}

StoreFront = Radium(StoreFront)

var styles = {
  header: {
    backgroundColor: "#F5F5F5",
    boxShadow: "0px 3px 6px #B3B3B3",
    height: "50px",
    zIndex: "100",
    textAlign: "center"
  },

  title: {
    display: "inline-block",
    margin: "auto",
    fontFamily: "Helvetica Neue",
    fontSize: "18px",
    fontWeight: "bold",
    lineHeight: "50px",
  },

  body: {
    display: "block",
    textAlign: "center"
    // backgroundColor: "#FAFCED",
  },

  footer: {
    backgroundColor: "#F5F5F5",
    height: "100px"
  }
}
