const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World it's Tal')
    /*bla bla*/
  
})

app.listen(3000)
