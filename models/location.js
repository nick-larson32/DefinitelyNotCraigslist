module.exports = (sequelize, Sequelize) => {
  class Location extends Sequelize.Model {}
  Location.init({
    title: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'location'
  })
  return Location
}