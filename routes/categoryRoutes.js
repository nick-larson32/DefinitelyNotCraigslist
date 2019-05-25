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

  // POST one
  app.post('/category', (req, res) => {
    Category.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // PUT one
  app.put('/category/:id', (req, res) => {
    Category.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // DELETE one
  app.delete('/category/:id', (req, res) => {
    Category.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}