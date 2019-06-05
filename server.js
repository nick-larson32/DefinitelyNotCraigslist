const express = require('express')
const { join } = require('path')
const app = express()
let PORT = process.env.PORT || 3000

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('./config').sync({force:true})
  .then(_ => app.listen(PORT))
  // process.env.PORT ||
  .catch(e => console.log(e))