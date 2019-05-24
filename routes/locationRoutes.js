const { Location, User, Item, Category } = require('../models')

module.exports = app => {
  // GET all
  app.get('/locations', (req, res) => {
    Location.findAll({ include: [User] })
      .then(locations => res.json(locations))
      .catch(e => console.log(e))
  })

  // GET one
  app.get('/locations/:id', (req, res) => {
    Location.findOne({ where: { id: req.params.id } })
      .then(location => res.json(location))
      .catch(e => console.log(e))
  })

  // POST one
  app.post('/locations', (req, res) => {
    Location.create(req.body)
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // PUT one
  app.put('/locations/:id', (req, res) => {
    Location.update(req.body, { where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })

  // DELETE one
  app.delete('/locations/:id', (req, res) => {
    Location.destroy({ where: { id: req.params.id } })
      .then(_ => res.sendStatus(200))
      .catch(e => console.log(e))
  })
}