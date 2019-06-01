const { Location, User, Item, Category } = require('../models')
const { Op } = require('sequelize')
const path = require('path')


module.exports = app => {

  // GET all
  app.get('/items', (req, res) => {
    Item.findAll({ include: [Category, { model: User, include: Location }] })
      .then(items => {
        res.json(items)
        console.log(items)
      })

    .catch(e => console.log(e))
  })

  // GET one
  app.get('/items/:id', (req, res) => {
    console.log('ping')
    Item.findOne({ where: { id: req.params.id }, include: Category, include: [{ model: User, include: Location }] })
      .then(item => res.json(item))
      .catch(e => console.log(e))
  })

  // get item like search
  app.get('/searchitems', (req, res) => {
    Item.findAll({
        where: {
          itemName: {
            [Op.like]: `%${req.body.name}%`
          }
        }
      })
      .then(items => res.json(items))
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