var express = require('express')
var app = express()
var path = require('path')

app.use('/build', express.static(path.join(__dirname, 'build')))

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'))
})

app.listen(8080, () => { console.log('Server listening on port 8080') })
