const express = require('express')
const { join } = require('path')
const app = express()

app.use(express.static(join(__dirname, 'public')))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

require('./routes')(app)

require('./config').sync()
  .then(_ => app.listen(process.env.PORT || 3000))
  // process.env.PORT ||
  .catch(e => console.log(e))