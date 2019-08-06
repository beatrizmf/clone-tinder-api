const express = require('express')
const DevController = require('../controllers/DevController')
const LikeController = require('../controllers/LikeController')
const NotLikeController = require('../controllers/NotLikeController')

const routes = express.Router()

routes.get('/', (req, res) => {
  res.json({ message: 'Ok! 👌' })
})

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikeController.store)
routes.post('/devs/:devId/notlikes', NotLikeController.store)

module.exports = routes
