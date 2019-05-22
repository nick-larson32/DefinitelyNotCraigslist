module.exports = (sequelize, Sequelize) => {
  class User extends Sequelize.Model {}
  User.init({
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    password: Sequelize.STRING
  }, {
    sequelize,
    modelName: 'user'
  })

  return User
}