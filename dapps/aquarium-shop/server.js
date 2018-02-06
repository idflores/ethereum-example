/*
Copyright 2018 Israel Flores. All rights reserved.
Use of this source code is governed by a BSD-style
license that can be found in the LICENSE file.

Author:     Israel Flores (https://github.com/idflores)
File:       server.js
Purpose:    instantiates a NodeJS server to server the Aquarium-Shop
            static files
*/

var express = require('express')
var app = express()
var path = require('path')

app.use('/build', express.static(path.join(__dirname, 'build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(8080, () => { console.log('Server listening on port 8080') })
