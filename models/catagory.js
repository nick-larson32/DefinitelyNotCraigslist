module.exports = (sequelize, Sequelize) => {
  class Catagory extends Sequelize.Model {}
  Catagory.init({
    Catagory: { type: Sequelize.STRING, allowNull: false }
  }, {
    sequelize,
    modelName: 'catagory'
  })

  return Catagory
}