module.exports = (sequelize, Sequelize) => {
  class Item extends Sequelize.Model {}
  Item.init({
    text: Sequelize.STRING,
    isDone: Sequelize.BOOLEAN
  }, {
    sequelize,
    modelName: 'item'
  })

  return Item
}