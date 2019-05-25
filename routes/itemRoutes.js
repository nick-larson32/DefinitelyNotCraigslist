const { Location, User, Item, Category } = require('../models')
const path = require('path')

module.exports = app => {
  // GET all
  app.get('/items', (req, res) => {
    Item.findAll({ include: [Category] })
      .then(items => {
        Item.findAll({ include: [{ model: User, include: Location }] })
          .then(user => res.json({ items, user }))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })

  // GET one
  app.get('/items/:id', (req, res) => {
    Item.findOne({ where: { id: req.params.id }, include: [Category] })
      .then(item => {
        Item.findOne({ include: [{ model: User, include: Location }] })
          .then(user => res.json({ item, user }))
          .catch(e => console.log(e))
      })
      .catch(e => console.log(e))
  })

  // POST one
  app.post('/items', (req, res) => {
    Item.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // PUT one
  app.put('/items/:id', (req, res) => {
    Item.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // DELETE one
  app.delete('/items/:id', (req, res) => {
    Item.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}