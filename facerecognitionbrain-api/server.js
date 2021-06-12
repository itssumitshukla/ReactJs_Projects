const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000, ()=> {
  console.log('App is litening to port 3000')
})