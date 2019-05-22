const Sequelize = require('sequelize')
let sequelize

if (process.env.NODE_ENV === 'production') {

  sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
  sequelize = new Sequelize('musql://root:Nickisawesome1!@localhost:3306/todo_db')
}

module.exports = sequelize