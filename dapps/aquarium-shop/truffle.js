/*
Copyright 2018 Israel Flores. All rights reserved.
Use of this source code is governed by a BSD-style
license that can be found in the LICENSE file.

Author:     Israel Flores (https://github.com/idflores)
File:       truffle.js
Purpose:    config file for the Truffle framework; See
            <http://truffleframework.com/docs/advanced/configuration> for more
            details and customization instructions.
*/

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 7545,
      network_id: "*"
    }
  }
};
