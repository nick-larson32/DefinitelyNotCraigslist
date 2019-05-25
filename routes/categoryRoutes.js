const { Location, User, Item, Category } = require('../models')

module.exports = app => {
  // GET all
  app.get('/category', (req, res) => {
    Category.findAll({ include: [{ model: Item, include: [{ model: User, include: Location }] }] })
      .then(category => res.json(category))
      .catch(e => console.log(e))
  })

  // GET one
  app.get('/category/:id', (req, res) => {
    Category.findOne({ where: { id: req.params.id } })
      .then(category => res.json(category))
      .catch(e => console.log(e))
  })
}