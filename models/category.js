module.exports = (sequelize, Sequelize) => {
  class Category extends Sequelize.Model {}
  Category.init({
    category: {
      type: Sequelize.STRING,
      allowNull: false,
      isIn: [
        ['Furniture', 'Kitchen Ware', 'Electronics', 'Cloths', 'Food', 'Toys', 'Misc.']
      ]
    }
  }, {
    sequelize,
    modelName: 'category'
  })

  return Category
}