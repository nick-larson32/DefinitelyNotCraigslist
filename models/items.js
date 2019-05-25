module.exports = (sequelize, Sequelize) => {
  class Item extends Sequelize.Model {}
  Item.init({
    itemName: { type: Sequelize.STRING, allowNull: false, len: [2] },
    quantity: { type: Sequelize.INTEGER, allowNull: false },
    available: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: true },
    bought: { type: Sequelize.BOOLEAN, allowNull: false, defaultValue: false },
    price: { type: Sequelize.FLOAT, allowNull: false },
    condition: {
      type: Sequelize.STRING,
      allowNull: false,
      isIn: [
        ['New', 'Like New', 'Used', 'Poor']
      ]
    }
  }, {
    sequelize,
    modelName: 'item'
  })

  return Item
}