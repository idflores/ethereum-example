import Radium from 'radium'
import React from 'react'

export default class Item extends React.Component {
  render() {
    return(
      <div style={styles.container}>

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
    boxShadow: "1px 2px 8px #C6C6C6"
  }
}
