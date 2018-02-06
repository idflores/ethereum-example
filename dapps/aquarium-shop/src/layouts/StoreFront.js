/*
Copyright 2018 Israel Flores. All rights reserved.
Use of this source code is governed by a BSD-style
license that can be found in the LICENSE file.

Author:     Israel Flores (https://github.com/idflores)
File:       src/layouts/StoreFront.js
Purpose:    templates the layout of the Aquarium Shop main page
*/

import Radium from 'radium'
import React from 'react'

import db from '../database/store'
import Item from '../components/Item'

class StoreFront extends React.Component {
  render() {
    var itemList = Object.keys(db)
    var items = itemList.map(name => {
      return <Item key={itemList.indexOf(name)} databaseID={name} />
    })

    return(
      <div>
        <div style={styles.header}>
          <span style={styles.title}>Aquarium Shop</span>
        </div>
        <div style={styles.body}>
          { items }
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
