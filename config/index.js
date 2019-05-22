const Sequelize = require('sequelize')
let sequelize

if (process.env.NODE_ENV === 'production') {

  sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
  sequelize = new Sequelize('your path here')
}

module.exports = sequelize