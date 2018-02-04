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
          <Item databaseID="Shrimp" />
          <Item databaseID="Fish" />
          <Item databaseID="Tank" />
        </div>
        <div style={styles.footer}>
          <span style={styles.copyright}>
            © 2018. Israel Flores. BSD-3-Clause License.
          </span>
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
    letterSpacing: "3px",
    color: "#444"
  },

  body: {
    display: "block",
    textAlign: "center"
    // backgroundColor: "#FAFCED",
  },

  footer: {
    display: "block",
    backgroundColor: "#F5F5F5",
    height: "40px",
    textAlign: "center"
  },

  copyright: {
    fontFamily: "Helvetica Neue",
    fontSize: "11px",
    color: "#666",
    lineHeight: "50px"
  }
}
