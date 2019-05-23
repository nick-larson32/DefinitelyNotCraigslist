module.exports = (sequelize, Sequelize) => {
  class Location extends Sequelize.Model {}
  Location.init({
    county: {
      type: Sequelize.STRING,
      allowNull: false,
      isIn: [
        ['Orange', 'Los Angeles']
      ]
    }
  }, {
    sequelize,
    modelName: 'location'
  })
  return Location
}