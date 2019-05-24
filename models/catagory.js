module.exports = (sequelize, Sequelize) => {
  class Catagory extends Sequelize.Model {}
  Catagory.init({
    Catagory: {
      type: Sequelize.STRING,
      allowNull: false,
      isIn: [
        ['Furniture', 'Kitchen Ware', 'Electronics', 'Cloths', 'Food', 'Toys', 'Misc.']
      ]
    }
  }, {
    sequelize,
    modelName: 'catagory'
  })

  return Catagory
}