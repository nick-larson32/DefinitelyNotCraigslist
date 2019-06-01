const Sequelize = require('sequelize')
const sequelize = require('../config')

let User = require('./users.js')(sequelize, Sequelize)
let Item = require('./items.js')(sequelize, Sequelize)
let Location = require('./location.js')(sequelize, Sequelize)
let Category = require('./category.js')(sequelize, Sequelize)


User.hasMany(Item)
Item.belongsTo(User)
Location.hasMany(User)
User.belongsTo(Location)
Category.hasMany(Item)
Item.belongsTo(Category)


module.exports = { User, Item, Location, Category }