import Radium from 'radium'
import React from 'react'

import Item from '../components/Item'

class StoreFront extends React.Component {
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

export default Radium(StoreFront)

var styles = {
  header: {
    display: "block",
    position: "relative",
    backgroundColor: "#F5F5F5",
    boxShadow: "0px 3px 6px #B3B3B3",
    height: "65px",
    zIndex: "100",
    textAlign: "center"
  },

  title: {
    display: "inline-block",
    margin: "auto",
    fontFamily: "Helvetica Neue",
    fontSize: "26px",
    fontWeight: "bold",
    lineHeight: "65px",
    letterSpacing: "3px",
    color: "#444"
  },

  body: {
    display: "block",
    position: "relative",
    height: "calc(100vh - 105px)",
    margin: "auto 0px",
    textAlign: "center",
    backgroundColor: "#F7F7F7",
    overflow: "auto"
  },

  footer: {
    display: "block",
    position: "relative",
    zIndex: "100",
    backgroundColor: "#F5F5F5",
    boxShadow: "0px -1px 6px #B3B3B3",
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
