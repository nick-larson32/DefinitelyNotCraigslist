const { Location, User, Item, Category } = require('../models')

module.exports = app => {
  // GET all
  app.get('/locations', (req, res) => {
    Location.findAll({ include: [{ model: User, include: [{ model: Item, include: [Category] }] }] })
      .then(locations => res.json(locations))
      .catch(e => console.log(e))
  })

  // GET one
  app.get('/locations/:id', (req, res) => {
    Location.findOne({ where: { id: req.params.id }, include: [{ model: User, include: [{ model: Item, include: [Category] }] }] })
      .then(location => res.json(location))
      .catch(e => console.log(e))
  })
}