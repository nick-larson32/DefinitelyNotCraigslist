const { Location, User, Item, Category } = require('../models')

module.exports = app => {
  // GET all
  app.get('/users', (req, res) => {
    User.findAll({ include: [{ model: Item, include: Category }, Location] })
      .then(users => res.json(users))
      .catch(e => console.log(e))
  })

  // GET one
  app.get('/users/:id', (req, res) => {
    User.findOne({ where: { id: req.params.id }, include: [{ model: Item, include: Category }, Location] })
      .then(user => res.json(user))
      .catch(e => console.log(e))

  })

  // POST one
  app.post('/users', (req, res) => {
    User.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // PUT one
  app.put('/users/:id', (req, res) => {
    User.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // DELETE one
  app.delete('/users/:id', (req, res) => {
    User.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}