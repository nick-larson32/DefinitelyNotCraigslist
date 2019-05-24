const Sequelize = require('sequelize')
let sequelize

if (process.env.NODE_ENV === 'production') {

  sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
  sequelize = new Sequelize('mysql://root:Nickisawesome1!@localhost:3306/craigslistdb')
}

module.exports = sequelize