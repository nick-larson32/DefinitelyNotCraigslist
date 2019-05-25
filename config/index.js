const Sequelize = require('sequelize')
require('dotenv').config()
let sequelize

if (process.env.NODE_ENV === 'production') {
  sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
  sequelize = new Sequelize(process.env.LOCALDB_URL)
}

module.exports = sequelize
