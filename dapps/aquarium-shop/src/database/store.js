/*
Copyright 2018 Israel Flores. All rights reserved.
Use of this source code is governed by a BSD-style
license that can be found in the LICENSE file.

Author:     Israel Flores (https://github.com/idflores)
File:       src/database/store.js
Purpose:    defines each item in the Aquarium Shop
*/

module.exports = {
  Fish: {
    name: "Tetra Fish",
    price: 2.50,
    quantity: 20,
    image: require("../static/tetra_fish.jpg"),
    option: "Purchase"
  },

  Shrimp: {
    name: "Ghost Shrimp",
    price: 0.50,
    quantity: 10,
    image: require("../static/ghost_shrimp.jpg"),
    option: "Purchase"
  },

  Tank: {
    name: "Fish Tank",
    price: 500,
    quantity: 1,
    image: require("../static/fish_tank.jpeg"),
    option: "Layaway"
  }
}
