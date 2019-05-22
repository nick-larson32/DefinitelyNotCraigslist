module.exports = (sequelize, Sequelize) => {
  class Item extends Sequelize.Model {}
  Item.init({
    text: Sequelize.STRING,
    available: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    price: Sequelize.INTEGER
  }, {
    sequelize,
    modelName: 'item'
  })

  return Item
}