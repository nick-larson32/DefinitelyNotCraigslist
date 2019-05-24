module.exports = (sequelize, Sequelize) => {
  class Item extends Sequelize.Model {}
  Item.init({
    itemName: { type: Sequelize.STRING, allowNull: false, len: [2] },
    available: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    price: { type: Sequelize.INTEGER, allowNull: false },
    condition: { type: Sequelize.STRING, allowNull: false, isIn: [
        ['New', 'Like New', 'Used', 'Poor']
      ] }
  }, {
    sequelize,
    modelName: 'item'
  })

  return Item
}