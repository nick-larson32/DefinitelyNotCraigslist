module.exports = app => {
  require('./userRoutes.js')(app)
  require('./itemRoutes.js')(app)
  require('./locationRoutes.js')(app)
}