const { Router } = require('express')
const DevController = require('./controllers/DevController.js')
const SearchController = require('./controllers/SearchController.js')

const routes = Router()

routes.get('/devs', DevController.index)
routes.post('/devs', DevController.store)

routes.get('/search', SearchController.index)
routes.get('/update', SearchController.update)
routes.get('/destroy', SearchController.destroy)

module.exports = routes